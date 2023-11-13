"use client";

import { topics } from '@/constants'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/Button';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from "framer-motion";


interface Props {

}

const Topics: React.FC<Props> = () => {

    const pathname = usePathname();

    const router = useRouter();

    const [hoveredPath, setHoveredPath] = useState(pathname);

    const handleClick = (href: string) => {
        setHoveredPath(href);
        router.prefetch(href);
    };


    return (
        <ul className="flex items-center w-full space-x-1">
            {topics?.map((topic, index) => {

                const isActive = pathname.includes(topic.href);

                return (
                    <li key={topic.id}>
                        <Link
                            href={topic.href}
                            data-active={isActive}
                            onMouseEnter={() => setHoveredPath(topic.href)}
                            onMouseLeave={() => setHoveredPath(pathname)}
                            onClick={() => handleClick(topic.href)}
                            className={cn(
                                "flex items-center relative px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out w-full",
                                isActive ? "text-primary-foreground" : "text-muted-foreground",
                                topic.href === hoveredPath ? "text-primary-foreground" : "text-muted-foreground",
                            )}
                        >
                            <topic.Icon className={cn(
                                "w-4 h-4 mr-2 transition-colors duration-700",
                                isActive ? "text-primary-foreground" : "text-muted-foreground",
                                topic.href === hoveredPath ? "text-primary-foreground" : "text-muted-foreground",
                            )} />
                            <span>
                                {topic.title}
                            </span>
                            {topic.href === hoveredPath && (
                                <motion.div
                                    className="absolute bottom-0 left-0 h-full rounded-lg bg-primary -z-10"
                                    layoutId="navbar"
                                    aria-hidden="true"
                                    style={{
                                        width: "100%",
                                    }}
                                    transition={{
                                        type: "spring",
                                        bounce: 0.25,
                                        stiffness: 100,
                                        damping: 15,
                                        duration: 0.3,
                                    }}
                                />
                            )}
                        </Link>
                    </li>
                )
            })}
        </ul >
    )
}

export default Topics
