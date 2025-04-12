
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Trophy } from "lucide-react";
import { currentUser } from "@/lib/mock-data";
import { Link } from "react-router-dom";

export function WelcomeMessage() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });

  // Determine greeting based on time of day
  const hour = today.getHours();
  let greeting = "Good morning";
  if (hour >= 12 && hour < 17) greeting = "Good afternoon";
  else if (hour >= 17) greeting = "Good evening";
  
  return (
    <Card className="bg-brand-purple text-white">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">{greeting}, {currentUser.name}! 👋</h1>
            <p className="text-brand-purpleLight">{formattedDate}</p>
            
            <div className="flex items-center mt-4 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Your streak: {currentUser.streak} days</span>
              <Trophy className="h-4 w-4 ml-4 mr-1" />
              <span>Tasks completed: 2/3</span>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0 space-y-2">
            <p className="text-brand-purpleLight">Ready to continue your learning journey?</p>
            <Link to="/tasks">
              <Button className="bg-white text-brand-purple hover:bg-white/90">
                Continue Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
