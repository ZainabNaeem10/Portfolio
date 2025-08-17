import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-glow" />
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Left Content - Text and CTA */}
          <div className="space-y-8 animate-fade-in md:col-span-2 order-1">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground font-medium tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
                Zainab{" "}
                <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
                  Naeem
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-accent font-medium">
                Software Engineering Student
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Turning complex ideas into scalable solutions through innovative software development
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("portfolio")}
                size="lg"
                className="bg-gradient-primary hover:shadow-soft transition-all duration-300 hover:scale-105"
              >
                <span>View Portfolio</span>
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-slide-in md:col-span-1 order-2 flex justify-center md:justify-end pr-12">
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
              {/* Decorative background - smaller */}
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl rotate-6 scale-105 opacity-20" />
              <div className="absolute inset-0 bg-gradient-card rounded-2xl -rotate-3 scale-110 opacity-30" />
              
              {/* Profile Image - smaller and more compact */}
              <div className="relative bg-card rounded-2xl p-1 shadow-elegant">
                <img
                  src={profileImage}
                  alt="Zainab Naeem - Software Engineering Student"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              
              {/* Floating badge - smaller */}
              <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full shadow-soft animate-glow text-sm">
                <span className="font-medium text-xs">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;