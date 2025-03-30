"use client";
import React, { useState } from 'react'
import {motion} from "framer-motion"
import { SparklesIcon } from 'lucide-react'
import { insertMessage } from '@/utiles/supabase';
const Chat = () => {
const [prompt , setPrompt] = useState("");
  const handleGenerate = ()=>{
    if(prompt){
    //  insertMessage("user" ,prompt , )
    }
  }
  return (
    <motion.div 
    className="flex-1 bg-slate-900/50 backdrop-blur-xl rounded-xl border border-emerald-500/20 p-6 flex flex-col min-h-[500px]"
  >
    <div className="flex-1 overflow-y-auto space-y-6 mb-6">
      {/* User Message */}
      <div className="flex justify-end">
        <div className="max-w-[80%] bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
          <p className="text-slate-300">Create a button with hover animation</p>
        </div>
      </div>

      {/* AI Message */}
      <div className="flex justify-start">
        <div className="max-w-[80%] bg-slate-800/50 border border-emerald-500/20 rounded-xl p-4 space-y-4">
          <p className="text-slate-300">Here's your button component:</p>
          <div className="bg-black rounded-lg p-4 border border-emerald-500/20">
            <code className="text-emerald-400 font-mono text-sm">
              {`const AnimatedButton = () => (\n`}
              {`  <button className="...">\n`}
              {`    Hover me\n`}
              {`  </button>\n`}
              {`)`}
            </code>
          </div>
        </div>
      </div>
    </div>

    {/* Chat Input (keep existing) */}
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