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
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.primary/5)_1px,transparent_0)] bg-[size:40px_40px] opacity-50 -z-10" />
      {/* Hero Section */}
      <section className="container px-4 py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.primary/10)_1px,transparent_0)] bg-[size:24px_24px] opacity-30 animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="relative z-10">
          <h1 className="text-7xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary [text-shadow:_0_1px_30px_rgb(99_102_241_/_20%)]">
            Learn by Doing
          </h1>
          <p className="text-2xl text-gray-800 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join our project-based education platform and master real-world skills through hands-on experience. Pay what you can afford.
          </p>
          <ApplicationDialog>
            <Button className="bg-accent text-white hover:bg-accent/90 px-12 py-6 text-xl font-semibold animate-[fadeIn_1s_ease-out_0.6s_both] shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.5)] transition-all duration-300 rounded-xl hover:-translate-y-1 relative overflow-hidden group backdrop-blur-sm">
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </ApplicationDialog>
        </div>
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
        <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
          Join our community of learners and start your journey today with a donation of your choice.
        </p>
        <div className="flex justify-center gap-4">
          <ApplicationDialog>
            <Button className="bg-accent text-white hover:bg-accent/90 px-8">
              Apply Now
            </Button>
          </ApplicationDialog>
        </div>
      </section>
    </div>
  );
};

export default Index;