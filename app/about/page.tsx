
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "./styles.module.css";
import { Calendar } from "lucide-react"

const skillsIcons = [
    "java",
    "javascript",
    "html",
    "css",
    "react",
    "vite",
    "npm",
    "nodejs",
    "cpp",
    "postgres",
    "github",
    "vscode",
    "figma",
    "mongodb",
    "git",
];

const skillsList = [
    "JAVA",
    "HTML",
    "CSS",
    "JavaScript",
    "C++",
    "React",
    "Tailwind.css",
    "MongoDB",
    "Git",
    "Figma",
    "Postgres",
    "Node.js",
    "Express.js",
    "Three.js",
    "MySQL",
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <section className="pt-24 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Hey there! ✨</h1>
                    <p className="text-xl text-muted-foreground">
                        Sharing insights, tutorials, and thoughts on web development, technology, and building great software.
                        Hey! I'm a final-year Computer Science undergraduate and passionate
                            full-stack developer who enjoys bringing ideas to life through code.
                            I thrive in building meaningful, real-world projects — from solo
                            prototypes to team-based solutions.
                            I'm comfortable working across the stack and love exploring new
                            technologies that make development faster and smarter.
                    </p>
                </div>
            </section>

            <section className="px-6 max-w-5xl flex justify-center items-center flex-col mx-auto text-white rounded-xl" id="about">
                <div className="px-6 max-w-4xl flex flex-col justify-center items-center">

                    <div className="space-y-6 text-gray-200">
                        {/* Infinite Loop Slider */}
                        <div className="relative overflow-hidden py-2">
                            <div className={`flex ${styles.animateScroll} space-x-6`}>
                                {[...skillsIcons, ...skillsIcons].map((icon, index) => (
                                    <img
                                        key={index}
                                        src={`https://skillicons.dev/icons?i=${icon}`}
                                        alt={icon}
                                        className="w-16 h-10 hover:scale-110 transition-transform duration-300"
                                    />
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </section>

             {/* Experience Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-center flex-col">

          <h1 className="text-2xl uppercase font-bold ">
            <span className="text-indigo-400 font-bold text-3xl">/</span>experience
          </h1>
          <p className="text-gray-400 mt-4 text-center max-w-2xl">
            A snapshot of what I'm focused on at this moment in time, random thoughts, and digital
            sticky notes from my workspace.
          </p>
          <div className="bg-black mb-6 flex  items-center justify-center"></div>


          <div className="relative grid grid-cols-1  p-10 md:grid-cols-2 m-3 gap-8 w-full max-w-2xl ">


            <div className="relative bg-emerald-500 text-black rotate-[1deg] rounded-xl px-6 py-9 ">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white shadow-lg rounded-full">
              </div>
              <h2 className="italic text-sm mb-2">Fullstack Developer • UI/UX • Remote</h2>
              <h3 className="font-bold text-xl mb-3">Freelancer 🔬</h3>
              <p className="mb-5 text-sm leading-relaxed">
                AI-powered CLI tool that automatically generates comprehensive README.md files
                by analyzing your codebase using Large Language Models (LLMs).
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className=" bg-emerald-600 text-black text-xs font-semibold px-2 py-1 rounded-md flex gap-2 justify-centers items-center"><Calendar className="w-3 h-3 " />
                  April - June 2025</span>
              </div>
              <div className="w-full bg-neutral-700 rounded-full mb-2 h-2 ">
                <div className="border-2 border-amber-900 bg-amber-400 h-2 rounded-full w-[60%]"></div>
              </div>
              <p className="text-xs mt-1 text-right">Projects</p>
            </div>

            <div className="relative bg-emerald-500 text-black rotate-[-1deg] rounded-xl py-9 px-6 ">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white shadow-lg rounded-full">
              </div>
              <h2 className=" font-bold text-xl mb-4">UI/UX</h2>
              <ul className="space-y-3">
                <li>
                  <span className="inline-block w-3 h-3 bg-emerald-900 rounded-sm mr-2"></span>
                  <span className="font-semibold">Designing Data-Intensive Applications</span>
                  <span className="text-sm block text-black">by Martin Kleppmann</span>
                </li>
                <li>
                  <span className="inline-block w-3 h-3 bg-emerald-900 rounded-sm mr-2"></span>
                  <span className="font-semibold">How Discord Stores Trillions of Messages</span>
                  <span className="text-sm block text-black ">by Discord Engineering Blog</span>
                </li>
                <li>
                  <span className="inline-block w-3 h-3 bg-emerald-900 rounded-sm mr-2"></span>
                  <span className="font-semibold">Rust for Rustaceans</span>
                  <span className="text-sm block text-black">by Jon Gjengset</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

        </div>
    );
}
