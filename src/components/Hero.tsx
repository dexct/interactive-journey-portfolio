import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center section-padding">
      <div
        className={`max-w-4xl transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="font-mono text-green mb-5">Bonjour, je suis</h1>
        <h2 className="heading">Antoine Dewas.</h2>
        <h3 className="heading text-slate">
          Développeur Web & Entrepreneur.
        </h3>
        <p className="subheading max-w-2xl">
          Je suis un développeur web spécialisé dans la création d'expériences
          numériques exceptionnelles. Actuellement, je me concentre sur la
          construction de solutions innovantes intégrant l'IA.
        </p>
        <Button
          className="mt-8 bg-transparent border-2 border-green text-green hover:bg-green/10 px-8 py-6 text-lg"
        >
          Découvrir mes projets
          <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;