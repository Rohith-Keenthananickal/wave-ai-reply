import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface UseCaseCardProps {
  icon: LucideIcon;
  industry: string;
  example: string;
}

export const UseCaseCard = ({ icon: Icon, industry, example }: UseCaseCardProps) => {
  return (
    <Card className="p-6 hover:shadow-hover transition-all duration-300 hover:scale-105 border-border/50 bg-card">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{industry}</h3>
      <p className="text-sm text-muted-foreground">{example}</p>
    </Card>
  );
};
