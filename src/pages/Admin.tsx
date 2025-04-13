
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { User } from "@/lib/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { 
  Users, 
  Video as VideoIcon, 
  FileText, 
  BarChart2, 
  Settings, 
  Upload,
  PlusCircle, 
  Check, 
  AlertTriangle,
  Search 
} from "lucide-react";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("overview");
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();
  
  useEffect(() => {
    // Mock data - would be replaced with Supabase query
    const mockUsers: User[] = [
      {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        joinedAt: new Date(2023, 1, 15),
        streak: 5,
        lastActive: new Date(2023, 3, 10),
        isPremium: true
      },
      {
        id: "2",
        name: "Jane Smith",
        email: "jane@example.com",
        joinedAt: new Date(2023, 2, 20),
        streak: 12,
        lastActive: new Date(2023, 3, 11),
        isPremium: false
      },
      {
        id: "3",
        name: "Mike Johnson",
        email: "mike@example.com",
        joinedAt: new Date(2023, 0, 5),
        streak: 30,
        lastActive: new Date(2023, 3, 9),
        isPremium: true
      },
      {
        id: "4",
        name: "Sarah Williams",
        email: "sarah@example.com",
        joinedAt: new Date(2023, 3, 1),
        streak: 2,
        lastActive: new Date(2023, 3, 11),
        isPremium: false
      },
      {
        id: "5",
        name: "David Brown",
        email: "david@example.com",
        joinedAt: new Date(2022, 11, 10),
        streak: 45,
        lastActive: new Date(2023, 3, 8),
        isPremium: true
      }
    ];
    
    setUsers(mockUsers);
  }, []);
  
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleVideoUpload = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Video Added",
      description: "The video has been successfully added to the library.",
    });
  };
  
  const handleTaskCreate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Task Created",
      description: "The new task has been successfully created.",
    });
  };
  
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
      <p className="text-muted-foreground mb-6">Manage content, users, and analyze platform metrics</p>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-5 gap-4">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <BarChart2 className="h-4 w-4" />
            <span>Overview</span>
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>Users</span>
          </TabsTrigger>
          <TabsTrigger value="content" className="flex items-center gap-2">
            <VideoIcon className="h-4 w-4" />
            <span>Content</span>
          </TabsTrigger>
          <TabsTrigger value="tasks" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span>Tasks</span>
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,451</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,587</div>
                <p className="text-xs text-muted-foreground">+5% from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Videos Watched</CardTitle>
                <VideoIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,458</div>
                <p className="text-xs text-muted-foreground">+18% from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
                <Check className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8,745</div>
                <p className="text-xs text-muted-foreground">+7% from last month</p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Latest actions on the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div>
                    <p className="text-sm font-medium">New user registered</p>
                    <p className="text-xs text-muted-foreground">John Smith (john@example.com)</p>
                  </div>
                  <div className="ml-auto text-xs text-muted-foreground">10 minutes ago</div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div>
                    <p className="text-sm font-medium">New video uploaded</p>
                    <p className="text-xs text-muted-foreground">React Hooks Tutorial (Part 3)</p>
                  </div>
                  <div className="ml-auto text-xs text-muted-foreground">1 hour ago</div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <div>
                    <p className="text-sm font-medium">Premium subscription purchased</p>
                    <p className="text-xs text-muted-foreground">Sarah Williams (sarah@example.com)</p>
                  </div>
                  <div className="ml-auto text-xs text-muted-foreground">3 hours ago</div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div>
                    <p className="text-sm font-medium">Error reported</p>
                    <p className="text-xs text-muted-foreground">Video playback issue on iOS devices</p>
                  </div>
                  <div className="ml-auto text-xs text-muted-foreground">5 hours ago</div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <div>
                    <p className="text-sm font-medium">New task created</p>
                    <p className="text-xs text-muted-foreground">Building a REST API with Node.js</p>
                  </div>
                  <div className="ml-auto text-xs text-muted-foreground">1 day ago</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>View and manage all users on the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <div className="relative w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search users..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button>
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add User
                </Button>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Streak</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.joinedAt.toLocaleDateString()}</TableCell>
                      <TableCell>{user.streak} days</TableCell>
                      <TableCell>{user.lastActive.toLocaleDateString()}</TableCell>
                      <TableCell>
                        {user.isPremium ? (
                          <Badge className="bg-brand-purple">Premium</Badge>
                        ) : (
                          <Badge variant="outline">Free</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload New Video</CardTitle>
              <CardDescription>Add a new video to the learning library</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleVideoUpload} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="title">Video Title</Label>
                    <Input id="title" placeholder="Enter video title" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="youtubeId">YouTube Video ID</Label>
                    <Input id="youtubeId" placeholder="e.g. dQw4w9WgXcQ" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Enter video description" rows={4} />
                </div>
                
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <select id="category" className="w-full border rounded-md p-2">
                      <option>HTML & CSS</option>
                      <option>JavaScript</option>
                      <option>React</option>
                      <option>Node.js</option>
                      <option>Database</option>
                      <option>DevOps</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <select id="language" className="w-full border rounded-md p-2">
                      <option>English</option>
                      <option>Hindi</option>
                      <option>Urdu</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="difficulty">Difficulty</Label>
                    <select id="difficulty" className="w-full border rounded-md p-2">
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration (in seconds)</Label>
                    <Input id="duration" type="number" placeholder="e.g. 600" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="thumbnail">Thumbnail Image</Label>
                    <div className="flex items-center gap-2">
                      <Input id="thumbnail" type="file" className="flex-1" />
                      <Button type="button" variant="outline">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add Video
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tasks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create New Task</CardTitle>
              <CardDescription>Add a new task for users to complete</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTaskCreate} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="taskTitle">Task Title</Label>
                  <Input id="taskTitle" placeholder="Enter task title" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="taskDescription">Description</Label>
                  <Textarea id="taskDescription" placeholder="Enter task description" rows={4} />
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="taskCategory">Category</Label>
                    <select id="taskCategory" className="w-full border rounded-md p-2">
                      <option>HTML & CSS</option>
                      <option>JavaScript</option>
                      <option>React</option>
                      <option>Node.js</option>
                      <option>Database</option>
                      <option>DevOps</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dueDate">Due Date</Label>
                    <Input id="dueDate" type="date" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="resources">Learning Resources (YouTube Video IDs, comma separated)</Label>
                  <Input id="resources" placeholder="e.g. dQw4w9WgXcQ, xvFZjo5PgG0" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="readingLinks">Reading Materials (URLs, one per line)</Label>
                  <Textarea id="readingLinks" placeholder="https://example.com/article1&#10;https://example.com/article2" rows={2} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="exercises">Practice Exercises (one per line)</Label>
                  <Textarea id="exercises" placeholder="Build a simple React component&#10;Implement a responsive navbar" rows={3} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags (comma separated)</Label>
                  <Input id="tags" placeholder="e.g. frontend, react, hooks" />
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Create Task
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Platform Settings</CardTitle>
              <CardDescription>Manage global settings for the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="siteTitle">Site Title</Label>
                  <Input id="siteTitle" defaultValue="CodeForge" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Site Description</Label>
                  <Textarea id="description" defaultValue="Your path to becoming a full-stack developer" rows={2} />
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Contact Email</Label>
                    <Input id="contactEmail" type="email" defaultValue="contact@codeforge.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="supportEmail">Support Email</Label>
                    <Input id="supportEmail" type="email" defaultValue="support@codeforge.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Featured Section</Label>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="enableFeatured" defaultChecked />
                    <label htmlFor="enableFeatured">Enable Featured Section on Homepage</label>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Maintenance Mode</Label>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="maintenanceMode" />
                    <label htmlFor="maintenanceMode">Enable Maintenance Mode</label>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                Danger Zone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Clear Cache</h4>
                  <p className="text-sm text-muted-foreground">Removes all cached data from the system. This might temporarily slow down the platform.</p>
                  <Button variant="outline" className="text-orange-500 border-orange-200">Clear Cache</Button>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Reset All User Progress</h4>
                  <p className="text-sm text-muted-foreground">This will reset all users' progress data. This action cannot be undone.</p>
                  <Button variant="outline" className="text-red-500 border-red-200">Reset Progress</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
