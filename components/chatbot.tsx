"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChatDots } from "react-icons/bs";
import { IoClose, IoSend } from "react-icons/io5";
import { useTheme } from "@/context/theme-context";

interface Message {
  text: string;
  isUser: boolean;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatbotRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_CHATBOT_URL || "", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: input }),
      });

      if (response.status === 429) {
        const errorMessage: Message = {
          text: "You're sending messages too quickly. Please wait a moment before trying again.",
          isUser: false,
        };
        setMessages((prev) => [...prev, errorMessage]);
      } else {
        const data = await response.json();
        const botMessage: Message = { text: data.response, isUser: false };
        setMessages((prev) => [...prev, botMessage]);
      }
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        text: "Sorry, I encountered an error. Please try again.",
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setIsLoading(false);
    setInput("");
    inputRef.current?.focus();
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          text: "Hi and welcome to my website! I can communicate in both English and Greek (Γεια σας!). What would you like to know about me?",
          isUser: false,
        },
      ]);
    }
  }, [isOpen, messages]);

  const handleToggleChat = () => {
    if (isOpen) {
      setMessages([]);
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        chatbotRef.current &&
        !chatbotRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        const toggleButton = event.target as Element;
        if (!toggleButton.closest('[aria-label="Toggle chat"]')) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <motion.button
        className={`fixed bottom-5 right-5 w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center
          border border-white border-opacity-40 shadow-2xl z-[999]
          ${
            theme === "light"
              ? "bg-white md:bg-opacity-80 md:backdrop-blur-[0.5rem] borderBlack"
              : "bg-gray-950 md:bg-transparent md:backdrop-blur-[0.5rem] md:hover:bg-white/20"
          } active:scale-105 transition-all`}
        onClick={handleToggleChat}
        aria-label="Toggle chat"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: [1, 1.05, 1],
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      >
        {isOpen ? (
          <IoClose className="text-2xl" />
        ) : (
          <BsChatDots className="text-xl" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatbotRef}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-20 right-5 bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden max-w-[90%] md:max-w-[26rem] mx-2 md:mx-0"
          >
            <div
              className={`bg-gradient-to-r from-[#fbe2e3] to-[#dbd7fb] dark:from-[#946263] dark:to-[#676394] p-4`}
            >
              <h3 className="font-bold text-lg text-gray-800 dark:text-white">
                Chat with Assistant
              </h3>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${
                      message.isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.isUser
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-2xl">
                    <div className="flex items-center gap-1">
                      Typing
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        .
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 0.5,
                        }}
                      >
                        .
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 1,
                        }}
                      >
                        .
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 dark:bg-gray-700  dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className={`${
                    theme === "light" ? " text-black" : "text-white "
                  }  borderBlack px-4 py-2 rounded-full disabled:opacity-50 transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IoSend className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
