"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/Dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/DropdownMenu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip"
import { cn } from '@/lib/utils'
import { Problem } from '@/types/problems'
import { KindeUser, LoginLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { ChevronLeft, ChevronRight, File, LayoutPanelLeft, PanelLeftOpen, Settings, Shuffle, Timer } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LayoutPanel, LeftPanel, SettingsModal } from '../..'
import { Button, buttonVariants } from '../../ui/Button'


interface Props {
    user: KindeUser;
    problems: Problem[];
    resetSplitPosition: () => void;
    resetInnerSplitPosition: () => void;
}

const Toolbar: React.FC<Props> = ({ user, problems, resetSplitPosition, resetInnerSplitPosition }) => {

    // const randomProblem = problems[Math.floor(Math.random() * problems?.length)];

    const getRandomProblem = () => {
        if (problems?.length > 0) {
            const randomIndex = Math.floor(Math.random() * problems.length);

            return problems[randomIndex];
        }

        return null;
    };

    const randomProblem = getRandomProblem();

    const handleResize = () => {
        resetSplitPosition();
        resetInnerSplitPosition();
    };

    return (
        <nav className="sticky inset-x-0 top-0 flex items-center w-full z-[100]">
            <div className="relative flex items-center justify-between w-full px-2 py-2 lg:px-4">

                {/* Left tools */}
                <div className="flex items-center gap-4">
                    <div className="logo">
                        <Link href="/problems/all">
                            <Image src="/logo.svg" alt="logo" width={40} height={40} className="w-8 h-8" />
                        </Link>
                    </div>
                    <Sheet>
                        <div className="flex items-center gap-1">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <SheetTrigger asChild>
                                            <Button size="xs" variant="subtle" className="px-3">
                                                <PanelLeftOpen className="w-4 h-4" />
                                                <span className="ml-1 text-xs font-medium">
                                                    Problem List
                                                </span>
                                            </Button>
                                        </SheetTrigger>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Open Problem List
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button size="iconSm" variant="subtle">
                                            <ChevronLeft className="w-4 h-4" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Prev Question
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button size="iconSm" variant="subtle">
                                            <ChevronRight className="w-4 h-4" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Next Question
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={`/problem/${randomProblem?.slug}`}
                                            className={cn(buttonVariants({ variant: "subtle", size: "iconSm" }))}
                                        >
                                            <Shuffle className="w-4 h-4" />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Random Question
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <SheetContent side="left" className="max-h-full pb-4 overflow-y-scroll lg:max-w-md scrollbar-hide">
                                <LeftPanel problems={problems} />
                            </SheetContent>
                        </div>
                    </Sheet>
                </div>

                {/* Middle tools */}
                <div className="absolute top-0 flex items-center justify-center gap-4 py-2 -translate-x-1/2 left-1/2">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button size="iconSm" variant="subtle">
                                    <Timer className="w-4 h-4" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                Start Timer
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button size="iconSm" variant="subtle">
                                    <File className="w-4 h-4" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                Notes
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

                {/* Right tools */}
                <div className="flex items-center gap-4">
                    <DropdownMenu>
                        <TooltipProvider>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <DropdownMenuTrigger asChild>
                                        <Button size="iconSm" variant="subtle">
                                            <LayoutPanelLeft className="w-4 h-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                </TooltipTrigger>
                                <TooltipContent className="w-full max-w-xs !rounded-lg">
                                    Layouts
                                </TooltipContent>
                            </Tooltip>

                            <DropdownMenuContent>
                                <LayoutPanel handleResize={handleResize} />
                            </DropdownMenuContent>

                            <Dialog>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <DialogTrigger asChild>
                                            <Button size="iconSm" variant="subtle">
                                                <Settings className="w-4 h-4" />
                                            </Button>
                                        </DialogTrigger>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Settings
                                    </TooltipContent>
                                </Tooltip>

                                <DialogContent className="w-full max-w-2xl">
                                    <SettingsModal />
                                </DialogContent>
                            </Dialog>

                            {user ? (
                                <Tooltip>
                                    <TooltipTrigger asChild className="cursor-pointer">
                                        <Link href="/dashboard">
                                            <Image src={user?.picture!} alt="U" width={32} height={32} className="w-8 h-8 rounded-full" />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        {user?.family_name || user?.given_name}
                                    </TooltipContent>
                                </Tooltip>
                            ) : (
                                <LoginLink className={cn(buttonVariants({ size: "sm" }))}>
                                    Sign In
                                </LoginLink>
                            )}

                        </TooltipProvider>

                    </DropdownMenu>
                    <Button variant="subtle" size="sm">
                        Upgrade to Pro
                    </Button>
                </div>

            </div>
        </nav>
    )
}

export default Toolbar
// ambulance, the november man, shooter, upgrade, mad max