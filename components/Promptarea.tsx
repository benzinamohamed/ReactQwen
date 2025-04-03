"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { CommandLineIcon, SparklesIcon, CodeBracketIcon, BeakerIcon } from '@heroicons/react/24/outline';
import { insertConversation } from '@/utiles/supabase';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
import { flightRouterStateSchema } from 'next/dist/server/app-render/types';

export const Promptarea = () => {
  const userData = useSelector((state: RootState) => state.UserLogin)
  const [prompt, setPrompt] = useState<string>('');
  const [loading , setLoading] = useState<boolean>(false);
  const router = useRouter();
      const examplePrompts = [
        'Create a responsive navbar with animated hamburger menu',
        'Generate a dashboard layout with dark mode toggle',
        'Build a modal with gesture-controlled animations',
        'Make a card component with hover effects and gradients'
      ];

   const handleGenerate = async()=>{
if (userData.id){
  try {
    setLoading(true);
    const { data, error } = await insertConversation(userData.id, prompt);
    const id = data && data[0]?.id;
    console.log("data", id);
    console.log("err", error);
    router.push(`/code-execution/chat/${id}`);
  } catch (err) {
    console.error("An error occurred:", err);
  } finally {
    setLoading(false);
  }
}else{
  router.push('/?show=true');
} 

    
   }   
  return (
    <div className="container mx-auto px-6 py-24">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
        What do you want to build?
      </h1>
      <p className="text-slate-400 text-lg mb-12">
        Prompt, run, edit, and ship. Transform ideas into React components instantly.
      </p>
    </motion.div>

    <motion.div 
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      className="relative max-w-3xl mx-auto mb-8"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur-xl opacity-20 animate-pulse" />
      <div className="relative bg-black border-2 border-emerald-500/30 rounded-2xl shadow-2xl transition-all hover:border-emerald-400/50">
      <div className="flex flex-col p-1">
  <textarea
    value={prompt}
    onChange={(e) => setPrompt(e.target.value)}
    placeholder="Describe your component..."
    className="select-none focus:outline-none w-full min-h-[200px] bg-transparent text-white placeholder-slate-500 border-none focus:ring-0 text-xl py-6 px-8 resize-none"
    style={{ lineHeight: 1.6 }}
  />
  
  <div className="flex justify-end px-6 pb-6">
    <button onClick={handleGenerate} disabled={loading}
      className={`cursor-pointer hover:scale-105 bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-black px-8 py-3.5 rounded-xl transition-all flex items-center space-x-2 
      transform ${prompt ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}
    >
      <SparklesIcon className="w-5 h-5" />
      <span>Generate Component</span>
    </button>
  </div>
</div>
      </div>
    </motion.div>

 
    <motion.div 
      className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      {examplePrompts.map((prompt, index) => (
        <button
          key={index}
          onClick={() => setPrompt(prompt)}
          className="text-left p-4 bg-slate-900 hover:bg-slate-800 border border-emerald-500/20 rounded-xl transition-all group"
        >
          <p className="text-slate-300 group-hover:text-emerald-400">{prompt}</p>
        </button>
      ))}
    </motion.div>
  </div>
  )
}
