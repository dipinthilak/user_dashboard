import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Share2, MessageCircle } from 'lucide-react';

export const EngagementWidget = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Heart className="mr-2 h-4 w-4" />
          Engagement Metrics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MessageCircle className="mr-2 h-4 w-4" />
            <span>Comments</span>
          </div>
          <span className="font-bold">892</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Share2 className="mr-2 h-4 w-4" />
            <span>Shares</span>
          </div>
          <span className="font-bold">567</span>
        </div>
      </CardContent>
    </Card>
  );
};