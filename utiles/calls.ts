import { message } from "@/components/ChatwithAi";

export const callAiprompt = async(prompt :string)=> {
    const res = await fetch("http://localhost:3000/api/v1/chat",
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
    const filtredMessages = messages.map((item)=>{
        return {"role" : item.sender , "content" : item.content}
      })
        const res = await fetch("http://localhost:3000/api/v1/chat",
            {
              method : "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
              messages : filtredMessages
              })
             })
            return await res.json();
          }
    
    
          