
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookmarkPlus, Clock, Play } from "lucide-react";
import { mockVideos } from "@/lib/mock-data";
import { Link } from "react-router-dom";

export function RecentVideosCard() {
  const recentVideos = mockVideos.slice(0, 3);
  
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Recent Videos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentVideos.map((video) => (
            <div key={video.id} className="group relative">
              <div className="relative aspect-video overflow-hidden rounded-md">
                <img 
                  src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                  alt={video.title}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="ghost" className="text-white bg-black/50 hover:bg-black/70">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {Math.floor(video.duration / 60)}:{(video.duration % 60).toString().padStart(2, '0')}
                </div>
              </div>
              
              <div className="mt-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-sm line-clamp-2">
                    {video.title}
                  </h3>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <BookmarkPlus className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-1">
                  <div className="flex items-center">
                    <span>{video.category}</span>
                    <span className="mx-1">•</span>
                    <span>{video.language}</span>
                  </div>
                  
                  {video.watchedDuration > 0 && !video.watched && (
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>Resume</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          <Link to="/learning">
            <Button variant="outline" className="w-full">Browse All Videos</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
