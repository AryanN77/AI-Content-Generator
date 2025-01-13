"use client"
import React, { useState } from 'react'
import SideBar from './_components/SideBar'
import Header from './_components/Header'
import { Toaster } from '@/components/ui/toaster'

function layout({ children }: { children: React.ReactNode }) {
    const [totalToken, setTotalToken] = useState<number>(0);
    const [updateCreditUsage, setUpdateCreditUsage] = useState<boolean>(false)
    return (

        <div className="bg-gradient-to-r from-gray-200 to-white h-screen">
            <div className="hidden md:block md:w-64 fixed">
                <SideBar />
            </div>
            <div className='md:ml-64'>
                <Header />
                {children}
                <Toaster />
            </div>
        </div>
    )
}

export default layout
