"use client";

import React, { useEffect } from 'react';
import NextTopLoader from 'nextjs-toploader';
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

const Providers = ({ children, ...props }: ThemeProviderProps) => {

    const { setTheme } = useTheme();

    useEffect(() => {
        setTheme("dark");
    }, [setTheme]);

    return (
        <NextThemesProvider {...props}>
            <NextTopLoader color="#fff" height={2} crawl={true} showSpinner={false} easing="ease" speed={200} shadow="0 0 10px #2299DD,0 0 5px #2299DD" />
            {children}
        </NextThemesProvider>
    )
};

export default Providers;