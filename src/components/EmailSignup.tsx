import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { supabase } from "@/integrations/supabase/client";

export const EmailSignup = ({ className = "" }: { className?: string }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // First, check if the email already exists
      const { data: existingEmail } = await supabase
        .from("email_subscribers")
        .select("email")
        .eq("email", email)
        .maybeSingle();

      if (existingEmail) {
        toast({
          title: "Already part of our community! 🌟",
          description: "We recognize this email! You're already on our exclusive waitlist. We'll make sure you're the first to know when we launch. Stay tuned for exciting updates!",
        });
        setIsLoading(false);
        return;
      }

      // If email doesn't exist, insert it
      const { error } = await supabase
        .from("email_subscribers")
        .insert([{ email }]);

      if (error) {
        if (error.code === "23505") { // Unique constraint violation
          toast({
            title: "Already part of our community! 🌟",
            description: "We recognize this email! You're already on our exclusive waitlist. We'll make sure you're the first to know when we launch. Stay tuned for exciting updates!",
          });
        } else {
          console.error("Signup error:", error);
          toast({
            title: "Something went wrong",
            description: "Please try again later",
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Welcome aboard! 🎉",
          description: "Thanks for joining our waitlist! You'll be among the first to know when we launch. We can't wait to share our exciting updates with you!",
        });
        setEmail("");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={className}>
      <p className="text-sm text-muted-foreground text-center mb-4">
        We won't spam - promise 🤗
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Subscribing..." : "Get Updates"}
          </Button>
        </div>
      </form>
    </div>
  );
};