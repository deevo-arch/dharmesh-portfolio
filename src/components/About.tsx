import { Code, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "AI/ML Specialist",
      description: "Specialized in artificial intelligence and machine learning technologies"
    },
    {
      icon: Rocket,
      title: "Tech Entrepreneur",
      description: "Building scalable products with entrepreneurial mindset"
    },
    {
      icon: Users,
      title: "Community Leader",
      description: "Founder of student-led club fostering tech innovation"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Passionate about creating solutions that make a difference"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate computer science student with a vision to transform ideas into reality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 animate-slide-in">
            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm currently in my 3rd year of Computer Science, specializing in AI/ML technologies. 
                  My journey has been driven by a passion for creating innovative solutions that bridge 
                  the gap between complex technology and real-world applications.
                </p>
                <p>
                  As an intern at <span className="text-primary font-semibold">XeonWeb Solutions</span>, 
                  I've gained hands-on experience in developing scalable web applications and working 
                  with cutting-edge technologies. This experience has shaped my understanding of the 
                  industry and reinforced my entrepreneurial aspirations.
                </p>
                <p>
                  Beyond academics and internships, I've founded a student-led club that brings together 
                  like-minded individuals to collaborate on innovative projects and foster a culture of 
                  technology innovation within our community.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="glass rounded-xl p-6 stroke-hover glow group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 glass-strong rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">3+</div>
              <div className="text-muted-foreground">Years of Study</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">1</div>
              <div className="text-muted-foreground">Active Internship</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">1</div>
              <div className="text-muted-foreground">Club Founded</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;