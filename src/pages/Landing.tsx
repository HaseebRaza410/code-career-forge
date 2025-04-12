
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Landing = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<"english" | "hindi" | "urdu">("english");

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-purple text-white font-bold text-xl">
            CF
          </div>
          <span className="text-2xl font-bold">CodeForge</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="border rounded-md px-2 py-1">
            <select 
              className="bg-transparent" 
              value={language}
              onChange={(e) => setLanguage(e.target.value as "english" | "hindi" | "urdu")}
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="urdu">Urdu</option>
            </select>
          </div>
          <Button variant="outline" onClick={() => navigate("/login")}>Log In</Button>
          <Button onClick={() => navigate("/register")}>Sign Up</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Path to Becoming a Full-Stack Developer</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Learn at your own pace with structured roadmaps, expert videos, and a supportive community.
          </p>
          <div className="flex gap-4">
            <Button size="lg" onClick={() => navigate("/register")}>Get Started Free</Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/roadmap")}>
              View Roadmap
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://placehold.co/800x600/e2e8f0/475569?text=CodeForge+Learning+Platform" 
            alt="CodeForge Learning Platform" 
            className="rounded-lg shadow-xl w-full"
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose CodeForge?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.5L4.5 12L9 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 7.5L19.5 12L15 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Structured Learning Path</h3>
              <p className="text-muted-foreground">
                Follow our 12-month roadmap designed to take you from beginner to job-ready full-stack developer.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-orange" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Learn at Your Own Pace</h3>
              <p className="text-muted-foreground">
                Take your time with each concept. Track your progress and pick up where you left off.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Supportive Community</h3>
              <p className="text-muted-foreground">
                Learn alongside peers, ask questions, and get help when you're stuck.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">Success Stories</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <span className="font-semibold">AR</span>
              </div>
              <div>
                <h3 className="font-semibold">Ahsan R.</h3>
                <p className="text-sm text-muted-foreground mb-4">Frontend Developer at TechStart</p>
                <p className="italic">
                  "CodeForge's structured roadmap helped me transition from a non-tech background to a frontend role in just 8 months. The video tutorials and community support were game-changers for me."
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <span className="font-semibold">SP</span>
              </div>
              <div>
                <h3 className="font-semibold">Sarah P.</h3>
                <p className="text-sm text-muted-foreground mb-4">Full-Stack Developer</p>
                <p className="italic">
                  "I tried several platforms before finding CodeForge. The way they break down complex concepts made learning full-stack development approachable, even for someone like me who struggled with programming initially."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Coding Journey?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of students already learning on CodeForge</p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-brand-purple hover:bg-white/90"
            onClick={() => navigate("/register")}
          >
            Start Learning For Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/70 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-purple text-white font-bold text-sm">
                  CF
                </div>
                <span className="text-xl font-bold">CodeForge</span>
              </div>
              <p className="text-muted-foreground max-w-xs">
                Your path to becoming a full-stack developer with structured learning and community support.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Platform</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Roadmap</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Features</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Community</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Premium</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Videos</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Tutorials</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">About Us</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-6 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} CodeForge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
