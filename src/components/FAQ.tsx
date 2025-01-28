import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "How does the AI location extraction work?",
      answer: "Our AI technology automatically scans text content and identifies location references. It can extract addresses, place names, and coordinates from various sources like blog posts, articles, and social media."
    },
    {
      question: "Is Locator available for iOS?",
      answer: <span>Currently, Locator is available on Android through the Google Play Store. You can <a href="https://locator.ltd/coming-soon" className="text-primary hover:underline">sign up for updates</a> (no spam!) about our upcoming iOS release.</span>
    },
    {
      question: "Can I share my saved places with others?",
      answer: "We're working on social features, but in the meantime, you can share your saved locations after opening them in Apple Maps or Google Maps."
    },
    {
      question: "I have another question",
      answer: <span>Cool, contact us by <a href="mailto:locatorapp.ai@gmail.com" className="text-primary hover:underline">email</a></span>
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Find answers to common questions about Locator</p>
        </motion.div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};