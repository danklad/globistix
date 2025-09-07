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
    heading: "High-quality export solutions you can trust.",
    description: "At Globistix, we deliver Indian products worldwide with reliability, transparency, and trust.",
    scoreData: [
        {
            number: 40,
            numberValue: '+',
            scoreDescp: "Countries we export to"
        },
        {
            number: 238,
            scoreDescp: "Trusted business clients worldwide"
        },
        {
            number: 3,
            numberValue: 'M',
            scoreDescp: "Units shipped successfully"
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
            image: "/images/home/team/team-img-2.png",
            name: "T Sai Kumar",
            position: "Co-Founder & Head of Global Operations",
            socialLinks: [
                { icon: "/images/socialIcon/twitter.svg", link: "https://twitter.com" },
                { icon: "/images/socialIcon/Be.svg", link: "https://www.behance.net/" },
                { icon: "/images/socialIcon/linkedin.svg", link: "https://linkedin.com" }
            ]
        },
        {
            image: "/images/home/team/team-img-1.png",
            name: "Nune Surya",
            position: "Co-Founder & Export Strategy Lead",
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
            faq_ans: 'We specialize in Makhana, Aloe Vera, Egg Powder, Spices, and other Indian products. We can also source custom items based on client requirements.'
        },
        {
            faq_que: "Which countries do you ship to?",
            faq_ans: 'Globistix exports to over 40+ countries, including the USA, Europe, Middle East, and Asia-Pacific.'
        },
        {
            faq_que: "What’s the minimum order quantity?",
            faq_ans: 'It depends on the product. We offer flexible terms for both small and bulk orders.'
        },
        {
            faq_que: "How do you ensure product quality?",
            faq_ans: 'All items undergo strict quality checks and international standard packaging before shipping.'
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
