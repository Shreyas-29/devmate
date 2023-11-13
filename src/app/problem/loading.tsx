import { Loader } from '@/components'
import React from 'react'
import { RaceBy } from '@uiball/loaders'

const Loading = () => {
    return (
        <div className="bg-background z-[100] absolute inset-0 flex flex-col items-center justify-center w-screen h-screen">
            <div className="flex flex-col items-center justify-center w-full">
                <span className="text-sm mb-2 text-primary text-center">
                    Loading...
                </span>
                <div className="race-by"></div>
            </div>
        </div>
    )
}

export default Loading
