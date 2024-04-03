import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export default function Profile() {
  return (
    <Link href={"/auth"}>
        <Button variant={"ghost"}>

            Sign In

        </Button>
    </Link>
  )
}
