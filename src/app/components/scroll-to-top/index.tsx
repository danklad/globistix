import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[999]">
      <div className="flex items-center gap-2.5">
        <Link
          href="//api.whatsapp.com/send?phone=+919652165616&text=Hi!"
          target="_blank"
          className="hidden lg:inline-flex items-center gap-2 text-sm bg-primary hover:bg-primary/70 text-secondary font-semibold px-4 py-3.5 leading-none rounded-lg duration-300 text-nowrap"
        >
          <Icon
            icon="logos:whatsapp-icon"
            width="20"
            height="20"
            style={{ color: "#fff" }}
          />
          <span>Message us</span>
        </Link>
        <div className="md:hidden">
          <Link
            href="//api.whatsapp.com/send?phone=+919652165616&text=Hi!"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm bg-amber-50 hover:bg-primary/70 text-secondary font-semibold px-3 py-3 leading-none rounded-full duration-300 text-nowrap"
          >
            <Icon
              icon="logos:whatsapp-icon"
              width="20"
              height="20"
              style={{ color: "#fff" }}
            />
          </Link>
        </div>
        {isVisible && (
            <div
            onClick={scrollToTop}
            aria-label="scroll to top"
            className="hidden md:flex cursor-pointer items-center justify-center transition duration-300 ease-in-out"
            >
            <Image
              src={"/images/Icon/up-arrow.svg"}
              alt="Images"
              width={55}
              height={55}
            />
            </div>
        )}
      </div>
    </div>
  );
}
