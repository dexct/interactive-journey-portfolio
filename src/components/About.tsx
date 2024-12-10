import { useEffect, useState } from "react";

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
    <section id="about" className="section-padding">
      <div
        className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
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
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center font-mono text-sm"
                >
                  <span className="text-green mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="relative w-full aspect-square">
              <img
                src="/placeholder.svg"
                alt="Antoine Dewas"
                className="rounded object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 border-2 border-green rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;