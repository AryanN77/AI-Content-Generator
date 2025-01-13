"use client"
import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type props = {
    aiOutput: string
}

function OutputSection({ aiOutput }: props) {
    const { toast } = useToast()
    const editorRef: any = useRef(null);
    useEffect(() => {
        const editorInstance = editorRef.current.getInstance();
        editorInstance.setMarkdown(aiOutput);
    }, [aiOutput])
    return (
        <div className='bg-white shadow-lg border h-full rounded-md'>
            <div className="flex items-center p-3 justify-between">
                <h2>Here’s What I Think:</h2>
                <Button onClick={() => { navigator.clipboard.writeText(aiOutput); toast({ title: "Copied to Clipboard" }) }}><Copy /> Copy</Button>
            </div>
            <Editor
                ref={editorRef}
                initialValue="Insights will appear here!"
                initialEditType="wysiwyg"
                height="500px"
                useCommandShortcut={true}

            />
        </div>
    )
}

export default OutputSection
