"use client";

import { cn } from '@/lib/utils';
import { Problem } from "@/types/problems";
import { BookOpen, FileText, FlaskConical, History, LockKeyhole, Sparkles, Tag } from "lucide-react";
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
    problem: Problem;
}

const Description: React.FC<Props> = ({ problem }) => {

    const pathname = usePathname();

    const path = pathname.split("/")?.[2];

    const problemTabs = [
        {
            id: 1,
            title: "Description",
            href: `/problem/${path}`,
            icon: FileText,
            color: "text-blue-500"
        },
        {
            id: 2,
            title: "Editorial",
            href: `/problem/${path}/editorial`,
            icon: BookOpen,
            color: "text-yellow-500"
        },
        {
            id: 3,
            title: "Solutions",
            href: `/problem/${path}/solutions`,
            icon: FlaskConical,
            color: "text-green-500"
        },
        {
            id: 4,
            title: "Submissions",
            href: `/problem/${path}/submissions`,
            icon: History,
            color: "text-indigo-500"
        }
    ];

    const getDifficultyClass = () => {
        if (problem?.difficulty === "easy") {
            return "text-green-500 bg-green-500/10";
        } else if (problem?.difficulty === "medium") {
            return "text-yellow-500 bg-yellow-500/10";
        } else if (problem?.difficulty === "hard") {
            return "text-red-500 bg-red-500/10";
        }
        return "";
    };

    const className = getDifficultyClass();

    return (
        <div className="flex flex-col items-start flex-1 w-full h-full">
            <div className="flex flex-col items-start w-full mt-2">
                <h2 className="text-2xl font-bold text-primary">
                    {problem?.order}.
                    {" "}
                    {problem?.title}
                </h2>

                {/* Options */}
                <div className="flex items-center w-full mt-4 space-x-4">
                    <span className={cn(
                        "text-xs font-medium rounded-full px-2.5 py-1 hover:opacity-80 capitalize cursor-pointer",
                        className
                    )}>
                        {problem?.difficulty}
                    </span>
                    <span className="text-xs font-medium rounded-full px-2.5 py-1 opacity-80 hover:opacity-100 capitalize cursor-pointer flex items-center gap-0.5 bg-neutral-700 hover:text-zinc-200 text-zinc-300">
                        <Tag className="w-3 h-3 text-current" />
                        Topics
                    </span>
                    <span className="text-xs font-medium rounded-full px-2.5 py-1 opacity-80 hover:opacity-100 capitalize cursor-pointer flex items-center gap-0.5 bg-neutral-700 hover:text-zinc-200 text-zinc-300">
                        <LockKeyhole className="w-3 h-3 text-current" />
                        Hint
                    </span>
                    <span className="text-xs font-medium rounded-full px-2.5 py-1 opacity-80 hover:opacity-100 capitalize cursor-pointer flex items-center gap-0.5 bg-neutral-700 hover:text-zinc-200 text-zinc-300">
                        <Sparkles className="w-3 h-3 text-current" />
                        Ask AI
                    </span>
                </div>

                {/* Problem Statement */}
                <div className="flex w-full mt-4">
                    <p
                        dangerouslySetInnerHTML={{ __html: problem?.problemStatement! }}
                        className="w-full text-justify font-medim tex-sm text-primary"
                    />
                </div>

                {/* Examples */}
                <div className="flex flex-col items-start w-full mt-8">
                    {problem?.examples?.map((example, index) => (
                        <div key={example.id} className="w-full">
                            <p className='font-medium text-primary'>Example {index + 1}: </p>
                            <div className='example-card'>
                                <pre className="pl-4 my-4 text-sm whitespace-pre-wrap border-l-2 text-zinc-400 border-neutral-600">
                                    <strong className="!text-primary mt-1">Input: </strong> {example.inputText}
                                    <br />
                                    <strong className="!text-primary mt-1">Output: </strong> {example.outputText} <br />
                                    {example.explanation && (
                                        <>
                                            <strong className="!text-primary mt-1">Explanation: </strong> {example.explanation}
                                        </>
                                    )}
                                </pre>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Constraints */}
                <div className='pb-4 my-8'>
                    <div className='text-sm font-medium text-primary'>Constraints:</div>
                    <ul className='ml-5 list-disc text-primary'>
                        <div dangerouslySetInnerHTML={{ __html: problem?.constraints! }} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Description
