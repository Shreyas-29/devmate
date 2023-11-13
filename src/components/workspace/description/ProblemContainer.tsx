"use client";

import { Archive, BookOpen, Code, Database, FileText, FlaskConical, History, Keyboard, Layout } from "lucide-react";
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useRef } from 'react'
import Description from "./Description";
import Editorial from "./Editorial";
import Submissions from "./Submissions";
import Solutions from "./Solutions";
import { problems } from "@/lib/problems";

interface Props {

}

const ProblemContainer: React.FC<Props> = () => {

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

    const activeTab = problemTabs?.find((tab) => tab.href === pathname);

    const problem = problems[path];

    const tabToComponentMap = {
        [`/problem/${path}`]: <Description problem={problem} />,
        [`/problem/${path}/editorial`]: <Editorial />,
        [`/problem/${path}/submissions`]: <Submissions />,
        [`/problem/${path}/solutions`]: <Solutions />,
    };

    const activeComponent = tabToComponentMap[pathname];

    return (
        <div className="relative flex flex-col h-full max-h-full overflow-hidden border rounded-md border-zinc-700 bg- bg-zinc-900 w-[calc(50%-2px)]">
            <nav className='flex w-full p-0.5 gap-0.5 rounded-t-[6.6px] items-center bg-neutral-800 justify-start border-b border-border sticky top-0 left-0'>
                {problemTabs?.map((tab) => (
                    <Link
                        key={tab.id}
                        href={tab.href}
                        className={cn(
                            "px-2 py-1 rounded active:scale-95 transition-all transform hover:bg-zinc-700/80 text-xs font-medium text-zinc-50 ease-out flex items-center gap-1",
                            pathname !== tab.href && "opacity-50"
                            // pathname === tab.href && "bg-zinc-700",
                        )}
                    >
                        <tab.icon className={cn(
                            "w-[14px] h-[14px]",
                            tab.color,
                        )} />
                        {tab.title}
                    </Link>
                ))}
            </nav>

            <div className="flex flex-col items-center flex-1 w-full h-full p-4 overflow-y-scroll text-primary">
                {activeComponent}
            </div>
        </div>

    )
}

export default ProblemContainer
