import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Page() {
    return (
        <div className='flex justify-center items-center h-full w-full'>
            < UserProfile />
        </div >
    )
}

export default Page
