import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Building expertise through hands-on experience and leadership
          </p>
        </div>

        {/* Experience timeline */}
        <div className="space-y-8">
          {/* Current Internship */}
          <div className="glass-strong rounded-2xl p-8 animate-slide-up stroke-hover group">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="glass rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-primary font-semibold">CURRENT POSITION</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Software Engineering Intern
                </h3>
                
                <div className="text-xl text-muted-foreground mb-4">
                  XeonWeb Solutions
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>2024 - Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Remote</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Working on developing scalable web applications using modern technologies. 
                    Gaining hands-on experience in full-stack development, collaborating with 
                    cross-functional teams, and contributing to real-world projects that serve 
                    thousands of users.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Responsibilities:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li className="before:content-['•'] before:text-primary before:font-bold before:mr-2">
                        Developing responsive web applications using React and TypeScript
                      </li>
                      <li className="before:content-['•'] before:text-primary before:font-bold before:mr-2">
                        Implementing RESTful APIs and database integration
                      </li>
                      <li className="before:content-['•'] before:text-primary before:font-bold before:mr-2">
                        Collaborating with design and product teams on user experience
                      </li>
                      <li className="before:content-['•'] before:text-primary before:font-bold before:mr-2">
                        Participating in code reviews and agile development processes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Club Leadership */}
          <div className="glass-strong rounded-2xl p-8 animate-slide-up stroke-hover group" style={{ animationDelay: '0.1s' }}>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="glass rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-primary font-semibold">LEADERSHIP</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Founder & President
                </h3>
                
                <div className="text-xl text-muted-foreground mb-4">
                  Student-Led Tech Club
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>2023 - Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>University Campus</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Founded and leading a technology-focused student organization dedicated to 
                    fostering innovation, collaboration, and skill development among peers. 
                    Organizing workshops, hackathons, and projects that bridge the gap between 
                    academic learning and industry requirements.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Achievements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li className="before:content-['•'] before:text-primary before:font-bold before:mr-2">
                        Successfully launched the club with 50+ active members
                      </li>
                      <li className="before:content-['•'] before:text-primary before:font-bold before:mr-2">
                        Organized monthly tech workshops and coding bootcamps
                      </li>
                      <li className="before:content-['•'] before:text-primary before:font-bold before:mr-2">
                        Led team projects focusing on AI/ML and web development
                      </li>
                      <li className="before:content-['•'] before:text-primary before:font-bold before:mr-2">
                        Established partnerships with local tech companies
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;