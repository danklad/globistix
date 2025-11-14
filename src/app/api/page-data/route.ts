import { NextResponse } from "next/server";

const avatarList = [
    {
        image: "/images/avatar/avatar_1.jpg",
        title: "Rajesh Kumar"
    },
    {
        image: "/images/avatar/avatar_2.jpg",
        title: "Anita Sharma"
    },
    {
        image: "/images/avatar/avatar_3.jpg",
        title: "Mohammed Ali"
    },
    {
        image: "/images/avatar/avatar_4.jpg",
        title: "Priya Nair"
    },
];

const statsFactData = {
    number: '01',
    name: "Stats & facts",
    heading: "Exporting All Over the World",
    description: "At Globistix, we deliver Indian products worldwide with reliability, transparency, and trust.",
    scoreData: [
        {
            number: 40,
            title: "Trusted Suppliers",
            numberValue: '+',
            scoreDescp: "We ensure the highest quality by sourcing directly from farmers and certified suppliers worldwide."
        },
        {
            number: 238,
            title: "Global Shipping",
            scoreDescp: "Our expert logistics network guarantees timely and secure delivery to any part of the world."
        },
        {
            number: 3,
            title: "Dedicated Support",
            numberValue: 'M',
            scoreDescp: "24/7 customer support to handle all your queries and requirements promptly."
        },
    ]
};

const servicesData = {
    number: '03',
    name: "Services",
    heading: "What we do",
    description: "We specialize in sourcing, packaging, and exporting premium-quality Indian products to international markets.",
    data: [
        {
            id: 1,
            image: "/images/home/services/services_1.png",
            heading: "Product Sourcing",
            descp: "We partner with trusted suppliers across India to source authentic, high-quality goods."
        },
        {
            id: 2,
            image: "/images/home/services/services_2.png",
            heading: "Quality Assurance",
            descp: "All products go through strict checks to meet international standards before shipping."
        },
        {
            id: 3,
            image: "/images/home/services/services_3.png",
            heading: "Global Shipping",
            descp: "We manage logistics, customs clearance, and safe delivery worldwide."
        },
        {
            id: 4,
            image: "/images/home/services/services_4.png",
            heading: "Custom Export Solutions",
            descp: "Tailored export strategies to fit your specific business and market requirements."
        },
    ]
};

const testimonialData = {
    data_1: {
        preTitle: "Hear from them",
        title: "Globistix ensured smooth delivery and great product quality. Truly reliable!",
        author: "Albert Flores",
        company: "Importer, USA"
    },
    data_2: {
        preTitle: "Hear from them",
        title: "They managed sourcing and logistics effortlessly. Highly recommended.",
        author: "Robert Fox",
        company: "Distributor, Europe"
    },
    data_3: {
        preTitle: "Hear from them",
        title: "Professional, transparent, and trustworthy export partner.",
        author: "Jenny Wilson",
        company: "Retailer, UAE"
    },
};

const teamData = {
    number: '06',
    data: [
        {
            image: "/images/home/team/sanju.png",
            name: "Sai Kumar",
            position: "Director & Head of Global Operations",
            socialLinks: [
                { icon: "/images/socialIcon/twitter.svg", link: "https://twitter.com" },
                { icon: "/images/socialIcon/Be.svg", link: "https://www.behance.net/" },
                { icon: "/images/socialIcon/linkedin.svg", link: "https://linkedin.com" }
            ]
        },
        {
            image: "/images/home/team/surya.png",
            name: "Nune Surya",
            position: "Director & Export Strategy Lead",
            socialLinks: [
                { icon: "/images/socialIcon/twitter.svg", link: "https://twitter.com" },
                { icon: "/images/socialIcon/Be.svg", link: "https://www.behance.net/" },
                { icon: "/images/socialIcon/linkedin.svg", link: "https://linkedin.com" }
            ]
        },
    ]
};

const pricingData = {
    data: [
        {
            planName: "Starter",
            planPrice: "Custom Quote",
            planDescp: "Best for small businesses testing international trade.",
            planIncludes: ["Flexible order quantities","Trusted product sourcing","Export documentation support","Standard packaging & shipping"]
        },
        {
            planName: "Growth",
            tag: "Most popular",
            planPrice: "Custom Quote",
            planDescp: "Ideal for mid-sized companies expanding globally.",
            planIncludes: ["Everything in Starter Plan","Bulk order support","Dedicated logistics management","Custom packaging & labeling"]
        },
        {
            planName: "Enterprise",
            planPrice: "Custom Quote",
            planDescp: "Tailored export solutions for large-scale businesses.",
            planIncludes: ["Everything in Growth Plan","Priority customs clearance","Dedicated account manager","Advanced quality testing & compliance"]
        },
    ],
    partnerLogo: [
        { light: "/images/home/pricing/partner-1.svg", dark: "/images/home/pricing/partner-dark-1.svg" },
        { light: "/images/home/pricing/partner-2.svg", dark: "/images/home/pricing/partner-dark-2.svg" },
        { light: "/images/home/pricing/partner-3.svg", dark: "/images/home/pricing/partner-dark-3.svg" },
        { light: "/images/home/pricing/partner-4.svg", dark: "/images/home/pricing/partner-dark-4.svg" },
        { light: "/images/home/pricing/partner-5.svg", dark: "/images/home/pricing/partner-dark-5.svg" },
      ],
};

const faqData = {
    data: [
        {
            faq_que: "What products do you export?",
            faq_ans: 'We focus on exporting premium Coffee and Red Chilli. We can discuss specific varieties based on client requirements.'
        },
        {
            faq_que: "Which countries do you ship to?",
            faq_ans: 'Globistix exports to over 40+ countries, including the USA, Europe, Middle East, and Asia-Pacific.'
        },
        {
            faq_que: "What’s the minimum order quantity?",
            faq_ans: 'Minimums vary by product: Coffee and Red Chilli orders are flexible and can scale from trial to bulk quantities.'
        },
        {
            faq_que: "How do you ensure product quality?",
            faq_ans: 'All products shipments undergo strict quality checks and compliant packaging before export.'
        },
        {
            faq_que: "Do you provide shipping and documentation support?",
            faq_ans: 'Yes, we handle logistics, customs clearance, and complete export documentation for hassle-free delivery.'
        }
    ]
};

const contactData = {
    keypoint:["Always-On Customer Support","Service Across the Globe"],
    managerProfile:{
        image:"/images/avatar/avatar_1.jpg",
        name:"Courtney Henry",
        position:"Client Relations Manager"
    }
}

const aboutusStats = [
    {
        number: 40,
        postfix:"+",
        title: 'Countries Served',
        descp: "Delivering high-quality Indian products across international markets."
    },
    {
        number: 3,
        postfix: "M+",
        title: 'Units Delivered',
        descp: "Trusted partner for millions of product shipments worldwide."
    },
    {
        number: 238,
        postfix: "+",
        title: 'Business Clients',
        descp: "Building long-term partnerships with importers and distributors."
    },
]

const servicesSliderData = [
    "Product Sourcing", "Quality Assurance", "Logistics","Custom Packaging","Export Compliance","Bulk Orders","End-to-End Support"
]

export const GET = async () => {
    return NextResponse.json({
        avatarList,
        statsFactData,
        servicesData,
        testimonialData,
        teamData,
        pricingData,
        faqData,
        contactData,
        aboutusStats,
        servicesSliderData
    });
};
