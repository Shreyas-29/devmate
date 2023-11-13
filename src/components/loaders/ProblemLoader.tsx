"use client";

import { Problem } from '@/types/problems';
import {
    flexRender,
    getCoreRowModel,
    useReactTable
} from "@tanstack/react-table";
import { FC } from 'react';

import {
    Table,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/Table";
import { columns } from '@/constants';


interface ProblemLoaderProps {
    data: Problem[];
}

const ProblemLoader: FC<ProblemLoaderProps> = ({
    data
}) => {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="w-full">
            <Table>
                <TableHeader className="w-full">
                    {table?.getHeaderGroups()?.map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers?.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
            </Table>
            {data?.map((item) => (
                <div key={item.id} className="grid w-full grid-cols-1 gap-8 py-4 lg:grid-cols-12">
                    <div className="col-span-1">
                        <div className="w-8 h-8 rounded-full skeleton opacity-90"></div>
                    </div>
                    <div className="col-span-7 lg:pl-5">
                        <div className="w-full h-8 rounded-lg skeleton opacity-90"></div>
                    </div>
                    <div className="col-span-2 lg:pl-4">
                        <div className="w-16 h-8 rounded-lg skeleton opacity-90"></div>
                    </div>
                    <div className="col-span-2">
                        <div className="w-16 h-8 rounded-lg skeleton opacity-90"></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProblemLoader
