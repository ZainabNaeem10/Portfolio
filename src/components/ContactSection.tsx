import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LuGithub, LuLinkedin } from 'react-icons/lu';
import { Mail, MapPin, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "zainabnaeem1004@gmail.com",
      href: "mailto:zainabnaeem1004@gmail.com",
      color: "primary",
    },
    {
      icon: LuLinkedin,
      label: "LinkedIn",
      value: "zainab-naeem-699a38309",
      href: "https://www.linkedin.com/in/zainab-naeem-699a38309",
      color: "accent",
    },
    {
      icon: LuGithub,
      label: "GitHub",
      value: "ZainabNaeem10",
      href: "https://github.com/ZainabNaeem10",
      color: "primary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rawalpindi, Pakistan",
      href: null,
      color: "accent",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always excited to connect with fellow developers, potential collaborators, and anyone interested in technology.
              Let's build something amazing together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card 
                    key={index}
                    className="p-4 bg-gradient-card shadow-card border-0 hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        contact.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                      }`}>
                        <contact.icon className={`h-6 w-6 ${
                          contact.color === 'primary' ? 'text-primary' : 'text-accent'
                        }`} />
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground font-medium hover:text-primary transition-colors duration-300"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="p-8 bg-gradient-primary text-primary-foreground shadow-elegant border-0 h-full flex flex-col justify-center">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Send className="h-8 w-8" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Ready to Start a Project?
                    </h3>
                    <p className="text-primary-foreground/90 leading-relaxed mb-6">
                      I'm currently available for internships, freelance projects, and collaboration opportunities. 
                      Let's discuss how we can work together to bring your ideas to life.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="w-full bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105"
                      onClick={() => window.open('mailto:zainabnaeem1004@gmail.com', '_blank')}
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Send me an email
                    </Button>
                    
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105"
                      onClick={() => window.open('https://www.linkedin.com/in/zainab-naeem-699a38309', '_blank')}
                    >
                      <LuLinkedin className="mr-2 h-5 w-5" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Additional Contact Notes */}
         
        </div>
      </div>
    </section>
  );
};

export default ContactSection;