
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Filter, Check, Clock, ChevronRight, Search } from "lucide-react";
import { mockTasks } from "@/lib/mock-data";
import { Task, TaskStatus } from "@/lib/types";
import { Link } from "react-router-dom";

export default function Tasks() {
  const [tasks] = useState<Task[]>(mockTasks);
  const [filter, setFilter] = useState<TaskStatus | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredTasks = tasks.filter(task => {
    // Filter by status
    if (filter !== "all" && task.status !== filter) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !task.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !task.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  const getStatusBadge = (status: TaskStatus) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500 hover:bg-green-600"><Check className="h-3 w-3 mr-1" /> Completed</Badge>;
      case "in-progress":
        return <Badge className="bg-brand-orange hover:bg-brand-orange/90"><Clock className="h-3 w-3 mr-1" /> In Progress</Badge>;
      default:
        return <Badge variant="outline">Not Started</Badge>;
    }
  };
  
  const tasksByCategory: Record<string, Task[]> = {};
  
  filteredTasks.forEach(task => {
    if (!tasksByCategory[task.category]) {
      tasksByCategory[task.category] = [];
    }
    tasksByCategory[task.category].push(task);
  });
  
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-2">Tasks</h1>
      <p className="text-muted-foreground mb-6">Manage and track your learning journey</p>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="relative w-full md:w-auto md:min-w-[300px]">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search tasks..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <select 
            className="bg-background border rounded-md px-3 py-1.5"
            value={filter}
            onChange={(e) => setFilter(e.target.value as TaskStatus | "all")}
          >
            <option value="all">All Tasks</option>
            <option value="not-started">Not Started</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Tasks</TabsTrigger>
          <TabsTrigger value="by-category">By Category</TabsTrigger>
          <TabsTrigger value="due-soon">Due Soon</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          {filteredTasks.length > 0 ? (
            filteredTasks.map(task => (
              <Card key={task.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="p-4 md:flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{task.title}</h4>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{task.description}</p>
                          <div className="flex flex-wrap items-center gap-2">
                            {getStatusBadge(task.status)}
                            <Badge variant="outline">{task.category}</Badge>
                            <span className="text-xs text-muted-foreground">
                              Due: {new Date(task.dueDate).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        
                        <Link to={`/tasks/${task.id}`}>
                          <Button variant="ghost" size="icon">
                            <ChevronRight className="h-5 w-5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                    
                    {task.resources.videos.length > 0 && (
                      <div className="bg-muted md:w-64 shrink-0">
                        <div className="aspect-video relative overflow-hidden">
                          <img 
                            src={`https://img.youtube.com/vi/${task.resources.videos[0].youtubeId}/mqdefault.jpg`} 
                            alt={task.resources.videos[0].title}
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="h-12 w-12 text-white opacity-80">
                              <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.5" />
                              <path d="M16 12L10 16V8L16 12Z" fill="white" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="p-8 text-center bg-muted rounded-lg">
              <h3 className="font-medium text-lg">No tasks found</h3>
              <p className="text-muted-foreground">Try changing your search criteria</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="by-category" className="space-y-8">
          {Object.keys(tasksByCategory).length > 0 ? (
            Object.entries(tasksByCategory).map(([category, categoryTasks]) => (
              <div key={category}>
                <h3 className="font-medium text-lg mb-3 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  {category}
                  <span className="text-sm text-muted-foreground ml-2">({categoryTasks.length} tasks)</span>
                </h3>
                
                <div className="grid gap-4">
                  {categoryTasks.map(task => (
                    <Card key={task.id}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{task.title}</h4>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{task.description}</p>
                            <div className="flex items-center gap-2">
                              {getStatusBadge(task.status)}
                              <span className="text-xs text-muted-foreground">
                                Due: {new Date(task.dueDate).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          
                          <Link to={`/tasks/${task.id}`}>
                            <Button variant="ghost" size="icon">
                              <ChevronRight className="h-5 w-5" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center bg-muted rounded-lg">
              <h3 className="font-medium text-lg">No tasks found</h3>
              <p className="text-muted-foreground">Try changing your search criteria</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="due-soon" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Tasks due in the next week will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
