"use client";

import { cn } from '@/lib/utils';
import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/Tooltip"
import { CheckSquare, ChevronDown, Code, CheckSquare2 } from 'lucide-react';
import Image from 'next/image';
import { Problem } from '@/types/problems';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useActiveTestCaseIdStore, useResultStore } from '@/store';

interface Props {
    problem: Problem;
}

type Tabs = "testcases" | "results";

const Console: React.FC<Props> = ({ problem }) => {

    const { activeTestCaseId, setActiveTestCaseId } = useActiveTestCaseIdStore();

    const { result } = useResultStore();

    const [tabs, setTabs] = useState<Tabs>("testcases");

    return (
        <div className={cn(
            "rounded-md border flex flex-col items-center justify-start relative max-h-full overflow-hidden border-zinc-700 w-full h-[calc(40%-2px)] bg-[#1e1e1e]",
        )}>

            {/* Options */}
            <nav className='flex w-full rounded-t-[6.6px] space-x-1 mb-2 items-start bg-neutral-800 border-b border-border select-none'>
                <div
                    className={cn(
                        "px-2 py-1 rounded active:scale-95 transition-all transform hover:bg-zinc-700/80 text-xs font-medium text-zinc-50 ease-out flex items-center gap-1 cursor-pointer m-0.5",
                        tabs === "results" && "opacity-50"
                    )}
                    onClick={() => setTabs("testcases")}
                >
                    <Image src="/icons/check-square-2.svg" alt="✅" width={50} height={50} className="object-cover w-4 h-4" />
                    Testcase
                </div>
                <div
                    className={cn(
                        "px-2 py-1 rounded active:scale-95 transition-all transform hover:bg-zinc-700/80 text-xs font-medium text-zinc-50 ease-out flex items-center gap-1 cursor-pointer m-0.5",
                        tabs === "testcases" && "opacity-50"
                    )}
                    onClick={() => setTabs("results")}
                >
                    <Image src="/icons/terminal.svg" alt="🧑‍💻" width={50} height={50} className="object-cover w-4 h-4" />
                    Test Results
                </div>
            </nav>

            {/* Testcases */}
            {tabs === "testcases" ? (
                <div className="flex flex-col items-start w-full">
                    <div className="flex items-start w-full p-2 space-x-3">
                        {problem?.examples?.map((example, index) => (
                            <Button
                                key={example.id}
                                size="sm"
                                variant={activeTestCaseId === index ? "secondary" : "ghost"}
                                onClick={() => setActiveTestCaseId(index)}
                                className="transition-colors duration-500 ease-out"
                            >
                                Case {index + 1}
                            </Button>
                        ))}
                    </div>

                    <div className="flex flex-col items-start w-full p-2 space-y-4">
                        <div className="flex flex-col w-full space-y-2">
                            <span className="text-sm text-muted-foreground text-start">
                                Input:
                            </span>
                            {/* <Input
                        readOnly
                        className="w-full ring-0"
                        placeholder={problem?.examples?.[activeTestCaseId]?.inputText}
                    /> */}
                            <div className="flex items-start w-full px-4 py-2 text-sm border rounded-md code border-border text-secondary-foreground">
                                {problem?.examples?.[activeTestCaseId]?.inputText}
                            </div>
                        </div>
                        <div className="flex flex-col w-full space-y-2">
                            <span className="text-sm text-muted-foreground text-start">
                                Output:
                            </span>
                            <div className="flex items-start w-full px-4 py-2 text-sm border rounded-md code border-border text-secondary-foreground">
                                {problem?.examples?.[activeTestCaseId]?.outputText}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-start w-full p-2">
                    {result ? (

                        <p className="w-full text-sm truncate text-muted-foreground text-start">
                            {result}
                        </p>
                    ) : (
                        <p className="w-full mx-auto text-sm text-center truncate mt-28 text-muted-foreground">
                            You must run the code to see the results.
                        </p>
                    )}
                </div>
            )}

        </div>
    )
}

export default Console
