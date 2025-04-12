
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { mockRoadmap } from "@/lib/mock-data";
import { Link } from "react-router-dom";

export function RoadmapCard() {
  const roadmapSections = mockRoadmap.slice(0, 4);
  
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Learning Roadmap</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative pl-6 before:absolute before:left-2 before:top-0 before:h-full before:w-px before:bg-muted">
            {roadmapSections.map((section, index) => (
              <div key={section.id} className="mb-4 last:mb-0">
                <div className="absolute left-0 flex h-4 w-4 items-center justify-center">
                  <div className={cn(
                    "h-2 w-2 rounded-full",
                    section.isCompleted ? "bg-brand-purple" : (index === roadmapSections.findIndex(s => !s.isCompleted) ? "bg-brand-orange" : "bg-muted-foreground")
                  )} />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{section.title}</p>
                    <p className="text-sm text-muted-foreground">Week {section.weekNumber}</p>
                  </div>
                  
                  {section.isCompleted ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <Link to="/roadmap">
            <Button variant="outline" className="w-full">View Full Roadmap</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
