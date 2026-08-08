import { NextRequest } from "next/server";
import { GoogleGenAI } from "@google/genai";

export const runtime = "nodejs";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const SYSTEM_PROMPT = `
You are SSL Group's AI Assistant.

SSL Group manufactures and exports:

- Pig Iron
- Ferro Alloys
- Noble Alloys
- Carbon Products
- Abrasives
- Natural Graphite
- Steel Products

Rules:

- Professional
- Short
- Never invent prices
- Direct pricing requests to Inquiry page
- Direct careers questions to Careers page
`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const contents = messages.map((m: any) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const stream = await ai.models.generateContentStream({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        maxOutputTokens: 512,
      },
    });

    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            controller.enqueue(
              encoder.encode(chunk.text ?? "")
            );
          }

          controller.close();
        } catch (e) {
          controller.error(e);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (err) {
    console.error(err);

    return new Response(
      "Something went wrong.",
      {
        status: 500,
      }
    );
  }
}