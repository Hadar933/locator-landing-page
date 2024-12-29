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
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Collection and Sharing</h2>
            <p className="text-muted-foreground">
              Locator does not collect or share any personal data from its users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Target Age Groups</h2>
            <p className="text-muted-foreground mb-2">The app is suitable for the following age groups:</p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>13-15 years old</li>
              <li>16-17 years old</li>
              <li>18 years and over</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Content Ratings</h2>
            <p className="text-muted-foreground mb-2">Locator has received the following content ratings:</p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>ESRB: Everyone</li>
              <li>PEGI: 3</li>
              <li>USK: 0</li>
              <li>Classificação Indicativa (Brazil): Livre (All ages)</li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
};

export default DataPolicy;