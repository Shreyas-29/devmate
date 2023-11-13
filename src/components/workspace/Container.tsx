"use client";

import React, { useState } from 'react'
import { Toolbar, Workspace } from '..';
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/server';
import { Problem } from '@/types/problems';

interface Props {
    problems: Problem[];
    user: KindeUser;
}

const Container: React.FC<Props> = ({ problems, user }) => {

    const [splitSizes, setSplitSizes] = useState<number[]>([50, 50]);
    const [innerSplitSizes, setInnerSplitSizes] = useState<number[]>([60, 40]);

    const resetSplitPosition = () => {
        setSplitSizes([50, 50]);
    };

    const resetInnerSplitPosition = () => {
        setInnerSplitSizes([60, 40]);
    };

    const handleDrag = (sizes: number[]) => {
        setSplitSizes(sizes);
    };

    const handleInnerDrag = (sizes: number[]) => {
        setInnerSplitSizes(sizes);
    };

    return (
        <>
            <Toolbar
                user={user}
                problems={problems}
                resetSplitPosition={resetSplitPosition}
                resetInnerSplitPosition={resetInnerSplitPosition}
            />
            <Workspace
                user={user}
                splitSizes={splitSizes}
                innerSplitSizes={innerSplitSizes}
                handleDrag={handleDrag}
                handleInnerDrag={handleInnerDrag}
            />
        </>
    )
}

export default Container
