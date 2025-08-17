import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Palette, Users } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      skills: ["Python", "C", "C++", "C#", "Assembly", "HTML", "CSS", "JavaScript", ".NET", "Playwright"],
      color: "primary",
    },
    {
      title: "Tools & Databases",
      icon: Database,
      skills: ["Chromium", "MS SQL Server", "Microsoft Office", "Figma"],
      color: "accent",
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      skills: ["Figma", "UI Design", "UX Research", "Responsive Design", "Prototyping"],
      color: "primary",
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Communication", "Team Collaboration", "Problem-Solving", "Public Speaking", "Leadership"],
      color: "accent",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Skills & <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of technical and soft skills developed through academic learning and hands-on projects
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-card shadow-card border-0 hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                  }`}>
                    <category.icon className={`h-6 w-6 ${
                      category.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        category.color === 'primary' 
                          ? 'hover:bg-primary hover:text-primary-foreground' 
                          : 'hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;