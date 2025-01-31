import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why is this program relevant in today's job market?",
    answer: "In today's competitive job market, skills alone aren't enough. Employers seek candidates with practical experience, professional recommendations, and a strong online presence. Our program addresses these needs by providing hands-on project experience, recommendation letters, and guidance on building your professional portfolio across platforms like GitHub, LinkedIn, and dev.to.",
  },
  {
    question: "How do you prepare students for the AI-driven future?",
    answer: "We embrace an AI-first approach, teaching you not just how to use AI tools but how to think and work in an AI-augmented workplace. You'll learn practical applications of AI in your field, modern collaboration techniques, and how to leverage AI to enhance your productivity and creativity.",
  },
  {
    question: "What makes your approach different?",
    answer: "We focus on real-world impact through hands-on projects, not just theoretical knowledge. You'll build a portfolio of actual projects, contribute to meaningful initiatives, and develop both technical and soft skills. Our program also emphasizes modern workplace practices including remote collaboration, agile methodologies, and AI integration.",
  },
  {
    question: "What will I achieve in this program?",
    answer: "Beyond skills, you'll gain: 1) Real project experience that employers value, 2) A professional portfolio showcasing your work, 3) Recommendation letters from industry experts, 4) Strong online presence across professional platforms, 5) Practical experience with AI tools and modern workflows, and 6) A network of industry connections.",
  },
  {
    question: "How long will it take?",
    answer: "Meaningful contributions typically take 3-6 months with approximately 20 hours per week of dedication. This timeline allows you to build a substantial portfolio and gain the practical experience employers seek.",
  },
  {
    question: "How does it work?",
    answer: "We follow a structured approach with daily meetings, planning sessions, retrospectives, and hands-on workshops. You'll work on real projects using modern tools and methodologies, including AI-powered workflows, while receiving continuous feedback and mentorship.",
  },
];

const FAQ = () => {
  return (
    <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left text-primary hover:text-primary-dark">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQ;