'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import Link from 'next/link'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Microservices with Spring Boot",
      excerpt: "A deep dive into designing and implementing microservices architecture using Spring Boot, covering best practices for scalability and maintainability.",
      content: `
        <p>Microservices architecture has become the de facto standard for building scalable, maintainable applications. In this comprehensive guide, I'll share my experience implementing microservices using Spring Boot, covering everything from initial design to production deployment.</p>
        
        <h3>Why Microservices?</h3>
        <p>Traditional monolithic applications often become difficult to maintain as they grow. Microservices offer several advantages:</p>
        <ul>
          <li><strong>Scalability:</strong> Individual services can be scaled independently based on demand</li>
          <li><strong>Maintainability:</strong> Smaller, focused codebases are easier to understand and modify</li>
          <li><strong>Technology Diversity:</strong> Different services can use different technologies</li>
          <li><strong>Fault Isolation:</strong> Failures in one service don't bring down the entire application</li>
        </ul>

        <h3>Design Principles</h3>
        <p>When designing microservices, it's crucial to follow these principles:</p>
        <ul>
          <li><strong>Single Responsibility:</strong> Each service should have one clear purpose</li>
          <li><strong>Loose Coupling:</strong> Services should be independent of each other</li>
          <li><strong>High Cohesion:</strong> Related functionality should be grouped together</li>
          <li><strong>API-First Design:</strong> Design APIs before implementing services</li>
        </ul>

        <h3>Implementation with Spring Boot</h3>
        <p>Spring Boot provides excellent support for building microservices. Here are some key components:</p>
        <ul>
          <li><strong>Spring Cloud:</strong> Provides tools for service discovery, configuration management, and circuit breakers</li>
          <li><strong>Spring Security:</strong> Handles authentication and authorization</li>
          <li><strong>Spring Data:</strong> Simplifies data access across different databases</li>
          <li><strong>Actuator:</strong> Provides monitoring and management endpoints</li>
        </ul>

        <h3>Best Practices</h3>
        <p>Based on my experience building microservices at scale, here are some best practices:</p>
        <ul>
          <li>Use API Gateway for routing and cross-cutting concerns</li>
          <li>Implement circuit breakers for fault tolerance</li>
          <li>Use distributed tracing for debugging</li>
          <li>Implement proper logging and monitoring</li>
          <li>Design for failure and implement retry mechanisms</li>
        </ul>

        <p>Building microservices is a journey that requires careful planning and continuous learning. The key is to start small and gradually evolve your architecture based on real-world requirements.</p>
      `,
      date: "Dec 15, 2024",
      readTime: "8 min read",
      tags: ["Microservices", "Spring Boot", "Architecture"],
      featured: true,
      author: "Navneetha Rajan"
    },
    {
      id: 2,
      title: "Optimizing AWS Infrastructure for Cost and Performance",
      excerpt: "Practical strategies for reducing AWS costs while maintaining high performance, including auto-scaling, caching, and resource optimization techniques.",
      content: `
        <p>Cloud infrastructure costs can quickly spiral out of control if not managed properly. In this post, I'll share practical strategies I've used to optimize AWS infrastructure for both cost and performance.</p>

        <h3>Understanding AWS Pricing</h3>
        <p>AWS pricing can be complex, with multiple factors affecting costs:</p>
        <ul>
          <li><strong>Compute:</strong> EC2 instances, Lambda functions, and container services</li>
          <li><strong>Storage:</strong> S3, EBS, and other storage services</li>
          <li><strong>Network:</strong> Data transfer, load balancers, and CDN</li>
          <li><strong>Database:</strong> RDS, DynamoDB, and other managed databases</li>
        </ul>

        <h3>Cost Optimization Strategies</h3>
        <p>Here are proven strategies to reduce AWS costs:</p>
        
        <h4>1. Right-sizing Resources</h4>
        <p>Use AWS Cost Explorer and CloudWatch to identify underutilized resources. Common optimizations include:</p>
        <ul>
          <li>Downsizing over-provisioned EC2 instances</li>
          <li>Using Spot Instances for non-critical workloads</li>
          <li>Implementing auto-scaling based on actual demand</li>
        </ul>

        <h4>2. Storage Optimization</h4>
        <p>Storage costs can be significant. Optimize by:</p>
        <ul>
          <li>Using S3 lifecycle policies to move data to cheaper storage tiers</li>
          <li>Implementing data compression</li>
          <li>Regular cleanup of unused EBS volumes</li>
        </ul>

        <h4>3. Caching Strategies</h4>
        <p>Implement caching to reduce compute and database costs:</p>
        <ul>
          <li>Use CloudFront for static content delivery</li>
          <li>Implement Redis or ElastiCache for application caching</li>
          <li>Use S3 for static asset caching</li>
        </ul>

        <h3>Performance Optimization</h3>
        <p>Cost optimization should not come at the expense of performance. Here's how to maintain both:</p>
        <ul>
          <li>Use Auto Scaling Groups to handle traffic spikes</li>
          <li>Implement proper load balancing</li>
          <li>Use CDN for global content delivery</li>
          <li>Optimize database queries and use read replicas</li>
        </ul>

        <h3>Monitoring and Alerts</h3>
        <p>Set up comprehensive monitoring to track both costs and performance:</p>
        <ul>
          <li>Use AWS Cost Anomaly Detection</li>
          <li>Set up CloudWatch alarms for performance metrics</li>
          <li>Regular cost reviews and optimization sessions</li>
        </ul>

        <p>Remember, cost optimization is an ongoing process. Regularly review your infrastructure and look for opportunities to improve efficiency.</p>
      `,
      date: "Nov 28, 2024",
      readTime: "6 min read",
      tags: ["AWS", "DevOps", "Cost Optimization"],
      featured: false,
      author: "Navneetha Rajan"
    },
    {
      id: 3,
      title: "The Future of Cloud-Native Development",
      excerpt: "Exploring emerging trends in cloud-native development, from serverless architectures to container orchestration and beyond.",
      content: `
        <p>The landscape of cloud-native development is evolving rapidly, with new technologies and patterns emerging constantly. Let's explore the trends that will shape the future of software development.</p>

        <h3>Serverless Computing</h3>
        <p>Serverless computing is becoming the preferred choice for many applications:</p>
        <ul>
          <li><strong>Event-driven Architecture:</strong> Functions triggered by events</li>
          <li><strong>Pay-per-use Pricing:</strong> Only pay for actual execution time</li>
          <li><strong>Automatic Scaling:</strong> No need to manage infrastructure</li>
          <li><strong>Reduced Operational Overhead:</strong> Focus on business logic</li>
        </ul>

        <h3>Container Orchestration</h3>
        <p>Kubernetes continues to dominate the container orchestration space:</p>
        <ul>
          <li><strong>Multi-cloud Deployment:</strong> Deploy across different cloud providers</li>
          <li><strong>Service Mesh:</strong> Istio and Linkerd for service-to-service communication</li>
          <li><strong>GitOps:</strong> Infrastructure as code with Git as the source of truth</li>
          <li><strong>Operator Pattern:</strong> Custom controllers for complex applications</li>
        </ul>

        <h3>Edge Computing</h3>
        <p>Edge computing brings computation closer to users:</p>
        <ul>
          <li><strong>Reduced Latency:</strong> Faster response times for users</li>
          <li><strong>Bandwidth Optimization:</strong> Process data closer to the source</li>
          <li><strong>Offline Capabilities:</strong> Work without constant internet connection</li>
          <li><strong>Privacy:</strong> Keep sensitive data local</li>
        </ul>

        <h3>AI/ML Integration</h3>
        <p>Artificial Intelligence and Machine Learning are becoming integral to cloud-native applications:</p>
        <ul>
          <li><strong>MLOps:</strong> DevOps practices for machine learning</li>
          <li><strong>Auto-scaling with ML:</strong> Predictive scaling based on patterns</li>
          <li><strong>Intelligent Monitoring:</strong> AI-powered anomaly detection</li>
          <li><strong>Automated Testing:</strong> ML-based test case generation</li>
        </ul>

        <h3>Security and Compliance</h3>
        <p>Security remains a top priority in cloud-native development:</p>
        <ul>
          <li><strong>Zero Trust Architecture:</strong> Never trust, always verify</li>
          <li><strong>DevSecOps:</strong> Security integrated into the development pipeline</li>
          <li><strong>Compliance Automation:</strong> Automated compliance checking</li>
          <li><strong>Secrets Management:</strong> Secure handling of sensitive data</li>
        </ul>

        <h3>Emerging Technologies</h3>
        <p>Several emerging technologies are worth watching:</p>
        <ul>
          <li><strong>WebAssembly:</strong> High-performance web applications</li>
          <li><strong>GraphQL:</strong> Efficient data fetching and manipulation</li>
          <li><strong>Event Streaming:</strong> Real-time data processing with Kafka</li>
          <li><strong>Blockchain Integration:</strong> Decentralized applications</li>
        </ul>

        <h3>Skills for the Future</h3>
        <p>To stay relevant in cloud-native development, focus on:</p>
        <ul>
          <li>Understanding distributed systems</li>
          <li>Learning multiple programming languages</li>
          <li>Mastering infrastructure as code</li>
          <li>Developing soft skills for collaboration</li>
          <li>Staying updated with emerging technologies</li>
        </ul>

        <p>The future of cloud-native development is exciting and full of opportunities. The key is to stay adaptable and continuously learn new technologies and patterns.</p>
      `,
      date: "Nov 10, 2024",
      readTime: "10 min read",
      tags: ["Cloud Native", "Trends", "Technology"],
      featured: false,
      author: "Navneetha Rajan"
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="py-20 section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-8">
              <Link 
                href="/"
                className="flex items-center space-x-2 text-muted hover:text-foreground transition-colors duration-200 mr-6"
              >
                <ArrowLeft size={20} />
                <span>Back to Home</span>
              </Link>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-muted max-w-3xl">
              Thoughts, insights, and experiences from my journey in software development, 
              cloud architecture, and technology innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 section-padding">
        <div className="container-max">
          <div className="grid gap-12">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="card-bg rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-8">
                  {/* Post Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-muted">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={16} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      {post.featured && (
                        <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-elegant">
                      {post.title}
                    </h2>
                    <p className="text-lg text-muted mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="flex items-center space-x-1 bg-muted/20 text-muted px-3 py-1 rounded-full text-sm"
                        >
                          <Tag size={14} />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted">
                      <span>By {post.author}</span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div 
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 section-padding bg-sky-light/10">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Get notified when I publish new articles about software development, 
              cloud architecture, and technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-muted/20 border border-muted/30 text-foreground placeholder-muted focus:outline-none focus:border-accent transition-colors duration-200"
              />
              <button className="px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 