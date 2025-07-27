import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Your Project Title",
      description: "Description of your project. Explain what it does, who it's for, and what makes it special or unique.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      tags: ["Technology1", "Technology2", "Technology3", "Technology4"],
      link: "https://github.com/yourusername/your-repo",
      features: [
        "Key feature 1 of your project",
        "Key feature 2 with specific metrics if available",
        "Key feature 3 highlighting technical achievements",
        "Key feature 4 showing impact or results"
      ]
    },
    {
      title: "CELLINTEL",
      description: "Law enforcement-grade telecom data analysis tool with interactive network visualizations, OSINT integration, and real-time link analysis for comprehensive data correlation.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      tags: ["Electron.js", "Python", "Flask", "D3.js", "PostgreSQL"],
      link: "#",
      features: [
        "Interactive network visualizations",
        "Multi-format data ingestion",
        "OSINT capabilities with Maltego CE",
        "Real-time link analysis"
      ]
    },
    {
      title: "Medical Reimbursement Portal",
      description: "Secure medical claim management system built during internship at Intellect Design Arena. Features real-time communication, document management, and Excel-like data tables.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      tags: ["React.js", "Node.js", "PostgreSQL", "Socket.IO", "SheetJS"],
      link: "#",
      features: [
        "Secure claim submission and tracking",
        "Real-time chat with voice support",
        "Nested document management system",
        "Excel-like data table interface"
      ]
    },
    {
      title: "Swarm-Based Toxicity Prediction",
      description: "Published research on novel SBTP Model integrating Graph Neural Networks and Multi-Agent Reinforcement Learning for drug-induced toxicity prediction with 12.7% accuracy improvement.",
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      tags: ["Python", "Graph Neural Networks", "Reinforcement Learning", "Research"],
      link: "#research-paper",
      features: [
        "12.7% increase in prediction accuracy",
        "18.4% reduction in false positives",
        "Graph Neural Networks integration",
        "Stigmergy-based learning approach"
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            My Work
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-shimmer mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of innovative projects spanning AI/ML, web development, 
            and research initiatives that demonstrate my passion for technology.
          </p>
          <div className="mt-4">
            <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/20">
              🚧 Projects currently being uploaded to GitHub
            </Badge>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
