import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useState } from "react";

interface ApplicationDialogProps {
  children: React.ReactNode;
}

const ApplicationDialog = ({ children }: ApplicationDialogProps) => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const programs = [
    {
      title: "Business",
      description: "Master leadership, economy, and business communication through hands-on projects.",
      features: ["Sociocracy 3.0", "OKRs", "Business Communication", "Team Management"]
    },
    {
      title: "Design",
      description: "Build a professional UI/UX portfolio through real-world projects.",
      features: ["Figma Prototyping", "Design Sprints", "UX Research", "Portfolio Building"]
    },
    {
      title: "Programming",
      description: "Learn modern web development through practical applications.",
      features: ["JavaScript/TypeScript", "Vue.js/Nuxt.js", "Serverless Architecture", "Agile/Scrum"]
    },
    {
      title: "Storytelling",
      description: "Master the art of visual storytelling and film production.",
      features: ["Video Editing", "Cinematography", "Public Speaking", "3D Modeling"]
    }
  ];

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
  };

  const handleStartChallenge = async () => {
    if (selectedProgram && selectedPlan) {
      try {
        // Here you would typically make an API call to start the challenge
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating API call
        
        // Show success message
        alert(`Successfully enrolled in ${selectedProgram} program with ${selectedPlan} plan!\nWe'll contact you shortly with next steps.`);
        
        // Reset and close dialog
        setOpen(false);
        setSelectedProgram(null);
        setSelectedPlan(null);
      } catch (error) {
        alert('Failed to start challenge. Please try again.');
      }
    }
  };

  const handleProgramSelect = (program: string) => {
    setSelectedProgram(program);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] sm:max-h-[85vh] overflow-hidden px-6">
        <DialogHeader>
          <DialogTitle>Start Your Learning Journey</DialogTitle>
          <DialogDescription>
            Follow these steps to begin your learning journey with us.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-2 overflow-y-auto max-h-[60vh] px-2">
          {!selectedProgram ? (
            <div className="space-y-4">
              <h4 className="font-medium">Select a Program</h4>
              <div className="grid gap-3">
                {programs.map((program) => (
                  <div
                    key={program.title}
                    onClick={() => handleProgramSelect(program.title)}
                    className="rounded-lg border p-4 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                  >
                    <h3 className="font-medium text-primary">{program.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{program.description}</p>
                    <div className="mt-2">
                      <div className="flex flex-wrap gap-2">
                        {program.features.map((feature) => (
                          <span key={feature} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <div className="mt-0.5 bg-green-100 rounded-full p-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">Selected Program: {selectedProgram}</h4>
                  <p className="text-sm text-muted-foreground">
                    You can change your program by going back.
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProgram(null)}
                    className="mt-2"
                  >
                    Change Program
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Choose Your Contribution</h4>
                <div className="space-y-2">
                  <div
                    onClick={() => handlePlanSelect('basic')}
                    className={`rounded-lg border p-3 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 cursor-pointer relative ${selectedPlan === 'basic' ? 'border-2 border-primary bg-primary/10 shadow-lg' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-primary">€10/month</span>
                        {selectedPlan === 'basic' && (
                          <div className="bg-primary/10 rounded-full p-1">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">Basic</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Access to all learning materials and group sessions</p>
                  </div>
                  <div
                    onClick={() => handlePlanSelect('enhanced')}
                    className={`rounded-lg border p-3 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 cursor-pointer relative ${selectedPlan === 'enhanced' ? 'border-2 border-primary bg-primary/10 shadow-xl ring-2 ring-primary ring-offset-2' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-primary">€25/month</span>
                        {selectedPlan === 'enhanced' && (
                          <div className="bg-primary/10 rounded-full p-1">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                        )}
                        <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded">Popular</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Enhanced</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Basic benefits + priority code reviews and monthly 1-on-1 mentoring session
                    </p>
                  </div>
                  <div
                    onClick={() => handlePlanSelect('premium')}
                    className={`rounded-lg border p-3 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 cursor-pointer relative ${selectedPlan === 'premium' ? 'border-2 border-primary bg-primary/10 shadow-lg' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-primary">€100/month</span>
                        {selectedPlan === 'premium' && (
                          <div className="bg-primary/10 rounded-full p-1">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                        )}
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 animate-bounce" />
                      </div>
                      <span className="text-sm text-muted-foreground">Premium</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Enhanced benefits + weekly 1-on-1 mentoring, career guidance, and job referrals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-end mt-4">
          {selectedProgram && (
            <Button
              onClick={handleStartChallenge}
              disabled={!selectedPlan}
              className="w-full bg-primary text-white hover:bg-primary/90 transition-colors duration-300"
            >
              Start Challenge
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationDialog;