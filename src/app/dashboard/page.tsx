'use client';

import { SidebarProvider } from '@/components/ui/sidebar-context';
import { Sidebar } from '@/components/ui/sidebar';
import { Header } from '@/components/ui/header';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function Dashboard() {
  const handleAddProject = () => {
    console.log('Add Project Clicked');
    // Add your logic for adding a new project here
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-gray-100">
          {/* Header */}
          <Header />

          {/* Main Section */}
          <main className="p-8">
            {/* Title and Add Project Button */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-4xl font-extrabold text-gray-900">
                  Welcome to FlowHive
                </h1>
                <p className="mt-2 text-gray-600">
                  Manage your projects smarter with FlowHive. Stay organized and
                  keep your team on track with an easy-to-use platform designed
                  to boost productivity.
                </p>
              </div>
              {/* Add Project Button */}
              <Button
                onClick={handleAddProject}
                className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-500 text-white rounded-md shadow-md"
              >
                <Plus className="mr-2 w-5 h-5" />
                Add Project
              </Button>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
