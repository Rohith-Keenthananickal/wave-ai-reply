import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface UseCaseCardProps {
  icon: LucideIcon;
  industry: string;
  example: string;
}

export const UseCaseCard = ({ icon: Icon, industry, example }: UseCaseCardProps) => {
  return (
    <Card className="group p-6 hover:shadow-md transition-all duration-500 hover:-translate-y-1 border-border/50 bg-gradient-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/20 to-accent-secondary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
          <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
        </div>
        <h3 className="text-lg font-bold mb-2 text-foreground">{industry}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{example}</p>
      </div>
    </Card>
  );
};
