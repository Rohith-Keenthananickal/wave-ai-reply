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
    <Card className={`p-8 relative ${highlighted ? "border-primary border-2 shadow-hover" : "border-border"} hover:shadow-hover transition-all duration-300`}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-foreground">{price}</span>
        {price !== "Custom" && <span className="text-muted-foreground">{period}</span>}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant={highlighted ? "hero" : "default"} className="w-full" size="lg">
        {price === "Custom" ? "Contact Sales" : "Start Free Trial"}
      </Button>
    </Card>
  );
};
