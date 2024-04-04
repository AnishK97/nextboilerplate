import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Profile from './Profile'

export default function Navbar() {
    return (
        <div className="flex justify-between items-center">
            <Link href={'/'}>
                <h1>Logo</h1>
            </Link>
            <Profile />
        </div>
    )
}
