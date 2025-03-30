"use client";

import { SparklesIcon, ClipboardIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { CodeBracketIcon, PlayIcon } from '@heroicons/react/24/outline';
import Home from '@/app/page';
import { HomeNavbar } from '@/components/HomeNavbar';

export default  function coder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-slate-900">
     <HomeNavbar></HomeNavbar>
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 h-[calc(100vh-180px)]">
          {/* Chat Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 bg-slate-900/50 backdrop-blur-xl rounded-xl border border-emerald-500/20 p-6 flex flex-col"
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

            {/* Chat Input */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-green-500/10 rounded-xl blur-md" />
              <div className="relative bg-slate-800/50 border border-emerald-500/20 rounded-xl p-2">
                <textarea
                  placeholder="Describe your component..."
                  className="w-full bg-transparent text-slate-300 placeholder-slate-500 border-none focus:ring-0 resize-none p-4"
                  rows={2}
                />
                <div className="flex justify-end px-4 pb-2">
                  <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-black px-6 py-2 rounded-lg flex items-center gap-2">
                    <SparklesIcon className="w-5 h-5" />
                    Generate
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Code Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 bg-slate-900/50 backdrop-blur-xl rounded-xl border border-emerald-500/20 p-6 flex flex-col"
          >
            {/* Toggle */}
            <div className="flex mb-6 bg-slate-800/50 rounded-lg p-1 gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-md bg-emerald-500/10 text-emerald-400">
                <CodeBracketIcon className="w-5 h-5" />
                Code
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-md hover:bg-slate-700/50 text-slate-300">
                <PlayIcon className="w-5 h-5" />
                Output
              </button>
            </div>

            {/* Code Editor */}
            <div className="flex-1 bg-black rounded-xl border border-emerald-500/20 overflow-hidden">
              <div className="p-4 border-b border-emerald-500/20 flex items-center justify-between">
                <span className="text-emerald-400 text-sm">component.jsx</span>
                <button className="text-slate-400 hover:text-emerald-400">
                  <ClipboardIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 font-mono text-sm">
                <pre className="text-emerald-400">
                  {`import { motion } from 'framer-motion';\n\n`}
                  {`const AnimatedButton = () => (\n`}
                  {`  <motion.button\n ` }
                  {`    whileHover={{ scale: 1.05 }}\n`}
                  {`    className="px-6 py-3 bg-emerald-500..."\n`}
                  {`  >\n`}
                  {`    Hover me\n`}
                  {`  </motion.button>\n`}
                  {`)`}
                </pre>
              </div>
            </div>

            {/* Execution Controls */}
            <div className="mt-6 flex justify-end gap-4">
              <button className="border border-emerald-500/20 px-6 py-2 rounded-lg text-slate-300 hover:bg-emerald-500/10">
                Save
              </button>
              <button className="bg-emerald-500/10 border border-emerald-500/20 px-6 py-2 rounded-lg text-emerald-400 hover:bg-emerald-500/20 flex items-center gap-2">
                <PlayIcon className="w-5 h-5" />
                Run Code
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
