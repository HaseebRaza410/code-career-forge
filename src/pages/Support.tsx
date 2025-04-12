
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Mail, MessageSquare, Send } from "lucide-react";

// FAQ data
const faqs = [
  {
    question: "How do I reset my password?",
    answer: "To reset your password, go to the login page and click on 'Forgot Password'. Enter your email address and follow the instructions sent to your email."
  },
  {
    question: "Can I download videos for offline viewing?",
    answer: "Currently, we don't support downloading videos for offline viewing. However, premium users can access all content from any device with internet connectivity."
  },
  {
    question: "How do I track my progress?",
    answer: "Your progress is automatically tracked as you complete tasks and watch videos. You can view your overall progress on the dashboard and detailed progress in the roadmap section."
  },
  {
    question: "Can I get a certificate after completing the course?",
    answer: "Yes, after completing the full roadmap, you'll receive a certificate of completion that you can share on your resume or LinkedIn profile."
  },
  {
    question: "What happens if I miss a scheduled session?",
    answer: "If you miss a scheduled session, you can reschedule it through the Schedule page. There's no penalty for rescheduling, but we encourage maintaining a consistent learning routine."
  },
  {
    question: "How can I contribute to the community?",
    answer: "You can contribute by participating in discussions, answering questions from other learners, and sharing your projects and experiences. Active community members may be invited to become mentors."
  },
  {
    question: "Is there a mobile app available?",
    answer: "We're currently developing mobile apps for iOS and Android. Stay tuned for the announcement. In the meantime, our website is fully responsive and works well on mobile devices."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and in select countries, bank transfers. All payments are securely processed through our payment partners."
  }
];

export default function Support() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
    // In a real app, we would send this to the backend
    alert("Your message has been sent! We'll get back to you soon.");
    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-2">Help & Support</h1>
      <p className="text-muted-foreground mb-6">Get help with your account and learning journey</p>
      
      <Tabs defaultValue="faq">
        <TabsList className="mb-6">
          <TabsTrigger value="faq">
            <HelpCircle className="h-4 w-4 mr-2" />
            FAQ
          </TabsTrigger>
          <TabsTrigger value="contact">
            <Mail className="h-4 w-4 mr-2" />
            Contact Us
          </TabsTrigger>
          <TabsTrigger value="chat">
            <MessageSquare className="h-4 w-4 mr-2" />
            Live Chat
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
            <CardFooter className="flex-col items-start border-t pt-6">
              <h3 className="font-medium mb-2">Didn't find what you're looking for?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Contact our support team for personalized assistance.
              </p>
              <Button onClick={() => document.querySelector('[value="contact"]')?.click()}>
                Contact Support
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="contact">
          <div className="grid md:grid-cols-[3fr_2fr] gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Our Support Team</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="john@example.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="How can we help you?"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your issue in detail..."
                      rows={6}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Support Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Response Time</h3>
                  <p className="text-sm text-muted-foreground">
                    We aim to respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Email Support</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    General Inquiries:
                  </p>
                  <a href="mailto:support@codeforge.com" className="text-brand-purple hover:underline">
                    support@codeforge.com
                  </a>
                  
                  <p className="text-sm text-muted-foreground mt-4 mb-1">
                    Technical Support:
                  </p>
                  <a href="mailto:tech@codeforge.com" className="text-brand-purple hover:underline">
                    tech@codeforge.com
                  </a>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Business Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM (UTC)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Saturday: 10:00 AM - 2:00 PM (UTC)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Sunday: Closed
                  </p>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Premium Support</h3>
                  <p className="text-sm mb-4">
                    Premium members receive priority support with faster response times.
                  </p>
                  <Button variant="outline" className="w-full" onClick={() => window.location.href = '/premium'}>
                    Upgrade to Premium
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="chat">
          <Card>
            <CardHeader>
              <CardTitle>Live Chat Support</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-2">Live Chat Coming Soon</h3>
              <p className="text-muted-foreground text-center max-w-md mb-6">
                We're working on implementing live chat support for faster assistance. 
                In the meantime, please use our contact form or email support.
              </p>
              <Button onClick={() => document.querySelector('[value="contact"]')?.click()}>
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Popular Help Topics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Getting Started</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn how to set up your account, navigate the platform, and begin your learning journey.
              </p>
              <Button variant="link" className="p-0 h-auto">View Guide</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Task Management</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Tips for organizing your tasks, tracking progress, and staying on schedule with your learning goals.
              </p>
              <Button variant="link" className="p-0 h-auto">View Guide</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Video Playback Issues</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Troubleshooting common video playback problems and optimizing your learning experience.
              </p>
              <Button variant="link" className="p-0 h-auto">View Guide</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
