import * as React from 'react';
import {
    ColumnDef,
    Header,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { HiOutlineArchiveBoxXMark } from 'react-icons/hi2';
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Button } from '../Button';
import { LuArrowDown, LuArrowUp } from 'react-icons/lu';

const TableHeadButton = <T extends object>({ header }: { header: Header<T, unknown> }) => {
    const title = header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.header, header.getContext())

    if (header.column.columnDef.enableSorting == false) {
        return title
    }

    const DefaultIconState = () => {
        return (
            <div className='flex flex-col items-center justify-center -space-y-1.5'>
                <MdKeyboardArrowDown className="rotate-180" size={12} />
                <MdKeyboardArrowDown size={12} />
            </div>
        )
    }

    const icon = {
        'false': <DefaultIconState />,
        'asc': <LuArrowUp size={15} />,
        'desc': <LuArrowDown size={15} />,
    }[header.column.getIsSorted() as string] ?? <></>

    return (
        <Button
            className='w-fit'
            variant='ghost'
            size='sm'
            endIcon={icon}
            onClick={header.column.getToggleSortingHandler()}
        >
            {title}
        </Button>
    )
}

type TableProps<T extends object> = {
    data: T[];
    columns: ColumnDef<T>[];
}

export const Table = <T extends object>({ data, columns }: TableProps<T>) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    })

    if (!data?.length) {
        return (
            <div className='flex flex-col justify-center items-center text-gray-500 bg-white h-full'>
                <HiOutlineArchiveBoxXMark size={40} />
                <h4 className='text-lg tracking-tight text-gray-500'>
                    No Entries Found
                </h4>
            </div>
        )
    }

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden border border-border rounded-md">
                        <table className="w-full divide-y divide-border">
                            <thead>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => (
                                            <th
                                                key={header.id}
                                                scope="col"
                                                className="px-6 py-2 text-xs font-medium text-left"
                                            >
                                                <TableHeadButton header={header} />
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody>
                                {table.getRowModel().rows.map((row) => (
                                    <tr key={row.id} className="border-b border-border">
                                        {row.getVisibleCells().map((cell) => (
                                            <td
                                                key={cell.id}
                                                className="px-6 py-3 text-sm font-semibold whitespace-nowrap box-border"
                                            >
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}