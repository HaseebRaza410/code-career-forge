import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  BookmarkPlus, 
  CheckCircle2, 
  Clock, 
  Link as LinkIcon,
  Save
} from "lucide-react";
import { Task, Note } from "@/lib/types";
import { mockTasks, mockNotes } from "@/lib/mock-data";

export default function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState<Task | undefined>();
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState("");
  const [status, setStatus] = useState<"not-started" | "in-progress" | "completed">("not-started");

  useEffect(() => {
    const foundTask = mockTasks.find(t => t.id === id);
    setTask(foundTask);
    
    if (foundTask) {
      setStatus(foundTask.status);
      
      const taskNotes = mockNotes.filter(note => note.taskId === id);
      setNotes(taskNotes);
    }
  }, [id]);

  const handleSaveNote = () => {
    if (!newNote.trim()) return;
    
    const newNoteObj: Note = {
      id: `note-${Date.now()}`,
      content: newNote,
      createdAt: new Date(),
      updatedAt: new Date(),
      taskId: id
    };
    
    setNotes([...notes, newNoteObj]);
    setNewNote("");
    
    console.log("Saving note:", newNoteObj);
  };

  const handleStatusChange = (newStatus: "not-started" | "in-progress" | "completed") => {
    setStatus(newStatus);
    
    console.log("Updating task status:", newStatus);
  };

  if (!task) {
    return <div className="container py-10">Loading task...</div>;
  }

  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-2">{task.title}</h1>
      <div className="flex items-center gap-2 mb-6">
        <Button 
          variant={status === "not-started" ? "default" : "outline"} 
          size="sm"
          onClick={() => handleStatusChange("not-started")}
        >
          Not Started
        </Button>
        <Button 
          variant={status === "in-progress" ? "default" : "outline"} 
          size="sm"
          onClick={() => handleStatusChange("in-progress")}
        >
          <Clock className="h-4 w-4 mr-1" />
          In Progress
        </Button>
        <Button 
          variant={status === "completed" ? "default" : "outline"} 
          size="sm"
          onClick={() => handleStatusChange("completed")}
        >
          <CheckCircle2 className="h-4 w-4 mr-1" />
          Completed
        </Button>
      </div>
      
      <p className="text-muted-foreground mb-6">{task.description}</p>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Learning Content</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="videos">
                <TabsList className="mb-4">
                  <TabsTrigger value="videos">Videos</TabsTrigger>
                  <TabsTrigger value="readings">Reading Materials</TabsTrigger>
                </TabsList>
                
                <TabsContent value="videos" className="space-y-4">
                  {task.resources.videos.length > 0 ? (
                    task.resources.videos.map(video => (
                      <div key={video.id} className="relative">
                        <div className="aspect-video rounded-md overflow-hidden">
                          <iframe 
                            src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                            title={video.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <div className="mt-2">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium">{video.title}</h3>
                            <Button variant="ghost" size="sm">
                              <BookmarkPlus className="h-4 w-4 mr-1" />
                              Save for Later
                            </Button>
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <span>{video.category}</span>
                            <span className="mx-1">•</span>
                            <span>{video.language}</span>
                            <span className="mx-1">•</span>
                            <span>
                              {Math.floor(video.duration / 60)}:{(video.duration % 60).toString().padStart(2, '0')}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No videos available for this task.</p>
                  )}
                </TabsContent>
                
                <TabsContent value="readings" className="space-y-4">
                  {task.resources.readings.length > 0 ? (
                    task.resources.readings.map((reading, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <LinkIcon className="h-4 w-4 text-muted-foreground" />
                        <a 
                          href={reading} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {reading.split('/').pop()?.replace(/-/g, ' ') || reading}
                        </a>
                      </div>
                    ))
                  ) : (
                    <p>No reading materials available for this task.</p>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Practice Exercises</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {task.resources.exercises.length > 0 ? (
                  task.resources.exercises.map((exercise, index) => (
                    <li key={index}>{exercise}</li>
                  ))
                ) : (
                  <p>No exercises available for this task.</p>
                )}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea 
                  placeholder="Add notes about this task..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  rows={5}
                  className="resize-none mb-2"
                />
                <Button onClick={handleSaveNote} className="w-full">
                  <Save className="h-4 w-4 mr-2" />
                  Save Note
                </Button>
                
                <div className="space-y-3 mt-6">
                  {notes.length > 0 ? (
                    notes.map(note => (
                      <div key={note.id} className="p-3 border rounded-md">
                        <p className="text-sm whitespace-pre-wrap">{note.content}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(note.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      You haven't added any notes yet.
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {task.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
