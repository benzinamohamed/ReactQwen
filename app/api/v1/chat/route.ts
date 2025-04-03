import { getCurrentUser } from "@/utiles/supabase";
import Groq from "groq-sdk";
import type { NextApiRequest, NextApiResponse } from 'next'
import { sysPrompt } from "./systemPrompt";
import { StreamingTextResponse, streamText } from 'ai'

type ResponseData = {
  message: string
}
 

type conversation = {
  role : string;
content: string;
}

const groq = new Groq({ apiKey: process.env.DEEPSEEK_QWEN_API_KEY});



export async function getGroqChatCompletion(chat :conversation[]) {
  const System : conversation = {role : "system" , content :sysPrompt};
  chat.unshift(System);
  return groq.chat.completions.create({
    messages: chat,
    model: "llama-3.3-70b-versatile",
  });
}

  export async function POST(req: Request) {
    try {
      const cleanData = JSON.parse(JSON.stringify(req));
      const res = await cleanData.json();
      const chatCompletion = await getGroqChatCompletion(res.messages);
      console.log(res.messages);
      return Response.json({
        role: "assistant",
        content: chatCompletion.choices[0]?.message?.content || ""
      });
    } catch (error) {
      console.error("Error processing chat completion:", error);
      return Response.json({
        role: "error",
        content: "An error occurred while processing your request."
      }, { status: 500 });
    }
    }
  