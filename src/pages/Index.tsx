
import { Button } from "@/components/ui/button";
import { WelcomeMessage } from "@/components/dashboard/WelcomeMessage";
import { ProgressCard } from "@/components/dashboard/ProgressCard";
import { CurrentTasksCard } from "@/components/dashboard/CurrentTasksCard";
import { RecentVideosCard } from "@/components/dashboard/RecentVideosCard";
import { NotesCard } from "@/components/dashboard/NotesCard";
import { RoadmapCard } from "@/components/dashboard/RoadmapCard";
import { BadgesCard } from "@/components/dashboard/BadgesCard";
import { CalendarIcon, CodeIcon, Lightbulb } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <WelcomeMessage />
      
      {/* Daily Tip */}
      <div className="bg-muted/50 rounded-lg p-4 flex items-start space-x-4">
        <div className="bg-brand-orange/20 rounded-full p-2">
          <Lightbulb className="h-5 w-5 text-brand-orange" />
        </div>
        <div>
          <h3 className="font-medium">Daily Tip</h3>
          <p className="text-sm text-muted-foreground">Practice small coding exercises every day to build muscle memory. Consistency is key to mastering programming!</p>
        </div>
      </div>
      
      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProgressCard />
        <CurrentTasksCard />
        <RoadmapCard />
        <RecentVideosCard />
        <NotesCard />
        <BadgesCard />
      </div>
      
      {/* Quick Actions */}
      <div className="bg-accent rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center space-y-2">
            <div className="bg-brand-purple/20 rounded-full p-2">
              <CodeIcon className="h-5 w-5 text-brand-purple" />
            </div>
            <span>Start Coding Challenge</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center space-y-2">
            <div className="bg-brand-orange/20 rounded-full p-2">
              <CalendarIcon className="h-5 w-5 text-brand-orange" />
            </div>
            <span>Schedule Learning Session</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center space-y-2">
            <div className="bg-green-200 rounded-full p-2">
              <svg className="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <span>Create Quick Note</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center space-y-2">
            <div className="bg-blue-200 rounded-full p-2">
              <svg className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span>Get Help</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
