import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({ onSearchInput }: any) {
    return (
        <div className='p-10 bg-gradient-to-b from-[#485461] to-black flex flex-col justify-center items-center text-white gap-2'>
            <h2 className='text-2xl font-semibold tracking-wider'>Browse All Templates</h2>
            <p>What's on your mind today?</p>
            <div className="w-full flex justify-center items-center">
                <div className="w-[40%] flex items-center gap-2 border rounded-md p-2 bg-white ">
                    <Search className='text-black' />
                    <Input type='text' placeholder='Search..' className='text-black' onChange={(e) => { onSearchInput(e.target.value) }} />
                </div>
            </div>
        </div>
    )
}

export default SearchSection
