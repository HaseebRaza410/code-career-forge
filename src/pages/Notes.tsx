import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NoteEditor } from "@/components/notes/NoteEditor";
import { mockNotes } from "@/lib/mock-data";
import { Note } from "@/lib/types";
import { 
  FileText, 
  Folder, 
  Plus, 
  Search, 
  Tag,
  Trash2,
  Share2,
  AlertTriangle,
  Save
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>(mockNotes);
  const [activeNote, setActiveNote] = useState<Note | null>(notes[0] || null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  
  const filteredNotes = notes.filter(note =>
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleCreateNote = () => {
    const newNote: Note = {
      id: `note-${Date.now()}`,
      content: "# New Note\n\nStart writing here...",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    setNotes([newNote, ...notes]);
    setActiveNote(newNote);
    setEditMode(true);
    setEditContent(newNote.content);
    
    toast({
      title: "Note Created",
      description: "Your new note has been created."
    });
  };
  
  const handleDeleteNote = () => {
    if (!activeNote) return;
    
    const updatedNotes = notes.filter(note => note.id !== activeNote.id);
    setNotes(updatedNotes);
    setActiveNote(updatedNotes[0] || null);
    setShowConfirmDelete(false);
    
    toast({
      title: "Note Deleted",
      description: "Your note has been deleted."
    });
  };
  
  const handleSaveNote = () => {
    if (!activeNote) return;
    
    const updatedNotes = notes.map(note => 
      note.id === activeNote.id 
        ? { ...note, content: editContent, updatedAt: new Date() } 
        : note
    );
    
    setNotes(updatedNotes);
    setActiveNote({ ...activeNote, content: editContent, updatedAt: new Date() });
    setEditMode(false);
    
    toast({
      title: "Note Saved",
      description: "Your changes have been saved."
    });
  };
  
  const handleImportNote = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        
        const newNote: Note = {
          id: `note-${Date.now()}`,
          content,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        
        setNotes([newNote, ...notes]);
        setActiveNote(newNote);
        
        toast({
          title: "Note Imported",
          description: `${file.name} has been imported successfully.`
        });
      } catch (error) {
        toast({
          title: "Import Failed",
          description: "Could not import the file. Please try again.",
          variant: "destructive"
        });
      }
    };
    
    reader.readAsText(file);
  };
  
  const exportNote = () => {
    if (!activeNote) return;
    
    const blob = new Blob([activeNote.content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `note-${new Date().toISOString().slice(0, 10)}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Note Exported",
      description: "Your note has been exported as a Markdown file."
    });
  };
  
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-2">Notes</h1>
      <p className="text-muted-foreground mb-6">Capture and organize your thoughts</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-4">
          <div className="flex gap-2">
            <Button onClick={handleCreateNote} className="flex-1">
              <Plus className="h-4 w-4 mr-2" />
              New Note
            </Button>
            <Button variant="outline" onClick={handleImportNote}>
              <Folder className="h-4 w-4" />
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept=".md,.txt"
              onChange={handleFileImport}
            />
          </div>
          
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
          
          <div className="border rounded-md overflow-hidden">
            <div className="bg-muted px-3 py-2 font-medium text-sm">Your Notes</div>
            <div className="divide-y max-h-[600px] overflow-y-auto">
              {filteredNotes.length > 0 ? (
                filteredNotes.map(note => (
                  <div 
                    key={note.id} 
                    className={`px-3 py-2 cursor-pointer hover:bg-accent transition-colors ${note.id === activeNote?.id ? 'bg-accent' : ''}`}
                    onClick={() => {
                      setActiveNote(note);
                      setEditMode(false);
                      setEditContent(note.content);
                    }}
                  >
                    <div className="flex items-start">
                      <FileText className="h-4 w-4 mt-1 mr-2 text-muted-foreground" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">
                          {note.content.split('\n')[0].replace(/^#+\s/, '') || 'Untitled Note'}
                        </h4>
                        <p className="text-xs text-muted-foreground truncate">
                          {note.content.split('\n').slice(1).join(' ').slice(0, 50)}...
                        </p>
                        <div className="flex items-center mt-1 text-xs text-muted-foreground">
                          <span>{new Date(note.updatedAt).toLocaleDateString()}</span>
                          <span className="mx-1">•</span>
                          <span>{note.taskId ? 'Task Note' : 'General Note'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-3 py-4 text-center text-muted-foreground">
                  <p>No notes found</p>
                  <p className="text-xs">Try changing your search query</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          {activeNote ? (
            <Card className="h-full flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="space-y-1">
                  <CardTitle>
                    {activeNote.content.split('\n')[0].replace(/^#+\s/, '') || 'Untitled Note'}
                  </CardTitle>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>Updated: {new Date(activeNote.updatedAt).toLocaleString()}</span>
                    <span className="mx-1">•</span>
                    <span>Created: {new Date(activeNote.createdAt).toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {editMode ? (
                    <Button size="sm" onClick={handleSaveNote}>
                      <Save className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                  ) : (
                    <>
                      <Button variant="outline" size="sm" onClick={() => {
                        setEditMode(true);
                        setEditContent(activeNote.content);
                      }}>
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" onClick={exportNote}>
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-red-500"
                        onClick={() => setShowConfirmDelete(true)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow py-0">
                {editMode ? (
                  <div className="h-full">
                    <NoteEditor
                      initialContent={editContent}
                      onChange={setEditContent}
                    />
                  </div>
                ) : (
                  <div className="prose prose-sm dark:prose-invert max-w-none h-full overflow-y-auto">
                    <pre className="whitespace-pre-wrap">
                      {activeNote.content}
                    </pre>
                  </div>
                )}
              </CardContent>
              
              {!editMode && (
                <div className="p-4 border-t">
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Tags:</span>
                    <div className="flex gap-1 ml-2">
                      <div className="bg-muted text-xs px-2 py-1 rounded">javascript</div>
                      <div className="bg-muted text-xs px-2 py-1 rounded">react</div>
                      <div className="bg-muted text-xs px-2 py-1 rounded">+Add</div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ) : (
            <Card className="h-full flex items-center justify-center">
              <CardContent className="text-center py-10">
                <FileText className="h-16 w-16 mx-auto text-muted-foreground/50" />
                <h3 className="mt-4 text-lg font-medium">No Note Selected</h3>
                <p className="text-muted-foreground mb-4">
                  Select a note from the sidebar or create a new one
                </p>
                <Button onClick={handleCreateNote}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Note
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      
      {showConfirmDelete && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-[400px]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                Delete Note
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Are you sure you want to delete this note? This action cannot be undone.</p>
            </CardContent>
            <div className="flex justify-end gap-2 p-6 pt-0">
              <Button variant="outline" onClick={() => setShowConfirmDelete(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDeleteNote}>
                Delete
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
