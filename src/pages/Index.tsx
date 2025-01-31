import { Briefcase, Palette, Code, Video } from "lucide-react";
import ProgramCard from "@/components/ProgramCard";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import ApplicationDialog from "@/components/ApplicationDialog";

const Index = () => {
  const programs = [
    {
      title: "Business",
      description: "Master leadership, economy, and business communication through hands-on projects.",
      icon: <Briefcase />,
      features: ["Sociocracy 3.0", "OKRs", "Business Communication", "Team Management"],
      alternatives: [
        { name: "iMBA", price: "$22,104" },
      ],
    },
    {
      title: "Design",
      description: "Build a professional UI/UX portfolio through real-world projects.",
      icon: <Palette />,
      features: ["Figma Prototyping", "Design Sprints", "UX Research", "Portfolio Building"],
      alternatives: [
        { name: "Career Foundry", price: "€6,175" },
        { name: "Interaction Design", price: "€15/month" },
      ],
    },
    {
      title: "Programming",
      description: "Learn modern web development through practical applications.",
      icon: <Code />,
      features: ["JavaScript/TypeScript", "Vue.js/Nuxt.js", "Serverless Architecture", "Agile/Scrum"],
      alternatives: [
        { name: "VueSchool", price: "$25/month" },
        { name: "Harvard CS50", price: "$149" },
      ],
    },
    {
      title: "Storytelling",
      description: "Master the art of visual storytelling and film production.",
      icon: <Video />,
      features: ["Video Editing", "Cinematography", "Public Speaking", "3D Modeling"],
      alternatives: [
        { name: "SAE Institute", price: "€4,410" },
      ],
    },
  ];

  const scrollToPrograms = () => {
    const programsSection = document.getElementById('programs-section');
    programsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      {/* Hero Section */}
      <section className="container px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-primary mb-6 animate-fade-in">
          Learn by Doing
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
          Join our project-based education platform and master real-world skills through hands-on experience. Pay what you can afford.
        </p>
        <ApplicationDialog>
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg animate-fade-in">
            Start Your Journey
          </Button>
        </ApplicationDialog>
      </section>

      {/* Programs Section */}
      <section id="programs-section" className="container px-4 py-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container px-4 py-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Frequently Asked Questions
        </h2>
        <FAQ />
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">
          Ready to Start Learning?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our community of learners and start your journey today with a donation of your choice.
        </p>
        <div className="flex justify-center gap-4">
          <ApplicationDialog>
            <Button className="bg-accent hover:bg-accent/90 text-white px-8">
              Apply Now
            </Button>
          </ApplicationDialog>
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white"
            onClick={scrollToPrograms}
          >
            Learn More
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;