import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background">


            {/* Header */}
            <section className="pt-24 pb-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Get in Touch
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Let's build something purposeful together. Whether you have a project in mind or just want to connect, 

                    </p >
                    <p className="text-xl text-muted-foreground">I'd love to hear from you.</p>
                </div>
            </section>

            <section className="py-16 px-6 bg-black text-white">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Left: Contact Form */}
                    <div className="p-8 border-dashed border-2 border-primaryapp/blog rounded-xl shadow-lg">
                        <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
                        <form
                            action="https://formspree.io/f/manoryoj"
                            method="POST"
                            className="flex flex-col gap-4"
                        >
                            <label className="flex flex-col">
                                <span className="mb-1 text-sm font-medium">Your Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="abc"
                                    required
                                    className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                                />
                            </label>

                            <label className="flex flex-col">
                                <span className="mb-1 text-sm font-medium">Email Address</span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="abc@example.com"
                                    required
                                    className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                                />
                            </label>

                            <label className="flex flex-col">
                                <span className="mb-1 text-sm font-medium">Your Message</span>
                                <textarea
                                    name="message"
                                    rows={6}
                                    placeholder="Tell me about your project or just say hello!"
                                    required
                                    className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-y"
                                />
                            </label>

                            <button
                                type="submit"
                                className="relative overflow-hidden bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-all group"
                            >
                                Send Message
                                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40 will-change-transform"></span>
                                <span className="ml-2">➤</span>
                            </button>
                        </form>
                    </div>

                    {/* Right: Connect Info */}
                    <div className="flex flex-col justify-between p-4 rounded-xl">
                        <div className="mb-6">
                            <h2 className="text-3xl font-semibold mb-4">Connect</h2>
                            <p className="text-gray-400 mb-4">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part
                                of your vision.
                            </p>
                            <p className="text-gray-400 mb-4">Based in India, but working with clients worldwide.</p>

                            <p className="text-gray-400 font-medium">Email</p>
                            <a
                                href="mailto:adi310kokashe@gmail.com"
                                className="text-purple-500 mb-4 inline-block"
                            >
                                adi310kokashe@gmail.com
                            </a>

                            <p className="text-gray-400 font-medium">Follow Me</p>
                            <div className="flex gap-4 text-gray-400">
                                <a href="#" className="hover:text-purple-500 transition">
                                    GitHub
                                </a>
                                <a href="#" className="hover:text-purple-500 transition">
                                    Twitter
                                </a>
                                <a href="#" className="hover:text-purple-500 transition">
                                    LinkedIn
                                </a>
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="mt-6 p-4 bg-gray-800 rounded-md text-lg text-gray-300 italic">
                        “If you can’t fall asleep, maybe you need to stop doomscrolling.”                            
                        <div className="text-right mt-2">— aditya kokashe</div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
