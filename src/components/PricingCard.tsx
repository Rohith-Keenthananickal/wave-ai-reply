import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
}

export const PricingCard = ({ title, price, period = "/mo", features, highlighted }: PricingCardProps) => {
  return (
    <Card className={`group p-10 relative ${highlighted ? "border-primary border-2 shadow-lg scale-105" : "border-border"} hover:shadow-lg transition-all duration-500 hover:-translate-y-2 overflow-hidden`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${highlighted ? "from-primary/10 to-transparent" : "from-accent/30 to-transparent"} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-md">
          Most Popular
        </div>
      )}
      <div className="relative">
        <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
        <div className="mb-8">
          <span className="text-5xl font-bold text-foreground">{price}</span>
          {price !== "Custom" && <span className="text-xl text-muted-foreground ml-1">{period}</span>}
        </div>
        <ul className="space-y-4 mb-10">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button variant={highlighted ? "hero" : "default"} className="w-full" size="lg">
          {price === "Custom" ? "Contact Sales" : "Start Free Trial"}
        </Button>
      </div>
    </Card>
  );
};
