import { motion } from "framer-motion";
import { Instagram, Facebook, TikTok } from "lucide-react";

export const SocialProof = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-8">Extract locations from your favorite platforms</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <Instagram className="w-8 h-8 text-gray-400" />
            <TikTok className="w-8 h-8 text-gray-400" />
            <Facebook className="w-8 h-8 text-gray-400" />
            <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.18 10.382c-.24-.655-.94-1.087-1.654-1.087h-7.012l2.336-6.95c.216-.642.033-1.34-.463-1.819-.5-.476-1.198-.617-1.833-.377l-12.11 4.577c-.56.212-.977.68-1.115 1.246-.138.567.027 1.142.445 1.576l6.363 6.357-2.828 2.823c-.618.617-.618 1.615 0 2.233.31.309.71.463 1.117.463.404 0 .808-.154 1.116-.463l2.828-2.823 2.823 2.823c.309.309.714.463 1.116.463.406 0 .808-.154 1.116-.463.619-.618.619-1.616 0-2.233l-2.823-2.823 2.823-2.823h7.012c.714 0 1.414-.432 1.654-1.087.24-.654.024-1.343-.464-1.827z"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};