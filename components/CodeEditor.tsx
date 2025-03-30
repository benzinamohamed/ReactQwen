"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { CodeBracketIcon, PlayIcon, ClipboardIcon } from '@heroicons/react/24/outline';
import Editor from '@monaco-editor/react';

const CodeEditor = () => {
  return (
    <motion.div 
        className="lg:w-[55%] bg-slate-900/50 backdrop-blur-xl rounded-xl border border-emerald-500/20 p-6 flex flex-col min-h-[500px]"
    >
        {/* Toggle - Keep original implementation */}
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

        {/* Fixed Editor Container */}
        <div className="flex-1 bg-black rounded-xl border border-emerald-500/20 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-emerald-500/20 flex items-center justify-between">
                <span className="text-emerald-400 text-sm">component.jsx</span>
                <button className="text-slate-400 hover:text-emerald-400">
                    <ClipboardIcon className="w-5 h-5" />
                </button>
            </div>
            
            <div className="flex-1 overflow-hidden">
                <Editor
                    height="100%"
                    defaultLanguage="javascript"
                    theme="vs-dark"
                    options={{
                        automaticLayout: true,
                        scrollBeyondLastLine: false,
                        minimap: { enabled: false },
                        lineNumbersMinChars: 3,
                        scrollbar: {
                            verticalScrollbarSize: 8,
                            horizontalScrollbarSize: 8,
                        }
                    }}
                    className="text-emerald-400 font-mono text-sm"
                />
            </div>
        </div>

        {/* Execution controls (keep existing) */}
    </motion.div>
  )
}

export default CodeEditor