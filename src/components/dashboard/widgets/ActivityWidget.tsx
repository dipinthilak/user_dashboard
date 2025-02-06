import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from 'lucide-react';

export const ActivityWidget = () => {
  const activities = [
    { id: 1, text: 'New user registered', time: '5 minutes ago' },
    { id: 2, text: 'Sales report generated', time: '1 hour ago' },
    { id: 3, text: 'System update completed', time: '2 hours ago' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Activity className="mr-2 h-4 w-4" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map(activity => (
            <div key={activity.id} className="flex justify-between items-center">
              <span>{activity.text}</span>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};