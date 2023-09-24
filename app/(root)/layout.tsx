"use client"

import { Button } from "@/components/Elements/Button"
import React, { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LuCommand, LuMenu } from 'react-icons/lu'
import { BiSearch } from 'react-icons/bi'
import { Avatar } from "@/components/Elements/Avatar"
import useUser from "@/lib/currentUser"
import { Dialog, Menu, Transition } from "@headlessui/react"
import { Spinner } from "@/components/Elements/Spinner"
import { Link } from "@/components/Elements/Link"
import { useTheme } from "next-themes"
import { ToggleTheme } from "@/components/ToggleTheme"

// TODO: refactor
const Profile = () => {
    const userQuery = useUser()

    if (userQuery.isLoading) {
        return (
            <div className="py-2 px-1.5">
                <Spinner size="xs" />
            </div>
        )
    }

    if (!userQuery.data) {
        return (
            <div className="flex gap-2">
                <Button size="sm">Sign in</Button>
                <Button size="sm" variant="outline">Sign up</Button>
            </div>
        )
    }

    return (
        <Menu as='div' className='relative pt-1'>
            <Menu.Button>
                <Avatar url={userQuery.data.image ?? undefined} alt="Profile avatar." size="xs" />
            </Menu.Button>
            <Transition
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 border border-border shadow rounded-md w-56 divide-y-1 py-1 bg-primary">
                    <div className="px-1">
                        <Menu.Item>
                            <Link href="/me/reviews">
                                <Button variant="ghost" size="sm" className="justify-start">Reviews</Button>
                            </Link>
                        </Menu.Item>
                    </div>
                    <div className="px-1">
                        <Menu.Item>
                            <Button variant="ghost" size="sm" className="justify-start text-red-500">Logout</Button>
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

type MobileNavProps = {
    navOpen: boolean;
    setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = ({ navOpen, setNavOpen }: MobileNavProps) => {
    return (
        <Transition.Root show={navOpen} as={React.Fragment}>
            <Dialog
                as="div"
                onClose={() => setNavOpen(false)}
                static
                className="fixed inset-0 flex z-40 md:hidden"
            >
                <Transition.Child
                    as={React.Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 backdrop-blur-sm" />
                </Transition.Child>
                <Transition.Child
                    as={React.Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white border-r shadow">
                        <div className="mt-5 flex-1 h-0 overflow-y-auto">
                            <nav className="px-2 space-y-1">
                                <NavItems />
                            </nav>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition.Root>
    )
}

const Header = () => {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <nav className="fixed w-full border-b border-border z-30 bg-primary">
            <div className='mx-auto max-w-6xl'>
                <div className='flex items-center justify-between h-11 md:px-4 px-2'>
                    <div className='h-full flex items-center gap-8'>
                        <div className="flex h-full items-center gap-2">
                            <Button className="flex md:hidden" variant="ghost" startIcon={<LuMenu size={26} />} size="icon" onClick={() => setNavOpen(true)} />
                            <div className='inline-flex items-center justify-center bg-foreground text-primary h-full px-2.5'>
                                <LuCommand size={26} />
                            </div>
                        </div>
                        <div className='hidden md:inline-flex'>
                            <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
                            <NavItems />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <ToggleTheme />
                        <Button startIcon={<BiSearch size={24} />} variant="ghost" size="icon" className="rounded-full" />
                        <Profile />
                    </div>
                </div>
            </div>
        </nav>
    )
}

type SideNavigationItem = {
    label: string;
    to: string;
}

const NavItems = () => {
    const {theme, setTheme} = useTheme()
    const router = useRouter()
    const navagation = useMemo<SideNavigationItem[]>(
        () => [
            { label: 'Dashboard', to: '/' },
            { label: 'Settings', to: '/settings' },
            { label: 'Support', to: '/support' }
        ], [])

    return (
        <>
            {navagation.map((item, index) => (
                <Button
                    key={item.label + index}
                    variant='ghost'
                    className='justify-start'
                    size='md'
                    onClick={() => router.push(item.to)}
                >
                    {item.label}
                </Button>
            ))}
        </>
    )
}

export default function MainLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-full flex flex-col bg-primary">
            <Header />
            <main className="container max-w-6xl mx-auto md:py-10 px-4 md:mt-4 mt-14 flex-1">
                {children}
            </main>
        </div>
    )
}
