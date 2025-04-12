
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronRight, Code, FileText, Layers, Play, Star, Users } from "lucide-react";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full py-4 px-4 md:px-8 bg-background border-b">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded bg-brand-purple text-white font-bold">
              CF
            </div>
            <span className="text-xl font-bold">CodeForge</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="#features" className="text-sm font-medium hover:text-brand-purple">Features</Link>
            <Link to="#roadmap" className="text-sm font-medium hover:text-brand-purple">Roadmap</Link>
            <Link to="#testimonials" className="text-sm font-medium hover:text-brand-purple">Testimonials</Link>
            <Link to="#pricing" className="text-sm font-medium hover:text-brand-purple">Pricing</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link to="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="py-16 px-4 md:py-24">
        <div className="container flex flex-col items-center text-center">
          <div className="inline-block rounded-full bg-brand-purpleLight px-3 py-1 text-sm font-medium text-brand-purple mb-6">
            Become a Full-Stack Developer in 1 Year
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mb-6">
            Master Web Development with a <span className="text-brand-purple">Structured Roadmap</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mb-10">
            CodeForge guides you from zero to job-ready developer through organized learning paths, embedded video tutorials, and hands-on projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto">
                Start Learning Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="#roadmap">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explore Roadmap
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 relative max-w-5xl">
            <div className="rounded-xl overflow-hidden shadow-xl border">
              <img 
                src="/placeholder.svg" 
                alt="CodeForge Dashboard Preview" 
                className="w-full aspect-video object-cover" 
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-3 shadow-lg border hidden md:block">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Track your progress</p>
                  <p className="text-sm text-muted-foreground">Never lose your place</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 px-4 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Learn Development</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive platform designed to keep you engaged and progressing at your own pace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-brand-purple/20 flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Structured Roadmap</h3>
              <p className="text-muted-foreground">
                Follow a clear, step-by-step learning path from HTML basics to advanced full-stack concepts.
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-brand-orange/20 flex items-center justify-center mb-4">
                <Play className="h-6 w-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">Embedded Learning</h3>
              <p className="text-muted-foreground">
                Watch curated English and Hindi/Urdu tutorials directly within the platform, with no distractions.
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Hands-on Projects</h3>
              <p className="text-muted-foreground">
                Apply what you've learned through practical coding exercises and build a real portfolio.
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Notes & Bookmarks</h3>
              <p className="text-muted-foreground">
                Save important concepts and videos for later review, with an integrated notes system.
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Support</h3>
              <p className="text-muted-foreground">
                Ask questions, troubleshoot problems, and connect with fellow learners in discussions.
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Gamified Experience</h3>
              <p className="text-muted-foreground">
                Earn badges, maintain streaks, and track your progress to stay motivated throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 md:py-24">
        <div className="container">
          <div className="bg-brand-purple rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10"></div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to start your developer journey?
              </h2>
              <p className="text-lg text-brand-purpleLight mb-8">
                Join thousands of aspiring developers who have transformed their careers with our structured learning approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-brand-purple hover:bg-white/90 w-full sm:w-auto">
                    Get Started For Free
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white w-full sm:w-auto">
                    Log In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/30 border-t">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded bg-brand-purple text-white font-bold">
                  CF
                </div>
                <span className="text-lg font-bold">CodeForge</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your path to becoming a full-stack developer in one year. Learn, build, and grow your skills.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Platform</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="#roadmap" className="text-muted-foreground hover:text-foreground">Roadmap</Link></li>
                <li><Link to="#features" className="text-muted-foreground hover:text-foreground">Features</Link></li>
                <li><Link to="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
                <li><Link to="#testimonials" className="text-muted-foreground hover:text-foreground">Testimonials</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Documentation</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Community</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CodeForge. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                </svg>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.27c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
