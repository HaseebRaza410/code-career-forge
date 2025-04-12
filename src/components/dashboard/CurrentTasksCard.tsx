
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { mockTasks } from "@/lib/mock-data";
import { Task, TaskStatus } from "@/lib/types";

function getTaskStatusIcon(status: TaskStatus) {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="h-5 w-5 text-green-500" />;
    case "in-progress":
      return <Clock className="h-5 w-5 text-brand-orange" />;
    default:
      return <Circle className="h-5 w-5 text-muted-foreground" />;
  }
}

export function CurrentTasksCard() {
  const currentTasks = mockTasks.filter(task => 
    task.status === "in-progress" || task.status === "not-started"
  ).slice(0, 3);
  
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Current Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {currentTasks.map((task) => (
            <div key={task.id} className="flex items-start space-x-3">
              {getTaskStatusIcon(task.status)}
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{task.title}</p>
                  <span className={cn(
                    "text-xs rounded-full px-2 py-0.5",
                    task.status === "in-progress" ? "bg-brand-orange/20 text-brand-orange" : "bg-muted text-muted-foreground"
                  )}>
                    {task.status === "in-progress" ? "In Progress" : "Not Started"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{task.description.slice(0, 60)}{task.description.length > 60 ? '...' : ''}</p>
                
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <span>Due: {task.dueDate.toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{task.category}</span>
                </div>
              </div>
            </div>
          ))}
          
          <Button variant="outline" className="w-full">View All Tasks</Button>
        </div>
      </CardContent>
    </Card>
  );
}
