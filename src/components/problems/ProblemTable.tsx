"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/Table"
import { cn } from "@/lib/utils"
import { CheckCircle, Circle } from "lucide-react"
import Link from "next/link"
import { useProblemStore } from '@/store';
import { useState } from "react"

interface ProblemTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export default function ProblemTable<TData, TValue>({
    columns,
    data,
}: ProblemTableProps<TData, TValue>) {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const getDifficultyClass = (difficulty: string) => {
        if (difficulty === "Easy") {
            return "text-green-500";
        } else if (difficulty === "Medium") {
            return "text-yellow-500";
        } else if (difficulty === "Hard") {
            return "text-red-500";
        }
        return "";
    };

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full rounded-md">
                <Table>
                    <TableHeader className="w-full">
                        {table?.getHeaderGroups()?.map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers?.map((header) => {
                                    return (
                                        <TableHead key={header.id} className="text-accent-foreground">
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
                    <TableBody className="overflow-x-scroll scrollbar-hide">
                        {table?.getRowModel()?.rows?.length ? (
                            table?.getRowModel()?.rows?.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >

                                    {row?.getVisibleCells()?.map((cell, index) => {

                                        const isTitle = cell.column.id === "title";
                                        const isStatusColumn = cell.column.id === "status";

                                        const isLastColumn = index === row.getVisibleCells().length - 1;
                                        const className = isLastColumn && cell.column.id === "difficulty"
                                            // @ts-ignore
                                            ? getDifficultyClass(row.original.difficulty)
                                            : "text-zinc-500";

                                        // {/* @ts-ignore */ }
                                        // console.log("row", row.original?.title?.toLowerCase()?.replace(/ /g, "-"));
                                        if (isTitle) {
                                            return (
                                                <TableCell key={cell.id}>
                                                    <Link
                                                        // @ts-ignore
                                                        href={`/problem/${row.original?.slug}`}
                                                        // @ts-ignore
                                                        className="font-medium hover:text-blue-600 text-slate-300"
                                                    >
                                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                    </Link>
                                                </TableCell>
                                            )
                                        }

                                        if (isStatusColumn) {
                                            // @ts-ignore
                                            const status = row.original.status;

                                            let statusIcon;
                                            if (status === "Solved") {
                                                statusIcon = <CheckCircle className="w-4 h-4 text-emerald-500" />;
                                            } else if (status === "Todo") {
                                                statusIcon = null;
                                            } else {
                                                statusIcon = null;
                                            }

                                            return (
                                                <TableCell key={cell.id}>
                                                    {statusIcon}
                                                </TableCell>
                                            );
                                        }
                                        else {
                                            return (
                                                <TableCell key={cell.id} className={className}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </TableCell>
                                            );
                                        }
                                    })}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

// export default ProblemTable;