import { supabaseBrowser } from '@/lib/supabase/browser'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function getUser() {
  return useQuery({
    queryKey: ['user'],

    queryFn: async () => {

        const supabase = supabaseBrowser();

        const { data } = await supabase.auth.getSession();

        if(data.session?.user){

            
        }
    }
  })
}
