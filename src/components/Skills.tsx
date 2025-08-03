import { Badge } from "@/components/ui/badge";
import { Brain, Code2, Database, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI/ML",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP", "Deep Learning"]
    },
    {
      icon: Code2,
      title: "Development",
      skills: ["JavaScript", "React", "Node.js", "TypeScript", "Java", "C++", "Git"]
    },
    {
      icon: Database,
      title: "Data & Backend",
      skills: ["SQL", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "Docker", "AWS"]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "Tailwind CSS", "Next.js", "Express.js", "Redux", "Webpack"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative AI-powered solutions
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="glass-strong rounded-2xl p-8 stroke-hover group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="glass rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Currently learning section */}
        <div className="mt-12 text-center">
          <div className="glass-strong rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Currently Exploring</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Blockchain", "Web3", "React Native", "Kubernetes", "LangChain", "MLOps"].map((tech) => (
                <Badge
                  key={tech}
                  className="glass pulse-glow hover:scale-105 transition-transform duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;