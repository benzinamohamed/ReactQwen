import { getCurrentUser } from "@/utiles/supabase";
import Groq from "groq-sdk";
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 

const groq = new Groq({ apiKey: process.env.DEEPSEEK_QWEN_API_KEY});

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Explain the importance of fast language models",
      },
    ],
    model: "llama-3.3-70b-versatile",
  });
}



export async function GET(request : NextApiRequest) {
    
    return Response.json({ message: "gg" });
  }
  