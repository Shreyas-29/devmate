"use client";

import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/Sheet"
import { CheckCircle, ChevronRight, Circle } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Separator } from "@/components/ui/Separator"
import { usePathname } from 'next/navigation';
import { Problem } from '@/types/problems';


interface Props {
    problems: Problem[];
}

const LeftPanel: React.FC<Props> = ({ problems }) => {

    const pathname = usePathname();

    let slug = pathname.split("/")[2];


    return (
        <div className="flex flex-col">
            <SheetHeader className="sticky inset-x-0 py-4 border-b border-border bg-background -top-8">
                <SheetTitle>
                    <Link href="/problems/all" className={cn(buttonVariants({ variant: "link", className: "hover:no-underline -ml-4" }))}>
                        Problem List
                        <ChevronRight className="w-5 h-5 ml-2 text-zinc-700" />
                    </Link>
                </SheetTitle>
            </SheetHeader>
            {/* <Separator /> */}
            <div className="flex flex-col items-start w-full pt-4">
                <div className="space-y-2">
                    <h4 className="font-semibold text-primary">
                        Suggested for you
                    </h4>
                    <p className="text-xs text-muted-foreground">
                        Special questions we picked for you.
                    </p>
                </div>
            </div>
            <ul className="flex flex-col items-start w-full min-h-full mt-4 border rounded-lg border-border">
                {problems?.slice(0, 20)?.map((problem) => (
                    <li
                        key={problem.id}
                        className={cn(
                            "flex items-center justify-between w-full transition-all ease-out border-b cursor-pointer border-border last:border-none first:rounded-t-lg last:rounded-b-lg hover:bg-zinc-800",
                            slug === problem.slug ? "bg-zinc-800" : ""
                        )}
                    >
                        <Link href={`/problem/${problem.slug}`} className="flex w-full p-4">
                            <span className="flex items-center flex-1 gap-3">
                                {problem?.status === "Solved" ? (
                                    <CheckCircle className="w-4 h-4 text-teal-500" />
                                ) : (
                                    <Circle className="w-4 h-4 text-zinc-600" />
                                )}
                                <p className={cn(
                                    "text-sm font-medium truncate",
                                    slug === problem.slug ? "text-blue-600" : "text-zinc-400"
                                )}>
                                    {problem.title.length > 30 ? problem.title.slice(0, 30) + "..." : problem.title}
                                </p>
                            </span>
                            <span className={cn(
                                "text-sm font-medium",
                                problem.difficulty === "Easy" ? "text-green-500" : problem.difficulty === "Medium" ? "text-yellow-500" : "text-red-500"
                            )}>
                                {problem.difficulty}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LeftPanel
