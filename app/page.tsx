import Price from '@/components/subscription/price'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Scene from '@/components/spline'
import LandingPage from '@/components/hero/LandingPage'

export default function page() {
    return (
        <div className="flex flex-col items-center gap-5">
            {/*             <div className="flex items-center gap-2 mt-10">
                <h1>Home</h1>
                <Button>Get Started</Button>
                <Link href={'/dashboard'}>Dashboard</Link>
                <Link href={'/profile'}>Profile</Link>
            </div> */}
            <LandingPage />

            <div className="">
                <Price />
            </div>
        </div>
    )
}
