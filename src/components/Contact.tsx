import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dharmesh.gour@email.com",
      href: "mailto:dharmesh.gour@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+91XXXXXXXXX"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      username: "@dharmeshgour"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      username: "Dharmesh Gour"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:dharmesh.gour@email.com",
      username: "dharmesh.gour@email.com"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-t from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="glass-strong rounded-2xl p-8 animate-slide-in">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input 
                    placeholder="John" 
                    className="glass border-glass-border/50 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input 
                    placeholder="Doe" 
                    className="glass border-glass-border/50 focus:border-primary transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="glass border-glass-border/50 focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input 
                  placeholder="Let's collaborate!" 
                  className="glass border-glass-border/50 focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  className="glass border-glass-border/50 focus:border-primary transition-colors resize-none"
                />
              </div>
              
              <Button size="lg" className="w-full glow stroke-hover">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            {/* Contact details */}
            <div className="glass-strong rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Get in Touch</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-3 glass rounded-lg stroke-hover group hover:scale-105 transition-all duration-300"
                    >
                      <div className="glass rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social links */}
            <div className="glass-strong rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Follow Me</h3>
              
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center justify-between p-3 glass rounded-lg stroke-hover group hover:scale-105 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="glass rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium group-hover:text-primary transition-colors">
                            {social.label}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {social.username}
                          </div>
                        </div>
                      </div>
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        →
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Call to action */}
            <div className="glass-strong rounded-2xl p-8 text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h4 className="text-xl font-bold mb-3 gradient-text">Ready to Build Something Amazing?</h4>
              <p className="text-muted-foreground mb-4">
                Whether it's a startup idea, collaboration opportunity, or just a tech discussion, 
                I'm always excited to connect with fellow innovators.
              </p>
              <Button className="glow stroke-hover">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;