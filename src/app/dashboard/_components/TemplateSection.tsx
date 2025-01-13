"use client"
import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export type TemplateItem = {
    name: string,
    desc: string,
    category: string,
    aiPrompt: string,
    slug: string,
    form?: Form[]
}

type Form = {
    label: string,
    field: string,
    name: string,
    required?: boolean
}

function TemplateSection({ searchInput }: any) {
    const [templateList, setTemplateList] = useState<TemplateItem[]>(Templates);

    useEffect(() => {
        if (searchInput) {
            const filterData = templateList.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()));
            setTemplateList(filterData)
        } else {
            setTemplateList(Templates);
        }
    }, [searchInput])
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4'>
            {templateList.map((item: TemplateItem, i) => (
                <TemplateCard key={i} {...item} />
            ))}
        </div>
    )
}

export default TemplateSection
