import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="relative flex flex-col items-center justify-center w-full min-h-full px-4 py-20 mx-auto md:py-24 lg:pb-12 lg:pt-0 md:px-8">
            <div className="w-full p-4 mx-auto max-w-7xl md:pt-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0">
                        <Image src="/logo.svg" className="mr-1 h-9 w-9" alt="Devmate Logo" width={50} height={50} />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary">
                            Devmate
                        </span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-zinc-500 sm:mb-0 dark:text-zinc-400">
                        <li>
                            <a href="#" className="mr-4 hover:text-zinc-700 md:mr-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:text-zinc-700 md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:text-zinc-700 md:mr-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-zinc-700">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-zinc-200 sm:mx-auto dark:border-zinc-700 lg:my-8" />
                <span className="block text-sm text-zinc-500 sm:text-center dark:text-zinc-400">© 2023 <Link href="/" className="hover:underline">Devmate™</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer
