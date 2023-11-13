"use client";

import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/DropdownMenu";
import { Button } from '../ui/Button';
import { ChevronDown, Search, Settings } from 'lucide-react';
import { Input } from '../ui/Input';
import Image from 'next/image';


interface Props {

}

const Filterbar: React.FC<Props> = () => {
    return (
        <div className="flex flex-wrap items-center justify-between w-full max-w-full gap-4 py-4 md:justify-start">

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="shadow-none">
                        Lists
                        <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        All
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Favorites
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Top Rated
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Most Recent
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="shadow-none">
                        Difficulty
                        <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        Easy
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Medium
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Hard
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="shadow-none">
                        Status
                        <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        Todo
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Done
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        In Progress
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <div className="relative flex flex-1 w-full">
                <div className="relative flex items-center justify-start w-full">
                    <Search className="absolute w-4 h-4 ml-2 text-muted-foreground top-2.5 left-1" />
                    <Input
                        type="text"
                        placeholder="Search for questions..."
                        className="w-full pl-8 shadow-none"
                    />
                </div>
            </div>

            <div className="flex items-center">
                <Button variant="outline" size="icon">
                    <Image src="/icons/settings.svg" alt="S" width={50} height={50} className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}

export default Filterbar
