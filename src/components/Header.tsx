import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button, buttonVariants } from './ui/Button'
import { Icons } from './Icons'
import { UserAccountNav } from '.'
import { cn } from '@/lib/utils'
import { LoginLink, RegisterLink, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu"
import { Badge, Bell } from 'lucide-react'

interface Props {

}

const Header: React.FC<Props> = () => {

    const { getUser } = getKindeServerSession()

    const user = getUser();

    return (
        <header className="sticky inset-x-0 top-0 z-50 w-full h-16 px-4 py-2 border-b bg-black/40 backdrop-blur-lg md:px-6 lg:px-12 xl:px-16 border-zinc-800">
            <div className="flex items-center justify-between w-full h-full">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src="/logo.svg" alt="Add" width={50} height={50} className="object-cover w-8 h-8" />
                        <span className="hidden text-xl font-bold text-zinc-50 md:inline-block">
                            DevMate
                        </span>
                    </Link>
                </div>

                <div className="flex items-center justify-end space-x-4">
                    {/* <ThemeToggle /> */}
                    {user ? (
                        <div className="flex items-center space-x-4">
                            <Button
                                variant="outline" size="icon" className="px-2 shadow-none w-max">
                                <Image src="/icons/streak.svg" alt="Add" width={50} height={50} className="object-cover w-5 h-5 mr-1" />
                                {/* <Badge className='w-5 h-5 mr-1 text-current' /> */}
                                <span className="text-primary">12</span>
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon" className="shadow-none">
                                        <Image src="/icons/notification.svg" alt="Notification" width={50} height={50} className="object-cover w-5 h-5" />
                                        {/* <Bell className='w-5 h-5 text-current' /> */}
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="min-w-[300px]">
                                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <p className="py-2 pl-2 pr-4 text-sm">
                                        You have no new notifications
                                    </p>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <UserAccountNav user={user} />
                        </div>
                    ) : (
                        <div className="flex items-center space-x-4">
                            <LoginLink className={cn(buttonVariants({ variant: "outline", className: "hidden md:inline-flex" }))}>
                                Sign In
                            </LoginLink>
                            <RegisterLink className={cn(buttonVariants({ variant: "default" }))}>
                                Start for free
                            </RegisterLink>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
