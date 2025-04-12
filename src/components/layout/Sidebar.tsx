
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  BarChart2, 
  Book, 
  Briefcase, 
  Calendar, 
  CheckSquare, 
  Code, 
  FileText, 
  Home, 
  MessageSquare, 
  Settings, 
  User, 
  Video 
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

function SidebarItem({ icon, label, href, active }: SidebarItemProps) {
  return (
    <Link 
      to={href} 
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:text-primary",
        active ? "bg-accent text-primary font-medium" : "text-muted-foreground"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

export function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;
  
  return (
    <div className="hidden md:flex flex-col h-screen sticky top-0 w-64 border-r bg-background p-4">
      <div className="py-4">
        <h2 className="px-3 text-lg font-semibold tracking-tight">Dashboard</h2>
        <div className="mt-3 space-y-1">
          <SidebarItem 
            icon={<Home className="h-5 w-5" />} 
            label="Home" 
            href="/" 
            active={pathname === '/'} 
          />
          <SidebarItem 
            icon={<CheckSquare className="h-5 w-5" />} 
            label="Tasks" 
            href="/tasks" 
            active={pathname === '/tasks'} 
          />
          <SidebarItem 
            icon={<Video className="h-5 w-5" />} 
            label="Learning" 
            href="/learning" 
            active={pathname.startsWith('/learning')} 
          />
          <SidebarItem 
            icon={<Calendar className="h-5 w-5" />} 
            label="Schedule" 
            href="/schedule" 
            active={pathname === '/schedule'} 
          />
          <SidebarItem 
            icon={<FileText className="h-5 w-5" />} 
            label="Notes" 
            href="/notes" 
            active={pathname === '/notes'} 
          />
        </div>
      </div>
      
      <div className="py-4">
        <h2 className="px-3 text-lg font-semibold tracking-tight">Progress</h2>
        <div className="mt-3 space-y-1">
          <SidebarItem 
            icon={<BarChart2 className="h-5 w-5" />} 
            label="Statistics" 
            href="/statistics" 
            active={pathname === '/statistics'} 
          />
          <SidebarItem 
            icon={<Code className="h-5 w-5" />} 
            label="Roadmap" 
            href="/roadmap" 
            active={pathname === '/roadmap'} 
          />
          <SidebarItem 
            icon={<Briefcase className="h-5 w-5" />} 
            label="Portfolio" 
            href="/portfolio" 
            active={pathname === '/portfolio'} 
          />
        </div>
      </div>
      
      <div className="py-4">
        <h2 className="px-3 text-lg font-semibold tracking-tight">Community</h2>
        <div className="mt-3 space-y-1">
          <SidebarItem 
            icon={<MessageSquare className="h-5 w-5" />} 
            label="Discussions" 
            href="/discussions" 
            active={pathname === '/discussions'} 
          />
          <SidebarItem 
            icon={<Book className="h-5 w-5" />} 
            label="Resources" 
            href="/resources" 
            active={pathname === '/resources'} 
          />
        </div>
      </div>
      
      <div className="mt-auto py-4">
        <div className="space-y-1">
          <SidebarItem 
            icon={<User className="h-5 w-5" />} 
            label="Profile" 
            href="/profile" 
            active={pathname === '/profile'} 
          />
          <SidebarItem 
            icon={<Settings className="h-5 w-5" />} 
            label="Settings" 
            href="/settings" 
            active={pathname === '/settings'} 
          />
        </div>
      </div>
      
      <div className="mt-4 rounded-lg bg-accent p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Free Plan</p>
            <p className="text-xs text-muted-foreground">7/30 days trial</p>
          </div>
          <Link to="/premium">
            <Button variant="secondary" size="sm" className="bg-brand-orange text-white hover:bg-brand-orange/90">
              Upgrade
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
