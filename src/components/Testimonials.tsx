import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Travel Blogger",
      content: "Locator has completely transformed how I save and organize places for my blog posts. The AI extraction is incredibly accurate!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Food Explorer",
      content: "I use Locator daily to keep track of restaurants and cafes. It's become an essential tool for my foodie adventures.",
      rating: 5
    },
    {
      name: "Emma Williams",
      role: "Digital Nomad",
      content: "The ability to save locations from any website and organize them into collections is game-changing. Highly recommended!",
      rating: 5
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