import { Button } from '@/components/ui/Button'
import { HelpCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip"
import { toast } from '@/hooks/use-toast'

interface Props {
    handleResize: () => void
}

const LayoutPanel: React.FC<Props> = ({ handleResize }) => {

    const changeLayout = () => {
        handleResize();
        toast({
            description: "Layout changed successfully",
        })
    };

    return (
        <div className="flex flex-col items-start w-full px-5 py-4">
            <div className="flex items-center justify-start flex-1 mt-1">
                <h4 className="font-semibold text-zinc-100 text-start">
                    Layouts
                </h4>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild className="cursor-pointer">
                            <HelpCircle className="w-3 h-3 ml-2 text-zinc-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                            Manage your all custom layouts here
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 mt-4">
                <div className="relative flex flex-col items-start w-full gap-2 transition-all hover:opacity-90 group">
                    <div className="relative flex items-center justify-center h-[120px] w-[150px]">
                        <Image src="/images/default.svg" alt="layout" width={50} height={50} className="object-contain w-full h-full" />
                        <div className="absolute flex items-center justify-center w-full -translate-x-1/2 -translate-y-1/2 opacity-0 left-1/2 top-1/2 group-hover:opacity-100">
                            <Button variant="default" size="sm" className="mx-auto w-max" onClick={changeLayout}>
                                Apply
                            </Button>
                        </div>
                    </div>
                    <span className="text-sm font-medium text-zinc-500">
                        Default
                    </span>
                </div>
                <div className="relative flex flex-col items-start w-full gap-2 transition-all hover:opacity-90 group">
                    <div className="relative flex items-center justify-center h-[120px] w-[150px]">
                        <Image src="/images/notes.svg" alt="layout" width={50} height={50} className="object-contain w-full h-full" />
                        <div className="absolute flex flex-col items-center w-full gap-1 px-2 pt-2 -translate-x-1/2 -translate-y-1/2 opacity-0 left-1/2 top-1/2 group-hover:opacity-100">
                            <span className="text-xs text-center text-zinc-500">
                                Upgrade to pro to use this layout
                            </span>
                            <Button variant="default" size="sm" className="w-max">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                    <span className="text-sm font-medium text-zinc-500">
                        Notes Taking
                    </span>

                </div>
            </div>
        </div >
    )
}

export default LayoutPanel
