
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, File } from "lucide-react";
import { mockNotes } from "@/lib/mock-data";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export function NotesCard() {
  const { toast } = useToast();
  // Sort notes by last updated
  const recentNotes = [...mockNotes]
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
    .slice(0, 3);
  
  const handleEditClick = (noteTitle: string) => {
    toast({
      title: "Edit Note",
      description: `Opening note: "${noteTitle}"`,
    });
  };
  
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Recent Notes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentNotes.map((note) => {
            const noteTitle = note.content.split('\n')[0].replace(/^#+\s/, '') || 'Untitled Note';
            return (
              <div key={note.id} className="group flex items-start space-x-3">
                <File className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <p className="text-sm line-clamp-2">{noteTitle}</p>
                    <Link to={`/notes?id=${note.id}`}>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-7 w-7 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleEditClick(noteTitle)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Updated {note.updatedAt.toLocaleDateString()}
                  </p>
                </div>
              </div>
            );
          })}
          
          <Link to="/notes">
            <Button variant="outline" className="w-full">View All Notes</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
