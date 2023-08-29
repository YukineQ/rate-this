"use client"

import React, { useState } from "react"
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type AppProviderProps = {
    children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <ErrorBoundary fallback={<>Something went wrong.</>}>
            <QueryClientProvider client={queryClient}>
                <Hydrate>
                    <Toaster />
                    <SessionProvider>
                        {children}
                    </SessionProvider>
                </Hydrate>
            </QueryClientProvider>
        </ErrorBoundary>
    )
}