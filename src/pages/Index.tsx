import { Briefcase, Palette, Code, Video } from "lucide-react";
import ProgramCard from "@/components/ProgramCard";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import ApplicationDialog from "@/components/ApplicationDialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
            Learn by Doing Academy
          </h1>
          <p className="text-2xl text-gray-800 mb-12 max-w-2xl mx-auto leading-relaxed">
            Master real-world skills through hands-on projects. Join our project-based education platform with flexible, pay-what-you-can pricing.
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
        <h2 className="text-3xl font-bold text-primary text-center mb-4">
          Choose Your Path
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Four comprehensive programs designed to help you build real-world expertise
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </section>

      {/* Our Experts Section */}
      <section className="container px-4 py-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Meet Your Mentor
        </h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16">
                  <Avatar className="w-full h-full">
                    <AvatarImage src="/people/razbakov.jpg" alt="Alex Razbakov" />
                    <AvatarFallback>AR</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">Alex Razbakov</h3>
                <p className="text-gray-600 mb-4">Senior Full Stack Developer, Business Mentor & Design Lead</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With 15+ years of experience in web development, business leadership, and design, Alex brings a unique blend of technical and creative expertise. He specializes in Vue.js ecosystem, cloud solutions, UI/UX design, and business strategy. His comprehensive background spans across modern technologies, team leadership, and design thinking methodologies.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Technical Expertise</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Vue.js & Nuxt.js (7+ years)</li>
                      <li>• TypeScript & Modern JavaScript</li>
                      <li>• Cloud Solutions (AWS, Firebase)</li>
                      <li>• Full Stack Development</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Business Leadership</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Team Management & Mentoring</li>
                      <li>• Agile & Scrum Methodologies</li>
                      <li>• Business Strategy</li>
                      <li>• Project Management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Design Skills</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• UI/UX Design</li>
                      <li>• Design Systems</li>
                      <li>• User Research</li>
                      <li>• Prototyping</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Recommendations Section */}
      <section className="container px-4 py-16 bg-primary/5 rounded-3xl my-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Industry Recognition
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0">
                <img
                  src="/people/biriukov.jpg"
                  alt="Dmytro Biriukov"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">Dmytro Biriukov</h3>
                <p className="text-gray-600 mb-4">Product Manager</p>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "I had the pleasure of working with Alex on numerous successful projects, and his communication skills and openness make him a pleasure to work with. Alex's innovative and creative approach to web development has resulted in some truly impressive results, and I have fond memories of our collaborative work together. I would highly recommend Alex to anyone looking for a skilled and enthusiastic web developer."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0">
                <img
                  src="/people/zinoviev.jpg"
                  alt="Alexander Zinoviev"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">Alexander Zinoviev</h3>
                <p className="text-gray-600 mb-4">Architect</p>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "I have only nice experience with Alex. Productive discussing, only meaningful advices always up-to-date solutions. I could learn lots from him. Highly recommended!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="container px-4 py-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <img
                  src="/people/robey.jpg"
                  alt="James Robey"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">James Robey</h3>
                <p className="text-sm text-gray-600">Data Analyst</p>
              </div>
            </div>
            <div className="aspect-video w-full mb-4 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/37tkXapz7iw"
                title="James Robey's Review"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-gray-700">
              "My time as an Intern was great. I learnt a lot of new skills and gained experience collaborating with others on projects. It helped guide me on my career path having learnt more about my strengths and weaknesses, and natural interests as a professional."
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <img
                  src="/people/mankodi.jpg"
                  alt="Dipali Mankodi"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">Dipali Mankodi</h3>
                <p className="text-sm text-gray-600">Product Designer at Whitespace Software</p>
              </div>
            </div>
            <div className="aspect-video w-full mb-4 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/16hBTep3Mxs"
                title="Dipali Mankodi's Review"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-gray-700">
              "Gained hands-on experience in UX/UI design through real projects, leading to a full-time position as Product Designer at Whitespace Software."
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <img
                  src="/people/dorighello.jpg"
                  alt="Marjorie Dorighello"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">Marjorie Dorighello</h3>
                <p className="text-sm text-gray-600">Art Gallery Consultant at YellowKorner</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Led team sprints and fostered cross-functional collaboration between designers and developers. Designed and tested a comprehensive design system, created prototypes, and conducted in-depth user research."
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <img
                  src="/people/panic.jpg"
                  alt="Sanya Panic"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">Sanya Panic</h3>
                <p className="text-sm text-gray-600">Full Stack Engineer at WeDance</p>
              </div>
            </div>
            <p className="text-gray-700">
              "The hands-on experience and mentorship I received were invaluable. The project-based learning approach helped me develop practical skills that directly translated to my role."
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <img
                  src="/people/dyuss.jpg"
                  alt="Zuriya Dyuss"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">Zuriya Dyuss</h3>
                <p className="text-sm text-gray-600">UX Designer at WeDance</p>
              </div>
            </div>
            <p className="text-gray-700">
              "The program's focus on real-world projects and collaborative learning environment prepared me well for my career. I developed both technical and soft skills that are essential in my current role."
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <img
                  src="/people/ilori.jpg"
                  alt="Joshua Ilori"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">Joshua Ilori</h3>
                <p className="text-sm text-gray-600">Software Developer at ToroNet</p>
              </div>
            </div>
            <p className="text-gray-700">
              "During my internship, I gained hands-on experience with Vue.js, Firebase, and Nuxt.js. I worked on exciting projects including NFC card integration and admin systems. The project-based learning approach and team collaboration experience were instrumental in securing my current role at ToroNet."
            </p>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Where Our Alumni Work</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="text-gray-600 font-semibold">YellowKorner</div>
            <div className="text-gray-600 font-semibold">Whitespace Software</div>
          </div>
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