
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { LogOut, Mail, Shield, User as UserIcon } from "lucide-react";
import { currentUser } from "@/lib/mock-data";

export default function Profile() {
  const [user, setUser] = useState({
    ...currentUser,
    password: "********"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
      <p className="text-muted-foreground mb-6">Manage your account settings and preferences</p>
      
      <div className="grid md:grid-cols-[250px_1fr] gap-6">
        <Card className="md:h-fit">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback className="text-xl">{user.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              
              <h3 className="font-medium text-lg">{user.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{user.email}</p>
              
              {user.isPremium ? (
                <Badge className="bg-brand-orange text-white hover:bg-brand-orange/90 mb-4">Premium</Badge>
              ) : (
                <Badge variant="outline" className="mb-4">Free Plan</Badge>
              )}
              
              <div className="w-full border-t pt-4 mt-2">
                <div className="flex items-center mb-2">
                  <Shield className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Member since {new Date(user.joinedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <span className="text-brand-purple">
                      {user.streak}
                    </span>
                    day streak
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="px-6 py-4 border-t">
            <Button variant="outline" className="w-full">
              <LogOut className="h-4 w-4 mr-2" />
              Log Out
            </Button>
          </CardFooter>
        </Card>
        
        <div>
          <Tabs defaultValue="account">
            <TabsList className="mb-6">
              <TabsTrigger value="account">
                <UserIcon className="h-4 w-4 mr-2" />
                Account
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <Mail className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="account" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={user.name} 
                          onChange={handleInputChange} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email"
                          value={user.email} 
                          onChange={handleInputChange} 
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input 
                        id="currentPassword" 
                        name="password" 
                        type="password"
                        value={user.password} 
                        onChange={handleInputChange} 
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input 
                          id="newPassword" 
                          name="newPassword" 
                          type="password"
                          placeholder="••••••••"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input 
                          id="confirmPassword" 
                          name="confirmPassword" 
                          type="password"
                          placeholder="••••••••" 
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Update Password</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Language Preference</h3>
                        <p className="text-sm text-muted-foreground">Choose your preferred video language</p>
                      </div>
                      <div className="flex items-center">
                        <select className="bg-background border rounded-md px-3 py-1">
                          <option value="english">English</option>
                          <option value="hindi">Hindi</option>
                          <option value="urdu">Urdu</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Dark Mode</h3>
                          <p className="text-sm text-muted-foreground">Toggle dark mode</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Public Profile</h3>
                          <p className="text-sm text-muted-foreground">Make your profile visible to others</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Email Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Task Reminders</h3>
                        <p className="text-sm text-muted-foreground">Receive reminders for pending tasks</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Weekly Summaries</h3>
                          <p className="text-sm text-muted-foreground">Get a weekly summary of your progress</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">New Content Alerts</h3>
                          <p className="text-sm text-muted-foreground">Be notified when new tutorials are added</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Community Responses</h3>
                          <p className="text-sm text-muted-foreground">Get notified about replies to your posts</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Marketing Emails</h3>
                          <p className="text-sm text-muted-foreground">Receive promotional offers and updates</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Notification Settings</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
