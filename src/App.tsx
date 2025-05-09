
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Layout } from "./components/layout/Layout";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Tasks from "./pages/Tasks";
import TaskDetail from "./pages/TaskDetail";
import Roadmap from "./pages/Roadmap";
import Community from "./pages/Community";
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";
import Premium from "./pages/Premium";
import Learning from "./pages/Learning";
import Schedule from "./pages/Schedule";
import Notes from "./pages/Notes";
import Resources from "./pages/Resources";
import Settings from "./pages/Settings";
import Admin from "./pages/Admin";
import Support from "./pages/Support";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Protected routes */}
              <Route path="/" element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }>
                <Route path="dashboard" element={<Index />} />
                <Route path="roadmap" element={<Roadmap />} />
                <Route path="tasks" element={<Tasks />} />
                <Route path="tasks/:id" element={<TaskDetail />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="community" element={<Community />} />
                <Route path="profile" element={<Profile />} />
                <Route path="premium" element={<Premium />} />
                <Route path="learning" element={<Learning />} />
                <Route path="schedule" element={<Schedule />} />
                <Route path="notes" element={<Notes />} />
                <Route path="resources" element={<Resources />} />
                <Route path="settings" element={<Settings />} />
                <Route path="admin" element={<Admin />} />
                <Route path="support" element={<Support />} />
              </Route>
              
              {/* Redirect routes */}
              <Route path="/home" element={<Navigate to="/dashboard" replace />} />
              
              {/* 404 not found route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
            <Sonner />
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
