interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

export const StepCard = ({ number, title, description }: StepCardProps) => {
  return (
    <div className="flex flex-col items-center text-center animate-fade-in">
      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 text-primary-foreground text-2xl font-bold shadow-hover">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};
