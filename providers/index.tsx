"use client"

import React from "react"
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type AppProviderProps = {
    children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <ErrorBoundary fallback={<>Something went wrong.</>}>
            <QueryClientProvider client={queryClient}>
                    <Toaster />
                    <SessionProvider>
                        {children}
                    </SessionProvider>
            </QueryClientProvider>
        </ErrorBoundary>
    )
}