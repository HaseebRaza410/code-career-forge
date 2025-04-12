
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { currentUser } from "@/lib/mock-data";

export function ProgressCard() {
  // Mock progress data
  const totalProgress = 25; // percentage
  const nextMilestone = "JavaScript Fundamentals";
  
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Your Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-3xl font-bold">{totalProgress}%</span>
              <p className="text-sm text-muted-foreground">Overall completion</p>
            </div>
            <Badge variant="secondary" className="bg-brand-purple text-white">
              {currentUser.streak} day streak 🔥
            </Badge>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{totalProgress}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-value" style={{ width: `${totalProgress}%` }} />
            </div>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground">Next milestone:</p>
            <p className="font-medium">{nextMilestone}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
