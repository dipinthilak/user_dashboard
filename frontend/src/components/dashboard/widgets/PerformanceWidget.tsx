import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Clock, Battery } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

export const PerformanceWidget = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Zap className="mr-2 h-4 w-4" />
          System Performance
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>Response Time</span>
            </div>
            <span className="font-bold">245ms</span>
          </div>
          <Progress value={66} className="h-2" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Battery className="mr-2 h-4 w-4" />
              <span>System Load</span>
            </div>
            <span className="font-bold">78%</span>
          </div>
          <Progress value={78} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
};