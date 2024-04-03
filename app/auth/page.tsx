"use client"


import { Button } from '@/components/ui/button'
import { KeyRound } from 'lucide-react'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { supabaseBrowser } from '@/lib/supabase/browser';

export default function Page() {

    const handleLoginWithOAuth = (provider:"github"|"google" ) => {
        
        const supabase = supabaseBrowser();


        supabase.auth.signInWithOAuth( {

            provider,

            options:{
                redirectTo: window.location.origin + "/auth/callback"
            }
        })



    }


  return (
    <div className='flex items-center justify-center w-full h-screen'>
        <div className="w-96 rounded-md border p-5 space-y-5 relative">
            <div className='flex items-center gap-2'>
                <KeyRound />
                <h1 className='text-2xl font-bold' >Next X Supabase</h1>
            </div>
            <p className='text-sm text-gray-300 '>Sign In 👋🏻</p>
            <div className="flex flex-col gap-5 ">
                <Button className='flex w-full items-center gap-2' variant="outline" 
                onClick={()=>handleLoginWithOAuth("github")}>
                    <FaGithub/>    Github
                </Button>
                <Button className=' w-full flex items-center gap-2' variant="outline"
                onClick={()=>handleLoginWithOAuth("google")}>
                    <FcGoogle/>    Google
                </Button>
            </div>


        </div>
    </div>
  )
}
