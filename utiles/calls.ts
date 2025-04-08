import { message } from "@/components/ChatwithAi";

export const callAiprompt = async(prompt :string)=> {
  console.log("callAipropt called");
    const res = await fetch("https://react-qwen.vercel.app//api/v1/chat",
        {
          method : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          messages : [{"role" : "user" , "content" : prompt}]
            ,
          }),
            
        })
        return await res.json();
      }


export const callAiMessages = async(messages : message[])=> {
  console.log("callAi message called");
  console.log(messages)

        try {
            const res = await fetch("https://react-qwen.vercel.app/api/v1/chat",
          {
            method : "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
            messages : messages
              ,
            })
           })
            return await res.json();
        } catch (error) {
            console.error("Error while calling AI messages:", error);
            throw error;
        }
          }
    
    
          