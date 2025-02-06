import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign } from 'lucide-react';

export const StatsWidget = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <TrendingUp className="mr-2 h-4 w-4" />
          Statistics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Users className="mr-2 h-4 w-4" />
            <span>Total Users</span>
          </div>
          <span className="font-bold">1,234</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <DollarSign className="mr-2 h-4 w-4" />
            <span>Revenue</span>
          </div>
          <span className="font-bold">$45,678</span>
        </div>
      </CardContent>
    </Card>
  );
};