
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { 
  CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Plus 
} from "lucide-react";

// Mock data for scheduled sessions
const scheduledSessions = [
  { 
    id: 1, 
    title: "React Hooks Deep Dive", 
    date: new Date(2025, 3, 15, 10, 30), 
    duration: 60,
    category: "React",
    mentor: "John Smith"
  },
  { 
    id: 2, 
    title: "Building RESTful APIs", 
    date: new Date(2025, 3, 17, 14, 0), 
    duration: 90,
    category: "Backend",
    mentor: "Sarah Johnson"
  },
  { 
    id: 3, 
    title: "CSS Grid Layout Workshop", 
    date: new Date(2025, 3, 20, 11, 0), 
    duration: 120,
    category: "CSS",
    mentor: "Mike Williams"
  }
];

export default function Schedule() {
  const [date, setDate] = useState<Date>(new Date());
  
  // Get the month and year for display
  const currentMonth = date.toLocaleString('default', { month: 'long' });
  const currentYear = date.getFullYear();
  
  // Find sessions scheduled for the selected date
  const selectedDateSessions = scheduledSessions.filter(session => {
    const sessionDate = new Date(session.date);
    return (
      sessionDate.getDate() === date.getDate() &&
      sessionDate.getMonth() === date.getMonth() &&
      sessionDate.getFullYear() === date.getFullYear()
    );
  });
  
  // Format time to 12-hour format
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };
  
  // Helper function to highlight dates with sessions
  const isDayWithSession = (day: Date): boolean => {
    return scheduledSessions.some(session => {
      const sessionDate = new Date(session.date);
      return (
        sessionDate.getDate() === day.getDate() &&
        sessionDate.getMonth() === day.getMonth() &&
        sessionDate.getFullYear() === day.getFullYear()
      );
    });
  };
  
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-2">Learning Schedule</h1>
      <p className="text-muted-foreground mb-6">Plan and organize your learning sessions</p>
      
      <div className="grid md:grid-cols-[350px_1fr] gap-6">
        <div>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>{currentMonth} {currentYear}</CardTitle>
                <div className="flex gap-1">
                  <Button variant="outline" size="icon" onClick={() => {
                    const prevMonth = new Date(date);
                    prevMonth.setMonth(prevMonth.getMonth() - 1);
                    setDate(prevMonth);
                  }}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => {
                    const nextMonth = new Date(date);
                    nextMonth.setMonth(nextMonth.getMonth() + 1);
                    setDate(nextMonth);
                  }}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={(day) => day && setDate(day)}
                modifiers={{
                  withSession: (day) => isDayWithSession(day),
                }}
                modifiersClassNames={{
                  withSession: "bg-brand-purple/20 font-bold text-brand-purple",
                }}
                className="rounded-md border"
              />
              
              <div className="mt-4">
                <Button className="w-full" onClick={() => {}}>
                  <Plus className="h-4 w-4 mr-2" />
                  Schedule New Session
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledSessions
                  .filter(session => new Date(session.date) >= new Date())
                  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                  .slice(0, 3)
                  .map(session => (
                    <div key={session.id} className="border rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{session.title}</h3>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <CalendarIcon className="h-3 w-3 mr-1" />
                            <span>{new Date(session.date).toLocaleDateString()}</span>
                            <span className="mx-1">•</span>
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{formatTime(new Date(session.date))}</span>
                          </div>
                        </div>
                        <Badge variant="outline">{session.category}</Badge>
                      </div>
                    </div>
                  ))
                }
                
                {scheduledSessions.filter(session => new Date(session.date) >= new Date()).length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-2">
                    No upcoming sessions scheduled
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle>
                {date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
              </CardTitle>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add for this day
              </Button>
            </CardHeader>
            <CardContent>
              {selectedDateSessions.length > 0 ? (
                <div className="space-y-6">
                  {selectedDateSessions.map(session => (
                    <div key={session.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-medium">{session.title}</h3>
                        <Badge variant="outline">{session.category}</Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground mb-1">Time</p>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{formatTime(new Date(session.date))}</span>
                            <span className="mx-1">•</span>
                            <span>{session.duration} min</span>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-muted-foreground mb-1">Mentor</p>
                          <div className="flex items-center">
                            <svg className="h-4 w-4 mr-2 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span>{session.mentor}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end mt-4 gap-2">
                        <Button variant="outline" size="sm">Reschedule</Button>
                        <Button size="sm">Join Session</Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <CalendarIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No sessions scheduled for this day</h3>
                  <p className="text-muted-foreground mb-6">Schedule a learning session or mentor call</p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Schedule New Session
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Learning Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Consistency is key</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Try to schedule at least 3 learning sessions per week to maintain your progress.
                  </p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Mix theory and practice</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    For every hour of tutorial videos, schedule at least one hour of practical coding.
                  </p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Regular review sessions</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Schedule weekly review sessions to reinforce what you've learned.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
