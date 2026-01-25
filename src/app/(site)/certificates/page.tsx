import BlogList from "@/app/components/blog/blog-list";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Blog | Globistix",
};

export default function Page() {
    return (
        <main>
            <Herobanner
            bannerimage="/images/blog/banner/blog_banner.jpg"
            heading="Our Certifications"
            desc="Discover our export certifications ensuring quality and compliance."
            />
            <BlogList />
        </main>
    );
};
