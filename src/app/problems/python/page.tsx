import { getAllProblems, getPythonProblems } from '@/actions';
import { DataTable } from '@/components';
import React from 'react';

export default async function Python() {

    const data = await getAllProblems();

    return (
        <div className="flex flex-col items-start w-full h-full pb-4">
            <DataTable data={data} />
        </div>
    )
}
