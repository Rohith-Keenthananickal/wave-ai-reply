interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

export const StepCard = ({ number, title, description }: StepCardProps) => {
  return (
    <div className="group flex flex-col items-center text-center animate-fade-in">
      <div className="relative w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 text-primary-foreground text-3xl font-bold shadow-lg group-hover:shadow-glow group-hover:scale-110 transition-all duration-500">
        {number}
        <div className="absolute inset-0 rounded-2xl bg-gradient-glow opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};
