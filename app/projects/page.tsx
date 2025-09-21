import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import "../globals.css"

interface Project {
  id: number;
  title: string;
  emoji: string;
  description: string;
  image?: string;
  technologies: string[];
  featured?: boolean;
  liveUrl: string;
  githubUrl: string;
}

interface ShineButtonProps {
  href: string;
  label: string;
}

export default function ProjectsPage() {


  const ShineButton = ({ href, label }: ShineButtonProps) => (
    <Button
      variant="outline"
      asChild
      className="relative group flex items-center justify-center gap-2 w-full max-w-52 h-9 px-8 py-4 
      text-lg font-normal rounded-md bg-primary text-white shadow 
      transition-all duration-300 ease-out
      hover:bg-black/90 hover:ring-2 hover:ring-black hover:ring-offset-2
      focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
      disabled:pointer-events-none disabled:opacity-50 overflow-hidden"
    >
      <Link href={href} className="flex items-center justify-center w-full">
        <span
          className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12
          bg-white opacity-10 transjition-all duration-1000 ease-out 
          group-hover:-translate-x-40"
        />
        {label}
        <ExternalLink className="w-8 h-4" />
      </Link>
    </Button>
  );
  const projects = [
    {
      id: 1,
      title: "Pallet",
      emoji: "🚨",
      description:
        "A color palette generator for developers.",
      image: "/MacBook Air - 5.png",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "React Hook Form",
        "Zod",
        "NextAuth",
        "Prisma",
        "PostgreSQL",
        "NeonDB",
        "Gemini LLM",
        "Here API",
        "Docker",
      ],
      featured: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Pixify",
      emoji: "📝",
      description:
        "An image compressor application.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Tanstack Query"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Chibify",
      emoji: "📋",
      description:
        "Unique collection of interactive, experimental, and aesthetic CSS-only designs.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Style Craft",
      emoji: "💻",
      description:
        "Unique collection of interactive, experimental, and aesthetic CSS-only designs.",
      technologies: ["Vue.js", "Firebase", "Monaco Editor", "WebRTC", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Wanderlust",
      emoji: "🌤️",
      description:
        "Developed a full-stack travel application using Node.js and Express.js.",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Marvel Dictionary",
      emoji: "🛒",
      description:
        "A Marvel API dictionary providing details on Marvel characters.",
      technologies: ["React Native", "Redux", "Stripe API", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 7,
      title: "Mini-opera",
      emoji: "🛒",
      description:
        "Multiplayer Tic-Tac-Toe game.",
      technologies: ["React Native", "Redux", "Stripe API", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]



  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Projects</h1>

        </div>
      </section>


      {/* featured Projects */}
      <section className="pb-16 px-6 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-4xl ml-5 font-bold text-emerald-400">/</span> Featured Project
          </h2>
          
          <Card className="max-w-6xl mb-15 transition-all duration-800 ease-out hover:border-amber-200 bg-card border-border">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-2xl ml-5 font-serif mb-2">
                    {featuredProject.title} {featuredProject.emoji}
                  </CardTitle>

                  <CardDescription className="text-base mb-6 ml-5">{featuredProject.description}</CardDescription>

                  <CardContent>
                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap  gap-2">
                        {featuredProject.technologies.map((tech) => (
                          <span key={tech} className="tech-tag bg-neutral-800 pt-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" asChild>
                        <Link href={featuredProject.liveUrl}>
                          <ExternalLink className="w-4 h-4 " />
                          View Live
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href={featuredProject.githubUrl}>
                          <Github className="w-4 h-4 " />
                          View Code
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>

                {featuredProject.image && (
                  <div className="w-96 m-3 h-60 rounded flex items-center justify-center ">
                    <img
                      src={featuredProject.image || "/"}
                      alt={`${featuredProject.title} Dashboard`}
                      className="w-full transition-all duration-200 cursor-pointer ease-in-out hover:scale-102 h-full object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
            </CardHeader>
          </Card>

          {/* UI/UX */}
          {featuredProject && (
              <section className="pb-16 px-6">
                <div className="w-full max-w-6xl mx-auto">
                  <h2 className="text-3xl font-bold mb-3">
                    <span className="text-4xl font-bold text-emerald-400">/</span> UI/UX Designs
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    A collection of <span className="text-emerald-300 text-2xl">design</span> I've built, for web applications to mobile apps and everything in between.
                  </p>

                  <div className="flex items-center gap-8">

                    {/* scrolling cards */}
                    <div className="overflow-hidden p-5 flex-1">
                      <div className="scroll-animate flex gap-6">

                        {/* --- Card Set 1 --- */}
                        <div className="relative transition-all duration-200 cursor-pointer ease-in-out hover:scale-102 bg-white text-black flex flex-col gap-8 rounded-xl p-2 min-w-[300px]">
                          <div className="absolute top-2 left-2 border-emerald-900 border-4
                                          w-9 h-9  bg-emerald-400 shadow-md shadow-neutral-600 rounded-full"></div>
                          <img src="/hero 1b.png" alt="" />
                        </div>

                        <div className="relative transition-all duration-200 cursor-pointer ease-in-out hover:scale-102 bg-white text-black flex flex-col gap-2 rounded-xl p-2 min-w-[300px]">
                          <div className="absolute top-2 left-2 border-emerald-900 border-4
                                          w-9 h-9  bg-emerald-400 shadow-md shadow-neutral-600 rounded-full"></div>
                          <img className="rounded-xl" src="/toolfoilo redesign.png" alt="" />
                          <p className="text-md text-black ml-2"><span className="text-black">●</span> Landing Page Design</p>
                        </div>

                        <div className="relative transition-all duration-200 cursor-pointer ease-in-out hover:scale-102 bg-white text-black flex flex-col gap-2 rounded-xl p-2 min-w-[300px]">
                          <div className="absolute top-2 left-2 border-emerald-900 border-4
                                          w-9 h-9  bg-emerald-400 shadow-md shadow-neutral-600 rounded-full"></div>
                          <img className="rounded-xl" src="/only hero.png" alt="" />
                          <p className="text-md text-black ml-2"><span className="text-black">●</span> Hero Section (Book in Figma)</p>
                          <p className="text-md text-black ml-2"><span className="text-black">●</span> Toolfolio Redesign</p>
                        </div>

                        

                        {/* --- Duplicate set for seamless loop --- */}
                        <div className="relative bg-white text-black flex flex-col gap-8 rounded-xl p-2 min-w-[300px]">
                          <div className="absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                          w-6 h-6 bg-white shadow-md shadow-neutral-600 rounded-full"></div>
                          <img src="/hero 1b.png" alt="" />
                        </div>
                        {/* ... duplicate rest ... */}
                      </div>
                    </div>

                    {/* button on right */}
                    <div className="flex-shrink-0">
                      <section className="rounded-md w-40 border border-amber-200">
                        <div className="flex justify-center">
                          <ShineButton href="https://www.figma.com/@AdiAir" label="See More" />
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </section>
          )}


          {/* other projects */}
          <h2 className="text-3xl font-bold mb-3 mt-8 ">
            <span className="text-4xl font-bold ml-5 text-emerald-400">/</span>All Projects
          </h2>
          <p className="text-xl ml-5 text-muted-foreground mb-8">
            A collection of <span className="text-emerald-300 text-2xl">projects</span> I've built, from web applications to mobile apps and everything in between.
          </p>
          <div className=" gap-6">
            {otherProjects.map((project) => (
              <div className="flex flex-col gap-6">
                <Card key={project.id} className="bg-card mb-4 transition-all duration-800 ease-out hover:border-amber-200 ">
                  <CardHeader>
                    <CardTitle className="text-lg font-serif ">
                      {project.title} {project.emoji}
                    </CardTitle>
                    <CardDescription className="mb-1">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-1">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="tech-tag text-xs">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="tech-tag text-xs">+{project.technologies.length - 4} more</span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.liveUrl}>
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Live
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.githubUrl}>
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
