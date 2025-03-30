"use client";

import { RootState } from '@/redux/store';
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { sginOut } from '@/utiles/supabase';
import { logout } from '@/redux/slices';
import { useRouter } from 'next/navigation';

const GetStartedOptionsButton = () => {
    const userData =  useSelector((state: RootState) => state.UserLogin); 
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = async() => {  
      const {error} = await sginOut();
      dispatch(logout());
      router.push('redirectpage');
      if(error)
        console.log("error",error); 
    }

if(userData.id){
  return (
    <div className="flex items-center space-x-4 md:space-x-6">
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="https://ko-fi.com/hamodcode"
          target='_blank'
          className="cursor-pointer relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border-2 border-emerald-500/30 hover:border-emerald-400/50 px-6 py-2.5 rounded-lg transition-all group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-medium">
            Donate <span className="text-emerald-400">❤︎</span>
          </span>
        </Link>
      </motion.div>
      <DropdownMenu >
  <DropdownMenuTrigger asChild className='select-none cursor-pointer'>
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative"
    >
      <div className="select-none absolute inset-0 bg-emerald-500/20 blur-md rounded-full animate-pulse" />
      <img
        src={userData.picture || '/default-avatar.png'}
        alt="User Avatar"
        className="select-none relative w-10 h-10 rounded-full border-2 border-emerald-500/30 hover:border-emerald-400/50 shadow-lg shadow-emerald-500/10 transition-all"
      />
    </motion.div>
  </DropdownMenuTrigger>
  
  <DropdownMenuContent 
    className="w-56 bg-slate-900/90 backdrop-blur-xl border border-emerald-500/20 rounded-xl shadow-2xl shadow-emerald-500/10 overflow-hidden"
    sideOffset={8}
  >
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
    
      
      
      <DropdownMenuGroup className="p-2 space-y-1">
        <DropdownMenuItem className="focus:bg-slate-800/40 focus:text-emerald-300 rounded-lg px-3 py-2 text-sm text-slate-300 cursor-pointer transition-all border-l-2 border-transparent hover:border-emerald-400">
          Profile
        </DropdownMenuItem>
        
      
        <DropdownMenuItem className="focus:bg-slate-800/40 focus:text-emerald-300 rounded-lg px-3 py-2 text-sm text-slate-300 cursor-pointer transition-all border-l-2 border-transparent hover:border-emerald-400">
          Settings
        </DropdownMenuItem>
        
       
      </DropdownMenuGroup>

      <DropdownMenuSeparator className="bg-emerald-500/10 mx-2 my-2" />
      <DropdownMenuGroup className="p-2 space-y-1">
        <DropdownMenuItem className="focus:bg-slate-800/40 focus:text-emerald-300 rounded-lg px-3 py-2 text-sm text-slate-300">
          GitHub
        </DropdownMenuItem>
        <DropdownMenuItem className="focus:bg-slate-800/40 focus:text-emerald-300 rounded-lg px-3 py-2 text-sm text-slate-300">
          X (Twitter)
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="focus:bg-slate-800/40 focus:text-emerald-300 rounded-lg px-3 py-2 text-sm text-slate-300 opacity-50" 
          disabled
        >
          API
        </DropdownMenuItem>
      </DropdownMenuGroup>

      <DropdownMenuSeparator className="bg-emerald-500/10 mx-2 my-2" />

      <DropdownMenuItem disabled className="focus:bg-slate-800/40 focus:text-emerald-300 rounded-lg px-3 py-2 text-sm text-slate-300 cursor-pointer transition-all border-l-2 border-transparent hover:border-emerald-400">
        Help center
      </DropdownMenuItem>
      <DropdownMenuItem onClick={handleLogout}  className="focus:bg-slate-800/40 focus:text-emerald-300 rounded-lg px-3 py-2 text-sm text-slate-300 cursor-pointer transition-all border-l-2 border-transparent hover:border-emerald-400">
        Log out
      </DropdownMenuItem>
    </motion.div>
  </DropdownMenuContent>
</DropdownMenu>
    
    </div>
  );
}

  return (
    <div className="flex w-screen justify-between items-center md:w-auto md:space-x-6">
         <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="https://ko-fi.com/hamodcode"
          target='_blank'
          className="cursor-pointer relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border-2 border-emerald-500/30 hover:border-emerald-400/50 px-6 py-2.5 rounded-lg transition-all group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-medium">
            Donate <span className="text-emerald-400">❤︎</span>
          </span>
        </Link>
      </motion.div>
       <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href='/?show=true'
          className="cursor-pointer relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border-2 border-emerald-500/30 hover:border-emerald-400/50 px-6 py-2.5 rounded-lg transition-all group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-medium">
            Get Started 
          </span>
        </Link>
      </motion.div>
  </div>
  )
}

export default GetStartedOptionsButton