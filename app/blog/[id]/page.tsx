import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const blogPosts = [
  {
    id: "1",
    title: "Why Choose Next.js Over React.js: The Complete Developer's Guide",
    description:
      "Discover the key advantages of Next.js over React.js, including performance benefits, SEO improvements, and developer experience enhancements that make Next.js the preferred choice for modern web development.",
    content: `
# Introduction

When building modern web applications, developers often face the choice between React.js and Next.js. While React.js is a powerful library for building user interfaces, Next.js takes it a step further by providing a comprehensive framework built on top of React.

## Performance Benefits

### Server-Side Rendering (SSR)
Next.js provides built-in server-side rendering capabilities, which means your pages are rendered on the server before being sent to the client. This results in faster initial page loads and better performance metrics.

### Static Site Generation (SSG)
With Next.js, you can pre-render pages at build time, creating static HTML files that can be served instantly from a CDN. This approach is perfect for content that doesn't change frequently.

### Automatic Code Splitting
Next.js automatically splits your code at the page level, ensuring that users only download the JavaScript they need for the current page. This reduces bundle sizes and improves loading times.

## SEO Improvements

### Better Search Engine Optimization
Since Next.js renders pages on the server, search engines can easily crawl and index your content. This is a significant advantage over client-side rendered React applications.

### Meta Tag Management
Next.js provides built-in support for managing meta tags, making it easier to optimize your pages for social media sharing and search engines.

## Developer Experience

### File-based Routing
Next.js uses a file-based routing system, which means you can create routes simply by adding files to the pages directory. This is much simpler than configuring routes manually in React.

### Built-in CSS Support
Next.js comes with built-in support for CSS modules, Sass, and CSS-in-JS solutions, making it easier to style your applications.

### API Routes
You can create API endpoints directly in your Next.js application using API routes, eliminating the need for a separate backend server for simple use cases.

## Conclusion

While React.js is excellent for building user interfaces, Next.js provides additional features that make it ideal for production applications. The performance benefits, SEO improvements, and enhanced developer experience make Next.js the preferred choice for most modern web applications.
    `,
    date: "28 July 2025",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Web Development", "Performance"],
    author: "John Doe",
  },
  {
    id: "2",
    title: "Tailwind CSS Basics: A Complete Beginner's Guide",
    description:
      "Learn the fundamentals of Tailwind CSS, from installation to utility classes, responsive design, and best practices for building modern web interfaces with this utility-first CSS framework.",
    content: `
# Getting Started with Tailwind CSS

Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup. Unlike traditional CSS frameworks, Tailwind doesn't provide pre-designed components but instead gives you the building blocks to create your own unique designs.

## Installation

### Using npm
\`\`\`bash
npm install tailwindcss
npx tailwindcss init
\`\`\`

### Using CDN
For quick prototyping, you can include Tailwind via CDN:
\`\`\`html
<script src="https://cdn.tailwindcss.com"></script>
\`\`\`

## Core Concepts

### Utility Classes
Tailwind provides thousands of utility classes that map to CSS properties. For example:
- \`text-center\` for \`text-align: center\`
- \`bg-blue-500\` for a blue background
- \`p-4\` for padding

### Responsive Design
Tailwind uses a mobile-first approach with responsive prefixes:
\`\`\`html
<div class="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
\`\`\`

### Color System
Tailwind includes a comprehensive color palette with numeric scales:
- \`bg-gray-100\` (lightest)
- \`bg-gray-500\` (medium)
- \`bg-gray-900\` (darkest)

## Best Practices

### Component Extraction
When you find yourself repeating utility combinations, extract them into components:
\`\`\`css
@layer components {
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
  }
}
\`\`\`

### Customization
Tailwind is highly customizable through the \`tailwind.config.js\` file:
\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1fb6ff',
      }
    }
  }
}
\`\`\`

## Conclusion

Tailwind CSS offers a different approach to styling that can significantly speed up development once you get used to it. The utility-first methodology encourages consistent design systems and makes it easy to build responsive, maintainable interfaces.
    `,
    date: "28 July 2025",
    readTime: "12 min read",
    tags: ["Tailwind CSS", "CSS", "Frontend", "Design"],
    author: "John Doe",
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      {/* <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <span className="text-sm font-bold">JD</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="text-foreground font-medium">
                Blog
              </Link>
              <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Header */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{post.description}</p>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
              <span className="text-muted-foreground">by {post.author}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-pre:bg-muted prose-pre:border prose-pre:border-border">
                {post.content.split("\n").map((line, index) => {
                  if (line.startsWith("# ")) {
                    return (
                      <h1 key={index} className="text-3xl font-serif font-bold mb-6 mt-8 first:mt-0">
                        {line.substring(2)}
                      </h1>
                    )
                  }
                  if (line.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-2xl font-serif font-bold mb-4 mt-8">
                        {line.substring(3)}
                      </h2>
                    )
                  }
                  if (line.startsWith("### ")) {
                    return (
                      <h3 key={index} className="text-xl font-serif font-bold mb-3 mt-6">
                        {line.substring(4)}
                      </h3>
                    )
                  }
                  if (line.startsWith("```")) {
                    return null // Handle code blocks separately if needed
                  }
                  if (line.trim() === "") {
                    return <br key={index} />
                  }
                  return (
                    <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                      {line}
                    </p>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            <p>Designed & Developed by John Doe</p>
            <p>©2025. All rights reserved.</p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>Visitors #1301</p>
            <p>Delhi, 9:59 PM</p>
          </div>
        </div>
      </footer> */}
    </div>
  )
}
