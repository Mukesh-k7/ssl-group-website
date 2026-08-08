"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  history?: {
    role: string;
    content: string;
  }[];
}


export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: "Hi! I'm SSL Group's assistant. Ask me about our products, export process, or certifications." },
  ]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

const sendMessage = async () => {
  if (!input.trim() || isStreaming) return;

  const question = input.trim();

  const history: ChatMessage[] = [
    ...messages,
    {
      role: "user",
      content: question,
    },
  ];

  setMessages(history);

  setInput("");

  setIsStreaming(true);

  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      content: "",
    },
  ]);

  try {
    const res = await fetch("/api/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: history,
      }),
    });

    if (!res.body)
      throw new Error("No stream.");

    const reader = res.body.getReader();

    const decoder = new TextDecoder();

    let answer = "";

    while (true) {
      const { done, value } =
        await reader.read();

      if (done) break;

      answer += decoder.decode(value);

      setMessages((prev) => {
        const copy = [...prev];

        copy[copy.length - 1] = {
          role: "assistant",
          content: answer,
        };

        return copy;
      });
    }
  } finally {
    setIsStreaming(false);
  }
};

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating toggle button — orange brand accent */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-[1000] flex h-16 w-16 items-center justify-center rounded-full bg-[#F97316] text-white shadow-lg transition-colors hover:bg-[#EAB308] fixed top-1/2 -translate-y-1/2"
        aria-label="Open chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[1000] flex h-[450px] w-[300px] flex-col rounded-xl border border-[#F97316]/20 bg-white shadow-2xl">
          {/* Header — dark brand background */}
          <div className="flex items-center justify-between rounded-t-xl bg-[#080C14] px-4 py-3">
            <div>
              <p className="font-semibold text-white">SSL Group Assistant</p>
              <p className="text-xs text-[#EAB308]">Usually replies instantly</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-gray-50 p-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${msg.role === "user"
                    ? "ml-auto bg-[#F97316] text-white"
                    : "border border-gray-200 bg-white text-gray-900"
                  }`}
              >
                {msg.content || (isStreaming && i === messages.length - 1 ? "..." : "")}
              </div>
            ))}
            <div ref={scrollRef} />
          </div>

          <div className="flex items-center gap-2 border-t bg-white p-3 rounded-md">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question..."
              disabled={isStreaming}
              className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] text-[#000]"
            />
            <button
              onClick={sendMessage}
              disabled={isStreaming || !input.trim()}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#F97316] text-white transition-colors hover:bg-[#EAB308] disabled:opacity-50"
            >
              {isStreaming ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </button>
          </div>
        </div>
      )}
    </>
  );
}