"use client";

import { motion } from 'framer-motion';
import { CommandLineIcon, CpuChipIcon } from '@heroicons/react/24/outline';

export default function CodeLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-slate-900">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-8 h-[calc(100vh-180px)]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 bg-slate-900/50 backdrop-blur-xl rounded-xl border border-emerald-500/20 p-6 flex flex-col"
          >
            <div className="flex-1 space-y-6 mb-6">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ x: 0 }}
                  className={`p-4 rounded-xl ${
                    i % 2 === 0 
                      ? 'bg-emerald-500/10 ml-auto w-3/4' 
                      : 'bg-slate-800/50 w-4/5'
                  }`}
                >
                  <div className="h-4 bg-slate-700/50 rounded animate-pulse mb-2 w-3/4" />
                  <div className="h-4 bg-slate-700/50 rounded animate-pulse w-1/2" />
                </motion.div>
              ))}
            </div>

            <div className="relative bg-slate-800/50 border border-emerald-500/20 rounded-xl p-4">
              <div className="h-6 bg-slate-700/50 rounded animate-pulse w-1/3" />
            </div>
          </motion.div>

          <div className="lg:w-1/2 bg-slate-900/50 backdrop-blur-xl rounded-xl border border-emerald-500/20 p-6">
            <div className="bg-black rounded-xl border border-emerald-500/20 overflow-hidden">
              <div className="p-4 border-b border-emerald-500/20 flex justify-between">
                <div className="h-4 bg-emerald-500/20 rounded-full w-32 animate-pulse" />
                <div className="h-6 w-6 bg-slate-700/50 rounded-lg animate-pulse" />
              </div>

              <div className="p-4 space-y-3">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="h-4 bg-slate-700/50 rounded-full w-8 animate-pulse" />
                    <div className="h-4 bg-slate-700/50 rounded-full" style={{ width: `${Math.random() * 40 + 60}%` }} />
                  </motion.div>
                ))}
                <div className="flex items-center space-x-4">
                  <div className="w-8" />
                  <div className="h-4 bg-emerald-500/20 rounded-full w-16 animate-pulse" />
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <CpuChipIcon className="w-6 h-6 text-emerald-400 animate-pulse" />
              <div className="flex-1 bg-slate-800/50 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-full bg-gradient-to-r from-emerald-500/40 to-emerald-400/20"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-6 left-6 bg-slate-900/80 backdrop-blur-sm p-4 rounded-xl border border-emerald-500/20">
          <div className="flex items-center gap-3">
            <CommandLineIcon className="w-5 h-5 text-emerald-400" />
            <div className="font-mono text-sm text-emerald-400">
              <span className="animate-pulse">$</span> npm run generate
              <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-blink" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}