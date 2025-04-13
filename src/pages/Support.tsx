
import { useState, useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  HelpCircle, 
  FileText, 
  MessageSquare, 
  Search,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";

export default function Support() {
  const [activeTab, setActiveTab] = useState("faq");
  const [searchQuery, setSearchQuery] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  
  const faqs = [
    {
      question: "How do I track my progress?",
      answer: "Your progress is automatically tracked as you complete tasks and watch videos. You can view your progress on the dashboard and in detailed reports in your profile page."
    },
    {
      question: "Can I download videos for offline viewing?",
      answer: "Currently, videos cannot be downloaded directly from the platform. However, premium users can access a special link that allows for temporary offline access to content."
    },
    {
      question: "How do I reset my password?",
      answer: "To reset your password, go to the login page and click on 'Forgot Password?' Enter your email address and follow the instructions sent to your inbox."
    },
    {
      question: "Are there coding exercises for each lesson?",
      answer: "Yes, most lessons include practical coding exercises that reinforce the concepts taught in the videos. These exercises range from simple tasks to complex projects."
    },
    {
      question: "Can I get a certificate after completing the course?",
      answer: "Yes, upon completing all tasks in the roadmap, you'll receive a certificate of completion that you can add to your resume or LinkedIn profile."
    },
    {
      question: "How can I contribute to the platform?",
      answer: "We welcome contributions! You can suggest new content, report errors, or even submit your own tutorials. Contact us through the 'Contact Support' tab for more information."
    },
    {
      question: "Is there a mobile app available?",
      answer: "We're currently developing mobile apps for iOS and Android. For now, our website is fully responsive and works well on mobile browsers."
    },
    {
      question: "What languages are supported?",
      answer: "Currently, we offer content in English, Hindi, and Urdu. We're working on expanding to more languages in the future."
    }
  ];
  
  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!contactName || !contactEmail || !contactSubject || !contactMessage) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate ticket submission
    toast({
      title: "Ticket Submitted",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setContactName("");
    setContactEmail("");
    setContactSubject("");
    setContactMessage("");
  };
  
  const handleAttachFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-2">Help & Support</h1>
      <p className="text-muted-foreground mb-6">Find answers or get assistance with any questions</p>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="faq" className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4" />
            <span>FAQ</span>
          </TabsTrigger>
          <TabsTrigger value="guides" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span>Guides</span>
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span>Contact Support</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Find quick answers to common questions</CardDescription>
              <div className="relative mt-2">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search FAQs..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                      <div className="flex items-center justify-end mt-2 space-x-2">
                        <div className="text-xs text-muted-foreground">Was this helpful?</div>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <ThumbsUp className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <ThumbsDown className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <HelpCircle className="h-12 w-12 mx-auto text-muted-foreground" />
                    <h3 className="mt-2 font-medium">No results found</h3>
                    <p className="text-muted-foreground">
                      Try using different keywords or browse our guides.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="guides">
          <Card>
            <CardHeader>
              <CardTitle>Guides & Tutorials</CardTitle>
              <CardDescription>Step-by-step instructions for using the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="h-12 w-12 text-muted-foreground opacity-50">
                        <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.3" />
                        <path d="M15 12L10 15V9L15 12Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Getting Started</h3>
                    <p className="text-sm text-muted-foreground">Learn how to set up your account and navigate the platform.</p>
                    <Button variant="link" className="p-0 h-auto mt-1">Watch Guide</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="h-12 w-12 text-muted-foreground opacity-50">
                        <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.3" />
                        <path d="M15 12L10 15V9L15 12Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Using the Task Tracker</h3>
                    <p className="text-sm text-muted-foreground">Master the task management system to track your progress.</p>
                    <Button variant="link" className="p-0 h-auto mt-1">Watch Guide</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="h-12 w-12 text-muted-foreground opacity-50">
                        <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.3" />
                        <path d="M15 12L10 15V9L15 12Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Taking Effective Notes</h3>
                    <p className="text-sm text-muted-foreground">Tips for organizing and using the notes feature effectively.</p>
                    <Button variant="link" className="p-0 h-auto mt-1">Watch Guide</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="h-12 w-12 text-muted-foreground opacity-50">
                        <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.3" />
                        <path d="M15 12L10 15V9L15 12Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Building Your Portfolio</h3>
                    <p className="text-sm text-muted-foreground">Learn how to showcase your skills with the portfolio builder.</p>
                    <Button variant="link" className="p-0 h-auto mt-1">Watch Guide</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="h-12 w-12 text-muted-foreground opacity-50">
                        <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.3" />
                        <path d="M15 12L10 15V9L15 12Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Community Interaction</h3>
                    <p className="text-sm text-muted-foreground">How to engage with other learners and get help.</p>
                    <Button variant="link" className="p-0 h-auto mt-1">Watch Guide</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="h-12 w-12 text-muted-foreground opacity-50">
                        <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.3" />
                        <path d="M15 12L10 15V9L15 12Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Premium Features</h3>
                    <p className="text-sm text-muted-foreground">Explore the additional benefits available with premium membership.</p>
                    <Button variant="link" className="p-0 h-auto mt-1">Watch Guide</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Submit a ticket and we'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitTicket}>
                <div className="grid gap-4 md:grid-cols-2 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name <span className="text-red-500">*</span></Label>
                    <Input 
                      id="name" 
                      placeholder="Enter your name" 
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <Label htmlFor="subject">Subject <span className="text-red-500">*</span></Label>
                  <Input 
                    id="subject" 
                    placeholder="What's your inquiry about?" 
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2 mb-4">
                  <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your issue in detail" 
                    rows={5}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2 mb-6">
                  <Label htmlFor="attachment">Attachments (optional)</Label>
                  <div className="flex items-center gap-2">
                    <Button type="button" variant="outline" onClick={handleAttachFile}>
                      Add File
                    </Button>
                    <span className="text-sm text-muted-foreground">
                      Max file size: 5MB (PNG, JPG, PDF)
                    </span>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept=".png,.jpg,.jpeg,.pdf"
                    />
                  </div>
                </div>
                
                <div className="border rounded-md p-4 bg-muted/30 mb-6">
                  <h4 className="font-medium mb-2">Before contacting support:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Check our <Button variant="link" className="p-0 h-auto" onClick={() => setActiveTab("faq")}>FAQ section</Button> for quick answers</li>
                    <li>Review the <Button variant="link" className="p-0 h-auto" onClick={() => setActiveTab("guides")}>guides and tutorials</Button> for detailed help</li>
                    <li>For account-specific issues, please include your username and any error messages</li>
                  </ul>
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit">Submit Ticket</Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="border-t bg-muted/50 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">Average response time: <strong>12 hours</strong></span>
              </div>
              <div className="sm:ml-auto text-sm text-muted-foreground">
                Need urgent help? Email us directly at <a href="mailto:support@codeforge.com" className="text-blue-600">support@codeforge.com</a>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
