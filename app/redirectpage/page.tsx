"use client";

import { motion } from 'framer-motion';
import { CommandLineIcon } from '@heroicons/react/24/outline';
import { getCurrentUser } from '@/utiles/supabase';
import { useDispatch, useSelector } from 'react-redux';
import { login, UserState } from '@/redux/slices';
import { RootState } from '@/redux/store';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CallbackPage() {
const dispatch = useDispatch()
const  router = useRouter();

const fetchUser = async() => {
  const { data, error } = await getCurrentUser();
  
  
  if(error){
     
    router.push("/")
  }
  if(data.session){
    
    const id = data.session.user.id;
    const {email , name , avatar_url} =data.session.user.user_metadata ;
    dispatch(login({id: id , email , name , picture: avatar_url}));
    router.push("/");    
  }else {
    router.push("/");
  }
  }


  useEffect(() => {
    fetchUser();
    }, [])



    
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-slate-900">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-tr from-green-400 to-emerald-500 rounded-md flex items-center justify-center">
            <CommandLineIcon className="w-5 h-5 text-black" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            ReactForge
          </span>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center flex flex-col items-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-20 h-20 mb-8 border-4 border-emerald-500/30 rounded-full relative"
          >
            <div className="absolute inset-0 border-t-4 border-emerald-400 rounded-full animate-spin" />
          </motion.div>

          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            Securing Your Session
          </h1>
          <p className="text-slate-300 text-lg mb-8">
            Completing authentication sequence...
          </p>       
        </motion.div>
      </div>
    </div>
  );
}
