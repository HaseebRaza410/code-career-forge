import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, Bookmark, Search } from "lucide-react";

// Mock data for community discussions
const discussions = [
  {
    id: '1',
    title: 'How to structure a React component?',
    author: {
      name: 'John Doe',
      avatar: '',
      initials: 'JD'
    },
    date: '2 days ago',
    likes: 15,
    replies: 7,
    category: 'React',
    content: 'I\'m new to React and I\'m wondering what\'s the best way to structure a component. Should I use functional or class components? Any recommendations?'
  },
  {
    id: '2',
    title: 'Fetch API vs Axios - Which one to use?',
    author: {
      name: 'Jane Smith',
      avatar: '',
      initials: 'JS'
    },
    date: '5 days ago',
    likes: 32,
    replies: 15,
    category: 'JavaScript',
    content: 'I\'ve been using the Fetch API, but many projects use Axios. What are the advantages of one over the other? When should I use each?'
  },
  {
    id: '3',
    title: 'Best practices for CSS in large applications',
    author: {
      name: 'Robert Johnson',
      avatar: '',
      initials: 'RJ'
    },
    date: '1 week ago',
    likes: 28,
    replies: 19,
    category: 'CSS',
    content: 'As my application grows, the CSS is becoming harder to maintain. What are the best practices for organizing CSS in large applications? Should I use CSS modules, styled components or something else?'
  },
];

export default function Community() {
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-2">Community Discussions</h1>
      <p className="text-muted-foreground mb-6">Learn from peers and share your knowledge</p>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/4">
          <div className="flex items-center justify-between mb-6">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search discussions..."
                className="pl-8"
              />
            </div>
            <Button>Start Discussion</Button>
          </div>
          
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Topics</TabsTrigger>
              <TabsTrigger value="html">HTML</TabsTrigger>
              <TabsTrigger value="css">CSS</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="react">React</TabsTrigger>
              <TabsTrigger value="node">Node.js</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              {discussions.map(discussion => (
                <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={discussion.author.avatar} alt={discussion.author.name} />
                        <AvatarFallback>{discussion.author.initials}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium text-lg">{discussion.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                              <span>{discussion.author.name}</span>
                              <span>•</span>
                              <span>{discussion.date}</span>
                              <Badge variant="outline">{discussion.category}</Badge>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <p className="text-sm mb-4">{discussion.content}</p>
                        
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{discussion.likes}</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-1">
                            <MessageSquare className="h-4 w-4" />
                            <span>{discussion.replies}</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            {/* Other tabs would have filtered content */}
            <TabsContent value="html" className="space-y-4">
              <p>HTML discussions will appear here</p>
            </TabsContent>
            <TabsContent value="css" className="space-y-4">
              <p>CSS discussions will appear here</p>
            </TabsContent>
            <TabsContent value="javascript" className="space-y-4">
              <p>JavaScript discussions will appear here</p>
            </TabsContent>
            <TabsContent value="react" className="space-y-4">
              <p>React discussions will appear here</p>
            </TabsContent>
            <TabsContent value="node" className="space-y-4">
              <p>Node.js discussions will appear here</p>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="lg:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>Popular Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent px-2 py-1">React</Badge>
                  <span className="text-xs text-muted-foreground">56 discussions</span>
                </div>
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent px-2 py-1">JavaScript</Badge>
                  <span className="text-xs text-muted-foreground">48 discussions</span>
                </div>
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent px-2 py-1">CSS</Badge>
                  <span className="text-xs text-muted-foreground">32 discussions</span>
                </div>
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent px-2 py-1">Node.js</Badge>
                  <span className="text-xs text-muted-foreground">29 discussions</span>
                </div>
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent px-2 py-1">MongoDB</Badge>
                  <span className="text-xs text-muted-foreground">18 discussions</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Community Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>1. Be respectful to all members</p>
              <p>2. Stay on topic and avoid spam</p>
              <p>3. Don't share personal information</p>
              <p>4. Cite sources when sharing information</p>
              <p>5. Report inappropriate content</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
