import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container-custom text-center z-10">
        <div className="animate-float">
          <Badge variant="outline" className="mb-6 border-primary text-primary">
            Software & AI Developer
          </Badge>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            G'day, I'm{" "}
            <span className="gradient-text">Suryaprasanth T</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            BTech IT student and AI enthusiast with experience in React.js, Node.js, Python, and Machine Learning. 
            Building innovative solutions at the intersection of technology and intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(259,83%,58%)] text-white hover:scale-105 transition-transform animate-glow px-8 py-3"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Surya-Repo-Uxk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/suryaprasanth-t"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:saipraba2006@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>

      {/* Social Links - Desktop only */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 space-y-4 hidden lg:block">
        <a
          href="https://github.com/Surya-Repo-Uxk"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-muted-foreground hover:text-primary transition-colors text-xl p-2"
        >
          <Github className="w-5 h-5" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/suryaprasanth-t"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-muted-foreground hover:text-primary transition-colors text-xl p-2"
        >
          <Linkedin className="w-5 h-5" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="mailto:saipraba2006@gmail.com"
          className="block text-muted-foreground hover:text-primary transition-colors text-xl p-2"
        >
          <Mail className="w-5 h-5" />
          <span className="sr-only">Email</span>
        </a>
        <div className="w-px h-20 bg-muted-foreground mx-auto"></div>
      </div>
    </section>
  );
}
