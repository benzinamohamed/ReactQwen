"use client";


import React from 'react'
import { useRouter } from "next/navigation";
import { motion , AnimatePresence } from 'framer-motion';
import { CommandLineIcon, SparklesIcon, CodeBracketIcon, XMarkIcon } from '@heroicons/react/24/outline';
interface StartingModalProps {
  isVisible: string | undefined;   
}

const StartingModal = ({isVisible} : StartingModalProps) => {
const router = useRouter();
  return (
    <AnimatePresence>
    {isVisible && (
      <motion.div
        key="modal"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center"
        onClick={router.back}
      >
        <div 
          className="relative bg-slate-900/80 border border-emerald-500/20 rounded-xl p-8 w-96 backdrop-blur-xl"
          onClick={(e) => e.stopPropagation()}
        >
        
  
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-12 h-12 bg-gradient-to-tr from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                <CommandLineIcon className="w-6 h-6 text-black" />
              </div>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Access ReactForge
              </h2>
            </div>
  
            {/* Auth Providers */}
            <div className="space-y-4">
              <button className="cursor-pointer w-full group flex items-center justify-center gap-3 p-3.5 bg-slate-800 hover:bg-slate-600 hover:scale-105 rounded-lg border border-emerald-500/20 transition-all">
                <img src="/google.svg" className="w-5 h-5 invert" />
                <span className="text-slate-300 group-hover:text-emerald-400">
                  Continue with Google
                </span>
              </button>
  
                <button className="cursor-pointer w-full group flex items-center justify-center gap-3 p-3.5 bg-slate-800 hover:bg-slate-600 hover:scale-105 rounded-lg border border-emerald-500/20 transition-all transform">
                <img src="/github.svg" className="w-5 h-5 invert" />
                <span className="text-slate-300 group-hover:text-emerald-400">
                  Continue with GitHub
                </span>
                </button>
            </div>
  
            {/* Legal */}
            <p className="text-center text-xs text-slate-400 leading-relaxed">
              By continuing, you agree to our {' '}
              <a className="text-emerald-400 hover:underline cursor-pointer">Terms</a> and {' '}
              <a className="text-emerald-400 hover:underline cursor-pointer">Privacy</a>, 
              and consent to usage analytics collection.
            </p>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
  
  )
}

export default StartingModal