import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Dan",
      role: "interested developer",
      content: "Nice. It's been great for keeping track of some instagram recommendations. Only thing is, I wish I could share my maps with friends—it'd be so cool to compare or plan together",
      rating: 4
    },
    {
      name: "Jaycee",
      role: "following the app for some time",
      content: "Used it on my trip to Boston, and it saved me some time tracking places to check out.",
      rating: 5
    },
    {
      name: "Noa",
      role: "Casual User",
      content: "Used this to plan my New Zealand trip—super handy! Using unlimited plan because I want to save many recommendaations. Would love a web version to make planning easier, and my husband is already asking for an iOS app for his iPhone.",
      rating: 4
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-muted-foreground">Join thousands of satisfied users worldwide</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-6">{testimonial.content}</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};