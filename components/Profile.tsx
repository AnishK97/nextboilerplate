'use client'

import Link from 'next/link'
import React, { useEffect } from 'react'
import { Button } from './ui/button'
import getUser from '@/hooks/getUser'
import Image from 'next/image'
import { useQueryClient } from '@tanstack/react-query'
import { supabaseBrowser } from '@/lib/supabase/browser'
import { usePathname, useRouter } from 'next/navigation'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuLabel,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { LogOut, User, LayoutDashboard } from 'lucide-react'

import { protectedPaths } from '@/lib/constants'
import { HiRefresh } from 'react-icons/hi'

export default function Profile() {
    const { isFetching, data } = getUser()

    const queryClient = useQueryClient()

    const router = useRouter()

    const pathname = usePathname()

    if (pathname.toString() === '/auth') {
        return <></>
    }

    if (isFetching) {
        return <></>
    }

    const handleLogout = async () => {
        const supabase = supabaseBrowser()
        queryClient.clear()
        await supabase.auth.signOut()
        router.refresh()

        if (protectedPaths.includes(pathname)) {
            router.replace('/auth?next=' + pathname)
        }
    }

    const handleDropdownClick = (pageRef: string) => {
        router.push(pageRef)
    }

    return (
        <div>
            <DropdownMenu>
                {!data?.id ? (
                    <Link href={'/auth'} className="animate-fade ">
                        <Button variant={'outline'}>Sign In</Button>
                    </Link>
                ) : (
                    <>
                        {data?.image_url ? (
                            <DropdownMenuTrigger asChild>
                                <Image
                                    src={data.image_url || ''}
                                    alt={data.display_name || ''}
                                    width={35}
                                    height={35}
                                    className="rounded-full animate-fade ring-2 cursor-pointer"
                                />
                            </DropdownMenuTrigger>
                        ) : (
                            <DropdownMenuTrigger asChild>
                                <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full text-2xl bold cursor-pointer">
                                    <h1>{data.email[0]}</h1>
                                </div>
                            </DropdownMenuTrigger>
                        )}
                    </>
                )}

                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={() => handleDropdownClick('/profile')}
                        className="flex "
                    >
                        <User className="h-4 w-4 mr-2 " />
                        <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => handleDropdownClick('/dashboard')}
                        className="flex "
                    >
                        <LayoutDashboard className="h-4 w-4 mr-2 " />
                        <span>Dashboard</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="flex">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
