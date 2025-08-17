import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Calendar } from "lucide-react";

const AboutSection = () => {
  const education = [
    {
      institution: "FAST-NUCES, Islamabad",
      degree: "BS Software Engineering",
      period: "2023 – Present",
      status: "Current",
      icon: GraduationCap,
    },
    {
      institution: "Punjab Group of Colleges",
      degree: "FSc (Pre-Engineering)",
      period: "2021 – 2023",
      status: "91%",
      icon: Award,
    },
    {
      institution: "Silver Oaks School and College",
      degree: "Matriculation (Science)",
      period: "2019 – 2021",
      status: "96%",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-20 bg-cream/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating innovative software solutions and continuously learning new technologies
            </p>
          </div>

          {/* Bio Section */}
          <div className="mb-16 animate-slide-in">
            <Card className="p-8 bg-gradient-card shadow-card border-0">
              <p className="text-lg leading-relaxed text-foreground">
                I'm a dedicated Software Engineering student at FAST NUCES with a strong foundation in core 
                computer science principles, including data structures, operating systems, and software design 
                and architecture. I'm passionate about translating complex ideas into robust and scalable 
                software solutions.
              </p>
              <br />
              <p className="text-lg leading-relaxed text-foreground">
                With a firm grasp of various programming languages, I'm always looking for new challenges 
                and opportunities to learn and collaborate. My goal is to contribute to innovative projects 
                that make a positive impact through technology.
              </p>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">
              Education Journey
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-card shadow-card border border-border hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <edu.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h4 className="text-xl font-semibold text-foreground">
                          {edu.institution}
                        </h4>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm font-medium">{edu.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-2">{edu.degree}</p>
                      
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                        {edu.status}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;