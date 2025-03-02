"use client";

import { useState, useEffect } from 'react';
import { transform } from 'sucrase';
import { JSX } from 'react/jsx-runtime';
import ChatAi from '../../components/ChatAi';
import { Button } from '@/components/ui/button';
import { SquareCode, MonitorCog } from 'lucide-react';
import Editor from "@monaco-editor/react";

const defaultCode = `function App() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div className="p-4 flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-bold text-blue-600">React Counter</h1>
      <p className="text-lg">You clicked {count} times</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all"
      >
        Click me
      </button>
    </div>
  );
}`;

export default function Coding(): JSX.Element {
  const [jsCode, setJsCode] = useState<string>(defaultCode);
  const [cssCode, setCssCode] = useState<string>('');
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [codePrev, setCodePrev] = useState<boolean>(false);

  const handleCodeBtn = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setCodePrev(true);
  };
  
  const handlePrevBtn = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setCodePrev(false);
  };

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
    <div className="h-screen w-full grid grid-cols-4 grid-rows-1 gap-2 md:flex">
      <div className="col-span-2 h-full overflow-hidden md:flex-1 flex">
        <ChatAi />
      </div>
      <div className="col-span-2 h-full flex flex-col md:flex-1">
        <div className="bg-gray-800 px-4 py-2 text-sm flex z-10 overflow-scroll">
          <Button 
            onClick={handlePrevBtn} 
            className={`rounded-xl mr-4 font-semibold font-inter ${!codePrev ? 'bg-white text-gray-800' : 'bg-gray-700'}`}
          >
            <SquareCode className="mr-2" />
            Preview
          </Button>
          <Button 
            onClick={handleCodeBtn} 
            className={`rounded-xl font-inter font-semibold ${codePrev ? 'bg-white text-gray-800' : 'bg-gray-700'}`}
          >
            <MonitorCog className="mr-2" />
            Your Code
          </Button>
        </div>
     
        <div className="flex-grow relative">
          {codePrev ? (
            <div className="absolute inset-0">

                <div className="h-full overflow-auto">
                <Editor
                  height="100%"
                  defaultLanguage="javascript"
                  defaultValue={jsCode}
                  theme="vs-dark"
                  options={{ readOnly: true }}
                  onChange={(value) => setJsCode(value || '')}
                />
                </div>
            </div>
          ) : (
            <div className="absolute inset-0">
              {error ? (
                <div className="p-4 text-red-900 bg-black font-inter font-bold overflow-auto h-full">
                  {error}
                </div>
              ) : (
                <iframe
                  srcDoc={htmlContent}
                  className="w-full h-full border-0"
                  sandbox="allow-scripts"
                  title="preview"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}