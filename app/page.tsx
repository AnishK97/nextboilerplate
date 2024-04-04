import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className="flex items-center gap-2">
            <h1>Home</h1>
            <Link href={'/dashboard'}>Dashboard</Link>
            <Link href={'/profile'}>Profile</Link>
        </div>
    )
}
