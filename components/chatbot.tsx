"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsChatDots } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { IoClose, IoSend } from "react-icons/io5";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/useMounted";
import { useFooterVisibility } from "@/hooks/useFooterVisibility";

const CHATBOT_ENABLED = true;
const CHATBOT_URL = process.env.NEXT_PUBLIC_CHATBOT_URL;

interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome",
    text: "Ask about my projects, experience, or stack.",
    isUser: false,
  },
];

const QUICK_PROMPTS = [
  { label: "Selected work", text: "Which projects has Ilias built?" },
  { label: "Main stack", text: "What does Ilias work with?" },
  { label: "Experience", text: "What has Ilias worked on?" },
  { label: "Contact", text: "How can I contact Ilias?" },
];

const createMessageId = () =>
  `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted && resolvedTheme === "dark";
  const isFooterVisible = useFooterVisibility();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatbotRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);

  const resetChat = () => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = null;
    setMessages(INITIAL_MESSAGES);
    setSessionId(null);
    setInput("");
    setError(null);
    setIsLoading(false);
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const sendMessage = async (text: string) => {
    const trimmedText = text.trim();
    if (!CHATBOT_ENABLED || !trimmedText || isLoading) return;

    setMessages((prev) => [
      ...prev,
      { id: createMessageId(), text: trimmedText, isUser: true },
    ]);
    setInput("");
    setError(null);
    setIsLoading(true);

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      if (!CHATBOT_URL) {
        throw new Error("Chatbot endpoint is not configured.");
      }

      const url = sessionId
        ? `${CHATBOT_URL}?session_id=${encodeURIComponent(sessionId)}`
        : CHATBOT_URL;

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: trimmedText }),
        signal: controller.signal,
      });

      if (response.status === 429) {
        setError("Please wait a moment before sending another message.");
        return;
      }

      if (!response.ok) {
        throw new Error(
          `Chatbot request failed with status ${response.status}`,
        );
      }

      const data: unknown = await response.json();
      const responseText =
        typeof data === "object" && data !== null && "response" in data
          ? data.response
          : null;
      const nextSessionId =
        typeof data === "object" && data !== null && "session_id" in data
          ? data.session_id
          : null;

      if (typeof nextSessionId === "string" && !sessionId) {
        setSessionId(nextSessionId);
      }

      if (typeof responseText !== "string" || !responseText.trim()) {
        throw new Error("Chatbot returned an empty response.");
      }

      setMessages((prev) => [
        ...prev,
        { id: createMessageId(), text: responseText, isUser: false },
      ]);
    } catch (requestError) {
      if (
        requestError instanceof DOMException &&
        requestError.name === "AbortError"
      ) {
        return;
      }

      console.error("Chatbot request failed:", requestError);
      setError("The assistant is unavailable right now. Please try again shortly.");
    } finally {
      if (abortControllerRef.current === controller) {
        abortControllerRef.current = null;
      }
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage(input);
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(input);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen && !isLoading && CHATBOT_ENABLED) {
      inputRef.current?.focus();
    }
  }, [isOpen, isLoading]);

  useEffect(() => {
    if (isFooterVisible) {
      setIsOpen(false);
    }
  }, [isFooterVisible]);

  useEffect(() => {
    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        launcherRef.current?.focus();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        isOpen &&
        chatbotRef.current &&
        !chatbotRef.current.contains(target) &&
        !launcherRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const panelClasses = isDark
    ? "border-white/10 bg-surface-dark/95 text-slate-100 shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
    : "border-slate-200/80 bg-white/95 text-slate-900 shadow-[0_24px_80px_rgba(31,41,55,0.18)]";
  const mutedTextClasses = isDark ? "text-slate-400" : "text-slate-500";
  const assistantMessageClasses = isDark
    ? "border border-white/8 bg-white/6 text-slate-200"
    : "border border-slate-200 bg-slate-50 text-slate-700";
  const inputClasses = isDark
    ? "border-white/10 bg-white/6 text-slate-100 placeholder:text-slate-500 focus:border-accent-deep"
    : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-accent";

  if (isFooterVisible) {
    return null;
  }

  return (
    <>
      <motion.button
        ref={launcherRef}
        type="button"
        className={`group fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-5 z-998 flex h-14 w-14 items-center justify-center rounded-full border shadow-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-deep focus-visible:ring-offset-2 sm:bottom-5 ${
          isDark
            ? "border-white/12 bg-surface-dark/90 text-slate-200 backdrop-blur-md hover:bg-surface-dark-hover focus-visible:ring-offset-page-dark"
            : "border-slate-200 bg-white/90 text-slate-700 backdrop-blur-md hover:bg-white focus-visible:ring-offset-white"
        }`}
        onClick={() => {
          if (!CHATBOT_ENABLED) return;
          setIsOpen((previous) => !previous);
        }}
        aria-label={isOpen ? "Close portfolio assistant" : "Ask about my work"}
        aria-expanded={isOpen}
        aria-controls="portfolio-assistant"
        title={isOpen ? "Close assistant" : "Ask about my work"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
      >
        {isOpen ? (
          <IoClose className="text-2xl" />
        ) : (
          <BsChatDots className="text-xl" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.section
            id="portfolio-assistant"
            ref={chatbotRef}
            role="dialog"
            aria-modal="false"
            aria-labelledby="portfolio-assistant-title"
            aria-describedby="portfolio-assistant-description"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-4 z-998 flex max-h-[min(680px,calc(100dvh-7rem))] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border backdrop-blur-xl sm:right-5 sm:w-96 sm:bottom-22 ${panelClasses}`}
          >
            <header
              className={`flex items-center justify-between border-b px-5 py-4 ${isDark ? "border-white/8" : "border-slate-200"}`}
            >
              <div>
                <h2
                  id="portfolio-assistant-title"
                  className="text-sm font-semibold tracking-tight"
                >
                  Ilias&apos;s work
                </h2>
                <p
                  id="portfolio-assistant-description"
                  className={`mt-0.5 text-xs ${mutedTextClasses}`}
                >
                  Projects, experience and stack · English or Greek
                </p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={resetChat}
                  className={`rounded-lg p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-deep ${isDark ? "text-slate-400 hover:bg-white/8 hover:text-white" : "text-slate-400 hover:bg-slate-100 hover:text-slate-700"}`}
                  aria-label="Start a new conversation"
                  title="New conversation"
                >
                  <FiRefreshCw className="text-base" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    launcherRef.current?.focus();
                  }}
                  className={`rounded-lg p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-deep ${isDark ? "text-slate-400 hover:bg-white/8 hover:text-white" : "text-slate-400 hover:bg-slate-100 hover:text-slate-700"}`}
                  aria-label="Close assistant"
                  title="Close"
                >
                  <IoClose className="text-lg" aria-hidden="true" />
                </button>
              </div>
            </header>

            <div
              className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-5"
              aria-live="polite"
              aria-busy={isLoading}
            >
              <div className="space-y-3">
                <AnimatePresence initial={false}>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[88%] whitespace-pre-wrap wrap-break-word rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${
                          message.isUser
                            ? "bg-accent text-white"
                            : assistantMessageClasses
                        }`}
                      >
                        {message.text}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {messages.length === 1 && !isLoading && (
                  <div className="pt-2">
                    <p
                      className={`mb-2 text-[11px] font-medium uppercase tracking-[0.16em] ${mutedTextClasses}`}
                    >
                      Suggestions
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {QUICK_PROMPTS.map((prompt) => (
                        <button
                          key={prompt.label}
                          type="button"
                          onClick={() => void sendMessage(prompt.text)}
                          className={`rounded-full border px-3 py-1.5 text-left text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-deep ${
                            isDark
                              ? "border-white/10 text-slate-300 hover:border-accent-deep/70 hover:bg-accent/15"
                              : "border-slate-200 text-slate-600 hover:border-accent/50 hover:bg-accent/8"
                          }`}
                        >
                          {prompt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {isLoading && (
                  <div className="flex justify-start">
                    <div
                      className={`rounded-2xl border px-3.5 py-2.5 text-sm ${assistantMessageClasses}`}
                    >
                      <span
                        className="inline-flex items-center gap-1.5"
                        role="status"
                      >
                        Looking through my work
                        <span className="flex gap-0.5" aria-hidden="true">
                          <span className="animate-pulse">.</span>
                          <span className="animate-pulse [animation-delay:150ms]">
                            .
                          </span>
                          <span className="animate-pulse [animation-delay:300ms]">
                            .
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                )}

                {error && (
                  <div
                    className={`rounded-xl border px-3 py-2 text-xs ${isDark ? "border-rose-300/20 bg-rose-300/8 text-rose-200" : "border-rose-200 bg-rose-50 text-rose-700"}`}
                    role="alert"
                  >
                    {error}
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className={`border-t p-4 sm:p-5 ${isDark ? "border-white/8" : "border-slate-200"}`}
            >
              <div className="flex items-end gap-2">
                <label htmlFor="portfolio-assistant-input" className="sr-only">
                  Ask a question about Ilias
                </label>
                <textarea
                  ref={inputRef}
                  id="portfolio-assistant-input"
                  rows={1}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Ask about my work..."
                  disabled={isLoading || !CHATBOT_ENABLED}
                  className={`max-h-24 min-h-11 flex-1 resize-none rounded-2xl border px-3.5 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-accent-deep/30 disabled:cursor-not-allowed disabled:opacity-50 ${inputClasses}`}
                />
                <motion.button
                  type="submit"
                  disabled={isLoading || !CHATBOT_ENABLED || !input.trim()}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent text-white transition-colors hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-deep disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Send message"
                  title="Send message"
                  whileTap={{ scale: 0.95 }}
                >
                  <IoSend className="text-lg" aria-hidden="true" />
                </motion.button>
              </div>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
