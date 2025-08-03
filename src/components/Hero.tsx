import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary opacity-50" />
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-primary-glow/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Glass card */}
        <div className="glass rounded-3xl p-8 md:p-12 animate-slide-up">
          {/* Name and title */}
          <div className="space-y-6 mb-8">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Dharmesh</span>
              <br />
              <span className="text-foreground">Gour</span>
            </h1>
            
            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-muted-foreground">
                AI/ML Engineer & Entrepreneur
              </p>
              <p className="text-lg text-muted-foreground">
                3rd Year Computer Science Student
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Currently interning at <span className="text-primary font-semibold">XeonWeb Solutions</span>, 
            founding student-led communities, and building scalable tech products with a vision to become 
            a successful entrepreneur.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="glow stroke-hover group">
              <span className="relative z-10">Let's Connect</span>
            </Button>
            <Button variant="outline" size="lg" className="glass-strong stroke-hover">
              View My Work
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="glass rounded-full p-3 hover:scale-110 transition-all duration-300 stroke-hover group"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;