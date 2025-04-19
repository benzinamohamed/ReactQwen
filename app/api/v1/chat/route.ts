import Groq from "groq-sdk";
import { sysPrompt } from "./systemPrompt";
import JSON5 from 'json5';
 
type ResponseData = {
  message: string
}
 

type conversation = {
  role? : string;
  sender?: string;
content: string;
}

const groq = new Groq({ apiKey: process.env.DEEPSEEK_QWEN_API_KEY});



export async function getGroqChatCompletion(chat :conversation[]) {
  const System : conversation = {role : "system" , content :sysPrompt};
  chat.unshift(System);
  return groq.chat.completions.create({
    messages: chat,
    model: "Llama 4 Maverick 17B 128E",
  });
}

  export async function POST(req: Request) {
    try {
      
      const res = await req.text();
      const parsedData = JSON5.parse(res);
   
      const messages = parsedData.messages.map((item: conversation) => {
        return {
          role: item.sender ? item.sender : item.role,
          content: item.content 
        };
      } );
      const chatCompletion = await getGroqChatCompletion(messages);
     // 
      return Response.json({
        role: "assistant",
        content: chatCompletion.choices[0]?.message?.content || ""
      });
    } catch (error) {
      console.error("Error processing chat completion:", error);
      return Response.json({ error : "an error has occured" }, { status: 500 });
    }
    }
  
