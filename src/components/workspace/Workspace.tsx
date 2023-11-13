"use client";

import React, { useRef, useState } from 'react';
import Split from 'react-split'
import { Playground, ProblemContainer } from '..';
import Confetti from "react-confetti";
import useWindowSize from '@/hooks/use-window-size';
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/server';

interface Props {
    user: KindeUser;
    splitSizes: number[];
    innerSplitSizes: number[];
    handleDrag: (sizes: number[]) => void;
    handleInnerDrag: (sizes: number[]) => void;
}

const Workspace: React.FC<Props> = ({ user, splitSizes, innerSplitSizes, handleDrag, handleInnerDrag }) => {

    const { height, width } = useWindowSize();

    return (
        <div
            className="w-full flex items-center h-[calc(100vh-60px)] px-2"
        >
            <Split
                gutterSize={4}
                minSize={100}
                sizes={splitSizes}
                onDrag={handleDrag}
                className="relative w-full h-full max-h-full overflow-hidden split scrollbar-hide"
            >
                <ProblemContainer />
                <Playground user={user} innerSplitSizes={innerSplitSizes} handleInnerDrag={handleInnerDrag} />
            </Split>
        </div>
    )
}

export default Workspace
