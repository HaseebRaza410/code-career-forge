
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockBadges } from "@/lib/mock-data";

export function BadgesCard() {
  const earnedBadges = mockBadges.filter(badge => badge.earnedAt);
  
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Earned Badges</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {earnedBadges.map((badge) => (
            <div key={badge.id} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-2">
                <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center">
                  <span className="text-xl">🏆</span>
                </div>
              </div>
              <p className="text-sm font-medium">{badge.name}</p>
              <p className="text-xs text-muted-foreground">{badge.earnedAt?.toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
