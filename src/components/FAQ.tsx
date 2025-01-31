import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why should I trust you?",
    answer: "We believe in transparency and results. Our success is measured by our students' achievements and testimonials.",
  },
  {
    question: "How long will it take?",
    answer: "Meaningful contributions typically take 3-6 months with approximately 20 hours per week of dedication.",
  },
  {
    question: "What will I get from it?",
    answer: "You'll receive a Recommendation Letter after 6 months, expert Peer Reviews, and valuable networking opportunities.",
  },
  {
    question: "How does it work?",
    answer: "We follow a structured approach with daily meetings, planning sessions, retrospectives, and hands-on workshops.",
  },
];

const FAQ = () => {
  return (
    <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
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