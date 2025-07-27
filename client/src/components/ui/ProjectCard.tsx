import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  features: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const handleProjectClick = () => {
    if (project.link.startsWith("http")) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Card className="project-card glass-effect border-border hover:border-primary transition-all duration-300 group overflow-hidden hover-lift card-glow animate-fade-in">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.map((feature, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                <span className="text-primary mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <Button
            onClick={handleProjectClick}
            className="flex-1 bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(259,83%,58%)] text-white hover:scale-105 transition-transform"
            disabled={!project.link.startsWith("http")}
          >
            {project.link.startsWith("http") ? (
              <>
                <ExternalLink className="w-4 h-4 mr-2" />
                View Project
              </>
            ) : (
              <>
                <Github className="w-4 h-4 mr-2" />
                In Development
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
