import { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

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
      image: "/placeholder.svg",
    },
    {
      title: "Video Editor AI",
      description:
        "Application d'édition vidéo assistée par IA, permettant d'automatiser le montage et d'améliorer la qualité des vidéos.",
      tech: ["Next.js", "Python", "TensorFlow", "FFmpeg"],
      github: "#",
      external: "#",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div
        className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-lightest-slate mb-12">
          <span className="font-mono text-green text-xl mr-2">02.</span>
          Mes Projets
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
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
                <div className="bg-navy-light p-6 rounded-lg mb-4">
                  <p className="text-light-slate">{project.description}</p>
                </div>
                <ul
                  className={`flex flex-wrap gap-4 font-mono text-sm text-slate mb-4 ${
                    index % 2 === 0 ? "" : "justify-end"
                  }`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 0 ? "" : "justify-end"
                  }`}
                >
                  <a
                    href={project.github}
                    className="text-light-slate hover:text-green transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.external}
                    className="text-light-slate hover:text-green transition-colors"
                    aria-label="External Link"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div
                className={`relative ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-green/20 hover:bg-transparent transition-colors duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;