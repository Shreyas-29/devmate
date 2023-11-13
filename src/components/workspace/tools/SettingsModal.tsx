"use client";

import { Button } from '@/components/ui/Button';
import { Switch } from '@/components/ui/Switch';
import { settings } from '@/constants';
import { cn } from '@/lib/utils';
import { ChevronDown, Layout } from 'lucide-react';
import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu"
import { useRouter } from 'next/navigation';
import { cursorBlinkingStore, useFontSizeStore } from '@/store';
import { Cursor } from '@/types/cursor';


interface Props {

}

type Setting = "layout" | "editor" | "shortcuts";

const fontSizes = [12, 13, 14, 15, 16, 17, 18, 19, 20];

const cursorBlinking = ["expand", "smooth", "solid", "blink"];

const tabSizes = [2, 4, 8];

const SettingsModal: React.FC<Props> = () => {

    const router = useRouter();

    const { fontSize, setFontSize } = useFontSizeStore();

    const { cursor, setCursor } = cursorBlinkingStore();

    const [selectedSetting, setSelectedSetting] = useState<Setting>("layout");
    // const [keyBinding, setKeyBinding] = useState<string>(cursorBlinking[0]);
    const [tabSize, setTabSize] = useState<number>(tabSizes[1]);

    const handleChnageSettings = (setting: Setting) => {
        setSelectedSetting(setting);
    };


    return (
        <div className="w-full grid grid-cols-12 relative h-[350px]">
            <div className="flex flex-col items-start w-full col-span-4">
                <h4 className="font-semibold text-primary">Settings</h4>
                <div className="mt-4 space-y-2">
                    {settings?.map((setting) => (
                        <Button
                            key={setting.title}
                            variant={selectedSetting === setting.setting ? "default" : "ghost"}
                            onClick={() => handleChnageSettings(setting.setting as Setting)}
                            className={cn(
                                "flex items-center justify-start w-full gap-2 text-left transition-colors duration-500 ease-in-out",
                                selectedSetting === setting.setting ? "text-primary-foreground" : "text-primary"
                            )}
                        >
                            <setting.Icon className={cn(
                                "w-4 h-4",
                                selectedSetting === setting.setting ? "text-primary-foreground" : "text-primary"
                            )} />
                            <span>
                                {setting.title}
                            </span>
                        </Button>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-start w-full max-h-full col-span-8 pl-4 mt-12 overflow-y-scroll border-l scrollbar-hide border-border">
                {selectedSetting === 'layout' && (
                    <div className="relative flex flex-col items-center w-full">
                        <ul className="flex flex-col items-center w-full space-y-4">
                            <li className="flex items-center justify-between w-full">
                                <span className="text-sm font-medium text-text">
                                    Default Layout
                                </span>
                                <Button variant="subtle" size="xs" className="text-xs" onClick={() => router.refresh()}>
                                    Reset
                                </Button>
                            </li>
                            <li className="flex items-center justify-between w-full">
                                <span className="text-sm font-medium text-text">
                                    <label htmlFor="real-time-layout">
                                        Real Time Layout
                                    </label>
                                </span>
                                <Switch id="real-time-layout" />
                            </li>
                            <li className="flex items-center justify-between w-full">
                                <span className="text-sm font-medium text-text">
                                    Open new tabs
                                </span>
                                <Button variant="subtle" size="xs" className="text-xs">
                                    Only in active tab
                                </Button>
                            </li>
                        </ul>
                    </div>
                )}
                {selectedSetting === 'editor' && (
                    <div className="relative flex flex-col items-center w-full">
                        <ul className="flex flex-col items-center w-full space-y-4">
                            <li className="flex items-center justify-between w-full">
                                <DropdownMenu>
                                    <span className="text-sm font-medium text-text">Font Size</span>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="subtle" size="xs">
                                            <span className="text-xs font-medium text-text">{fontSize}px</span>
                                            <ChevronDown className="w-3 h-3 ml-1 text-text" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="max-w-max">
                                        {fontSizes.map((size, index) => (
                                            <DropdownMenuItem
                                                key={index}
                                                onSelect={() => setFontSize(size)} // Update the font size when selected
                                            >
                                                {size}px
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                            <li className="flex items-center justify-between w-full">
                                <DropdownMenu>
                                    <span className="text-sm font-medium text-text">
                                        Cursor Style
                                    </span>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="subtle" size="xs">
                                            <span className="text-xs font-medium text-text">
                                                {cursor}
                                            </span>
                                            <ChevronDown className="w-3 h-3 ml-1 text-text" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="max-w-max">
                                        {cursorBlinking?.map((cursor, index) => (
                                            <DropdownMenuItem
                                                key={index}
                                                onSelect={() => setCursor(cursor)}
                                            >
                                                {cursor}
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                            <li className="flex items-center justify-between w-full">
                                <DropdownMenu>
                                    <span className="text-sm font-medium text-text">
                                        Tab Size
                                    </span>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="subtle" size="xs">
                                            <span className="text-xs font-medium text-text">
                                                {tabSize} spaces
                                            </span>
                                            <ChevronDown className="w-3 h-3 ml-1 text-text" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="max-w-max">
                                        {tabSizes?.map((tab, index) => (
                                            <DropdownMenuItem
                                                key={index}
                                                onSelect={() => setTabSize(tab)}
                                            >
                                                {tab} spaces
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                        </ul>
                    </div>
                )}
                {selectedSetting === 'shortcuts' && (
                    <div className="relative flex flex-col items-center w-full">
                        <ul className="flex flex-col items-center w-full space-y-4">
                            <li className="flex items-center justify-between w-full">
                                <span className="text-sm font-medium text-text">
                                    Run Code
                                </span>
                                <div className="flex items-center gap-1">
                                    <span className="key">
                                        Ctrl
                                    </span>
                                    <span className="key">
                                        &apos;
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between w-full">
                                <span className="text-sm font-medium text-text">
                                    Sumbit
                                </span>
                                <div className="flex items-center gap-1">
                                    <span className="key">
                                        Ctrl
                                    </span>
                                    <span className="key">
                                        Enter
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between w-full">
                                <span className="text-sm font-medium text-text">
                                    Close Tab
                                </span>
                                <div className="flex items-center gap-1">
                                    <span className="key">
                                        Ctrl
                                    </span>
                                    <span className="key">
                                        W
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between w-full">
                                <span className="text-sm font-medium text-text">
                                    Maximize Tab
                                </span>
                                <div className="flex items-center gap-1">
                                    <span className="key">
                                        Alt
                                    </span>
                                    <span className="key">
                                        +
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between w-full">
                                <span className="text-sm font-medium text-text">
                                    Start Debugging
                                </span>
                                <div className="flex items-center gap-1">
                                    <span className="key">
                                        Ctrl
                                    </span>
                                    <span className="key">
                                        Alt
                                    </span>
                                    <span className="key">
                                        &apos;
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between w-full">
                                <span className="text-sm font-medium text-text">
                                    Stop Debugging
                                </span>
                                <div className="flex items-center gap-1">
                                    <span className="key">
                                        Esc
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between w-full">
                                <span className="text-sm font-medium text-text">
                                    To Indent One Level
                                </span>
                                <div className="flex items-center gap-1">
                                    <span className="key">
                                        Tab
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between w-full">
                                <span className="text-sm font-medium text-text">
                                    Undo
                                </span>
                                <div className="flex items-center gap-1">
                                    <span className="key">
                                        Ctrl
                                    </span>
                                    <span className="key">
                                        Z
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between w-full">
                                <span className="text-sm font-medium text-text">
                                    Redo
                                </span>
                                <div className="flex items-center gap-1">
                                    <span className="key">
                                        Ctrl
                                    </span>
                                    <span className="key">
                                        Shift
                                    </span>
                                    <span className="key">
                                        Z
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SettingsModal
