"use client";
import React, { useEffect, useRef, useState } from 'react'
import {motion} from "framer-motion"
import { SparklesIcon } from 'lucide-react'
import { getMessages, insertMessage } from '@/utiles/supabase';
import { usePathname } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setCode } from '@/redux/codeSlice';
import { callAiMessages, callAiprompt } from '@/utiles/calls';

export type message = {
  role?: "user" | "assistant";
  sender?: "user" | "assistant";
  content: string;
};

  const Chat = () => {
      const [prompt , setPrompt] = useState("");
      const dispatch = useDispatch();  
      const [messages , setmessages] = useState<message[]>([]);  
      const messageEndRef = useRef<HTMLDivElement | null>(null);
      let shouldreply = false
      const [aiLoading , setAiLoading] = useState<boolean>(false);
      const pathname = usePathname();
      const urls = pathname.split("/")
      const conversationId = urls? urls[urls.length -1] : "";
      console.log(messages)
        const handleGenerate = async()=>{
          if(prompt){
            
            await insertMessage("user" ,prompt ,conversationId );
            setmessages((prev) => [...prev, { sender: "user", content: prompt }]);
            setAiLoading(true);
          const message =  await callAiMessages(messages);
          console.log(message);
          await insertMessage("assistant" , message.content , conversationId)
          setmessages((prev) => [...prev, { sender: "assistant", content: message.content?.match(/^(?!.*```)([\s\S]+?)(?=\n```|\n|$)/g) || ""}])
          setAiLoading(false);
  
          }}
          const retreiveMessages = async()=>{
            try {
              const {data , error} = await getMessages(conversationId);
              if (error) {
                console.error("Error fetching messages:", error);
                return;
              }
              
              const filtredData : message[] = (data?.map((item) => ({ sender: item.sender, content: item.content })) || []);
              setmessages(filtredData);
              if(filtredData.length > 0 && filtredData[filtredData.length -1].sender ==="user" && !shouldreply){ 
               handleAireplyFromHomeScreen(filtredData[filtredData.length -1].content);
               setAiLoading(false);
               shouldreply = true;
               console.log(shouldreply);
             }
             if(filtredData.length > 0 && filtredData[filtredData.length -1 ].sender ==="assistant"){
              dispatch(setCode({code : filtredData[filtredData.length -1].content}));
             }

              console.log(messages);
            } catch (err) {
              console.error("An unexpected error occurred:", err);
            }
       }

          useEffect(()=>{
            messageEndRef.current?.scrollIntoView({behavior : "smooth"})
          }, [messages]) 
          useEffect(()=>{
           retreiveMessages()
          },[])
          
            
          const handleAireplyFromHomeScreen = async(prompt : string)=>{
            const message =  await callAiprompt(prompt);
          console.log(message);
          dispatch(setCode({code : message.content}));
          await insertMessage("assistant" , message.content , conversationId)
          setmessages((prev) => [...prev, { sender: "assistant", content: message.content}])
          }

         

  return (
    <motion.div 
    className="flex-1 bg-slate-900/50 backdrop-blur-xl rounded-xl border border-emerald-500/20 p-6 flex flex-col min-h-[500px]"
  >
    <div className="flex-1 overflow-y-auto space-y-6 mb-6">
      
    {messages.map((item, index) => (
     <React.Fragment key={index}>
       {item.sender === "user" ? (
      <div className="flex justify-end">
        <div className="max-w-[80%] bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
          <p className="text-slate-300">{item.content}</p>
        </div>
      </div>
       ) :(
      <div className="flex justify-start">
        <div className="max-w-[80%] bg-slate-800/50 border border-emerald-500/20 rounded-xl p-4 space-y-4">
          <p className="text-slate-300">{item.content}</p>
        </div>
      </div>
       )}
    
     </React.Fragment>
    ))}
     { aiLoading || messages.length === 1 ? <div className="flex justify-start items-end">
        <div className="max-w-[80%] bg-slate-800/50 border border-emerald-500/20 rounded-xl p-4 space-y-4">
        <div className="animate-shimmer bg-gradient-to-r from-slate-800 via-emerald-500/20 to-slate-800 bg-[length:200%_100%] rounded-full h-4 w-32" />
        </div>
      </div> : null}
   <div ref={messageEndRef} />
    </div>
    

    <div className="relative mt-auto">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-green-500/10 rounded-xl blur-lg opacity-50" />
<div className="relative bg-slate-800/50 border border-emerald-500/20 rounded-xl p-2 backdrop-blur-sm">
<div className="flex flex-col gap-3">
<textarea
value={prompt}
 onChange={(e)=>setPrompt(e.target.value)}
  placeholder="Describe your component..."
  className="focus:outline-none w-full bg-transparent text-slate-300 placeholder-slate-500 border-none focus:ring-0 resize-none p-4 text-lg min-h-[80px] scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
  rows={3}
/>
<div className="flex justify-end px-2 pb-1">
  <motion.button 
    onClick={handleGenerate}
    disabled={aiLoading}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-black px-6 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all"
  >
    <SparklesIcon className="w-4 h-4" />
    Generate
  </motion.button>
</div>
</div>
</div>
</div>

  </motion.div> 
  )
}

export default Chat