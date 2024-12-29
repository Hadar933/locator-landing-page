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
        
        <article className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold mb-8">Data Policy</h1>
          
          <p className="text-muted-foreground mb-8">
            Locator is committed to protecting your privacy and ensuring a safe experience for all users. 
            Our application does not collect or share any personal data from its users, making it a secure 
            choice for everyone.
          </p>

          <p className="text-muted-foreground mb-8">
            The application is designed for users aged 13 and above, specifically catering to age groups 
            13-15, 16-17, and 18 years and over. We maintain strict content guidelines to ensure 
            appropriateness for all our users.
          </p>

          <p className="text-muted-foreground">
            Our commitment to providing safe and appropriate content is reflected in our global content 
            ratings. Locator has received an "Everyone" rating from ESRB (Entertainment Software Rating 
            Board), a PEGI 3 rating in Europe, a USK 0 rating in Germany, and is classified as "Livre" 
            (suitable for all ages) by Brazil's Classificação Indicativa system.
          </p>
        </article>
      </div>
    </div>
  );
};

export default DataPolicy;