"use client";

import { columns } from '@/constants';
import React from 'react';
import ProblemTable from './ProblemTable';
import { Problem } from '@/types/problems';

interface Props {
    data: Problem[];
}

const DataTable: React.FC<Props> = ({ data }) => {

    return (
        <ProblemTable columns={columns} data={data} />
    )
}

export default DataTable
