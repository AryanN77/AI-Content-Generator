"use client"
import React, { use, useContext, useState } from 'react'
import FormSection from './FormSection'
import OutputSection from './OutputSection'
import Templates from '@/app/(data)/Templates'
import { TemplateItem } from '../../_components/TemplateSection'
import { chatSession } from '@/utils/AIModel'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { useParams } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'



function Page() {
    const { user } = useUser()
    const { slug } = useParams();
    const selectedTemplate: TemplateItem | undefined = Templates.find((item) => item.slug === slug);
    const [loading, setLoading] = useState(false);
    const [aiOutput, setAIOutput] = useState<string>("");
    const { toast } = useToast();
    const generateAIContent = async (formData: any) => {
        try {
            setLoading(true);
            const selectedPrompt = selectedTemplate?.aiPrompt;
            const finalAIPrompt = JSON.stringify(formData) + " " + selectedPrompt;
            const result = await chatSession.sendMessage(finalAIPrompt);
            setAIOutput(result?.response.text());
            await saveInDb(formData, selectedTemplate?.slug, result?.response.text());
            setLoading(false);
        } catch (error: any) {
            toast({
                title: "Error!",
                description: error.message || "Some error occurred, Please wait!",
                variant: "destructive"
            })
        }
    }
    const saveInDb = async (formData: any, slug: any, aiResponse: any) => {
        const result = await db.insert(AIOutput).values({
            formData: formData,
            templateSlug: slug,
            aiResponse: aiResponse,
            createdBy: user?.emailAddresses[0].emailAddress!,
            createdAt: new Date().toDateString()
        })
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-5'>
            <FormSection selectedTemplate={selectedTemplate} loading={loading} userFormData={(v: any) => generateAIContent(v)} />
            <div className="col-span-2">
                <OutputSection aiOutput={aiOutput} />
            </div>
        </div>
    )
}

export default Page
