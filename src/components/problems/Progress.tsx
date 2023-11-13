"use client";

import React, { useEffect, useState } from 'react'
import { Calendar } from "@/components/ui/Calendar"
import { HelpCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/Tooltip"

interface Props {

}

const weeks = [{ name: "W1" }, { name: "W2" }, { name: "W3" }, { name: "W4" }, { name: "W5" }];

const Progress: React.FC<Props> = () => {

    const getCurrentWeek = () => {
        const currentDate = new Date();
        const weekNumber = Math.ceil(currentDate.getDate() / 7);
        return weekNumber;
    };

    const [date, setDate] = useState<Date | undefined>(new Date());
    const [currentWeek, setCurrentWeek] = useState(getCurrentWeek());


    useEffect(() => {
        setCurrentWeek(getCurrentWeek());
    }, []);

    return (
        <div className="flex flex-col items-center w-full border border-border rounded-xl">
            <div className="flex items-center w-full p-4">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="w-96"
                />
            </div>
            <div className="flex w-full p-4">
                <div className="w-full p-3 border rounded-lg border-border">
                    <h4 className="flex items-center font-semibold text-zinc-500">
                        Weekly Subscriptions
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <HelpCircle className="w-4 h-4 ml-2" />
                                </TooltipTrigger>
                                <TooltipContent className="max-w-xs">
                                    Subscribe to our pro plan to get access to all the weekly problems
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </h4>
                    <ul className="flex items-center justify-between w-full mt-2">
                        {weeks?.map((week, index) => (
                            <li key={index} className="flex">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                size="icon"
                                                variant={currentWeek === index + 1 ? "default" : "ghost"}
                                                disabled={index + 1 > currentWeek}
                                            >
                                                {week.name}
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent className="max-w-xs">
                                            Upgrade to pro
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Progress
