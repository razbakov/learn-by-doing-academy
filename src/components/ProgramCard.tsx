import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ApplicationDialog from "./ApplicationDialog";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  alternatives: { name: string; price: string; link?: string }[];
}

const ProgramCard = ({
  title,
  description,
  icon,
  features,
  alternatives,
}: ProgramCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white">
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
          <h3 className="text-2xl font-semibold text-primary">{title}</h3>
        </div>

        <p className="text-gray-600">{description}</p>

        <div className="space-y-3">
          <h4 className="font-medium text-sm text-gray-500 uppercase tracking-wider">Features</h4>
          <ul className="space-y-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium text-sm text-gray-500 uppercase tracking-wider">Market Price Comparison</h4>
          <p className="text-xs text-gray-500 mb-2">What others charge for similar programs:</p>
          <ul className="space-y-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
            {alternatives.map((alt) => (
              <li key={alt.name} className="flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  {alt.link ? (
                    <a
                      href={alt.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {alt.name}
                    </a>
                  ) : (
                    alt.name
                  )}
                </span>
                <span className="font-medium text-gray-900">{alt.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <ApplicationDialog initialProgram={title}>
          <Button className="w-full bg-primary text-white hover:bg-primary/90 transition-colors duration-300">
            Start Free Trial
          </Button>
        </ApplicationDialog>
      </div>
    </Card>
  );
};

export default ProgramCard;