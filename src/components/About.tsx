import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "TailwindCSS",
    "OpenAI API",
  ];

  return (
    <section id="about" className="section-padding relative">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-navy-lighter/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-lightest-slate mb-12">
          <span className="font-mono text-green text-xl mr-2">01.</span>
          À propos
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-light-slate">
            <p>
              Bonjour ! Je m'appelle Antoine et j'aime créer des choses qui vivent
              sur internet. Mon intérêt pour le développement web a commencé en
              2020 lorsque j'ai décidé de créer ma première application web.
            </p>
            <p>
              Aujourd'hui, j'ai eu le privilège de travailler sur de nombreux
              projets innovants, notamment JobAI, une plateforme utilisant l'IA
              pour la création de CV.
            </p>
            <p>Voici quelques technologies avec lesquelles je travaille :</p>
            <motion.ul 
              className="grid grid-cols-2 gap-2 mt-4"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {skills.map((skill) => (
                <motion.li
                  key={skill}
                  className="flex items-center font-mono text-sm"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <span className="text-green mr-2">▹</span>
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full aspect-square">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                alt="Antoine Dewas"
                className="rounded object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-green/20 rounded hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border-2 border-green rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;