import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Profile from './Profile'
import { ThemeSwitcher } from './theme-switcher'

export default function Navbar() {
    return (
        <div className="flex items-center justify-between h-20">
            <Link href={'/'} className="justify-end">
                <h1>Logo</h1>
            </Link>
            <div className="flex items-center gap-2">
                <Profile />
                <ThemeSwitcher />
            </div>
        </div>
    )
}
