"use client";

import React from "react";
import Header from "@/components/elements/header";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AboutUs() {
  return (
    <>
      <Header />
      <main
        id="about"
        className="flex h-screen w-full justify-center items-center transition-all duration-500 ease-in-out"
      >
        <h1 className="md:text-9xl text-4xl text-gray-600 font-black transition-all duration-500 ease-in-out">
          About Us
        </h1>
      </main>
    </>
  );
}
