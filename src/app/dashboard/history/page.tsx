"use client"
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getHistoryActions } from './actions'
import Templates from '@/app/(data)/Templates'

function Page() {
    const { data: history } = useQuery({
        queryKey: ["fetchHistory"],
        queryFn: async () => await getHistoryActions()
    })
    const count = (s: any) => s.trim().split(/\s+/).length;
    return (
        <div className='p-4'>
            <div className="p-4 bg-white border-b shadow-sm">
                <h2 className='text-2xl font-semibold'>History</h2>
                <p className='text-sm text-gray-400'>Look out for your previous Prompts</p>
                <table className='mt-5 p-2 w-full rounded-lg border'>
                    <thead >
                        <tr className='text-left bg-gray-300'>
                            <th className='py-2 px-4'>Template</th>
                            <th className='py-2 px-4'>AI Response</th>
                            <th className='py-2 px-4'>Date</th>
                            <th className='py-2 px-4'>Words</th>
                        </tr>
                    </thead>
                    <tbody >
                        {history?.map((item, i) => (
                            <tr key={i} className='my-3 hover:bg-gray-100'>
                                <td className='py-2 px-4'>{item?.templateSlug}</td>
                                <td className='py-2 px-4'>{item?.aiResponse}</td>
                                <td className='py-2 px-4'>{item?.createdAt}</td>
                                <td className='py-2 px-4'>{count(item?.aiResponse)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Page
