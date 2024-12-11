import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";
import SplineScene from "./SplineScene";

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
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden bg-gradient-to-b from-navy to-navy-light">
      <ParticlesBackground />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-green/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy-lighter/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green/10 to-transparent rounded-full blur-[120px] opacity-30" />
      </div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block font-mono text-green mb-5 px-4 py-1 rounded-full bg-green/10 text-sm"
          >
            Bonjour, je suis
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="heading bg-clip-text text-transparent bg-gradient-to-r from-lightest-slate to-light-slate"
          >
            Antoine Dewas.
          </motion.h2>
          
          <motion.h3
            variants={itemVariants}
            className="heading text-slate relative inline-block"
          >
            {text}
            <span className="animate-pulse ml-1">|</span>
          </motion.h3>
          
          <motion.p
            variants={itemVariants}
            className="subheading max-w-2xl mx-auto lg:mx-0"
          >
            Je suis un développeur web spécialisé dans la création d'expériences
            numériques exceptionnelles. Actuellement, je me concentre sur la
            construction de solutions innovantes intégrant l'IA.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Button
              className="relative group bg-transparent border-2 border-green text-green hover:bg-green/10 px-8 py-6 text-lg 
                       transition-all duration-300"
            >
              <span className="relative z-10">Découvrir mes projets</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-green/0 via-green/5 to-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:block relative"
        >
          <SplineScene />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;