"use client";
import Image from "next/image";
import StarRating from "../../shared/star-rating";
import { useEffect, useState } from "react";

function Aboutus() {
    const [avatarList, setAvatarList] = useState<any>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setAvatarList(data?.avatarList?.slice(0,2))
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }
        fetchData()
    }, [])

    return (
        <section className="py-20 md:py-40 dark:bg-darkblack">
            <div className="container">
                <div className="flex flex-col 2xl:flex-row gap-10 2xl:gap-28">
                    {/* Left Section */}
                    <div className="flex flex-col gap-5 2xl:gap-7 w-full 2xl:max-w-2xl 2xl:w-full">
                        <div className="flex items-center gap-4 md:gap-8">
                            <span className="bg-primary py-1.5 px-2.5 text-base font-medium rounded-full dark:text-secondary">
                                04
                            </span>
                            <div className="h-px w-16 bg-secondary/12 dark:bg-white/12" />
                            <p className="text-base font-medium text-white bg-secondary dark:bg-white/10 py-1.5 px-4 rounded-full">
                                About us
                            </p>
                        </div>
                        <div className="flex flex-col gap-5 2xl:gap-7">
                            <h2 className="2xl:max-w-3xl text-secondary dark:text-white">Why choose us</h2>
                            <p className="2xl:max-w-sm text-secondary/70 dark:text-white/70">
                                At Globistix, we may be a young startup, but our team brings years of
                                experience in international trade and sourcing. We specialize in connecting
                                buyers with authentic Indian products — from agricultural goods to industrial
                                materials — ensuring the best quality at competitive prices.
                            </p>
                            <p className="2xl:max-w-sm text-secondary/70 dark:text-white/70">
                                What sets us apart is our strong supplier network, transparent processes,
                                and commitment to delivering value. Whether it’s bulk exports or specialized
                                shipments, we make sure our clients benefit from India’s diverse production
                                capabilities while enjoying smooth and reliable global trade services.
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="grid md:grid-cols-3 gap-5 2xl:gap-7">
                        {/* Testimonial / Customer Satisfaction */}
                        <div className="relative bg-primary p-4 2xl:p-7 flex flex-col justify-between gap-8 md:gap-0">
                            <div className="relative z-10 flex flex-col gap-2 lg:gap-4">
                                <div>
                                    <StarRating count={5} color='#1F2A2E' />
                                </div>
                                <p className="dark:text-secondary">
                                    Our clients trust us for delivering high-quality exports at the most competitive prices.
                                </p>
                            </div>
                            <div className="relative z-10">
                                <div className="relative border-b border-secondary/12 pb-5">
                                    <h2 className="dark:text-secondary">98.6%</h2>
                                    <p className="text-base text-secondary/70">Customer satisfaction</p>
                                </div>
                                <div className="flex items-center gap-2 lg:gap-5 pt-5">
                                    <Image src={"/images/home/aboutusIndex/avatar.svg"} alt="Image" width={64} height={64} />
                                    <div>
                                        <p className="font-medium dark:text-secondary">Global Clients</p>
                                        <p className="text-base text-secondary/70">Across multiple industries</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-0 right-0">
                                <Image src={"/images/home/aboutusIndex/bg-ellipse.svg"} alt="image" width={200} height={200} />
                            </div>
                        </div>

                        {/* Project / Reach */}
                        <div className="flex flex-col gap-5 2xl:gap-7">
                            <div className="relative w-full h-64 md:h-full">
                                <Image
                                    src="https://images.pexels.com/photos/2881632/pexels-photo-2881632.jpeg"
                                    alt="Quality products illustrative image"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                    priority
                                />
                            </div>
                            <div className="bg-secondary dark:bg-lightgray/10 p-5 2xl:p-7 flex flex-col justify-between gap-8">
                                <div>
                                    <h2 className="text-white">95%</h2>
                                    <p className="text-base text-white/70">Quality products</p>
                                </div>
                                <div>
                                    <ul className='avatar flex flex-row items-center'>
                                        {avatarList?.map((items: any, index: any) => (
                                            <li key={index} className='-mr-2 z-1 avatar-hover:ml-2'>
                                                <Image src={items.image} alt='Image' width={44} height={44} quality={100} className='rounded-full border-2 border-secondary' />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Global Brands Served */}
                        <div className="relative overflow-hidden p-5 2xl:p-7 border border-secondary/12 dark:border-white/30 flex flex-col justify-between gap-8 md:gap-0">
                            <div className="relative z-10">
                                <h2>95%</h2>
                                <p>Best services</p>
                            </div>
                            <div className="flex flex-col gap-4 relative z-10">
                                <Image src={"/images/logo/BlackLogo.png"} alt="Logo Image" height={44} width={160} className="dark:hidden" />
                                <Image src={"/images/logo/WhiteLogo.png"} alt="Logo Image" height={44} width={160} className="hidden dark:block" />
                                <p>
                                    Our global reach allows us to connect Indian suppliers with international buyers,
                                    ensuring reliable supply chains and long-term partnerships.
                                </p>
                            </div>
                            <div className="absolute -top-72 right-0 border border-secondary/12 dark:border-white/30 rounded-full w-[489px] h-[489px]" />
                            <div className="absolute -bottom-36 -right-14 border border-secondary/12 dark:border-white/30 rounded-full w-[489px] h-[489px]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Aboutus;
