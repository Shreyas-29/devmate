import React from 'react'
import { Button, buttonVariants } from './ui/Button'
import Image from 'next/image'
import { companies } from '@/constants'
import Link from 'next/link';
import { cn } from '@/lib/utils';


const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center w-full min-h-full px-4 py-20 mx-auto md:py-24 lg:py-24 md:px-8">
            <div className="flex flex-col items-center w-full mx-auto space-y-6 md:max-w-5xl md:space-y-8">
                <div className="mx-auto w-fit button-wrapper">
                    <button className="flex items-center px-5 py-1.5 text-xs text-center rounded-full bg-primary-foreground text-primary w-fit cursor-pointer select-none gap-2 font-medium md:text-sm">
                        Made for Developers
                    </button>
                    <span className="button-bg"></span>
                </div>
                <h1 className="text-3xl font-bold text-center text-primary md:text-4xl lg:text-6xl md:font-extrabold">
                    Master the Future of Coding with AI-Enhanced Challenges
                </h1>
                <p className="text-base text-center md:font-medium text-muted-foreground lg:text-lg">
                    Master coding, one challenge at a time, with our AI-driven practice platform
                </p>
                <div className="flex items-center mx-auto space-x-5">
                    <Link href="/problems/all" className={cn(buttonVariants({ variant: "default" }))}>
                        Join the Challenge
                    </Link>
                    <Link href="/blog" className={cn(buttonVariants({ variant: "secondary" }))}>
                        Learn More
                    </Link>
                </div>
            </div>

            <div>
                <div className='relative overflow-visible isolate'>
                    <div
                        aria-hidden='true'
                        className='absolute inset-x-0 overflow-hidden pointer-events-none -top-40 -z-10 transform-gpu blur-3xl sm:-top-80'>
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                        />
                    </div>

                    <div>
                        <div className='max-w-6xl px-4 mx-auto lg:px-8'>
                            <div className='flow-root mt-16 sm:mt-24'>
                                <div className='p-2 -m-2 rounded-xl bg-zinc-500/50 ring-1 ring-inset ring-zinc-700/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                                    <Image
                                        src='/images/dashboard.svg'
                                        alt='Dashboard'
                                        width={1400}
                                        height={900}
                                        quality={100}
                                        className='p-2 bg-white rounded-md sm:p-8 md:p-20 shadow2xl ring-1 ring-zinc-700/10'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="absolute inset-x-0 z-40 hidden w-full h-32 md:block bg-gradient-to-t from-white to-transparent bottom-28" />
                    <div className="absolute inset-x-0 z-40 hidden w-full h-32 bg-white md:block -bottom-4" /> */}

                    <div
                        aria-hidden='true'
                        className='absolute inset-x-0 overflow-hidden pointer-events-none -top-40 -z-10 transform-gpu blur-3xl sm:-top-80'>
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col flex-wrap items-center justify-center py-8 mx-auto mt-12 space-y-8 md:space-y-14 md:mt-0 md:pt-24">
                <h4 className="font-medium text-center text-secondary-foreground">
                    The go-to platform for top developers from leading companies.
                </h4>
                <div className="flex flex-wrap items-center justify-center max-w-3xl gap-6 mx-auto md:gap-8 lg:gap-x-16">
                    {companies?.map((company) => (
                        <Image key={company.id} src={company.src!} alt={company.name!} width={100} height={100} className="object-cover w-auto h-8 md:h-12" />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Hero
