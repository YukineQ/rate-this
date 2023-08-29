import React from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { BsChevronDown, BsChevronUp, BsCheckLg } from 'react-icons/bs'
import { Avatar } from '../Avatar';

type Option = {
    label: React.ReactNode;
    value: any;
    imageUrl?: string | undefined;
}

type SelectProps = {
    options: Option[];
    defaultValue?: Option;
}

export const Select = (props: SelectProps) => {
    const { options, defaultValue } = props

    const [selected, setSelected] = React.useState<Option>(defaultValue || options[0])

    return (
        <>
            <Listbox value={selected} onChange={setSelected}>
                <div className='relative mt-1 w-[200px]'>
                    <Listbox.Button className='w-full relative hover:bg-zinc-50 rounded-md transition cursor-pointer border shadow-sm shadow-slate-200'>
                        <div className='flex justify-between items-center px-4 py-2 h-[33px]'>
                            <span className='text-sm font-medium'>{selected.label}</span>
                            <div>
                                <BsChevronUp size={8} />
                                <BsChevronDown size={8} />
                            </div>
                        </div>
                    </Listbox.Button>
                    <Transition
                        as={React.Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Listbox.Options className="absolute w-full mt-1 max-h-60 overflow-auto rounded-md bg-transparent py-1 text-base ring-1 focus:outline-none sm:text-sm border shadow-sm shadow-slate-200 ring-zinc-50">
                            <div className='flex flex-col w-full h-full px-1'>
                                {options.map((option, idx) => (
                                    // active
                                    <Listbox.Option
                                        className="flex py-1 px-2.5 cursor-pointer rounded transition"
                                        key={idx}
                                        value={option}
                                    >
                                        <div className='flex w-full py-[1px] gap-2.5 items-center'>
                                            <>
                                                {option.imageUrl && (
                                                    <Avatar size='xs' url={option.imageUrl} />
                                                )}
                                                <span className='text-sm'>
                                                    {option.label}
                                                </span>
                                            </>
                                        </div>
                                    </Listbox.Option>
                                ))}
                            </div>
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </>
    )
}