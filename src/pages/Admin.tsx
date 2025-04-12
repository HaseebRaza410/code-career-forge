
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowUpCircle,
  CheckCircle2, 
  FilePlus, 
  Lock, 
  Plus, 
  Trash2, 
  Upload, 
  User, 
  Video
} from "lucide-react";

export default function Admin() {
  const [tabValue, setTabValue] = useState("videos");
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: ""
  });
  
  // Mock video form state
  const [videoForm, setVideoForm] = useState({
    title: "",
    description: "",
    youtubeId: "",
    category: "",
    language: "english",
    duration: 0,
    tags: ""
  });
  
  // Mock admin stats
  const adminStats = {
    totalVideos: 87,
    totalUsers: 524,
    totalTasks: 156,
    activeUsers: 327
  };
  
  // Mock recent users
  const recentUsers = [
    { id: "user1", name: "John Doe", email: "john@example.com", joinDate: "2025-04-10", plan: "Free" },
    { id: "user2", name: "Sarah Johnson", email: "sarah@example.com", joinDate: "2025-04-09", plan: "Premium" },
    { id: "user3", name: "Michael Brown", email: "michael@example.com", joinDate: "2025-04-08", plan: "Free" },
    { id: "user4", name: "Emily Davis", email: "emily@example.com", joinDate: "2025-04-07", plan: "Premium" }
  ];
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock admin authentication
    if (loginForm.username === "admin" && loginForm.password === "password") {
      setAdminAuthenticated(true);
    } else {
      alert("Invalid credentials. Use username: admin, password: password");
    }
  };
  
  const handleVideoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting video:", videoForm);
    // In a real app, we would submit to the backend
    alert("Video submitted successfully!");
    setVideoForm({
      title: "",
      description: "",
      youtubeId: "",
      category: "",
      language: "english",
      duration: 0,
      tags: ""
    });
  };
  
  if (!adminAuthenticated) {
    return (
      <div className="container py-12 max-w-md mx-auto">
        <Card>
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center mb-4">
              <Lock className="h-12 w-12 text-muted-foreground" />
            </div>
            <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input 
                    id="username" 
                    placeholder="admin"
                    value={loginForm.username}
                    onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password"
                    placeholder="••••••••"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login to Admin Panel
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-xs text-muted-foreground">
              Demo credentials: username: admin, password: password
            </p>
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
      <p className="text-muted-foreground mb-6">Manage content and users</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground">Total Videos</p>
                <h3 className="text-3xl font-bold">{adminStats.totalVideos}</h3>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Video className="h-6 w-6 text-blue-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground">Total Users</p>
                <h3 className="text-3xl font-bold">{adminStats.totalUsers}</h3>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <User className="h-6 w-6 text-green-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground">Total Tasks</p>
                <h3 className="text-3xl font-bold">{adminStats.totalTasks}</h3>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <CheckCircle2 className="h-6 w-6 text-purple-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground">Active Users</p>
                <h3 className="text-3xl font-bold">{adminStats.activeUsers}</h3>
              </div>
              <div className="p-3 bg-brand-orange/20 rounded-full">
                <ArrowUpCircle className="h-6 w-6 text-brand-orange" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="videos" value={tabValue} onValueChange={setTabValue}>
        <TabsList className="mb-6">
          <TabsTrigger value="videos">
            <Video className="h-4 w-4 mr-2" />
            Videos
          </TabsTrigger>
          <TabsTrigger value="tasks">
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Tasks
          </TabsTrigger>
          <TabsTrigger value="users">
            <User className="h-4 w-4 mr-2" />
            Users
          </TabsTrigger>
          <TabsTrigger value="files">
            <FilePlus className="h-4 w-4 mr-2" />
            Resources
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="videos">
          <div className="grid md:grid-cols-[2fr_1fr] gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Add New Video</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleVideoSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Video Title</Label>
                    <Input 
                      id="title"
                      placeholder="Enter video title"
                      value={videoForm.title}
                      onChange={(e) => setVideoForm({ ...videoForm, title: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description"
                      placeholder="Enter video description"
                      rows={4}
                      value={videoForm.description}
                      onChange={(e) => setVideoForm({ ...videoForm, description: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="youtubeId">YouTube Video ID</Label>
                    <Input 
                      id="youtubeId"
                      placeholder="e.g. dQw4w9WgXcQ"
                      value={videoForm.youtubeId}
                      onChange={(e) => setVideoForm({ ...videoForm, youtubeId: e.target.value })}
                    />
                    <p className="text-xs text-muted-foreground">
                      The ID is the part after ?v= in the YouTube URL
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <select 
                        id="category"
                        className="w-full rounded-md border p-2"
                        value={videoForm.category}
                        onChange={(e) => setVideoForm({ ...videoForm, category: e.target.value })}
                      >
                        <option value="">Select Category</option>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="React">React</option>
                        <option value="Node.js">Node.js</option>
                        <option value="MongoDB">MongoDB</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <select 
                        id="language"
                        className="w-full rounded-md border p-2"
                        value={videoForm.language}
                        onChange={(e) => setVideoForm({ ...videoForm, language: e.target.value })}
                      >
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                        <option value="urdu">Urdu</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration (in seconds)</Label>
                      <Input 
                        id="duration"
                        type="number"
                        placeholder="e.g. 600 for 10 minutes"
                        value={videoForm.duration || ""}
                        onChange={(e) => setVideoForm({ ...videoForm, duration: Number(e.target.value) })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tags">Tags (comma separated)</Label>
                      <Input 
                        id="tags"
                        placeholder="e.g. hooks, state, effect"
                        value={videoForm.tags}
                        onChange={(e) => setVideoForm({ ...videoForm, tags: e.target.value })}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Video
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Bulk Upload</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-medium mb-2">Upload CSV File</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Drag and drop a CSV file or click to browse
                  </p>
                  <Input 
                    type="file" 
                    accept=".csv" 
                    className="hidden" 
                    id="csv-upload" 
                  />
                  <label htmlFor="csv-upload">
                    <Button variant="outline" className="cursor-pointer" asChild>
                      <span>Browse Files</span>
                    </Button>
                  </label>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-medium mb-2">CSV Template Format</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Your CSV should have the following columns:
                  </p>
                  <div className="text-xs font-mono bg-muted p-2 rounded overflow-x-auto">
                    title,description,youtubeId,category,language,duration,tags
                  </div>
                  <Button variant="link" className="p-0 h-auto mt-2 text-xs">
                    Download template
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recent Videos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-12 gap-4 p-4 border-b font-medium">
                  <div className="col-span-5">Title</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-2">Language</div>
                  <div className="col-span-1">Duration</div>
                  <div className="col-span-2 text-right">Actions</div>
                </div>
                
                <div className="divide-y">
                  <div className="grid grid-cols-12 gap-4 p-4 items-center">
                    <div className="col-span-5">Getting Started with React Hooks</div>
                    <div className="col-span-2">React</div>
                    <div className="col-span-2">English</div>
                    <div className="col-span-1">10:15</div>
                    <div className="col-span-2 flex justify-end gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-12 gap-4 p-4 items-center">
                    <div className="col-span-5">CSS Grid Layout Tutorial</div>
                    <div className="col-span-2">CSS</div>
                    <div className="col-span-2">English</div>
                    <div className="col-span-1">15:30</div>
                    <div className="col-span-2 flex justify-end gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-12 gap-4 p-4 items-center">
                    <div className="col-span-5">Node.js API Development</div>
                    <div className="col-span-2">Node.js</div>
                    <div className="col-span-2">Hindi</div>
                    <div className="col-span-1">25:40</div>
                    <div className="col-span-2 flex justify-end gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <div className="text-sm text-muted-foreground">
                Showing 3 of 87 videos
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-12 gap-4 p-4 border-b font-medium">
                  <div className="col-span-3">Name</div>
                  <div className="col-span-4">Email</div>
                  <div className="col-span-2">Join Date</div>
                  <div className="col-span-1">Plan</div>
                  <div className="col-span-2 text-right">Actions</div>
                </div>
                
                <div className="divide-y">
                  {recentUsers.map(user => (
                    <div key={user.id} className="grid grid-cols-12 gap-4 p-4 items-center">
                      <div className="col-span-3">{user.name}</div>
                      <div className="col-span-4">{user.email}</div>
                      <div className="col-span-2">{user.joinDate}</div>
                      <div className="col-span-1">
                        <Badge variant={user.plan === "Premium" ? "default" : "outline"}>
                          {user.plan}
                        </Badge>
                      </div>
                      <div className="col-span-2 flex justify-end gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="destructive" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <div className="text-sm text-muted-foreground">
                Showing 4 of {adminStats.totalUsers} users
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="tasks">
          <Card>
            <CardHeader>
              <CardTitle>Task Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8">
                Task management interface coming soon.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="files">
          <Card>
            <CardHeader>
              <CardTitle>Resource Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8">
                Resource management interface coming soon.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
