export default [
    {
        name: "Blog Title",
        desc: "An AI that generate blog title depends on your blog's information",
        category: "Blog",
        aiPrompt: "Give me 5 blog topic ideas in bullet wise only based on given niche & outline and give me result in editor format",
        slug: "generate-blog-title",
        form: [
            {
                label: "Enter your Blog Genre",
                field: "input",
                name: "niche",
                required: true
            }, {
                label: "Enter Blog Outline",
                field: "textarea",
                name: "outline"
            }
        ]

    },
    {
        name: "YouTube Video Ideas",
        desc: "An AI tool to generate creative YouTube video ideas",
        category: "YouTube",
        aiPrompt: "Suggest 5 engaging YouTube video ideas based on the given niche and outline. Return the output in bullet format.",
        slug: "generate-youtube-ideas",
        form: [
            {
                label: "Enter your Video Genre",
                field: "input",
                name: "niche",
                required: true
            }, {
                label: "Enter video's Content",
                field: "textarea",
                name: "outline"
            }
        ]

    },
    {
        name: "Content Strategy Generator",
        desc: "Helps in planning a comprehensive content strategy",
        category: "Content",
        aiPrompt: "Create a 4-week content strategy for the given industry niche and outline. Include content types, target audience, and publishing schedule.",
        slug: "content-strategy-planner",
        form: [
            {
                label: "Enter your Industry",
                field: "input",
                name: "niche",
                required: true
            }, {
                label: "Enter you Idea",
                field: "textarea",
                name: "outline"
            }
        ]

    },
    {
        name: "Essay Writing Assistant",
        desc: "Generates essay outlines or full essays based on topics",
        category: "Essay Writing",
        aiPrompt: "Generate a 5-paragraph essay outline with an introduction, 3 main points, and a conclusion based on the provided niche and outline.",
        slug: "essay-outline-generator"
        ,
        form: [
            {
                label: "Enter your Essay Topic",
                field: "input",
                name: "niche",
                required: true
            }, {
                label: "Enter Essay outline",
                field: "textarea",
                name: "outline"
            }
        ]

    },
    {
        name: "SEO Keyword Suggestions",
        desc: "Provides SEO-optimized keywords for your content",
        category: "SEO",
        aiPrompt: "Generate 10 SEO-friendly keywords based on the provided niche. Display results in list format.",
        slug: "seo-keyword-suggestions"

        ,
        form: [
            {
                label: "Enter your Content Topic",
                field: "input",
                name: "niche",
                required: true
            }
        ]

    },
    {
        name: "Instagram Caption Creator",
        desc: "Generates creative Instagram captions for posts",
        category: "Social Media",
        aiPrompt: "Suggest 5 Instagram captions based on the given post niche or outline. Include emojis if relevant.",
        slug: "instagram-caption-creator"

        ,
        form: [
            {
                label: "Enter your Post niche",
                field: "input",
                name: "niche",
                required: true
            }, {
                label: "Enter Post outline",
                field: "textarea",
                name: "outline"
            }
        ]

    },
    {
        name: "Product Description Generator",
        desc: "Writes compelling product descriptions for e-commerce platforms",
        category: "E-commerce",
        aiPrompt: "Write a 3-sentence product description emphasizing features, benefits, and a call to action. Use the given product niche.",
        slug: "product-description-writer",
        form: [
            {
                label: "Enter your Product name",
                field: "input",
                name: "niche",
                required: true
            },
        ]

    },
    {
        name: "LinkedIn Post Ideas",
        desc: "Generates professional LinkedIn post ideas",
        category: "Professional Networking",
        aiPrompt: "Suggest 3 LinkedIn post ideas based on the provided niche and outline (e.g., networking, job search, or industry insights).",
        slug: "linkedin-post-ideas"

        ,
        form: [
            {
                label: "Enter your Post niche",
                field: "input",
                name: "niche",
                required: true
            }, {
                label: "Enter Post outline",
                field: "textarea",
                name: "outline"
            }
        ]

    },
    {
        name: "Newsletter Content Ideas",
        desc: "Creates ideas for engaging newsletter content",
        category: "Email Marketing",
        aiPrompt: "Suggest 5 newsletter content ideas for the given industry and audience type. Include catchy subject line suggestions.",
        slug: "newsletter-content-ideas"

        ,
        form: [
            {
                label: "Enter your Blog niche",
                field: "input",
                name: "niche",
                required: true
            }, {
                label: "Enter blog outline",
                field: "textarea",
                name: "outline"
            }
        ]

    },
    {
        name: "Short Story Generator",
        desc: "Creates imaginative short stories based on prompts",
        category: "Creative Writing",
        aiPrompt: "Generate a short story outline with characters, setting, conflict, and resolution based on the provided niche and outline.",
        slug: "short-story-generator"
        ,
        form: [
            {
                label: "Enter your Story Genre",
                field: "input",
                name: "niche",
                required: true
            }, {
                label: "Enter Story outline",
                field: "textarea",
                name: "outline"
            }
        ]

    },
    {
        name: "Ad Copy Creator",
        desc: "Generates persuasive ad copy for marketing campaigns",
        category: "Marketing",
        aiPrompt: "Write a 2-line ad copy for the given niche and outline, focusing on engagement and conversion.",
        slug: "ad-copy-creator",
        form: [
            {
                label: "Enter your Ad niche",
                field: "input",
                name: "niche",
                required: true
            }, {
                label: "Enter Ad description",
                field: "textarea",
                name: "outline"
            }
        ]

    },
]