
import { FlightCalculator } from "@/components/FlightCalculator";
import { Footer } from "@/components/Footer";

export default function FlightCalculatorPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <FlightCalculator />
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}