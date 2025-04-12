
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookmarkPlus, Volume2, VolumeX } from "lucide-react";
import { Video } from "@/lib/types";

interface VideoPlayerProps {
  video: Video;
  onSaveVideo?: (videoId: string) => void;
}

export function VideoPlayer({ video, onSaveVideo }: VideoPlayerProps) {
  const [isMuted, setIsMuted] = useState(false);
  
  const handleSaveVideo = () => {
    if (onSaveVideo) {
      onSaveVideo(video.id);
    }
  };
  
  return (
    <div className="space-y-2">
      <div className="relative aspect-video rounded-md overflow-hidden">
        <iframe 
          src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&showinfo=0&modestbranding=1${isMuted ? '&mute=1' : ''}`}
          title={video.title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-8 w-8 bg-black/60 border-0 text-white hover:bg-black/80"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-start">
          <h3 className="font-medium">{video.title}</h3>
          <Button variant="ghost" size="sm" onClick={handleSaveVideo}>
            <BookmarkPlus className="h-4 w-4 mr-1" />
            Save
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
  );
}
