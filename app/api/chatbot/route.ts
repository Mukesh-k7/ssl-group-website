import { NextRequest } from "next/server";
import { GoogleGenAI } from "@google/genai";

export const runtime = "nodejs";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

const SYSTEM_PROMPT = `You are the AI assistant for SSL Group, an industrial metallurgy and export company based in Ghaziabad, India.

SSL Group deals in: Pig Iron, Ferro Alloys, Noble Alloys, Carbon Products, Abrasives, Natural Graphite, and Steel — for domestic and export markets.

Guidelines:
- Be concise, professional, and helpful — this is a B2B industrial website
- For specific pricing, MOQ, or shipment quotes, direct visitors to the Inquiry form — never invent prices
- For job openings, direct visitors to the Careers page
- If you don't know something specific about SSL Group, say so honestly rather than guessing
- Keep responses short (2-5 sentences) unless the visitor asks for more detail`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: "No messages provided" }, { status: 400 });
    }

    const contents = messages.slice(-12).map((m: any) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const result = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        maxOutputTokens: 512,
      },
    });

    return Response.json(result.text);
  } catch (err: any) {
    console.error("Chatbot route failed:", err);
    return Response.json(
      { error: err?.message || "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}


