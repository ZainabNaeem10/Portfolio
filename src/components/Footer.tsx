import { Button } from "@/components/ui/button";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ZainabNaeem10",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/zainab-naeem-699a38309",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:zainabnaeem1004@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-warm-gray-dark text-white py-12 relative">
      {/* Back to top button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary hover:bg-primary-glow shadow-elegant rounded-full w-12 h-12"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Name */}
          <div className="mb-8">
            <h3 className="text-3xl font-serif font-bold text-white mb-2">
              Zainab Naeem
            </h3>
            <p className="text-white/80">
              Software Engineering Student & Aspiring Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="bg-white/10 hover:bg-white/20 text-white hover:text-white rounded-full w-12 h-12 transition-all duration-300 hover:scale-110"
                onClick={() => window.open(social.href, '_blank')}
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </Button>
            ))}
          </div>

          {/* Copyright and Attribution */}
          <div className="border-t border-white/20 pt-8 space-y-4">
            <p className="text-white/80 text-sm">
              © {new Date().getFullYear()} Zainab Naeem. All rights reserved.
            </p>
            
            <p className="text-white/60 text-sm flex items-center justify-center gap-2">
              Built with <Heart className="h-4 w-4 text-primary" fill="currentColor" /> 
              using React, TypeScript & Tailwind CSS
            </p>
            
            <p className="text-white/50 text-xs">
              Designed with inspiration from modern portfolio trends
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;