import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getBlogById, getAllBlogs } from '../../data/blogs'
import BlogContent from './BlogContent'

interface BlogPageProps {
  params: {
    id: string
  }
}

// Required for static export - generates all possible blog IDs at build time
export function generateStaticParams() {
  const blogs = getAllBlogs()
  return blogs.map((blog) => ({
    id: blog.id,
  }))
}

// Generate metadata for each blog post including canonical tag
export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const blog = getBlogById(params.id)
  
  if (!blog) {
    return {
      title: 'Blog Not Found',
    }
  }

  const canonicalUrl = `https://navneetha-rajan.github.io/blogs/${params.id}`

  return {
    title: `${blog.title} | Navneetha Rajan`,
    description: blog.excerpt,
    keywords: blog.tags || ['software development', 'technology', 'programming'],
    authors: [{ name: 'Navneetha Rajan', url: 'https://github.com/navneetha-rajan' }],
    creator: 'Navneetha Rajan',
    publisher: 'Navneetha Rajan',
    category: 'Technology',
    classification: 'Software Development',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      url: canonicalUrl,
      siteName: 'Navneetha Rajan Portfolio',
      locale: 'en_US',
      publishedTime: blog.date,
      authors: ['Navneetha Rajan'],
      tags: blog.tags || ['software development', 'technology', 'programming'],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      site: '@navneetha_rajan',
      creator: '@navneetha_rajan',
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const blogId = params.id
  const blog = getBlogById(blogId)
  
  if (!blog) {
    notFound()
  }

  // Get other blogs for the "View More Blogs" section
  const otherBlogs = getAllBlogs().filter(post => post.id !== blogId).slice(0, 3)

  return <BlogContent blog={blog} otherBlogs={otherBlogs} />
} 