"use client";

import Image from "next/image";
import Header from "@/components/elements/header";
import { motion } from "framer-motion";
import { fadeIn, stagger, slideUp } from "@/app/animation/animations";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-36 flex bg-[#1C1E25]  flex-col items-center justify-start w-full -z-[1]">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <section className="flex w-full">
            <div className="flex flex-col md:flex-row justify-center items-center w-full p-4 md:p-[3rem] transition-all duration-500 ease-in-out m-4 gap-3">
              <Image
                src="/aits.png"
                width={100}
                height={100}
                alt="logo"
                className="w-40 h-40 p-2"
              />

              <div className="flex flex-col gap-4 text-center md:text-left">
                <h1 className="text-white text-2xl md:text-4xl transition-all duration-500 ease-in-out">
                  Welcome to AITS
                </h1>
                <p className="text-white text-base md:text-lg transition-all duration-500 ease-in-out">
                  We are a team of developers working on the latest technologies
                  to provide you with the best solutions.
                </p>

                <button className="bg-slate-700 text-white px-4 py-2 rounded-md self-center md:self-start hover:bg-gray-800 transition-all duration-150 ease-in-out w-40 hover:scale-105 shadow-sm hover:shadow-gray-900">
                  Get started
                </button>
              </div>
            </div>
          </section>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger} // Apply parent animation for staggering
        >
          <section className="flex flex-wrap justify-center items-center flex-col md:flex-row transition-all duration-500 ease-in-out text-white w-full gap-4">
            {[
              { title: "WMA", description: "Web and Mobile Applications" },
              { title: "AGD", description: "Animation Game Development" },
              {
                title: "SMBA",
                description: "Service Management and Business Analytics",
              },
              { title: "DA", description: "Digital Arts" },
              {
                title: "CST",
                description: "Cyber Security and Threat Management",
              },
              { title: "BA", description: "Business Analytics" },
              { title: "MMA", description: "Multimedia Arts" },
            ].map((item, index) => (
              <motion.div
                variants={slideUp} // Apply slideUp animation to each child
                key={index}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col gap-4 p-4 bg-gray-800 rounded-md shadow-md w-80 h-32 transition-all duration-500 ease-in-out">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-base">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </section>
        </motion.div>
      </main>
    </>
  );
}
