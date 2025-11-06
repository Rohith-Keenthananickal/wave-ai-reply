import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="group p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border-border/50 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-md group-hover:shadow-glow group-hover:scale-110 transition-all duration-500">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  );
};
