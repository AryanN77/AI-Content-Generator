import { Input } from '@/components/ui/input'
import { UserButton } from '@clerk/nextjs'
import { SearchIcon } from 'lucide-react'
import React from 'react'

function Header() {

    return (
        <div className='flex items-center justify-between p-3 w-full shadow-sm border-b-2 bg-white'>
            <div className="flex gap-2 items-center p-2 border rounded-md max-w-md">
                <SearchIcon className='cursor-pointer' />
                <Input type='text' placeholder='Search...' className='' />
            </div>
            <div className="">
                <UserButton />
            </div>
        </div>
    )
}

export default Header
