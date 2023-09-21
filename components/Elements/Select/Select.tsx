import React from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { InputWrapper, InputWrapperPassThroughProps } from '../Input';

type Option = {
    label: React.ReactNode;
    value: string | number;
}

type SelectProps = {
    options: Option[];
    defaultValue?: Option;
    placeholder?: string;
} & InputWrapperPassThroughProps

export const Select = (props: SelectProps) => {
    const { options, defaultValue, label, description, error } = props

    const [selected, setSelected] = React.useState<Option>(defaultValue || options[0])

    return (
        <InputWrapper label={label} description={description} error={error}>
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
                        <Listbox.Options className="absolute w-full mt-1 max-h-60 overflow-auto rounded-md bg-transparent py-1 text-base ring-1 focus:outline-none sm:text-sm border shadow-sm shadow-slate-200 ring-zinc-50 bg-white">
                            <div className='flex flex-col w-full h-full px-1'>
                                {options.map((option, idx) => (
                                    <Listbox.Option
                                        className="flex py-1 px-2.5 cursor-pointer rounded transition hover:bg-zinc-50"
                                        key={idx}
                                        value={option}
                                    >
                                        <div className='flex w-full py-[1px] gap-2.5 items-center'>
                                            <span className='text-sm'>
                                                {option.label}
                                            </span>
                                        </div>
                                    </Listbox.Option>
                                ))}
                            </div>
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </InputWrapper>
    )
}