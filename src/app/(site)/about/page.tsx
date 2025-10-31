
import AboutusDetail from "@/app/components/about/aboutus-detail";
import AboutusFullimg from "@/app/components/about/aboutus-fullimg";
import AboutusStats from "@/app/components/about/aboutus-stats";
import Team from "@/app/components/home/team";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Aboutus | Globistix",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/about-us/banner/aboutus-banner.jpg"
                heading="About us"
                desc="Delivering <span>India’s finest</span> products to global markets with quality, trust, and reliability." />
            <AboutusDetail />
            {/* <AboutusStats /> */}
            <AboutusFullimg />
            <Team teamdataNumber="01" />
        </main>
    );
};
