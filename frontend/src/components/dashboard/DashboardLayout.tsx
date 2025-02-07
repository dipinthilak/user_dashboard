"use client";

import {useState } from "react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Settings, Save , LayoutDashboard } from "lucide-react";

import { StatsWidget } from "./widgets/StatsWidget";
import { ChartWidget } from "./widgets/ChartWidget";
import { ActivityWidget } from "./widgets/ActivityWidget";
import { EngagementWidget } from "./widgets/EngagementWidget";
import { PerformanceWidget } from "./widgets/PerformanceWidget";
import { SalesChartWidget } from "./widgets/SalesChartWidget";
import { UserGrowthWidget } from "./widgets/UserGrowthWidget";


import { useDispatch } from "react-redux";
import { logout } from "@/store/userSlice";

const WIDGETS = {
  engage: { id: "engage", label: "Engagement", component: EngagementWidget },
  stats: { id: "stats", label: "Statistics", component: StatsWidget },
  activity: { id: "activity", label: "Recent Activity", component: ActivityWidget },
  chart: { id: "chart", label: "Chart", component: ChartWidget },
  sales: { id: "sales", label: "Sales", component: SalesChartWidget },
  growth: { id: "growth", label: "Growth", component: UserGrowthWidget },
  perform: { id: "perform", label: "Performance", component: PerformanceWidget },
};

export const DashboardLayout = () => {
  const [visibleWidgets, setVisibleWidgets] = useState(Object.keys(WIDGETS));

  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  const handleSync=()=>{
    alert("sync function`")

  }

  const toggleWidget = (widgetId: string) => {
    setVisibleWidgets((current) =>
      current.includes(widgetId)
        ? current.filter((id) => id !== widgetId)
        : [...current, widgetId]
    );
  };


  return (
    <div className="p-6 space-y-6 bg-">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold uppercase">Dashboard</h1>
        <div className="flex gap-2">
        <DropdownMenu >
        <DropdownMenuTrigger asChild>
              <Button variant="outline" >
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Customize Widgets
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {Object.values(WIDGETS).map((widget) => (
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
              <Button variant="outline" onClick={handleSync}>
                <Save className="mr-2 h-4 w-4" />
                Save Preference
              </Button>
          <DropdownMenuSeparator/>

          <DropdownMenu>
                <Button variant="outline" onClick={handleLogout} >
                <Settings className="mr-2 h-4 w-4" />
                Logout
              </Button>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleWidgets.map((widgetId) => {
          const Widget = WIDGETS[widgetId as keyof typeof WIDGETS].component;
          return <Widget key={widgetId} />;
        })}
      </div>
    </div>
  );
};
