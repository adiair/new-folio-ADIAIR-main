import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Why Choose Next.js Over React.js: The Complete Developer's Guide",
      description:
        "Discover the key advantages of Next.js over React.js, including performance benefits, SEO improvements, and developer experience enhancements that make Next.js the preferred choice for modern web development.",
      date: "28 July 2025",
      readTime: "8 min read",
      tags: ["Next.js", "React", "Web Development", "Performance"],
    },
    {
      id: 2,
      title: "Tailwind CSS Basics: A Complete Beginner's Guide",
      description:
        "Learn the fundamentals of Tailwind CSS, from installation to utility classes, responsive design, and best practices for building modern web interfaces with this utility-first CSS framework.",
      date: "28 July 2025",
      readTime: "12 min read",
      tags: ["Tailwind CSS", "CSS", "Frontend", "Design"],
    },
  ]

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
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Sharing insights, tutorials, and thoughts on web development, technology, and building great software.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-card border-border hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-serif mb-3 hover:text-primary transition-colors cursor-pointer">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </CardTitle>
                      <CardDescription className="text-base mb-4">{post.description}</CardDescription>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span key={tag} className="tech-tag text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.id}`}>Read more →</Link>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  )
}
 