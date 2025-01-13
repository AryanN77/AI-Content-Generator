"use client"
import React, { useState } from 'react'
import { TemplateItem } from '../../_components/TemplateSection'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader2Icon } from 'lucide-react'

interface Props {
    selectedTemplate?: TemplateItem,
    userFormData?: any,
    loading: boolean
}

function FormSection({ selectedTemplate, userFormData, loading }: Props) {
    const [formData, setFormData] = useState<any>("");
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    return (
        <div className='p-5 border rounded-md shadow-md bg-white'>
            <h2 className='font-semibold text-2xl'>{selectedTemplate?.name}</h2>
            <p className='text-gray-600'>{selectedTemplate?.desc}</p>

            <form action="" className='mt-5' onSubmit={(e) => { e.preventDefault(); userFormData(formData) }}>
                {selectedTemplate?.form?.map((item, i) => (
                    <div className="my-2 flex flex-col gap-2 mb-7" key={i}>
                        <label>{item?.label}</label>
                        {item?.field == "input" ? <Input name={item?.name} required={item?.required} onChange={handleInputChange} /> : item?.field == "textarea" ? <Textarea name={item?.name} required={item?.required} onChange={handleInputChange} /> : null}
                    </div>
                ))}
                <Button className='w-full' type='submit' disabled={loading}>{loading ? <Loader2Icon className='animate-spin' /> : null} {loading ? "Generating Content" : "Generate Content"}</Button>
            </form>
        </div>
    )
}

export default FormSection
