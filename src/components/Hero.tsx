import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Développeur Web & Entrepreneur.";
  const typingSpeed = 50;

  useEffect(() => {
    setMounted(true);
    let currentText = "";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setText(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center section-padding overflow-hidden">
      <ParticlesBackground />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        className="max-w-4xl"
      >
        <motion.h1
          variants={itemVariants}
          className="font-mono text-green mb-5"
        >
          Bonjour, je suis
        </motion.h1>
        
        <motion.h2
          variants={itemVariants}
          className="heading"
        >
          Antoine Dewas.
        </motion.h2>
        
        <motion.h3
          variants={itemVariants}
          className="heading text-slate"
        >
          {text}
          <span className="animate-pulse">|</span>
        </motion.h3>
        
        <motion.p
          variants={itemVariants}
          className="subheading max-w-2xl"
        >
          Je suis un développeur web spécialisé dans la création d'expériences
          numériques exceptionnelles. Actuellement, je me concentre sur la
          construction de solutions innovantes intégrant l'IA.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            className="mt-8 bg-transparent border-2 border-green text-green hover:bg-green/10 px-8 py-6 text-lg 
                     transition-all duration-300 hover:shadow-[0_0_15px_rgba(100,255,218,0.3)]"
          >
            Découvrir mes projets
            <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;