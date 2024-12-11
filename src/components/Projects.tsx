import { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
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

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const projects = [
    {
      title: "JobAI",
      description:
        "Une plateforme innovante utilisant l'IA pour créer des CV professionnels et personnalisés. Intégration de l'API OpenAI pour générer du contenu pertinent.",
      tech: ["React", "Node.js", "OpenAI", "TailwindCSS"],
      github: "#",
      external: "#",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
    {
      title: "Video Editor AI",
      description:
        "Application d'édition vidéo assistée par IA, permettant d'automatiser le montage et d'améliorer la qualité des vidéos.",
      tech: ["Next.js", "Python", "TensorFlow", "FFmpeg"],
      github: "#",
      external: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
  ];

  return (
    <section id="projects" className="section-padding relative">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-navy-lighter/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-green/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-lightest-slate mb-12">
          <span className="font-mono text-green text-xl mr-2">02.</span>
          Mes Projets
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative grid md:grid-cols-2 gap-8 ${
                index % 2 === 0 ? "" : "md:text-right"
              }`}
            >
              <div
                className={`relative z-10 ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <h3 className="font-mono text-green text-sm mb-2">
                  Projet Phare
                </h3>
                <h4 className="text-2xl font-bold text-lightest-slate mb-4">
                  {project.title}
                </h4>
                <motion.div 
                  className="bg-navy-light p-6 rounded-lg mb-4 hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-light-slate">{project.description}</p>
                </motion.div>
                <ul
                  className={`flex flex-wrap gap-4 font-mono text-sm text-slate mb-4 ${
                    index % 2 === 0 ? "" : "justify-end"
                  }`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech} className="hover:text-green transition-colors">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 0 ? "" : "justify-end"
                  }`}
                >
                  <motion.a
                    href={project.github}
                    className="text-light-slate hover:text-green transition-colors"
                    aria-label="GitHub Repository"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.external}
                    className="text-light-slate hover:text-green transition-colors"
                    aria-label="External Link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
              <motion.div
                className={`relative ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-green/20 hover:bg-transparent transition-colors duration-300 rounded-lg"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;