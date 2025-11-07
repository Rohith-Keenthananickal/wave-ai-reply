import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  company: string;
  role: string;
  quote: string;
}

export const TestimonialCard = ({ name, company, role, quote }: TestimonialCardProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="group p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 bg-gradient-card border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent-secondary/15 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <Quote className="w-10 h-10 text-primary/30 mb-6" />
        <p className="text-foreground mb-8 italic leading-relaxed text-lg">{quote}</p>
        <div className="flex items-center gap-4">
          <Avatar className="w-14 h-14 ring-2 ring-primary/20">
            <AvatarFallback className="bg-gradient-primary text-primary-foreground font-bold text-lg">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold text-foreground text-lg">{name}</p>
            <p className="text-sm text-muted-foreground">{role} at {company}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
