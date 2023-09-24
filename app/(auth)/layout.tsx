"use client"

import { LuCommand } from 'react-icons/lu'

import { SocialAuthButtons } from '@/features/auth/components'
import { Link } from '@/components/Elements/Link'
import { ToggleTheme } from '@/components/ToggleTheme'

export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-full h-full flex items-center justify-center bg-primary">
            <div className="container h-full max-w-6xl lg:px-10 px-4 py-10">
                <div className="relative w-full h-full md:border rounded-lg md:shadow border-border overflow-hidden">
                    <div className="md:grid grid-cols-2 h-full">
                        <div className="bg-zinc-900 hidden md:flex">
                            <div className="relative p-10 flex flex-col h-full">
                                <div className='text-white flex items-center justify-start gap-2 font-semibold'>
                                    <LuCommand size={26} />
                                    <Link className='underline underline-offset-4 text-xl text-white' href='/'>Rate this</Link>
                                </div>
                                <div className='relative mt-auto'>
                                    <blockquote>
                                        <p className='text-md text-white'>
                                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.“
                                        </p> 
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className='h-full flex items-center justify-center bg-primary'>
                            <div className='inline-flex absolute right-8 top-8'>
                                <ToggleTheme />
                            </div>
                            <div className='w-full h-full flex items-center justify-center'>
                                <div className='flex flex-col gap-5 max-w-[350px] w-full'>
                                    <div>
                                        <h1 className='text-4xl font-bold trackin-tight'>Hi there</h1>
                                        <p className='text-muted-foreground text-sm'>Welcome to Rate this. Community Dashboard</p>
                                    </div>
                                    <section className='space-y-2'>
                                        {children}
                                    </section>
                                    <div className='relative'>
                                        <div className='absolute inset-0 flex items-center'>
                                            <span className='w-full border-t border-border'></span>
                                        </div>
                                        <div className='relative flex items-center justify-center'>
                                            <span className='bg-primary text-muted-foreground px-2 uppercase text-xs font-medium'>Or continue with</span>
                                        </div>
                                    </div>
                                    <SocialAuthButtons />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}