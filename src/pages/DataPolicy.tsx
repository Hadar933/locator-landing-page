import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const DataPolicy = () => {
  return (
    <div className="container py-16">
      <div className="max-w-3xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-4xl font-bold mb-8">Data Policy</h1>
        <p className="text-muted-foreground">Content to be added later.</p>
      </div>
    </div>
  );
};

export default DataPolicy;