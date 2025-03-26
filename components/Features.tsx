"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { CommandLineIcon, CodeBracketIcon, BeakerIcon } from '@heroicons/react/24/outline';
const Features = () => {
  return (
    
    <section className="border-t border-emerald-900/50 py-20">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Developer-First AI</h2>
        <p className="text-slate-400">Modern tools for modern development workflows</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { 
            title: 'Instant Codegen',
            icon: CodeBracketIcon,
            description: 'Generate production-ready React components with TypeScript and Tailwind'
          },
          { 
            title: 'AI Optimization',
            icon: BeakerIcon,
            description: 'Automatic performance optimization and best practices'
          },
          { 
            title: 'Real Preview',
            icon: CommandLineIcon,
            description: 'Interactive component preview with hot-reloading'
          },
        ].map((feature, index) => (
          <motion.div 
            whileHover={{ y: -5 }}
            key={index}
            className="bg-slate-900/50 backdrop-blur-xl p-6 rounded-xl border border-emerald-500/20"
          >
            <feature.icon className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-slate-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Features