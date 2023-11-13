import React from 'react'

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-full w-full flex-col space-y-2">
            <div className="w-8 h-8 border-[3.5px] border-border rounded-full animate-spin border-t-primary"></div>
            <p className="text-muted-foreground">Loading...</p>
        </div>
    )
}

export default Loader
