
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { AlertCircle, BookOpen, Check, ChevronRight, Clock, Search, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data for the learning page
const recentVideos = [
  {
    id: "video1",
    title: "Getting Started with React",
    duration: 1520, // in seconds
    thumbnail: "https://placehold.co/400x225/e2e8f0/475569?text=React+Intro",
    progress: 75,
    category: "React",
    instructor: "John Doe"
  },
  {
    id: "video2",
    title: "CSS Grid Layout Mastery",
    duration: 2340,
    thumbnail: "https://placehold.co/400x225/e2e8f0/475569?text=CSS+Grid",
    progress: 30,
    category: "CSS",
    instructor: "Jane Smith"
  },
  {
    id: "video3",
    title: "JavaScript Promises and Async/Await",
    duration: 1820,
    thumbnail: "https://placehold.co/400x225/e2e8f0/475569?text=JS+Async",
    progress: 100,
    category: "JavaScript",
    instructor: "Mike Johnson"
  }
];

const savedVideos = [
  {
    id: "saved1",
    title: "Building a REST API with Node.js",
    duration: 3400,
    thumbnail: "https://placehold.co/400x225/e2e8f0/475569?text=Node+API",
    category: "Node.js",
    instructor: "Sarah Brown"
  },
  {
    id: "saved2",
    title: "MongoDB Fundamentals",
    duration: 2700,
    thumbnail: "https://placehold.co/400x225/e2e8f0/475569?text=MongoDB",
    category: "Database",
    instructor: "David Wilson"
  }
];

const recommendedVideos = [
  {
    id: "rec1",
    title: "TypeScript for React Developers",
    duration: 2100,
    thumbnail: "https://placehold.co/400x225/e2e8f0/475569?text=TypeScript",
    category: "TypeScript",
    instructor: "Emily Chen"
  },
  {
    id: "rec2",
    title: "Redux State Management",
    duration: 2500,
    thumbnail: "https://placehold.co/400x225/e2e8f0/475569?text=Redux",
    category: "React",
    instructor: "John Doe"
  },
  {
    id: "rec3",
    title: "CSS Animations and Transitions",
    duration: 1900,
    thumbnail: "https://placehold.co/400x225/e2e8f0/475569?text=CSS+Animations",
    category: "CSS",
    instructor: "Jane Smith"
  }
];

const formatDuration = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (hours > 0) {
    return `${hours}h ${remainingMinutes}m`;
  }
  return `${minutes}m`;
};

export default function Learning() {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-2">Learning Resources</h1>
      <p className="text-muted-foreground mb-6">Access all video tutorials and learning materials</p>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="relative w-full md:w-auto md:min-w-[300px]">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search videos and courses..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">
            <Video className="h-4 w-4 mr-2" />
            All Videos
          </TabsTrigger>
          <TabsTrigger value="continue">
            <Clock className="h-4 w-4 mr-2" />
            Continue Watching
          </TabsTrigger>
          <TabsTrigger value="saved">
            <BookOpen className="h-4 w-4 mr-2" />
            Saved for Later
          </TabsTrigger>
          <TabsTrigger value="completed">
            <Check className="h-4 w-4 mr-2" />
            Completed
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">Continue Watching</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentVideos.filter(video => video.progress > 0 && video.progress < 100).map(video => (
                  <Card key={video.id} className="overflow-hidden">
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
                        <div 
                          className="h-full bg-brand-purple" 
                          style={{ width: `${video.progress}%` }}
                        ></div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        {formatDuration(video.duration)}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <Link to={`/tasks/${video.id}`}>
                        <h3 className="font-medium hover:text-brand-purple transition-colors line-clamp-2 mb-1">
                          {video.title}
                        </h3>
                      </Link>
                      <div className="flex items-center text-xs text-muted-foreground mb-2">
                        <span>{video.instructor}</span>
                        <span className="mx-1">•</span>
                        <Badge variant="outline" className="text-xs">{video.category}</Badge>
                      </div>
                      <div className="flex items-center text-xs">
                        <span className="text-muted-foreground">
                          {video.progress}% completed
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4">Recommended for You</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedVideos.map(video => (
                  <Card key={video.id} className="overflow-hidden">
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        {formatDuration(video.duration)}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <Link to={`/tasks/${video.id}`}>
                        <h3 className="font-medium hover:text-brand-purple transition-colors line-clamp-2 mb-1">
                          {video.title}
                        </h3>
                      </Link>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <span>{video.instructor}</span>
                        <span className="mx-1">•</span>
                        <Badge variant="outline" className="text-xs">{video.category}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4">Completed Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentVideos.filter(video => video.progress === 100).map(video => (
                  <Card key={video.id} className="overflow-hidden">
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                        <Badge className="bg-green-500">
                          <Check className="h-3 w-3 mr-1" />
                          Completed
                        </Badge>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        {formatDuration(video.duration)}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <Link to={`/tasks/${video.id}`}>
                        <h3 className="font-medium hover:text-brand-purple transition-colors line-clamp-2 mb-1">
                          {video.title}
                        </h3>
                      </Link>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <span>{video.instructor}</span>
                        <span className="mx-1">•</span>
                        <Badge variant="outline" className="text-xs">{video.category}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </TabsContent>
        
        <TabsContent value="continue">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentVideos.filter(video => video.progress > 0 && video.progress < 100).map(video => (
              <Card key={video.id} className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
                    <div 
                      className="h-full bg-brand-purple" 
                      style={{ width: `${video.progress}%` }}
                    ></div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {formatDuration(video.duration)}
                  </div>
                </div>
                <CardContent className="p-4">
                  <Link to={`/tasks/${video.id}`}>
                    <h3 className="font-medium hover:text-brand-purple transition-colors line-clamp-2 mb-1">
                      {video.title}
                    </h3>
                  </Link>
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <span>{video.instructor}</span>
                    <span className="mx-1">•</span>
                    <Badge variant="outline" className="text-xs">{video.category}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">
                      {video.progress}% completed
                    </span>
                    <Button size="sm" variant="outline">
                      Continue
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {recentVideos.filter(video => video.progress > 0 && video.progress < 100).length === 0 && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />
                <h3 className="font-medium text-lg mb-2">No videos in progress</h3>
                <p className="text-muted-foreground">
                  Start watching a video to see it appear here.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="saved">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedVideos.map(video => (
              <Card key={video.id} className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {formatDuration(video.duration)}
                  </div>
                </div>
                <CardContent className="p-4">
                  <Link to={`/tasks/${video.id}`}>
                    <h3 className="font-medium hover:text-brand-purple transition-colors line-clamp-2 mb-1">
                      {video.title}
                    </h3>
                  </Link>
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <span>{video.instructor}</span>
                    <span className="mx-1">•</span>
                    <Badge variant="outline" className="text-xs">{video.category}</Badge>
                  </div>
                  <div className="flex justify-end">
                    <Button size="sm" variant="outline">
                      Watch Now
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {savedVideos.length === 0 && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />
                <h3 className="font-medium text-lg mb-2">No saved videos</h3>
                <p className="text-muted-foreground">
                  Save videos for later to see them appear here.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="completed">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentVideos.filter(video => video.progress === 100).map(video => (
              <Card key={video.id} className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <Badge className="bg-green-500">
                      <Check className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {formatDuration(video.duration)}
                  </div>
                </div>
                <CardContent className="p-4">
                  <Link to={`/tasks/${video.id}`}>
                    <h3 className="font-medium hover:text-brand-purple transition-colors line-clamp-2 mb-1">
                      {video.title}
                    </h3>
                  </Link>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>{video.instructor}</span>
                    <span className="mx-1">•</span>
                    <Badge variant="outline" className="text-xs">{video.category}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {recentVideos.filter(video => video.progress === 100).length === 0 && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />
                <h3 className="font-medium text-lg mb-2">No completed videos</h3>
                <p className="text-muted-foreground">
                  Complete a video to see it appear here.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
