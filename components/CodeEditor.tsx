"use client";

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { CodeBracketIcon, PlayIcon, ClipboardIcon } from '@heroicons/react/24/outline';
import Editor from '@monaco-editor/react';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { transform } from 'sucrase';

const CodeEditor = () => {
    const AiCode =  useSelector((state: RootState) => state.code);
    const [jsCode , setJsCode] = useState(AiCode.code);
    const [toggle , setToggle] = useState<"code" | "output">("code");
    const [cssCode, setCssCode] = useState<string>('');
    const [htmlContent, setHtmlContent] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  
    useEffect(()=>{
    setJsCode(AiCode.code?.match(/```(?:jsx)?([\s\S]*?)```/)?.[1] || "")
    },[AiCode.code])


    useEffect(() => {
        const compileCode = () => {
          try {
            const transpiledCode = transform(jsCode, { transforms: ['jsx'] }).code;
    
            const iframeHtml = `
              <!DOCTYPE html>
              <html>
                <head>
                  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
                  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
                  <script src="https://cdn.tailwindcss.com"></script>
                  <style>
                    html, body {
                      margin: 0;
                      padding: 0;
                      height: 100%;
                    }
                    #root {
                      height: 100%;
                      overflow: auto;
                    }
                    ${cssCode}
                  </style>
                </head>
                <body class="bg-gray-100">
                  <div id="root"></div>
                  <script>
                    document.addEventListener('DOMContentLoaded', () => {
                      try {
                        // Make sure React is defined
                        if (typeof React === 'undefined') {
                          throw new Error('React is not defined');
                        }
                        
                        // Define the App function in the global scope
                        ${transpiledCode}
                        
                        // Ensure App is defined
                        if (typeof App !== 'function') {
                          throw new Error('App function is not defined');
                        }
                        
                        // Render using React 18's createRoot API
                        const rootElement = document.getElementById('root');
                        const root = ReactDOM.createRoot(rootElement);
                        root.render(React.createElement(App));
                      } catch (error) {
                        console.error('Rendering error:', error);
                        document.getElementById('root').innerHTML = 
                          '<div class="p-4 text-red-600 border border-red-300 rounded bg-red-50">' + 
                          '<p class="font-bold">Error:</p>' +
                          '<pre class="mt-2 whitespace-pre-wrap">' + error.message + '</pre>' +
                          '</div>';
                      }
                    });
                  </script>
                </body>
              </html>
            `;
    
            setHtmlContent(iframeHtml);
            setError(null);
          } catch (error) {
            if (error instanceof Error) {
              setError(error.message);
            } else {
              setError(String(error));
            }
            setHtmlContent(`
              <html>
                <body class="p-4">
                  <div class="p-4 text-red-600 border border-red-300 rounded bg-red-50">
                    <p class="font-bold">Compilation Error:</p>
                    <pre class="mt-2 whitespace-pre-wrap">${error.message}</pre>
                  </div>
                </body>
              </html>
            `);
          }
        };
    
        const timeoutId = setTimeout(compileCode, 500); 
        return () => clearTimeout(timeoutId);
      }, [jsCode, cssCode]);

  return (
    <motion.div 
        className="lg:w-[55%] bg-slate-900/50 backdrop-blur-xl rounded-xl border border-emerald-500/20 p-6 flex flex-col min-h-[500px]"
    >
        <div className="flex mb-6 bg-slate-800/50 rounded-lg p-1 gap-2">
            <button 
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md ${toggle === "code" ? "bg-emerald-500/10 text-emerald-400" : "hover:bg-slate-700/50 text-slate-300"}`}
                onClick={() => setToggle("code")}
            >
                <CodeBracketIcon className="w-5 h-5" />
                Code
            </button>
            <button 
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md ${toggle === "output" ? "bg-emerald-500/10 text-emerald-400" : "hover:bg-slate-700/50 text-slate-300"}`}
                onClick={() => setToggle("output")}
            >
                <PlayIcon className="w-5 h-5" />
                Output
            </button>
        </div>

        {toggle === "code" ? (
            <div className="flex-1 bg-black rounded-xl border border-emerald-500/20 overflow-hidden flex flex-col">
                <div className="p-4 border-b border-emerald-500/20 flex items-center justify-between">
                    <span className="text-emerald-400 text-sm">component.jsx</span>
                    <button className="text-slate-400 hover:text-emerald-400">
                        <ClipboardIcon className="w-5 h-5" />
                    </button>
                </div>
                
                <div className="flex-1 overflow-hidden">
                    <Editor
                        value={jsCode}
                        height="100%"
                        defaultLanguage="javascript"
                        theme="vs-dark"
                        options={{
                             readOnly: true,
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
        ) : (
            <div className="flex-1 bg-black rounded-xl border border-emerald-500/20 overflow-hidden flex flex-col">
              <div className="flex-1 relative h-full">
               {!isIframeLoaded? <div className="absolute inset-0 bg-gradient-to-tr from-green-500 to-emerald-600 opacity-20 animate-pulse" > 
                   
                </div> : null}
                {error ? (
                  <div className="p-4 text-red-400 bg-black h-full overflow-auto font-mono text-sm">
                    {error}
                  </div>
                ) : (
                  <iframe
                    srcDoc={htmlContent}
                    className="w-full h-full border-0"
                    sandbox="allow-scripts"
                    title="preview"
                    onLoad={() => setIsIframeLoaded(true)}
                  />
                )}
              </div>
            </div>
          )}
    </motion.div>
  )
}

export default CodeEditor