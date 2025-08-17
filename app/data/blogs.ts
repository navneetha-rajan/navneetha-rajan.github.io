import { mindmateBlog } from './blogs/mindmate';
import { microservicesBlog } from './blogs/microservices';
import { awsOptimizationBlog } from './blogs/aws-optimization';
import { cloudNativeFutureBlog } from './blogs/cloud-native-future';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  mindmateBlog,
  microservicesBlog,
  awsOptimizationBlog,
  cloudNativeFutureBlog
];

export function getFeaturedBlogs(): BlogPost[] {
  return blogPosts.slice(0, 3);
}

export function getAllBlogs(): BlogPost[] {
  return blogPosts;
}

export function getBlogById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
} 