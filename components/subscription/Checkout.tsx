'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import getUser from '@/hooks/getUser'
import { useRouter } from 'next/navigation'
import { checkout } from '@/lib/actions/stripe'
import { loadStripe } from '@stripe/stripe-js'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { cn } from '@/lib/utils'

export default function Checkout({ priceId }: { priceId: string }) {
    const [loading, setLoading] = useState(false)
    const { data: user } = getUser()
    const router = useRouter()
    const handleCheckout = async () => {
        if (user?.id) {
            setLoading(true)
            const data = JSON.parse(
                await checkout(user.email, priceId, location.origin)
            )

            const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK!)

            const res = await stripe?.redirectToCheckout({ sessionId: data.id })

            if (res?.error) {
                alert('Fail to checkout')
            }
            setLoading(false)
        } else {
            router.push('/auth?next=' + location.pathname)
        }
    }
    return (
        <Button
            className="flex items-center gap-2 w-full mt-2"
            onClick={handleCheckout}
        >
            Getting Started{' '}
            <AiOutlineLoading3Quarters
                className={cn('animate-spin', loading ? 'block' : 'hidden')}
            />
        </Button>
    )
}
