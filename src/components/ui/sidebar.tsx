'use client';

import { useSidebar } from './sidebar-context';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Home, Settings, Users, List, Plus, Menu } from 'lucide-react';

export function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          'fixed left-0 top-0 h-full w-64 bg-gray-900 text-white transition-transform z-50 shadow-xl',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-bold">FlowHive</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="hover:bg-gray-800"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Add Project Button */}
        <div className="p-4">
          <Button
            onClick={() => console.log('Add Project')}
            className="w-full bg-blue-600 hover:bg-blue-500"
          >
            <Plus className="mr-2 h-5 w-5" />
            Add Project
          </Button>
        </div>

        {/* Navigation Links */}
        <nav className="mt-2">
          <ul>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-md"
              >
                <Home className="w-5 h-5" />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-md"
              >
                <List className="w-5 h-5" />
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-md"
              >
                <Users className="w-5 h-5" />
                Team
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-md"
              >
                <Settings className="w-5 h-5" />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
