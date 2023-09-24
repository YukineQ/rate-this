"use client"

import React from "react"
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from "react-hot-toast";
import { ErrorBoundary } from "react-error-boundary";
import { Button } from "@/components/Elements/Button";
import { ThemeProvider } from 'next-themes'

const ErrorFallback = () => {
    return (
        <div className='flex flex-col h-full items-center justify-center gap-8'>
            <h1 className='text-5xl font-bold tracking-tight'>Something went wrong!</h1>
            <Button className="w-fit" size='lg' onClick={() => window.location.assign(window.location.href)}>Refresh</Button>
        </div>
    )
}

type AppProviderProps = {
    children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
    const [queryClient] = React.useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                retry: 0
            }
        }
    }));

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools />
                <Toaster />
                <SessionProvider>
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </SessionProvider>
            </QueryClientProvider>
        </ErrorBoundary>
    )
}