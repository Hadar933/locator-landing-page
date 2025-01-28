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
      answer: "Currently, Locator is available on Android through the Google Play Store. We're working on bringing the app to iOS users soon!"
    },
    {
      question: "Can I share my saved places with others?",
      answer: "Yes! You can easily share individual places or entire collections with other users. They can view and save these locations to their own collections."
    },
    {
      question: "How do I organize my saved places?",
      answer: "You can create custom collections, add tags, and categorize your saved places however you like. Our flexible organization system lets you arrange places in a way that makes sense to you."
    },
    {
      question: "I have another question",
      answer: <span>Cool, contact us by <a href="mailto:contact@locator.com" className="text-primary hover:underline">email</a></span>
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