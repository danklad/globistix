import { NextResponse } from "next/server";

const isDev = process.env.NODE_ENV === "development";

const MenuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Products",
    path: "/projects",
    newTab: false,
  },
  {
    id: 4,
    title: "Certificates",
    path: "/certificates",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  ...(isDev
    ? [
        {
          id: 6,
          title: "Docs",
          path: "/documentation",
          newTab: false,
        },
      ]
    : []),
];


const footerData = {
    name: "Globistix",
    tagline: "Connecting Indian Produce with Global Demand.",
    info: [
        {
            icon: "/images/footer/email-arrow.svg",
            link: "info@globistix.in",
            href: "mailto:info@globistix.in"
        },
        {
            icon: "/images/footer/Location.svg",
            link: "Bangalore India",
            href: "https://maps.app.goo.gl/qnu7KxA1NKsjCbM3A"
        }
    ],
    links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/#services" },
        { name: "Work", href: "/projects" },
        { name: "Terms", href: "/terms-and-conditions" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Error 404", href: "/not-found" }
    ],
    socialLinks: [
        { name: "Instagram", href: "https://www.instagram.com/globistix?igsh=aWM0em5vdnU2ODdr&utm_source=qr" },
        { name: "Youtube", href: "https://youtube.com/@globistix?si=8RijB3ucj0fkEpib" },
        { name: "Facebook", href: "https://www.facebook.com/share/17KA6oG19j/?mibextid=wwXIfr" },
    ],
    copyright: "© Globistix copyright 2025"
};

export const GET = async () => {
    return NextResponse.json({
        footerData,
        MenuData
    });
};