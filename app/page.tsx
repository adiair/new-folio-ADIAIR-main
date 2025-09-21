import { Button } from "@/components/ui/button"
import FeatureCards from "@/components/featureCards"
import { Github, Linkedin, ChevronDown } from "lucide-react"
import Link from "next/link"
import { FooterStats } from "@/components/footer-stats"



export default function Portfolio() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto ">

      {/* Hero Section */}
      <section id="about" className="pt-24 mt-10 pb-16 px-6">
        <div className="fixed w-full left-0 h-20 bg-neutral-950/70  top-0  z-40 border-b-2 border-dashed border-zinc-700">
          {/* Contact Section */}
          <section className="py-6 px-6 mb-10 ">
            <div className="max-w-6xl mx-auto">
              <div className="flex  justify-center gap-6 ">
                <a href="/about" className="text-emerald-400 flex items-center justify-center gap-1 text-md font-medium hover:text-amber-400">
                  About
                  <ChevronDown className="text-amber-400 h-4 w-4"/>
                </a>
                <a href="/projects" className="text-emerald-400 flex justify-center gap-2 text-md font-medium hover:text-amber-400">
                  Projects
                </a>
                <a href="/blog" className="text-emerald-400 flex items-center justify-center gap-1 text-md font-medium hover:text-amber-400">
                  Blogs
                  <ChevronDown className="text-amber-400 h-4 w-4" />
                </a>
                <a href="/contact" className="text-emerald-400 flex justify-center gap-2 text-md font-medium hover:text-amber-400">
                  Contact
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className="fixed w-45 left-0 h-full top-0 z-45 border-r-2 border-dashed border-zinc-700"></div>
        <div className="fixed w-45 right-0 h-full top-0 z-45 border-l-2 border-dashed border-zinc-700"></div>
        <div className="max-w-5xl mx-auto ">
          <div className="relative flex-col mt-10 flex items-center p-3 justify-center ">
            <div className="absolute h-3 w-3 rounded-full bg-amber-600 animate-ping overflow-visible right-63 bottom-16"></div>
            <div className="absolute h-3 w-3 rounded-full bg-amber-300 overflow-visible right-63 bottom-16"></div>
            <div className=" mb-4 flex pr-4 items-center border-2 overflow-hidden border-emerald-500 rounded-3xl justify-center">
              <div className="relative bg-gradient-to-r p-6 rounded-lg  flex items-start">
                <div className="absolute h-4 w-25 border-3 border-amber-700 bg-amber-300 right-0 translate-x-8 -translate-y-4 rotate-35"></div>
                <img className="h-21 w-21 mx-3 rounded-full" src="/pfp.jpg" alt="pfp" />
                <div className="bg-indigo-400 h-21 w-1"></div>
                {/* Text */}
                <div className="flex flex-col ml-3">
                  <h2 className="text-white font-bold uppercase tracking-wide text-4xl leading-snug">
                    aditya kokashe
                  </h2>
                  <p className="text-muted-foreground text-2xl leading-snug">
                    frontend • backend • design
                  </p>
                </div>
              </div>
            </div>


            <div className="flex items-center  gap-1">
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm">
                Email
              </Button>
              <Button variant="outline" size="sm">
                Resume
              </Button>
            </div>

          </div>
        </div>
      </section>

      <FeatureCards />



      {/* Footer */}
      <footer className="py-8   border-t-2 border-dashed border-t-neutral-700">
        <div className="max-w-4xl flex items-center justify-center flex-col mx-auto">
          <div className="text-lg text-foreground">
            <p>Hi! I'm Aditya. This is where I make stuff on the web ツ </p>
          </div>
          <div>

            <FooterStats />
          </div>
        </div>
      </footer>
    </div>
  )
}
