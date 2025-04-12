
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Bell, Globe, Moon, Shield, Volume2 } from "lucide-react";

export default function Settings() {
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-2">Settings</h1>
      <p className="text-muted-foreground mb-6">Customize your learning experience</p>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              App Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h3 className="font-medium">Dark Mode</h3>
                <p className="text-sm text-muted-foreground">
                  Switch between light and dark themes
                </p>
              </div>
              <Switch />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h3 className="font-medium">Language</h3>
                <p className="text-sm text-muted-foreground">
                  Choose your preferred language
                </p>
              </div>
              <select className="bg-background border rounded-md px-3 py-1">
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="urdu">Urdu</option>
              </select>
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h3 className="font-medium">Autoplay Videos</h3>
                <p className="text-sm text-muted-foreground">
                  Automatically play videos when you open a task
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h3 className="font-medium">Email Notifications</h3>
                <p className="text-sm text-muted-foreground">
                  Receive updates and reminders via email
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h3 className="font-medium">Task Reminders</h3>
                <p className="text-sm text-muted-foreground">
                  Get reminders for incomplete tasks
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h3 className="font-medium">Community Notifications</h3>
                <p className="text-sm text-muted-foreground">
                  Get notified about replies to your discussions
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Privacy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h3 className="font-medium">Public Profile</h3>
                <p className="text-sm text-muted-foreground">
                  Allow other users to see your profile
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h3 className="font-medium">Share Progress</h3>
                <p className="text-sm text-muted-foreground">
                  Display your learning progress to others
                </p>
              </div>
              <Switch />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h3 className="font-medium">Analytics Consent</h3>
                <p className="text-sm text-muted-foreground">
                  Allow us to collect anonymous usage data
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-end">
          <Button>Save Settings</Button>
        </div>
      </div>
    </div>
  );
}
