export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  author: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "mindmate",
    title: "Building MindMate: A 3-Hour Sprint",
    excerpt: "What Happens When You Give Your Feelings an Interface",
    content: `
      <p>A few weeks ago, I found myself at the <strong><em style="color: #3b82f6;">Tech Roast Show</em></strong> in New York. Picture this: developers roasting AI, merch flying through the air, chaotic laughter echoing off the walls, just another Friday night in techland. Somewhere between a sarcastic burn and a bro-handshake, I ended up with the official <em style="color: #3b82f6;">"10x Developer"</em> merch and a pic with the bros. But as I walked away still laughing, something tugged at me, quietly, annoyingly:</p>

      <p><strong>When was the last time I actually built something?</strong></p>

      <p>Weirdly, I couldn't even remember the last time I felt that rush: building for the sake of building. No Jira, no sprints, no calendar pings. Just me, an idea, and that chaos-fueled dopamine hit. </p>

      <p>Not tweaking some UI elements or fixing bugs. I mean actually sitting down with a blank screen. Feeling clueless, slightly terrified, slipping into existential crisis, yet oddly excited about turning a random thought into something real. Honestly, it had been a while.</p>

      <p>A few days later, I was wandering around the World Trade Center, channeling equal parts Gossip Girl and Silicon Valley. Overdressed, overthinking, and quietly wondering if my morning routine needed a pitch deck. Everyone around me looked like they had just come from an investor meeting or were on their way to disrupt something. That's when it hit me:</p>

      <p><strong>I need to build something. It's been a while. But… what?</strong></p>

      <p>Of course, my first instinct was to turn to my new best friend, ChatGPT. A few prompts in, I noticed something mildly <em style="color: #3b82f6;">(or not so mild)</em> concerning: I was venting way more than coding. I figured I should probably channel that emotional energy into a product, before GPT flagged me as <em style="color: #3b82f6;">"chronically sentimental"</em>.</p>

      <p>Also, I was genuinely curious to see what this whole AI agent hype was all about. I mean, was I about to build a moody version of Alexa with trust issues? Probably not, but close enough.</p>

      <p>Of course I install <strong>Cursor</strong>, I opened it and stared at the blank screen, and I officially joined the new trendy club: <em style="color: #3b82f6;">"vibe coding."</em> No roadmap, no plan, just pure vibes and dangerously optimistic confidence. The kind of <em style="color: #3b82f6;">"let's go with the flow"     </em>   that, for once, doesn't ghost you three weeks later with commitment issues <em style="color: #3b82f6;">(Personal attack? Maybe)</em>.</p>

      <p>And honestly? It felt great. The adrenaline rush was real. I started simple, just a journaling interface, but then the feature creep hit <em style="color: #3b82f6;">(in the healthiest way possible)</em>. Then I threw in emotional insights <em style="color: #3b82f6;">(because apparently, I'm into feelings now)</em>. Next came an AI chat agent that let you talk through your emotions, pick your preferred style whether that's CBT style structure, stochastic self-discovery mode, or just a chatty best friend and it actually remembered what you said. Or maybe it remembered too much.</p>

      <p><strong style="color: #3b82f6;">Think: Therapy, if it came with toggle switches, data logs, and an interface that didn't judge your coping mechanisms.</strong></p>

      <p>I wrapped everything up with a minimalist dashboard because, let's face it, everything looks cooler on a dashboard. And of course, you get numbers, because let's be honest, my engineer brain understands <em style="color: #3b82f6;">"3.2 average mood score with a 67% spike in existential dread"</em> way better than some vague <em style="color: #3b82f6;">"I'm feeling kinda off today." </em> It's like having an observant co-founder who not only reads between the lines, but graphs them too.</p>

      <p>Three hours in, powered by caffeine, stubbornness and 2 AM debugging, I actually had something working. Not perfect. Not revolutionary. But real. But it felt strangely meaningful. And I was amazed that for the first time in forever, my brain willingly stayed focused for three whole hours.</p>

      <p>At the end of the day, this random project became more than just code. It reminded me why I started building in the first place. The chaos, the confusion, the moments where you yell at your screen <em style="color: #3b82f6;">(and have a minor breakdown)</em> only to realize that stupid semicolon was missing. It's silly, it's chaotic but honestly it's fun.</p>

      <p>So yeah, this three hour sprint brought me back to that feeling I hadn't felt in a while, the one where the code flows, the caffeine kicks in, and suddenly I remember why I fell in love with building things in the first place. And what really surprised me was how oddly satisfying it was to build something this quick. It felt like one of those tiny steps that don't look like much from the outside, but deep down, they shift something. Maybe it's useful. At least to me. And maybe, just maybe, a few other geeks out there who believe that the only way to truly process emotions is through a graph, a dashboard, and a timestamped log of your mental breakdowns.</p>

      <p><strong>Code:</strong> <a href="https://github.com/navneetha-rajan/MindMate" target="_blank" rel="noopener noreferrer" class="text-accent hover:text-accent/80 underline">Github</a></p>
    `,
    date: "Jul 15, 2025",
    readTime: "12 min read",
    tags: [],
    featured: true,
    author: "Navneetha Rajan",
    slug: "building-mindmate-3-hour-sprint"
  },
  {
    id: "microservices",
    title: "Building Scalable Microservices with Spring Boot",
    excerpt: "Breaking down the monolith",
    content: `
      <p>I remember the first time I encountered a monolithic application that had grown beyond recognition. It was like trying to navigate through a maze where every turn led to another dependency, and every change felt like performing surgery on a patient who was still awake. The codebase had become this massive, unwieldy beast that took 15 minutes to start up and crashed if you looked at it wrong.</p>

      <p>That's when I realized: <strong>we needed to break this thing apart.</strong></p>

      <p>But here's the thing about microservices: it's not just about splitting code. It's about splitting your thinking. You go from having one big problem to having many smaller, more manageable problems. And honestly? That's liberating.</p>

      <p>I started with Spring Boot because, well, it felt familiar. But what I didn't expect was how much the mental model would change. Instead of thinking about one application, I was now thinking about a system of applications. Each service became its own little world with its own rules, its own data, its own lifecycle.</p>

      <p>The first service I extracted was the user authentication module. It was like pulling a tooth: painful but necessary. I remember sitting there, staring at the screen, wondering if I was making the right decision. <em style="color: #3b82f6;">"What if this breaks everything?"</em> I thought. But then it worked, and suddenly I had this beautiful, isolated service that I could deploy independently.</p>

      <p>That's when the addiction started. I began seeing everything as a potential microservice. The payment processing? That could be its own service. The notification system? Definitely its own service. The reporting engine? You get the idea.</p>

      <p>But here's what I learned the hard way: not everything needs to be a microservice. Sometimes you're just creating complexity for complexity's sake. I remember this one time where I split a simple CRUD operation into three separate services, and then spent the next week debugging why they weren't talking to each other properly. <em style="color: #3b82f6;">Sometimes the monolith is actually the right choice.</em></p>

      <p>The real magic happens when you find the right boundaries. It's like drawing lines on a map: you want to create natural borders that make sense. User management? That's a clear boundary. Order processing? Another clear boundary. But trying to split "business logic" into microservices? That's a recipe for disaster.</p>

      <p>I also learned that microservices aren't just about the code. They're about the team, the deployment process, the monitoring, the debugging. Suddenly you're not just a developer: you're a systems architect, a DevOps engineer, a network administrator. It's overwhelming at first, but then it becomes empowering.</p>

      <p>And the best part? When something breaks, it's usually just one service that's having a bad day, not the entire application. It's like having a house where each room can catch fire independently: sure, you might lose the kitchen, but the rest of the house is still standing.</p>

      <p>So yeah, microservices changed how I think about building software. It's not just a technical decision: it's a philosophical one. You're choosing to embrace complexity in exchange for flexibility, and that's a trade-off that makes sense when you're building something that needs to scale.</p>

      <p>But remember: start small. Don't try to microservice everything on day one. Pick one thing, extract it, learn from it, then pick the next thing. It's a journey, not a destination.</p>
    `,
    date: "Jun 8, 2024",
    readTime: "7 min read",
    tags: [],
    featured: true,
    author: "Navneetha Rajan",
    slug: "building-scalable-microservices-spring-boot"
  },
  {
    id: "aws-optimization",
    title: "Optimizing AWS Infrastructure for Cost and Performance",
    excerpt: "When your bill gives you a heart attack",
    content: `
      <p>I'll never forget the day I opened my AWS bill and felt my heart drop into my stomach. <em style="color: #3b82f6;">$2,847.32</em> for a month of development work. I was supposed to be building a simple web application, not funding a small country's infrastructure.</p>

      <p>That's when I realized: <strong>I had no idea what I was doing with cloud costs.</strong></p>

      <p>I remember staring at the bill breakdown, trying to understand why my "simple" application was costing more than my rent. EC2 instances running 24/7, S3 buckets storing gigabytes of data I didn't need, RDS instances that were way oversized for my actual usage. It was like having a Ferrari when I only needed a bicycle.</p>

      <p>So I did what any reasonable person would do: I panicked, then I got curious. I started digging into AWS Cost Explorer, and that's when I discovered the dark art of cloud cost optimization.</p>

      <p>The first thing I learned? Right-sizing is everything. I had this EC2 instance running with 32GB of RAM and 8 vCPUs, but my application was barely using 2GB of memory. It was like having a mansion but only using the bathroom. I downsized to a t3.medium and suddenly my compute costs dropped by 80%.</p>

      <p>Then I discovered Spot Instances. It was like finding a secret menu at a restaurant. Same performance, 90% less cost. The catch? They can be terminated at any time. But for development and testing? Perfect. I started using them for everything non-critical, and my costs dropped even further.</p>

      <p>But here's where it got interesting: I realized that cost optimization isn't just about saving money: it's about understanding your application better. When you start paying attention to your resource usage, you start asking questions like <em style="color: #3b82f6;">"Why is this service running when no one is using it?"</em> and <em style="color: #3b82f6;">"Do we really need to store this data forever?"</em></p>

      <p>I remember this one time where I found an S3 bucket storing 50GB of log files from three years ago. Log files! I was paying $1.25 per month to store debugging information from 2021. I deleted it and felt like I had just won the lottery.</p>

      <p>Then came the auto-scaling revelation. Instead of running instances 24/7, I set up auto-scaling groups that would spin up instances only when needed. It was like having a smart thermostat for my infrastructure. Traffic spikes? More instances. Quiet period? Scale down. My costs dropped by another 60%.</p>

      <p>But the real game-changer was understanding that performance and cost optimization are often the same thing. When I optimized my database queries, not only did my application run faster, but my RDS costs dropped because the database was doing less work. When I implemented proper caching, my users got faster responses and I paid less for compute.</p>

      <p>I also learned to love CloudWatch alarms. Setting up alerts for unusual spending patterns was like having a financial advisor for my infrastructure. One time, I got an alert that my costs had spiked 300% in a day. Turned out, someone had accidentally left a data processing job running. Without that alert, it would have cost me hundreds of dollars.</p>

      <p>Now, my AWS bill is a fraction of what it used to be, and my application actually performs better. It's like I discovered that I could have a sports car that gets 50 miles per gallon.</p>

      <p>The lesson? Cloud cost optimization isn't about being cheap: it's about being smart. It's about understanding what you're actually using and paying only for what you need. And honestly, there's something deeply satisfying about watching your monthly bill go from thousands to hundreds.</p>

      <p>So if you're staring at a scary AWS bill, don't panic. Start small, monitor everything, and remember: the cloud is powerful, but it's also expensive if you're not careful.</p>
    `,
    date: "Oct 22, 2023",
    readTime: "8 min read",
    tags: [],
    featured: true,
    author: "Navneetha Rajan",
    slug: "optimizing-aws-infrastructure-cost-performance"
  },
  {
    id: "cloud-native-future",
    title: "The Future of Cloud-Native Development",
    excerpt: "Where software development is headed",
    content: `
      <p>I was sitting in a coffee shop in San Francisco, watching developers around me type furiously on their laptops, when it hit me: <strong>the way we build software is changing faster than I can keep up.</strong></p>

      <p>Just a few years ago, I was deploying applications by manually SSH-ing into servers and running commands. Now? I'm writing YAML files that describe entire infrastructure, and somehow it all just works. It's like we've gone from building houses brick by brick to having a 3D printer that can print entire neighborhoods.</p>

      <p>That's when I realized I was living in the future of cloud-native development, and honestly? It's both exhilarating and terrifying.</p>

      <p>Take serverless computing, for example. The first time I deployed a Lambda function, I was skeptical. <em style="color: #3b82f6;">"How can this possibly work?"</em> I thought. But then I saw my application scale from zero to handling thousands of requests in seconds, and I was like a kid who just discovered that magic is real. No servers to manage, no scaling to worry about: just pure, beautiful abstraction.</p>

      <p>But here's the thing about serverless: it's not just about the technology. It's about the mindset shift. You go from thinking about servers and infrastructure to thinking about functions and events. It's like switching from driving a car to riding a bike: you're still getting from point A to point B, but the experience is completely different.</p>

      <p>Then there's Kubernetes. Oh, Kubernetes. I remember the first time I tried to deploy something to a K8s cluster. I spent three days debugging why my pods weren't starting, only to realize I had forgotten to set the resource limits. It was like trying to park a car in a space that was too small: eventually you figure it out, but it's not pretty.</p>

      <p>But once you get the hang of it, Kubernetes becomes this beautiful orchestration system where you can deploy applications across multiple clouds, scale them automatically, and manage them declaratively. It's like having a conductor for your entire infrastructure.</p>

      <p>And then there's edge computing. I was working on a project where we needed to process data closer to the user, and suddenly I was deploying containers to edge locations around the world. It was like having mini-data centers in every city, processing data before it even reached the cloud. The latency improvements were mind-blowing.</p>

      <p>But the real game-changer? AI/ML integration. I remember this one time where I set up an auto-scaling system that used machine learning to predict traffic patterns. Instead of reacting to traffic spikes, it was predicting them and scaling up before they happened. It was like having a crystal ball for your infrastructure.</p>

      <p>And let's talk about security. The old way was like having a castle with a moat: you built walls and hoped they were strong enough. Now it's like having a smart home security system that knows exactly who should be where and when. Zero trust architecture means you never trust anything, and you verify everything. It's exhausting at first, but then you realize it's actually more secure.</p>

      <p>But here's what I've learned: cloud-native development isn't just about the tools. It's about the culture. You need teams that can work together, communicate effectively, and learn continuously. The technology changes so fast that if you're not constantly learning, you're falling behind.</p>

      <p>I also learned that not everything needs to be cloud-native. Sometimes a simple monolith is the right choice. I remember this one project where we over-engineered everything with microservices, and it became a nightmare to debug. Sometimes the old ways are still the best ways.</p>

      <p>So what's next? I think we're going to see more AI-driven development, more edge computing, and more integration between different cloud providers. But the key is to stay adaptable. The tools will change, the patterns will evolve, but the fundamentals of good software development will remain the same.</p>

      <p>The future is exciting, but it's also uncertain. The only thing I know for sure is that if you're not learning, you're falling behind. And in this world, falling behind means becoming irrelevant.</p>

      <p>So keep learning, keep experimenting, and remember: the best way to predict the future is to build it.</p>
    `,
    date: "Jan 3, 2024",
    readTime: "9 min read",
    tags: [],
    featured: true,
    author: "Navneetha Rajan",
    slug: "future-cloud-native-development"
  }
];

export const getFeaturedBlogs = () => {
  return blogPosts.filter(post => post.featured).slice(0, 3);
};

export const getAllBlogs = () => {
  return blogPosts;
};

export const getBlogById = (id: string) => {
  return blogPosts.find(post => post.id === id);
};

export const getBlogBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
}; 