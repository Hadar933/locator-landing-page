import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { EmailSignup } from "@/components/EmailSignup";
import { Toaster } from "@/components/ui/toaster";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <Toaster />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg"
      >
        <h1 className="text-4xl font-bold mb-6">Coming Soon to iOS</h1>
        <p className="text-lg text-muted-foreground mb-8">
          We're working hard to bring Locator to the App Store. Sign up to be notified when we launch!
        </p>
        <EmailSignup className="mb-8" />
        <Button
          onClick={() => navigate(-1)}
          variant="outline"
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </Button>
      </motion.div>
    </div>
  );
};

export default ComingSoon;