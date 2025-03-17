import { useSidebar } from './sidebar-context';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="flex items-center justify-between p-4 bg-white border-b shadow-sm">
      <Button variant="ghost" onClick={toggleSidebar}>
        <Menu className="w-6 h-6" />
      </Button>
      <div className="flex items-center gap-4">
        <div className="text-sm">Hello, User!</div>
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
      </div>
    </header>
  );
}
