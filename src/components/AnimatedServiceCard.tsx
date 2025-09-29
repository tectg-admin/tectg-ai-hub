import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface AnimatedServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: boolean;
  delay?: number;
}

const AnimatedServiceCard = ({ icon: Icon, title, description, gradient = false, delay = 0 }: AnimatedServiceCardProps) => {
  const cardRef = useScrollReveal({ delay });

  return (
    <div ref={cardRef}>
      <Card className={`group p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent ${
        gradient ? "bg-gradient-to-br from-primary/5 to-accent/5" : ""
      }`}>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
            <Icon className="text-accent group-hover:text-white transition-colors" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default AnimatedServiceCard;
