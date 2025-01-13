"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateSection from './_components/TemplateSection'

function Page() {
    const [searchInput, setSearchInput] = useState("")
    return (
        <div>
            <SearchSection onSearchInput={(value: string) => setSearchInput(value)} />
            <TemplateSection searchInput={searchInput} />
        </div>
    )
}

export default Page
