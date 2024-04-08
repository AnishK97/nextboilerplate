import { Check, CircleCheckBig } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Checkout from './Checkout'

export default function Price() {
    const pricingOptions = [
        {
            title: 'Basic',
            description: 'A simple plan with essential features',
            benefits: [
                'Access to basic features',
                'Limited support',
                'Mobile optimization',
                'Monthly analytics report',
            ],
            amount: 9.99,
            priceId: 'price_1P2AfnLpDrbMD4BSCllmJwQA',
        },
        {
            title: 'Standard',
            description: 'A balanced plan with more features',
            benefits: [
                'Access to standard features',
                'Priority support',
                'Advanced SEO optimization',
                'Quarterly analytics report',
            ],
            amount: 19.99,
            priceId: 'price_1P2AgLLpDrbMD4BSElK1ksr1',
        },
        {
            title: 'Premium',
            description: 'The ultimate plan with all features',
            benefits: [
                'Access to premium features',
                '24/7 priority support',
                'Custom design',
                'Bi-weekly analytics report',
            ],
            amount: 29.99,
            priceId: 'price_1P2AggLpDrbMD4BS3KAvsIkS',
        },
    ]
    return (
        <div className="flex flex-wrap justify-center dark:bg-background">
            {pricingOptions.map((option, index) => (
                <div
                    key={index}
                    className=" max-w-sm rounded overflow-hidden shadow-lg m-4 bg-background dark:bg-accent"
                >
                    <div className="flex flex-col items-center px-6 py-4 ">
                        <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
                            {option.title}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-base">
                            {option.description}
                        </p>
                        <ul className="mt-2">
                            {option.benefits.map((benefit, i) => (
                                <li
                                    key={i}
                                    className="flex gap-2 items-center text-sm text-gray-700 dark:text-gray-300"
                                >
                                    <Check className="text-green-500 h-4 w-4" />
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-700 dark:text-gray-300 text-base mt-4">
                            <span className="text-2xl font-bold ">
                                ${option.amount}
                            </span>
                            /month
                        </p>
                        <Checkout priceId={option.priceId} />
                    </div>
                </div>
            ))}
        </div>
    )
}
