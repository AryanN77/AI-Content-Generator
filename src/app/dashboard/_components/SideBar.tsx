"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function SideBar() {
    const path = usePathname();
    const IconList = [
        {
            name: "Home",
            icon: Home,
            path: "/dashboard"
        },
        {
            name: "History",
            icon: FileClock,
            path: "/dashboard/history"
        },
        {
            name: "Setting",
            icon: Settings,
            path: "/dashboard/settings"
        },
    ]
    return (
        <div className='relative h-screen p-4 shadow-sm border-r bg-white'>
            <div className="flex justify-center items-center">
                <Image src={"/logo.svg"} alt='app-logo' width={100} height={80} className='pointer-events-none select-none' />
            </div>
            <div className="mt-5">
                {IconList.map((item, i) => (
                    <Link href={item.path} key={i}>
                        <div className={`flex items-center gap-2 mb-2 hover:bg-black hover:text-white p-3 rounded-md cursor-pointer select-none ${path == item.path && "bg-black text-white"}`} >

                            <item.icon className='w-7 h-7' />
                            <p className='text-lg'>{item.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SideBar
