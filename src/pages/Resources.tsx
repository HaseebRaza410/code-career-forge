
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Code, 
  Download, 
  ExternalLink, 
  FileText, 
  Link, 
  Search,
  Star 
} from "lucide-react";

// Mock data for resources
const resources = [
  {
    id: "res1",
    title: "React Official Documentation",
    url: "https://reactjs.org/docs/getting-started.html",
    description: "The official React documentation with guides, API reference, and tutorials.",
    category: "Documentation",
    tags: ["React", "Frontend"],
    rating: 5
  },
  {
    id: "res2",
    title: "MDN Web Docs",
    url: "https://developer.mozilla.org/",
    description: "Resources for developers, by developers. Documentation for HTML, CSS, JavaScript, and Web APIs.",
    category: "Documentation",
    tags: ["HTML", "CSS", "JavaScript"],
    rating: 5
  },
  {
    id: "res3",
    title: "JavaScript: The Good Parts",
    url: "https://www.oreilly.com/library/view/javascript-the-good/9780596517748/",
    description: "A book by Douglas Crockford on JavaScript best practices and patterns.",
    category: "Book",
    tags: ["JavaScript", "Programming"],
    rating: 4
  },
  {
    id: "res4",
    title: "CSS Tricks",
    url: "https://css-tricks.com/",
    description: "A website dedicated to teaching all things web design and development, with a focus on CSS.",
    category: "Website",
    tags: ["CSS", "Web Design"],
    rating: 4
  },
  {
    id: "res5",
    title: "GitHub Learning Lab",
    url: "https://lab.github.com/",
    description: "Interactive courses on GitHub, Git, and software development processes.",
    category: "Interactive Course",
    tags: ["Git", "GitHub", "Development"],
    rating: 4
  },
  {
    id: "res6",
    title: "Node.js Documentation",
    url: "https://nodejs.org/en/docs/",
    description: "The official Node.js documentation with API reference, guides, and examples.",
    category: "Documentation",
    tags: ["Node.js", "Backend", "JavaScript"],
    rating: 5
  }
];

// Cheatsheets mock data
const cheatsheets = [
  {
    id: "cheat1",
    title: "React Hooks Cheatsheet",
    description: "A comprehensive guide to all React hooks with examples and usage patterns.",
    fileType: "PDF",
    fileSize: "2.4MB",
    category: "React"
  },
  {
    id: "cheat2",
    title: "CSS Flexbox & Grid Cheatsheet",
    description: "Visual guide to Flexbox and Grid layouts with common patterns.",
    fileType: "PDF",
    fileSize: "3.1MB",
    category: "CSS"
  },
  {
    id: "cheat3",
    title: "JavaScript Array Methods",
    description: "Complete reference for JavaScript array methods with examples.",
    fileType: "PDF",
    fileSize: "1.8MB",
    category: "JavaScript"
  },
  {
    id: "cheat4",
    title: "Git Command Reference",
    description: "Common Git commands and workflows for everyday development.",
    fileType: "PDF",
    fileSize: "1.2MB",
    category: "Git"
  },
  {
    id: "cheat5",
    title: "Regular Expressions Cheatsheet",
    description: "Syntax, patterns, and examples for regular expressions in JavaScript.",
    fileType: "PDF",
    fileSize: "0.9MB",
    category: "JavaScript"
  }
];

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredResources = resources.filter(resource => {
    if (!searchQuery) return true;
    
    return (
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });
  
  const filteredCheatsheets = cheatsheets.filter(cheatsheet => {
    if (!searchQuery) return true;
    
    return (
      cheatsheet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cheatsheet.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cheatsheet.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`} 
      />
    ));
  };
  
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-2">Learning Resources</h1>
      <p className="text-muted-foreground mb-6">Curated resources to enhance your learning journey</p>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="relative w-full md:w-auto md:min-w-[300px]">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search resources..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <Tabs defaultValue="websites">
        <TabsList className="mb-6">
          <TabsTrigger value="websites">
            <Link className="h-4 w-4 mr-2" />
            Websites & Docs
          </TabsTrigger>
          <TabsTrigger value="cheatsheets">
            <FileText className="h-4 w-4 mr-2" />
            Cheatsheets
          </TabsTrigger>
          <TabsTrigger value="ebooks">
            <BookOpen className="h-4 w-4 mr-2" />
            E-Books
          </TabsTrigger>
          <TabsTrigger value="code">
            <Code className="h-4 w-4 mr-2" />
            Code Examples
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="websites">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map(resource => (
              <Card key={resource.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex flex-col h-full">
                      <h3 className="font-medium text-lg mb-2">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="bg-muted">{resource.category}</Badge>
                        {resource.tags.map(tag => (
                          <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex">
                          {renderStars(resource.rating)}
                        </div>
                        <a 
                          href={resource.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-brand-purple hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Visit
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {filteredResources.length === 0 && (
              <div className="col-span-full p-8 text-center bg-muted rounded-lg">
                <h3 className="font-medium text-lg">No resources found</h3>
                <p className="text-muted-foreground">Try changing your search criteria</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="cheatsheets">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCheatsheets.map(cheatsheet => (
              <Card key={cheatsheet.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg mb-1">{cheatsheet.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{cheatsheet.description}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Badge variant="outline">{cheatsheet.category}</Badge>
                        <span className="ml-2">{cheatsheet.fileType} • {cheatsheet.fileSize}</span>
                      </div>
                    </div>
                    <Button>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {filteredCheatsheets.length === 0 && (
              <div className="col-span-full p-8 text-center bg-muted rounded-lg">
                <h3 className="font-medium text-lg">No cheatsheets found</h3>
                <p className="text-muted-foreground">Try changing your search criteria</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="ebooks">
          <Card>
            <CardHeader>
              <CardTitle>E-Books</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8">
                Coming soon! We're curating a collection of e-books for you.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Code Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8">
                Coming soon! We're building a library of code examples and starter templates.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Recommended Learning Path</h2>
        
        <div className="bg-accent rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-3">For Beginners</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                    <span className="text-green-700 text-xs">1</span>
                  </div>
                  <span>HTML & CSS Fundamentals</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                    <span className="text-green-700 text-xs">2</span>
                  </div>
                  <span>JavaScript Basics</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                    <span className="text-green-700 text-xs">3</span>
                  </div>
                  <span>Introduction to React</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                    <span className="text-green-700 text-xs">4</span>
                  </div>
                  <span>Building Simple Web Applications</span>
                </li>
              </ul>
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-3">For Intermediate</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <span className="text-blue-700 text-xs">1</span>
                  </div>
                  <span>Advanced JavaScript Concepts</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <span className="text-blue-700 text-xs">2</span>
                  </div>
                  <span>React Hooks & Context API</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <span className="text-blue-700 text-xs">3</span>
                  </div>
                  <span>State Management with Redux</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <span className="text-blue-700 text-xs">4</span>
                  </div>
                  <span>Node.js & Express Basics</span>
                </li>
              </ul>
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-3">For Advanced</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                    <span className="text-purple-700 text-xs">1</span>
                  </div>
                  <span>Full-Stack Development</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                    <span className="text-purple-700 text-xs">2</span>
                  </div>
                  <span>Database Design & ORM</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                    <span className="text-purple-700 text-xs">3</span>
                  </div>
                  <span>Authentication & Authorization</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                    <span className="text-purple-700 text-xs">4</span>
                  </div>
                  <span>Deployment & DevOps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
