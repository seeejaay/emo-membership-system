import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { navigation } from "@/static-data/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 flex justify-between p-4 items-center bg-[#2b2e38] z-10 w-full">
        <Image src="/aits.png" width={100} height={100} alt="logo" />

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7  6h7-15-1h16"
            />
          </svg>
        </button>

        {/* Navigation for larger screens */}
        <nav className="hidden md:flex gap-[2rem] text-white text-lg">
          {navigation.map((data, id) => (
            <Link
              key={id}
              href={data.href}
              className={`hover:-translate-y-[.15rem] transition-all duration-200 ease-in-out ${
                pathname === data.href
                  ? "border-b-4 border-[#4FBA6E] text-[#4FBA6E]"
                  : ""
              } hover:text-[#4FBA6E]`}
            >
              {data.title}
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile menu with smooth transition */}
      <nav
        className={`${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } md:hidden bg-[#2b2e38] text-white text-lg p-4 z-20 w-full flex flex-col gap-4 fixed top-0 left-0 mt-[8rem]  transition-all duration-300 ease-in-out`}
      >
        {navigation.map((data, id) => (
          <Link
            key={id}
            href={data.href}
            className={`${
              pathname === data.href
                ? "border-b-4 border-[#4FBA6E] text-[#4FBA6E] w-auto px-4 py-2 rounded-md shadow-md"
                : "px-4 py-2 rounded-md"
            } hover:text-[#4FBA6E] hover:bg-[#333945]`}
          >
            {data.tag}
          </Link>
        ))}
      </nav>
    </>
  );
}
