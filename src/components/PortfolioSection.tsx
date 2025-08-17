import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LuGithub } from 'react-icons/lu';
import { ExternalLink, Code, Gamepad2, Database, Palette, Globe, Search } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Multi-threaded Pacman Game",
      description: "Advanced arcade-style game built with C, implementing multi-threading with pthreads and OpenGL graphics for smooth gameplay experience.",
      tech: ["C", "pthreads", "OpenGL", "Graphics Programming"],
      icon: Gamepad2,
      category: "Game Development",
      highlight: true,
      LuGithub: "https://github.com/ZainabNaeem10/Pacman-Game",
    },
    {
      title: "Job Fair Management System",
      description: "Comprehensive desktop application with CRUD operations for managing job fair booths, company reviews, and interview scheduling.",
      tech: ["C#", "MS SQL Server", "Windows Forms", "Database Design"],
      icon: Database,
      category: "Desktop Application",
      highlight: true,
      LuGithub: "https://github.com/ZainabNaeem10/Job-Fair-Management-System",
    },
    {
      title: "OLX Hostel Scraper",
      description: "Web scraping solution to extract hostel data from OLX, integrated with Google Sheets API for automated data management.",
      tech: ["Python", "HTML", "CSS", "JavaScript", "Google Sheets API"],
      icon: Search,
      category: "Web Scraping",
      highlight: false,
      LuGithub: "https://github.com/ZainabNaeem10/OLX-Hostel-Scrapper",
    },
    {
      title: "E-Commerce Website Design",
      description: "Complete UI/UX design for an online store featuring product catalogs, shopping cart, and billing pages with modern aesthetics.",
      tech: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
      icon: Palette,
      category: "Design",
      highlight: false,
      LuGithub: "https://www.figma.com/design/VkNMLhu4XZQrcAbP4SRbQp/Untitled?node-id=0-1&t=groDIsefC2kdNmoH-1",
    },
    {
      title: "Movie Recommendation Platform",
      description: "UI/UX design for a movie recommendation website with personalized suggestions and intuitive user interface.",
      tech: ["Figma", "UI/UX Design", "Wireframing", "User Experience"],
      icon: Palette,
      category: "Design",
      highlight: false,
      LuGithub: "https://www.figma.com/design/ajoSjZzLOC6hIyR1jlyswM/Untitled?m=auto&t=rf4BAbM197EicHFI-1",
    },
    {
      title: "Restaurant Management System",
      description: "Console-based system for managing restaurant orders, billing, and inventory with efficient data structures.",
      tech: ["C++", "Data Structures", "Console Application", "File Management"],
      icon: Code,
      category: "System Development",
      highlight: false,
      LuGithub: "https://github.com/ZainabNaeem10/Restaurant-Management-System",
    },
    {
      title: "Brick Breaker Game",
      description: "Classic arcade-style game implemented in Assembly language with x86 graphics and smooth game mechanics.",
      tech: ["Assembly", "x86 Graphics", "Game Logic", "Low-level Programming"],
      icon: Gamepad2,
      category: "Game Development",
      highlight: false,
      LuGithub: "https://github.com/ZainabNaeem10/Brick-Breaker-Game",
    },
    {
      title: "Responsive Clothing Website",
      description: "Modern e-commerce website interface with responsive design, showcasing clothing products with elegant layouts.",
      tech: ["HTML", "CSS", "Responsive Design", "Web Development"],
      icon: Globe,
      category: "Web Development",
      highlight: false,
      LuGithub: "https://github.com/ZainabNaeem10/Clothing-Website"
    },
  ];

  const highlightedProjects = projects.filter(p => p.highlight);
  const otherProjects = projects.filter(p => !p.highlight);

  return (
    <section id="portfolio" className="py-20 bg-cream/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              My <span className="text-primary">Portfolio</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of projects demonstrating my technical skills and creative problem-solving abilities
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Featured Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {highlightedProjects.map((project, index) => (
                <Card 
                  key={index}
                  className="p-8 bg-gradient-card shadow-card border-0 hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4 className="text-xl font-semibold text-foreground">{project.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                     <a href={project.LuGithub} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="ghost">
                      <LuGithub className="h-4 w-4" />
                    </Button>
      </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Projects Grid */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card shadow-card border border-border hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <project.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-foreground text-sm">{project.title}</h4>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-accent/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs border-accent/20">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                     <a href={project.LuGithub} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="ghost" className="text-xs">
                      <LuGithub className="h-3 w-3" />
                    </Button>
                    </a>
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

export default PortfolioSection;
