import { 
  Code2, 
  Database, 
  Cloud, 
  TestTube, 
  Layers, 
  Palette, 
  Globe, 
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "./styles.module.css";
import { Calendar } from "lucide-react"
import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";


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

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    institution: "Technocrats Institute of Technology",
    // location: "Bhopal, India",
    // period: "August 2022 – June 2026",
    grade: "CGPA: 8.58/10",
    status: "Current (Semester 6th)",
    type: "Undergraduate"
  },
  {
    degree: "Jawahar Navodaya Vidyalaya",
    // field: "Science Stream",
    institution: "High School: 87.4%",
    // location: "Betul, India",
    // period: "April 2018 – June 2021",
    grade: "Senior Secondary: 83.4%",
    status: "Completed",
    type: "Secondary"
  }
];

const certifications = [
  {
    name: "AWS Academy Cloud Foundations",
    year: "2025",
    provider: "AWS Academy"
  },
  {
    name: "Microsoft Azure Cloud Fundamentals",
    year: "2025",
    provider: "Microsoft"
  },
  {
    name: "Google Cloud Computing Foundations",
    year: "2025",
    provider: "Google Cloud"
  }
];


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-16 bg-muted/30 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

        </div>
      </section>


      <section className="pb-5 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto flex items-center justify-center flex-col">
          <h1 className="text-2xl  font-bold ">
            <span className="text-indigo-400 font-bold text-3xl">/</span>Hey . . .
          </h1>
          <p className="text-gray-400 text-xl mt-4 text-center mb-5 max-w-2xl">
            I like turning ideas into clean, functional web apps.
            I care about design that feels natural and effortless.
            Every project is a mix of simplicity and detail.
            I experiment, tweak, and refine until it just works.
            For me, it’s all about building experiences that feel right        
            </p>

          <div className="relative space-y-6 mb-20 mt-10 w-2xl text-gray-200">
            <div className="absolute h-20 left-0 border-3 border-amber-400 w-20 rounded-full -translate-y-3 -translate-x-10"></div>
            <div className="absolute h-20 right-0 border-3 border-amber-400 w-20 rounded-full -translate-y-3 translate-x-10"></div>
            {/* Infinite Loop Slider */}
            <div className="relative rounded-full overflow-hidden py-2">
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


          <div className=" text-center">
          <h3 className="text-2xl font-semibold mb-4">Domains</h3>
          <div className="flex flex-wrap border-1 rounded-xl p-5 mb-30 justify-center gap-4 max-w-3xl mx-auto">
            {[
              { name: "Web Development", icon: Globe },
              { name: "OOPS", icon: Layers },
              { name: "DBMS", icon: Database },
              { name: "Cloud Computing", icon: Cloud },
              { name: "Automation Testing", icon: TestTube },
              { name: "Data Structures", icon: Code2 },
              { name: "UI/UX Design", icon: Palette }
            ].map((domain) => (
              <div 
                key={domain.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:bg-accent transition-smooth group"
              >
                <domain.icon className="h-4 w-4 text-primary group-hover:scale-110 transition-spring" />
                <span className="text-sm font-light">{domain.name}</span>
              </div>
            ))}
          </div>
        </div>

        </div>
      </section>


      {/* Experience Section */}
      <section className="pb-5 px-6 bg-muted/30">
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
                <span className="inline-block w-3 h-3 bg-emerald-900 rounded-sm mr-2"></span>
                Developed full-stack applications with modern frameworks.
                <br />

                <span className="inline-block w-3 h-3 bg-emerald-900 rounded-sm mr-2"></span>
                Multiple cloud platform certifications.
                <br />

                <span className="inline-block w-3 h-3 bg-emerald-900 rounded-sm mr-2"></span>
                Created AI-powered applications with API integrations.

              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className=" bg-emerald-600 text-black text-xs font-semibold px-2 py-1 rounded-md flex gap-2 justify-centers items-center"><Calendar className="w-3 h-3 " />
                  Ongoing ...</span>
              </div>
              <div className="w-full bg-neutral-700 rounded-full mb-2 h-2 ">
                <div className="border-2 border-amber-900 bg-amber-400 h-2 rounded-full w-[60%]"></div>
              </div>
              <p className="text-xs mt-1 text-right">Projects</p>
            </div>

            <div className="relative bg-emerald-500 text-black rotate-[-1deg] rounded-xl py-9 px-6 ">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white shadow-lg rounded-full">
              </div>
              <div className="absolute bottom-2 right-2 w-8 h-8 bg-black/40 rounded-full">
              </div>
              <div className="absolute bottom-2 right-5 w-8 h-8 bg-black/40 rounded-full">
              </div>
              <h2 className=" font-bold text-xl mb-4">UI/UX</h2>
              <ul className="space-y-3">
                <li>
                  <span className="inline-block w-3 h-3 bg-emerald-900 rounded-sm mr-2"></span>
                  <span className="font-semibold">Built clean, user-friendly interfaces.</span>
                  <span className="text-sm block text-black"> for web applications</span>
                </li>
                <li>
                  <span className="inline-block w-3 h-3 bg-emerald-900 rounded-sm mr-2"></span>
                  <span className="font-semibold">Applied modern UI/UX principles.</span>
                  <span className="text-sm block text-black "> for responsive, accessible design</span>
                </li>
                <li>
                  <span className="inline-block w-3 h-3 bg-emerald-900 rounded-sm mr-2"></span>
                  <span className="font-semibold">Improved usability.  </span>
                  <span className="text-sm block text-black"> through feedback-driven iterations</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </section>


      <section className="py-24 bg-muted/30" >
        <div className="container px-4">

          {/* Education Timeline */}
          <div className="max-w-2xl m-auto mb-16">
            <h1 className="text-2xl flex items-center justify-center uppercase font-bold ">
              <span className="text-indigo-400 font-bold text-3xl">/</span>Academic Journey
            </h1>
            <p className="text-gray-400 mt-2 mb-10 text-center max-w-2xl">
              Academic excellence combined with industry-recognized certifications
            </p>
            <div className="space-y-8 ">
              {education.map((edu) => (
                <Card
                  key={edu.degree}
                  className="p-8 border-emerald-400 border-2 card-gradient shadow-medium  hover:shadow-hard transition-spring group"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div>
                        <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                        {edu.field && (
                          <p className="text-primary/70 font-medium">{edu.field}</p>
                        )}
                      </div>


                      <div className="space-y-2">
                        <p className="font-medium">{edu.institution}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <span className="text-primary font-semibold">{edu.grade}</span>
                          <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 w-fit">
                            {edu.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="max-w-4xl m-auto">
            <h1 className="text-2xl flex items-center justify-center mb-10 uppercase font-bold ">
              <span className="text-indigo-400 font-bold text-3xl ">/</span>Professional Certifications
            </h1>
            <div className="grid md:grid-cols-3 gap-5">
              {certifications.map((cert) => (
                <Card
                  key={cert.name}
                  className=" text-center bg-emerald-500  group"
                >
                  <div className="flex justify-center">
                    <div className="p-3 rounded-xl mb-2 bg-emerald-600 group-hover:bg-emerald-400 ">
                      <Award className="h-6 w-6  text-black" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-md text-black ">{cert.name}</h4>
                  <p className="text-md text-black ">{cert.provider}</p>
                  <p className="text-xs text-black font-medium">{cert.year}</p>
                </Card>
              ))}
            </div>
          </div>


        </div>
      </section>
    </div>
  );
}




