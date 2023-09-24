import { Button } from '@/components/Elements/Button'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex flex-col h-full items-center justify-center gap-4'>
            <h1 className='text-5xl font-bold tracking-tight'>OOPS!</h1>
            <h5 className='text-md'>Error 404: Page Not Found</h5>
            <Link href="/">
                <Button size='lg'>Return Home</Button>
            </Link>
        </div>
    )
}