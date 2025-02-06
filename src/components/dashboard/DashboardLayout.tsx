'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Settings, LayoutDashboard } from 'lucide-react';
import { StatsWidget } from '@/components/dashboard/widgets/StatsWidget';
import { ChartWidget } from '@/components/dashboard/widgets/ChartWidget';
import { ActivityWidget } from '@/components/dashboard/widgets/ActivityWidget';

const WIDGETS = {
  stats: { id: 'stats', label: 'Statistics', component: StatsWidget },
  chart: { id: 'chart', label: 'Chart', component: ChartWidget },
  activity: { id: 'activity', label: 'Recent Activity', component: ActivityWidget },
};

export const DashboardLayout = () => {
  const [visibleWidgets, setVisibleWidgets] = useState(Object.keys(WIDGETS));
  const router = useRouter();

  const toggleWidget = (widgetId: string) => {
    setVisibleWidgets(current => 
      current.includes(widgetId) 
        ? current.filter(id => id !== widgetId)
        : [...current, widgetId]
    );
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Customize Widgets
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {Object.values(WIDGETS).map(widget => (
                <DropdownMenuItem
                  key={widget.id}
                  onClick={() => toggleWidget(widget.id)}
                  className="flex items-center justify-between"
                >
                  {widget.label}
                  <input 
                    type="checkbox" 
                    checked={visibleWidgets.includes(widget.id)}
                    readOnly
                    className="ml-2"
                  />
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Menu
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={() => router.push('/settings')}>
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push('/')}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleWidgets.map(widgetId => {
          const Widget = WIDGETS[widgetId as keyof typeof WIDGETS].component;
          return <Widget key={widgetId} />;
        })}
      </div>
    </div>
  );
};