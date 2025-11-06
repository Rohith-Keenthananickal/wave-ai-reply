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
    <Card className="p-6 hover:shadow-hover transition-all duration-300 bg-card">
      <Quote className="w-8 h-8 text-primary/20 mb-4" />
      <p className="text-foreground mb-6 italic leading-relaxed">{quote}</p>
      <div className="flex items-center gap-3">
        <Avatar className="w-12 h-12">
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role} at {company}</p>
        </div>
      </div>
    </Card>
  );
};
