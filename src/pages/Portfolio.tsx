
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Code,
  ExternalLink,
  Github,
  Layers,
  Palette
} from "lucide-react";

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    title: "Full-stack Developer",
    bio: "I'm a passionate developer with experience in React, Node.js and MongoDB. I love building web applications and learning new technologies.",
    github: "johndoe",
    linkedin: "johndoe",
    website: "",
    email: "john@example.com",
    phone: "+1 123 456 7890"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-2">Portfolio Builder</h1>
      <p className="text-muted-foreground mb-6">Create and customize your developer portfolio</p>
      
      <Tabs defaultValue="editor">
        <TabsList className="mb-6">
          <TabsTrigger value="editor">
            <Layers className="h-4 w-4 mr-2" />
            Editor
          </TabsTrigger>
          <TabsTrigger value="templates">
            <Palette className="h-4 w-4 mr-2" />
            Templates
          </TabsTrigger>
          <TabsTrigger value="preview">
            <ExternalLink className="h-4 w-4 mr-2" />
            Preview
          </TabsTrigger>
          <TabsTrigger value="code">
            <Code className="h-4 w-4 mr-2" />
            Export Code
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="editor">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleInputChange} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="title">Professional Title</Label>
                        <Input 
                          id="title" 
                          name="title" 
                          value={formData.title} 
                          onChange={handleInputChange} 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Input 
                        id="bio" 
                        name="bio" 
                        value={formData.bio} 
                        onChange={handleInputChange} 
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="github">Github Username</Label>
                        <div className="flex">
                          <span className="flex items-center px-3 border border-r-0 rounded-l-md bg-muted">
                            <Github className="h-4 w-4" />
                          </span>
                          <Input 
                            id="github" 
                            name="github" 
                            value={formData.github} 
                            onChange={handleInputChange} 
                            className="rounded-l-none"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn Username</Label>
                        <Input 
                          id="linkedin" 
                          name="linkedin" 
                          value={formData.linkedin} 
                          onChange={handleInputChange} 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="website">Portfolio Website (optional)</Label>
                      <Input 
                        id="website" 
                        name="website" 
                        value={formData.website} 
                        onChange={handleInputChange} 
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email"
                          value={formData.email} 
                          onChange={handleInputChange} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number (optional)</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleInputChange} 
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Skills & Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Skills from your completed tasks will be automatically added here.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">HTML5</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">CSS3</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">JavaScript</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Node.js</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Express</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">MongoDB</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Git</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Projects you've completed will appear here automatically.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium">Personal Blog</h3>
                      <p className="text-sm text-muted-foreground mb-2">A responsive blog built with React and styled-components</p>
                      <div className="flex gap-2 text-xs">
                        <span className="bg-muted px-2 py-1 rounded">React</span>
                        <span className="bg-muted px-2 py-1 rounded">styled-components</span>
                        <span className="bg-muted px-2 py-1 rounded">Netlify</span>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium">Weather App</h3>
                      <p className="text-sm text-muted-foreground mb-2">A weather application using OpenWeather API</p>
                      <div className="flex gap-2 text-xs">
                        <span className="bg-muted px-2 py-1 rounded">JavaScript</span>
                        <span className="bg-muted px-2 py-1 rounded">API</span>
                        <span className="bg-muted px-2 py-1 rounded">CSS</span>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium">Task Manager</h3>
                      <p className="text-sm text-muted-foreground mb-2">A full-stack task management app</p>
                      <div className="flex gap-2 text-xs">
                        <span className="bg-muted px-2 py-1 rounded">MongoDB</span>
                        <span className="bg-muted px-2 py-1 rounded">Express</span>
                        <span className="bg-muted px-2 py-1 rounded">React</span>
                        <span className="bg-muted px-2 py-1 rounded">Node.js</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Add Custom Project
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Deployment Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Github className="h-5 w-5" />
                        <div>
                          <h3 className="font-medium">GitHub Pages</h3>
                          <p className="text-xs text-muted-foreground">Deploy directly to GitHub Pages</p>
                        </div>
                      </div>
                      <Button size="sm">Connect</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 21C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20Z" fill="black"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.92963 15.4474L11.7928 6.5H14.8856L11.022 15.4474H7.92963Z" fill="white"/>
                        </svg>
                        <div>
                          <h3 className="font-medium">Vercel</h3>
                          <p className="text-xs text-muted-foreground">Deploy to Vercel for fast hosting</p>
                        </div>
                      </div>
                      <Button size="sm">Connect</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="24" height="24" rx="4" fill="#32E6E2"/>
                          <path d="M12.2266 5L7.22656 17.9993H9.05316L10.0759 15.461H15.304L16.3372 17.9993H18.1638L13.1638 5H12.2266ZM12.6999 7.56267L14.7613 13.9993H10.6105L12.6999 7.56267Z" fill="black"/>
                        </svg>
                        <div>
                          <h3 className="font-medium">Netlify</h3>
                          <p className="text-xs text-muted-foreground">Deploy to Netlify with CI/CD</p>
                        </div>
                      </div>
                      <Button size="sm">Connect</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="templates">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <img 
                src="https://placehold.co/600x400/e2e8f0/475569?text=Minimal+Template" 
                alt="Minimal Template" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-medium mb-1">Minimal</h3>
                <p className="text-sm text-muted-foreground mb-4">Clean and simple portfolio design</p>
                <Button variant="outline" className="w-full">Use Template</Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <img 
                src="https://placehold.co/600x400/e2e8f0/475569?text=Modern+Template" 
                alt="Modern Template" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-medium mb-1">Modern</h3>
                <p className="text-sm text-muted-foreground mb-4">Bold and contemporary design</p>
                <Button variant="outline" className="w-full">Use Template</Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <img 
                src="https://placehold.co/600x400/e2e8f0/475569?text=Creative+Template" 
                alt="Creative Template" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-medium mb-1">Creative</h3>
                <p className="text-sm text-muted-foreground mb-4">Unique and artistic portfolio layout</p>
                <div className="flex items-center justify-between">
                  <Button variant="outline" className="w-full">Use Template</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="preview">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-muted p-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center text-xs">Portfolio Preview</div>
            </div>
            <div className="h-[600px] bg-white p-4 overflow-auto">
              <div className="max-w-3xl mx-auto">
                <header className="py-12 text-center">
                  <h1 className="text-4xl font-bold mb-2">{formData.name}</h1>
                  <p className="text-xl text-muted-foreground mb-4">{formData.title}</p>
                  <p className="max-w-xl mx-auto">{formData.bio}</p>
                  
                  <div className="flex justify-center gap-4 mt-6">
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm">
                      <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm">
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
                      </svg>
                      Email
                    </Button>
                  </div>
                </header>
                
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Skills & Technologies</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">HTML5</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">CSS3</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">JavaScript</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Node.js</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Express</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">MongoDB</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Git</span>
                  </div>
                </section>
                
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Projects</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-lg overflow-hidden">
                      <img 
                        src="https://placehold.co/600x300/e2e8f0/475569?text=Project+1" 
                        alt="Project 1" 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-medium mb-1">Personal Blog</h3>
                        <p className="text-sm text-muted-foreground mb-2">A responsive blog built with React and styled-components</p>
                        <div className="flex gap-2 text-xs mb-4">
                          <span className="bg-muted px-2 py-1 rounded">React</span>
                          <span className="bg-muted px-2 py-1 rounded">styled-components</span>
                          <span className="bg-muted px-2 py-1 rounded">Netlify</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">View Demo</Button>
                          <Button size="sm" variant="outline">Source Code</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                      <img 
                        src="https://placehold.co/600x300/e2e8f0/475569?text=Project+2" 
                        alt="Project 2" 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-medium mb-1">Weather App</h3>
                        <p className="text-sm text-muted-foreground mb-2">A weather application using OpenWeather API</p>
                        <div className="flex gap-2 text-xs mb-4">
                          <span className="bg-muted px-2 py-1 rounded">JavaScript</span>
                          <span className="bg-muted px-2 py-1 rounded">API</span>
                          <span className="bg-muted px-2 py-1 rounded">CSS</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">View Demo</Button>
                          <Button size="sm" variant="outline">Source Code</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Contact</h2>
                  <div className="flex flex-col md:flex-row md:justify-around">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
                      </svg>
                      <span>{formData.email}</span>
                    </div>
                    
                    {formData.phone && (
                      <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.48 22c-1.41 0-3.25-.42-5.92-2.08c-2.97-1.75-5.96-4.69-8.45-8.26C1.3 7.56 1.5 5.38 1.56 4.53c.09-1.47.5-2.82 1.19-3.93C3.18 .15 3.74 0 4.14 0c.78 0 1.36 0 1.95 .09c.87 .1 1.66 .65 2.04 1.43c.52 1.02 1.25 2.87 1.34 3.13c.3 .76 .09 1.55-.45 2.11c-.5 .54-.89 .97-.99 1.09c.17 .5 .63 1.5 1.83 2.78c1.23 1.3 1.96 1.68 2.33 1.8c.18-.2 .61-.56 1.07-1.01c.6-.54 1.4-.65 2.19-.34c.65 .27 2.26 .95 3.14 1.42c.58 .29 1.04 .79 1.25 1.38c.17 .43 .15 .89-.01 1.29c-.31 .78-.96 2.39-1.28 3.19c-.2 .48-.59 .91-1.07 1.19c-1.29 .72-2.84 .8-3.11 .8c-.13 0-.25 0-.39-.01c-.13 0-.26-.01-.4-.01Z"></path>
                        </svg>
                        <span>{formData.phone}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                      <Github className="h-5 w-5" />
                      <a href={`https://github.com/${formData.github}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        github.com/{formData.github}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                      <a href={`https://linkedin.com/in/${formData.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        linkedin.com/in/{formData.linkedin}
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Export Options</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Download as ZIP</h3>
                      <p className="text-sm text-muted-foreground">Get all HTML, CSS and JavaScript files</p>
                    </div>
                    <Button>
                      Download ZIP
                    </Button>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Deploy to GitHub Pages</h3>
                      <p className="text-sm text-muted-foreground">Push directly to your GitHub repository</p>
                    </div>
                    <Button variant="outline">
                      <Github className="h-4 w-4 mr-2" />
                      Connect GitHub
                    </Button>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Copy HTML Code</h3>
                      <p className="text-sm text-muted-foreground">Copy the HTML code to your clipboard</p>
                    </div>
                    <Button variant="outline">
                      Copy HTML
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
