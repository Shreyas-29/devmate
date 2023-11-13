"use client";

import React, { useState } from 'react'
import Editor from './Editor'
import Console from './Console'
import Split from 'react-split'
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { problems } from '@/lib/problems';
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/server';

interface Props {
    user: KindeUser;
    innerSplitSizes: number[];
    handleInnerDrag: (sizes: number[]) => void;
}

const Playground: React.FC<Props> = ({ user, innerSplitSizes, handleInnerDrag }) => {

    const pathname = usePathname();

    const slug = pathname.split("/")?.[2];

    const problem = problems[slug];

    const [success, setSuccess] = useState<boolean>(false);
    const [solved, setSolved] = useState<boolean>(false);


    return (
        <div className="relative w-[calc(50%-2px)] h-full rounded-xl">
            <Split
                gutterSize={4}
                minSize={30}
                sizes={innerSplitSizes}
                onDrag={handleInnerDrag}
                direction="vertical"
                className="w-full h-full split-vertical"
            >
                <Editor
                    user={user}
                    problem={problem}
                    success={success}
                    setSuccess={setSuccess}
                    solved={solved}
                    setSolved={setSolved}
                />
                <Console problem={problem} />
            </Split>
        </div>
    )
}

export default Playground
// 3600,86400, 1296000, 86400