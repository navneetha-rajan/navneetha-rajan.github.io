import { notFound } from 'next/navigation'
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