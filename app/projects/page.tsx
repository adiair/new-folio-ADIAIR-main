import { Badge } from "@/components/ui/badge"
import { MapPin, Palette as PaletteIcon, Sparkles } from "lucide-react";
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

  const featuredProjects = [
    {
      title: "Reprint",
      description: "A full-stack travel application with secure authentication, MongoDB integration, and automation testing capabilities.",
      tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Selenium"],
      features: [
        "100% secured data storage with MongoDB",
        "Authentication system with secure login/signup",
        "98% fast rendering with EJS templating",
        "Automation testing for login and blog pages"
      ],
      icon: MapPin,
      gradient: "from-neutral-500/10 to-neutral-500/10",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Palette",
      description: "An intuitive color palette generator helping developers choose perfect colors with one-click copying and CSS export.",
      tech: ["Next.js", "Tailwind CSS", "Lucide React", "Chroma.js"],
      features: [
        "Real-time color palette generation",
        "One-click HEX code copying",
        "CSS export functionality",
        "Accurate color generation with Chroma.js"
      ],
      icon: PaletteIcon,
      gradient: "from-neutral-500/10 to-neutral-500/10",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Chibify",
      description: "AI-powered web application that generates custom chibi-style artwork from text prompts using Hugging Face API.",
      tech: ["Next.js", "Tailwind CSS", "Lucide React", "Hugging Face API"],
      features: [
        "AI-powered chibi artwork generation",
        "Text-to-image conversion capabilities",
        "Daily limit of 5+ image generations",
        "Responsive and user-friendly interface"
      ],
      icon: Sparkles,
      gradient: "from-neutral-500/10 to-neutral-500/10",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Chibify",
      description: "AI-powered web application that generates custom chibi-style artwork from text prompts using Hugging Face API.",
      tech: ["Next.js", "Tailwind CSS", "Lucide React", "Hugging Face API"],
      features: [
        "AI-powered chibi artwork generation",
        "Text-to-image conversion capabilities",
        "Daily limit of 5+ image generations",
        "Responsive and user-friendly interface"
      ],
      icon: Sparkles,
      gradient: "from-neutral-500/10 to-neutral-500/10",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Chibify",
      description: "AI-powered web application that generates custom chibi-style artwork from text prompts using Hugging Face API.",
      tech: ["Next.js", "Tailwind CSS", "Lucide React", "Hugging Face API"],
      features: [
        "AI-powered chibi artwork generation",
        "Text-to-image conversion capabilities",
        "Daily limit of 5+ image generations",
        "Responsive and user-friendly interface"
      ],
      icon: Sparkles,
      gradient: "from-neutral-500/10 to-neutral-500/10",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Chibify",
      description: "AI-powered web application that generates custom chibi-style artwork from text prompts using Hugging Face API.",
      tech: ["Next.js", "Tailwind CSS", "Lucide React", "Hugging Face API"],
      features: [
        "AI-powered chibi artwork generation",
        "Text-to-image conversion capabilities",
        "Daily limit of 5+ image generations",
        "Responsive and user-friendly interface"
      ],
      icon: Sparkles,
      gradient: "from-neutral-500/10 to-neutral-500/10",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];


  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)


  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <section className="pt-16 pb-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </section>


      {/* UI/UX Designs */}
      {featuredProject && (
        <section className="pb-16 px-4 md:px-6 bg-background">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              <span className="text-2xl sm:text-3xl font-bold text-emerald-400">/</span>
              UI-UX Designs
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              A collection of design I've built, from web apps to mobile apps.
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-2 justify-items-center">
              {[
                "/hero 1b.png",
                "/toolfoilo redesign.png",
                "/only hero.png"
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="w-64 sm:w-72 md:w-85 bg-white rounded-xl shadow-lg 
                  p-2 flex flex-col gap-1 
                  hover:scale-102 transition-transform duration-300"
                >
                  <img
                    src={img}
                    alt={`Design ${idx + 1}`}
                    className="rounded-xl w-full h-48 sm:h-52 md:h-56 object-cover"
                  />
                  <p className="text-sm text-gray-600 text-center">
                    {/* Optional: Add captions if you want */}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
          </div> {/* Button */}
          <div className="flex justify-center items-center">
            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-6">Want to see more projects?</p>
              <Button variant="outline" size="lg" className="transition-spring hover:scale-105" asChild>
                <ShineButton href="https://www.figma.com/@AdiAir" label="See More" />
              </Button>
            </div>
          </div>

        </section>
      )
      }



      <section className="py-24" id="projects">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing full-stack applications with modern technologies and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="group relative overflow-hidden card-gradient shadow-medium border-0 hover:shadow-hard transition-spring "
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-smooth`} />

                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border group-hover:border-primary/20 transition-smooth"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {project.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 group/btn "
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-smooth" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group/btn transition-spring hover:scale-105"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 group-hover/btn:scale-110 transition-spring" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">Want to see more projects?</p>
            <Button variant="outline" size="lg" className="transition-spring hover:scale-105" asChild>
              <a href="https://github.com/adiair" target="_blank" rel="noopener noreferrer">
                View All Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>



    </div >

  )
}


