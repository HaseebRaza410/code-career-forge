
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Menu, Search } from "lucide-react";
import { currentUser } from "@/lib/mock-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded bg-brand-purple text-white font-bold">
              CF
            </div>
            <span className="hidden md:inline-block text-xl font-bold">
              CodeForge
            </span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center w-full max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search tutorials, tasks..."
              className="w-full pl-8"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-orange text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </Button>
          
          <Link to="/profile">
            <Avatar className="h-8 w-8">
              <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
              <AvatarFallback>{currentUser.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </header>
  );
}
