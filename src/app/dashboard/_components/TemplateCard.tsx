import React from 'react'
import { TemplateItem } from './TemplateSection'
import Link from 'next/link'

function TemplateCard(item: TemplateItem) {
    return (
        <Link href={`/dashboard/content/${item.slug}`}>
            <div className='w-full h-full p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all'>
                <h2 className='font-medium text-lg'>{item.name}</h2>
                <p className='text-gray-600 line-clamp-3'>{item.desc}</p>
            </div>
        </Link>
    )
}

export default TemplateCard
