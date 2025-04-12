
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ChevronRight, Clock } from "lucide-react";
import { mockRoadmap } from "@/lib/mock-data";
import { TaskStatus, RoadmapSection, Task } from "@/lib/types";

export default function Roadmap() {
  const [roadmapData] = useState<RoadmapSection[]>(mockRoadmap);

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

  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">Your Learning Roadmap</h1>
      <p className="text-muted-foreground mb-8">A 12-month journey to becoming a full-stack developer</p>
      
      <div className="grid gap-6">
        <Accordion type="single" collapsible className="w-full">
          {roadmapData.map((section) => (
            <AccordionItem key={section.id} value={section.id}>
              <AccordionTrigger className="py-4 px-6 bg-card rounded-t-lg hover:no-underline group">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <span className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 
                      ${section.isCompleted ? 'bg-green-100 text-green-600' : 'bg-muted text-muted-foreground'}`}>
                      {section.weekNumber}
                    </span>
                    <div className="text-left">
                      <h3 className="font-medium">{section.title}</h3>
                      <p className="text-sm text-muted-foreground">Week {section.weekNumber}</p>
                    </div>
                  </div>
                  {section.isCompleted && <Check className="h-5 w-5 text-green-500 mr-4" />}
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-card rounded-b-lg p-4 mb-4">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground mb-4">{section.description}</p>
                  
                  {section.tasks.map((task: Task) => (
                    <Card key={task.id} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{task.title}</h4>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{task.description}</p>
                            <div className="flex items-center space-x-2">
                              {getStatusBadge(task.status)}
                              <Badge variant="outline">{task.category}</Badge>
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
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
