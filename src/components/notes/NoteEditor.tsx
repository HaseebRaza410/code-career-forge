
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Save } from "lucide-react";

interface NoteEditorProps {
  initialContent?: string;
  placeholder?: string;
  onSave: (content: string) => void;
  autoFocus?: boolean;
}

export function NoteEditor({ 
  initialContent = "", 
  placeholder = "Add your notes here...", 
  onSave, 
  autoFocus = false 
}: NoteEditorProps) {
  const [content, setContent] = useState(initialContent);
  const [isEditing, setIsEditing] = useState(autoFocus);
  
  const handleSave = () => {
    if (content.trim()) {
      onSave(content);
      if (!initialContent) {
        setContent("");
      }
      setIsEditing(false);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Save on Ctrl+Enter or Cmd+Enter
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleSave();
    }
  };
  
  return (
    <div className="space-y-2">
      {isEditing ? (
        <>
          <Textarea 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={placeholder}
            rows={5}
            className="resize-none"
            autoFocus={autoFocus}
            onKeyDown={handleKeyDown}
          />
          <div className="flex justify-end gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                setContent(initialContent);
                setIsEditing(false);
              }}
            >
              Cancel
            </Button>
            <Button 
              size="sm"
              onClick={handleSave}
            >
              <Save className="h-4 w-4 mr-1" />
              Save
            </Button>
          </div>
        </>
      ) : (
        <div 
          className={`border rounded-md p-3 min-h-[100px] cursor-text ${!initialContent ? 'text-muted-foreground text-sm' : 'whitespace-pre-wrap'}`}
          onClick={() => setIsEditing(true)}
        >
          {initialContent || placeholder}
        </div>
      )}
      
      {!isEditing && initialContent && (
        <div className="flex justify-end">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Button>
        </div>
      )}
    </div>
  );
}
