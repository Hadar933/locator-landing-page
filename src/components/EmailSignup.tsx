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
          title: "You're already on the list! 🎉",
          description: "We've got your email saved. We'll notify you as soon as we launch!",
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
            title: "You're already on the list! 🎉",
            description: "We've got your email saved. We'll notify you as soon as we launch!",
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
          title: "Welcome aboard! 🚀",
          description: "Thanks for joining! You'll be the first to know when we launch.",
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