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
      
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy-lighter/30 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="max-w-2xl"
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

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:block relative"
        >
          <div className="relative w-full aspect-square">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Développement web"
              className="rounded-lg object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-green/20 rounded-lg"></div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-green rounded-lg -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;