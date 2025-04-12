
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Calendar,
  Edit2, 
  FileText, 
  Folder, 
  MoreVertical, 
  Plus, 
  Search, 
  Trash2
} from "lucide-react";

// Mock data for notes
const mockNotes = [
  {
    id: "note1",
    title: "React Hooks Overview",
    content: "useState: For managing local state\nuseEffect: For side effects\nuseContext: For context access\nuseReducer: For complex state\nuseCallback: For memoized callbacks\nuseMemo: For memoized values\nuseRef: For persistent references",
    category: "React",
    createdAt: new Date(2025, 3, 10),
    relatedTask: "Getting Started with React"
  },
  {
    id: "note2",
    title: "CSS Grid Layout Properties",
    content: "grid-template-columns: Define the columns\ngrid-template-rows: Define the rows\ngrid-gap: Set the gap between items\ngrid-column: Specify column position\ngrid-row: Specify row position\nalign-items: Vertical alignment\njustify-items: Horizontal alignment",
    category: "CSS",
    createdAt: new Date(2025, 3, 8),
    relatedTask: "CSS Grid Layout Mastery"
  },
  {
    id: "note3",
    title: "JavaScript Promises",
    content: "Promises represent the eventual completion of an async operation.\n\nThree states:\n- Pending: Initial state\n- Fulfilled: Operation completed successfully\n- Rejected: Operation failed\n\nMethods:\n- Promise.then(): Handle fulfilled promise\n- Promise.catch(): Handle rejected promise\n- Promise.finally(): Executes regardless of success/failure",
    category: "JavaScript",
    createdAt: new Date(2025, 3, 5),
    relatedTask: "JavaScript Promises and Async/Await"
  }
];

export default function Notes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [notes, setNotes] = useState(mockNotes);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    category: "General"
  });
  const [selectedNote, setSelectedNote] = useState<string | null>(null);
  
  const filteredNotes = notes.filter(note => {
    if (!searchQuery) return true;
    
    return (
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  
  const handleSaveNote = () => {
    if (!newNote.title || !newNote.content) return;
    
    const newNoteObj = {
      id: `note-${Date.now()}`,
      title: newNote.title,
      content: newNote.content,
      category: newNote.category,
      createdAt: new Date(),
      relatedTask: ""
    };
    
    setNotes([...notes, newNoteObj]);
    setNewNote({
      title: "",
      content: "",
      category: "General"
    });
  };
  
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-2">Notes</h1>
      <p className="text-muted-foreground mb-6">Organize your learning notes and key concepts</p>
      
      <div className="grid md:grid-cols-[300px_1fr] gap-6">
        <div className="space-y-6">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search notes..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Folder className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>All Notes</span>
                </div>
                <Badge>{notes.length}</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Folder className="h-4 w-4 mr-2 text-blue-500" />
                  <span>React</span>
                </div>
                <Badge>{notes.filter(note => note.category === "React").length}</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Folder className="h-4 w-4 mr-2 text-purple-500" />
                  <span>CSS</span>
                </div>
                <Badge>{notes.filter(note => note.category === "CSS").length}</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Folder className="h-4 w-4 mr-2 text-yellow-500" />
                  <span>JavaScript</span>
                </div>
                <Badge>{notes.filter(note => note.category === "JavaScript").length}</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Folder className="h-4 w-4 mr-2 text-green-500" />
                  <span>General</span>
                </div>
                <Badge>{notes.filter(note => note.category === "General").length}</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => setSelectedNote(null)}>
                <Plus className="h-4 w-4 mr-2" />
                Create New Note
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Recent Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {filteredNotes
                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                .slice(0, 5)
                .map(note => (
                  <div 
                    key={note.id} 
                    className={`rounded-lg border p-3 cursor-pointer hover:bg-accent transition-colors ${selectedNote === note.id ? 'bg-accent' : ''}`}
                    onClick={() => setSelectedNote(note.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium line-clamp-1">{note.title}</h3>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{new Date(note.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Badge variant="outline">{note.category}</Badge>
                    </div>
                  </div>
                ))
              }
              
              {filteredNotes.length === 0 && (
                <div className="text-center py-4">
                  <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">No notes found</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Tabs defaultValue="view">
            <TabsList className="mb-6">
              <TabsTrigger value="view">View Notes</TabsTrigger>
              <TabsTrigger value="create">Create Note</TabsTrigger>
            </TabsList>
            
            <TabsContent value="view">
              {selectedNote ? (
                (() => {
                  const note = notes.find(n => n.id === selectedNote);
                  
                  if (!note) return (
                    <Card>
                      <CardContent className="p-8 text-center">
                        <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-xl font-medium mb-2">No note selected</h3>
                        <p className="text-muted-foreground">
                          Select a note from the list or create a new one
                        </p>
                      </CardContent>
                    </Card>
                  );
                  
                  return (
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{note.title}</CardTitle>
                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{new Date(note.createdAt).toLocaleDateString()}</span>
                              {note.relatedTask && (
                                <>
                                  <span className="mx-1">•</span>
                                  <span>Related to: {note.relatedTask}</span>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="icon">
                              <Edit2 className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Badge className="mb-4">{note.category}</Badge>
                        <div className="whitespace-pre-wrap">
                          {note.content}
                        </div>
                      </CardContent>
                      <CardFooter className="justify-between border-t pt-6">
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                        <Button size="sm">
                          <Edit2 className="h-4 w-4 mr-2" />
                          Edit Note
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })()
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">No note selected</h3>
                    <p className="text-muted-foreground mb-6">
                      Select a note from the list or create a new one
                    </p>
                    <Button onClick={() => document.querySelector('[value="create"]')?.click()}>
                      <Plus className="h-4 w-4 mr-2" />
                      Create New Note
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="create">
              <Card>
                <CardHeader>
                  <CardTitle>Create New Note</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium">Title</label>
                    <Input 
                      id="title"
                      placeholder="Note title"
                      value={newNote.title}
                      onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium">Category</label>
                    <select 
                      id="category"
                      className="w-full rounded-md border p-2"
                      value={newNote.category}
                      onChange={(e) => setNewNote({ ...newNote, category: e.target.value })}
                    >
                      <option value="General">General</option>
                      <option value="React">React</option>
                      <option value="JavaScript">JavaScript</option>
                      <option value="CSS">CSS</option>
                      <option value="HTML">HTML</option>
                      <option value="Node.js">Node.js</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="content" className="text-sm font-medium">Content</label>
                    <Textarea 
                      id="content"
                      placeholder="Write your note here..."
                      rows={12}
                      value={newNote.content}
                      onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                    />
                  </div>
                </CardContent>
                <CardFooter className="justify-between">
                  <Button variant="outline" onClick={() => document.querySelector('[value="view"]')?.click()}>
                    Cancel
                  </Button>
                  <Button onClick={handleSaveNote}>
                    <Plus className="h-4 w-4 mr-2" />
                    Save Note
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
