
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  Code, 
  FileText, 
  Laptop, 
  MessageSquare, 
  Video 
} from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded bg-brand-purple text-white font-bold">
              CF
            </div>
            <span className="text-xl font-bold">CodeForge</span>
          </div>
          
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#roadmap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Roadmap</a>
              <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            </nav>
            
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link to="/register">
                <Button>Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Become a Full-Stack Developer in One Year
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A structured learning path with curated content, projects, and mentorship to help you master web development
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Learning Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="#roadmap">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View Roadmap
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative hidden md:block">
              <div className="bg-gradient-to-br from-brand-purple to-brand-purple/60 h-[400px] w-[400px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 p-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4 border border-white/20">
                    <h3 className="font-medium text-white">Task: Build a React Component</h3>
                    <div className="mt-2 bg-white/5 rounded p-2">
                      <code className="text-xs text-white/80">
                        <pre>
{`function Button({ children }) {
  return (
    <button className="btn primary">
      {children}
    </button>
  );
}`}
                        </pre>
                      </code>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/90 mb-3">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm">HTML & CSS Basics</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/90 mb-3">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm">JavaScript Fundamentals</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/90 mb-3">
                    <div className="h-4 w-4 rounded-full border border-white/30"></div>
                    <span className="text-sm">React Components</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/50 mb-3">
                    <div className="h-4 w-4 rounded-full border border-white/20"></div>
                    <span className="text-sm">State Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-purple">150+</div>
              <div className="text-sm text-muted-foreground mt-1">Video Tutorials</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-purple">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Practice Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-purple">12</div>
              <div className="text-sm text-muted-foreground mt-1">Learning Modules</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-purple">5k+</div>
              <div className="text-sm text-muted-foreground mt-1">Active Learners</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform combines structured learning, hands-on practice, and community support
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-medium mb-2">Video Tutorials</h3>
              <p className="text-muted-foreground">
                Watch curated tutorials in English, Hindi, and Urdu, organized by topic and difficulty level
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-medium mb-2">Structured Roadmap</h3>
              <p className="text-muted-foreground">
                Follow a proven 12-month learning path from beginner to job-ready full-stack developer
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-4">
                <Laptop className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-medium mb-2">Practice Projects</h3>
              <p className="text-muted-foreground">
                Apply your knowledge through hands-on coding exercises and real-world projects
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-medium mb-2">Notes & Tracking</h3>
              <p className="text-muted-foreground">
                Take notes while learning and track your progress through the curriculum
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-medium mb-2">Community Support</h3>
              <p className="text-muted-foreground">
                Get help from fellow learners and mentors in our active discussion forum
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-brand-purple" viewBox="0 0 24 24" fill="none">
                  <path d="M21 14H14V21H21V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 14H3V21H10V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 3H14V10H21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 3H3V10H10V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Portfolio Builder</h3>
              <p className="text-muted-foreground">
                Create a professional portfolio showcasing your projects and skills to employers
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Roadmap Preview Section */}
      <section id="roadmap" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Your Learning Roadmap</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A step-by-step journey from beginner to professional developer
            </p>
          </div>
          
          <div className="relative pl-6 before:absolute before:left-2 before:top-8 before:h-[calc(100%-4rem)] before:w-px before:bg-muted space-y-8">
            {[
              { month: "Month 1-2", title: "Web Fundamentals", desc: "HTML, CSS basics, and introduction to JavaScript" },
              { month: "Month 3-4", title: "JavaScript Deep Dive", desc: "Advanced JavaScript concepts, ES6+, and DOM manipulation" },
              { month: "Month 5-6", title: "Frontend Frameworks", desc: "React.js fundamentals, components, hooks, and state management" },
              { month: "Month 7-8", title: "Backend Development", desc: "Node.js, Express, and REST API development" },
              { month: "Month 9-10", title: "Databases & Authentication", desc: "MongoDB, PostgreSQL, and implementing user authentication" },
              { month: "Month 11-12", title: "Full-Stack Projects", desc: "Building complete applications and preparing for job interviews" }
            ].map((stage, index) => (
              <div key={index} className="relative">
                <div className="absolute left-[-1.5rem] flex h-6 w-6 items-center justify-center bg-background">
                  <div className="h-3 w-3 rounded-full bg-brand-purple" />
                </div>
                
                <div className="bg-background rounded-lg border p-6">
                  <div className="badge bg-brand-purple/10 text-brand-purple text-xs px-2 py-1 rounded-full mb-2 inline-block">
                    {stage.month}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{stage.title}</h3>
                  <p className="text-muted-foreground">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/register">
              <Button size="lg">
                Start Your Learning Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Success stories from developers who started their journey with CodeForge
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center mr-3">
                  <span className="text-brand-purple font-medium">AP</span>
                </div>
                <div>
                  <h4 className="font-medium">Arun Patel</h4>
                  <p className="text-sm text-muted-foreground">Frontend Developer at TechCorp</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "I started with zero coding knowledge. After completing the program, I landed my dream job as a frontend developer. The structured approach made all the difference."
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center mr-3">
                  <span className="text-brand-purple font-medium">SJ</span>
                </div>
                <div>
                  <h4 className="font-medium">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The project-based learning approach helped me build a strong portfolio. I received multiple job offers even before completing the full program."
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center mr-3">
                  <span className="text-brand-purple font-medium">RK</span>
                </div>
                <div>
                  <h4 className="font-medium">Rahul Kumar</h4>
                  <p className="text-sm text-muted-foreground">Software Engineer</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The Hindi video options were extremely helpful for me. I could understand complex concepts better in my native language while still learning industry-standard English terminology."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that works best for your learning journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background rounded-lg border-2 p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Free Plan</h3>
                <div className="text-4xl font-bold mb-1">$0</div>
                <p className="text-muted-foreground">Forever free</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                  <span>Basic roadmap access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                  <span>Limited video tutorials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                  <span>Task tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                  <span>Community discussions</span>
                </li>
              </ul>
              
              <Link to="/register">
                <Button variant="outline" className="w-full">Get Started</Button>
              </Link>
            </div>
            
            <div className="bg-background rounded-lg border-2 border-brand-purple p-8 shadow-md relative">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-brand-orange text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
                <div className="text-4xl font-bold mb-1">$15</div>
                <p className="text-muted-foreground">per month</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                  <span>Complete roadmap access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                  <span>Full library of video tutorials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                  <span>Advanced task tracking and analytics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                  <span>Priority community support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                  <span>Exclusive premium videos & content</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                  <span>Professional portfolio templates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                  <span>One-on-one mentorship sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                  <span>Ad-free experience</span>
                </li>
              </ul>
              
              <Link to="/register">
                <Button className="w-full bg-brand-purple hover:bg-brand-purple/90">
                  Upgrade Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-brand-purple text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Developer Journey Today</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Join thousands of students who are building their future in web development
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-white text-brand-purple hover:bg-white/90">
              Create Free Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-background border-t py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded bg-brand-purple text-white font-bold text-sm">
                  CF
                </div>
                <span className="font-bold">CodeForge</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Your path to becoming a full-stack developer in one year
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Roadmap</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Testimonials</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Community</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Help Center</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">About Us</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact Us</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CodeForge. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
