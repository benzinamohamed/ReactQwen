"use client";
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { AnimatePresence , motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { getConversations } from '@/utiles/supabase';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

interface ChatList {
    isVisible: string | undefined;   
  }
const ChatListModal = ({isVisible} :ChatList ) => {
    const router = useRouter();
    const pathname = usePathname();
    const [conversations, setConversations] = useState<any[]>([]);
    const userData =  useSelector((state: RootState) => state.UserLogin); 

    

    const retrieveConvos = async ()=>{
          const {data ,error} = await getConversations(userData.id);
       setConversations(data);
       console.log("sss",conversations);
    }

    const handlePressConvo =(itemId : string)=> {
      router.replace(`/code-execution/chat/${itemId}`)
    }

    useEffect(()=>{
    retrieveConvos()
    },[])
   


  return (
    <AnimatePresence>
    {isVisible && (
      <motion.div
        key="modal"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="z-50 fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center p-8 md:p-0 md:bg-black/90"
        onClick={router.back}
      >
        <div 
          className="relative bg-slate-900/80 border border-emerald-500/20 rounded-xl p-8 w-96 backdrop-blur-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6">
            Conversation History
          </h2>
  
          <div className="space-y-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
            {conversations.map((convo) => (
              <motion.div
                key={convo.id}
                onClick={()=>handlePressConvo(convo.id)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-4 bg-slate-800/50 rounded-lg border border-emerald-500/10 hover:border-emerald-400/30 transition-all cursor-pointer group"
              >
                <div className="active:scale-95 flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="text-slate-100 font-medium">{convo.name}</h3>
                  </div>
                  <div className="text-right space-y-2">
                    <span className="text-xs text-slate-500">
                      {convo.timestamp}
                    </span>
                    {convo.unread > 0 && (
                      <span className="inline-block px-2 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-black text-xs font-medium">
                        {convo.unread}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
  
          {conversations.length === 0 && (
            <div className="text-center py-8 text-slate-400">
              <p>No conversations found</p>
              <p className="text-xs mt-2 text-slate-500">
                Start a new chat to begin
              </p>
            </div>
          )}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
  
  )
}

export default ChatListModal