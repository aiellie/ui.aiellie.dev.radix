"use client"

/* eslint-disable react-hooks/refs -- mirrors @ai-sdk/react useChat */

import {
  AbstractChat,
  type ChatInit,
  type ChatStatus,
  type UIMessage,
} from "ai"
import {
  useCallback,
  useEffect,
  useRef,
  useSyncExternalStore,
} from "react"

class ReactChatState<UI_MESSAGE extends UIMessage> {
  #messages: UI_MESSAGE[]
  #status: ChatStatus = "ready"
  #error: Error | undefined
  #messagesCallbacks = new Set<() => void>()
  #statusCallbacks = new Set<() => void>()
  #errorCallbacks = new Set<() => void>()

  constructor(initialMessages: UI_MESSAGE[] = []) {
    this.#messages = initialMessages
  }

  get status() {
    return this.#status
  }

  set status(newStatus: ChatStatus) {
    this.#status = newStatus
    this.#statusCallbacks.forEach((callback) => callback())
  }

  get error() {
    return this.#error
  }

  set error(newError: Error | undefined) {
    this.#error = newError
    this.#errorCallbacks.forEach((callback) => callback())
  }

  get messages() {
    return this.#messages
  }

  set messages(newMessages: UI_MESSAGE[]) {
    this.#messages = [...newMessages]
    this.#messagesCallbacks.forEach((callback) => callback())
  }

  pushMessage = (message: UI_MESSAGE) => {
    this.#messages = this.#messages.concat(message)
    this.#messagesCallbacks.forEach((callback) => callback())
  }

  popMessage = () => {
    this.#messages = this.#messages.slice(0, -1)
    this.#messagesCallbacks.forEach((callback) => callback())
  }

  replaceMessage = (index: number, message: UI_MESSAGE) => {
    this.#messages = [
      ...this.#messages.slice(0, index),
      this.snapshot(message),
      ...this.#messages.slice(index + 1),
    ]
    this.#messagesCallbacks.forEach((callback) => callback())
  }

  snapshot = <T>(value: T) => structuredClone(value)

  "~registerMessagesCallback" = (onChange: () => void) => {
    this.#messagesCallbacks.add(onChange)

    return () => {
      this.#messagesCallbacks.delete(onChange)
    }
  }

  "~registerStatusCallback" = (onChange: () => void) => {
    this.#statusCallbacks.add(onChange)

    return () => {
      this.#statusCallbacks.delete(onChange)
    }
  }

  "~registerErrorCallback" = (onChange: () => void) => {
    this.#errorCallbacks.add(onChange)

    return () => {
      this.#errorCallbacks.delete(onChange)
    }
  }
}

class Chat<UI_MESSAGE extends UIMessage> extends AbstractChat<UI_MESSAGE> {
  #state: ReactChatState<UI_MESSAGE>

  constructor({ messages, ...init }: ChatInit<UI_MESSAGE>) {
    const state = new ReactChatState(messages)
    super({ ...init, state })
    this.#state = state
  }

  "~registerMessagesCallback" = (onChange: () => void) =>
    this.#state["~registerMessagesCallback"](onChange)

  "~registerStatusCallback" = (onChange: () => void) =>
    this.#state["~registerStatusCallback"](onChange)

  "~registerErrorCallback" = (onChange: () => void) =>
    this.#state["~registerErrorCallback"](onChange)
}

type UseChatHelpers<UI_MESSAGE extends UIMessage> = {
  readonly id: string
  setMessages: (
    messages:
      | UI_MESSAGE[]
      | ((messages: UI_MESSAGE[]) => UI_MESSAGE[])
  ) => void
  error: Error | undefined
} & Pick<
  AbstractChat<UI_MESSAGE>,
  | "sendMessage"
  | "regenerate"
  | "stop"
  | "resumeStream"
  | "addToolResult"
  | "addToolOutput"
  | "addToolApprovalResponse"
  | "status"
  | "messages"
  | "clearError"
>

type UseChatOptions<UI_MESSAGE extends UIMessage> =
  | ({ chat: Chat<UI_MESSAGE> } & {
      resume?: boolean
    })
  | (ChatInit<UI_MESSAGE> & {
      resume?: boolean
    })

export function useChat<UI_MESSAGE extends UIMessage = UIMessage>({
  resume = false,
  ...options
}: UseChatOptions<UI_MESSAGE> = {}): UseChatHelpers<UI_MESSAGE> {
  const chatRef = useRef(
    "chat" in options ? options.chat : new Chat(options)
  )

  const shouldRecreateChat =
    ("chat" in options && options.chat !== chatRef.current) ||
    ("id" in options && chatRef.current.id !== options.id)

  if (shouldRecreateChat) {
    chatRef.current =
      "chat" in options ? options.chat : new Chat(options)
  }

  const subscribeToMessages = useCallback(
    (update: () => void) =>
      chatRef.current["~registerMessagesCallback"](update),
    // `chatRef.current.id` is required to trigger re-subscription when the chat ID changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [chatRef.current.id]
  )

  const messages = useSyncExternalStore(
    subscribeToMessages,
    () => chatRef.current.messages,
    () => chatRef.current.messages
  )

  const status = useSyncExternalStore(
    chatRef.current["~registerStatusCallback"],
    () => chatRef.current.status,
    () => chatRef.current.status
  )

  const error = useSyncExternalStore(
    chatRef.current["~registerErrorCallback"],
    () => chatRef.current.error,
    () => chatRef.current.error
  )

  const setMessages = useCallback(
    (
      messagesParam:
        | UI_MESSAGE[]
        | ((messages: UI_MESSAGE[]) => UI_MESSAGE[])
    ) => {
      const nextMessages =
        typeof messagesParam === "function"
          ? messagesParam(chatRef.current.messages)
          : messagesParam

      chatRef.current.messages = nextMessages
    },
    []
  )

  useEffect(() => {
    if (resume) {
      void chatRef.current.resumeStream()
    }
  }, [resume])

  return {
    id: chatRef.current.id,
    messages,
    setMessages,
    sendMessage: chatRef.current.sendMessage,
    regenerate: chatRef.current.regenerate,
    clearError: chatRef.current.clearError,
    stop: chatRef.current.stop,
    error,
    resumeStream: chatRef.current.resumeStream,
    status,
    addToolResult: chatRef.current.addToolResult,
    addToolOutput: chatRef.current.addToolOutput,
    addToolApprovalResponse: chatRef.current.addToolApprovalResponse,
  }
}
