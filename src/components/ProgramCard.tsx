import { ReactNode } from "react";

interface ProgramCardProps {
  title: string;
  description: string;
  features: string[];
  alternatives: Array<{ name: string; price: string }>;
  icon: ReactNode;
}

const ProgramCard = ({ title, description, features, alternatives, icon }: ProgramCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-primary-light text-3xl">{icon}</div>
        <h3 className="text-2xl font-bold text-primary">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold mb-2 text-primary-dark">You will learn:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-accent">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2 text-primary-dark">Alternatives:</h4>
        <ul className="space-y-1 text-sm text-gray-600">
          {alternatives.map((alt, index) => (
            <li key={index}>
              {alt.name} - <span className="font-semibold">{alt.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgramCard;