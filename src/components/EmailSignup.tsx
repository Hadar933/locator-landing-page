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
      const { error } = await supabase
        .from("email_subscribers")
        .insert([{ email }]);

      if (error) throw error;

      toast({
        title: "You're In! 🎉",
        description: "Thanks for joining! We'll keep you in the loop about our iOS launch.",
      });
      setEmail("");
    } catch (error: any) {
      toast({
        title: "Something went wrong",
        description: error.message === "duplicate key value violates unique constraint \"email_subscribers_email_key\""
          ? "This email is already subscribed"
          : "Please try again later",
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