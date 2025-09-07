
import ProjectList from "@/app/components/projects";
import Herobanner from "@/app/components/shared/hero-banner";
import { getAllProjects } from "@/lib/markdown";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Products | Globistix",
};

export default function Page() {
    const projects = getAllProjects();
    return (
        <main>
            <Herobanner
                bannerimage="/images/projects/banner/projects-banner.png"
                heading="Our Export Portfolio"
                desc="Delivering <span>India’s finest</span> products to global markets with quality, trust, and reliability." />
            <ProjectList />    
        </main>
    );
};
