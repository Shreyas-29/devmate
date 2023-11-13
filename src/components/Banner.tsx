import React from 'react'
import { Button } from './ui/Button'
import Image from 'next/image'

const Banner = () => {
    return (
        <section className="relative flex flex-col items-center justify-center w-full min-h-full px-4 py-20 mx-auto md:py-24 lg:pb-24 lg:pt-0 md:px-8">
            <div className="flex items-center justify-center w-full mx-auto max-w-7xl">
                <div className="flex flex-col items-center justify-between w-full p-8 space-y-5 border md:flex-row bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl border-zinc-700 lg:py-12 text-zinc-50 lg:px-16">
                    <div className="flex flex-col items-center w-full space-y-5 text-center md:items-start md:text-start">
                        <h2 className="text-2xl font-bold lg:text-4xl">
                            Unlock Exclusive Content and Features
                        </h2>
                        <p className="max-w-5xl text-sm lg:text-base text-zinc-300">
                            Subscribe today to access a world of premium coding challenges, personalized feedback, and a thriving developer community
                        </p>
                        <Button>
                            Upgrade Now
                        </Button>
                    </div>
                    <div className="flex items-center justify-center w-full md:justify-end">
                        <Image src="/images/banner.svg" alt="Coding boy" width={500} height={500} className="object-cover w-auto h-56 md:h-72" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner

// , a team, mile 22, horrorlord, jack reacher