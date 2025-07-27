import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "ARIS for Research Scholars",
      description: "Open-source AI-powered research assistant designed to streamline academic workflows. Features custom LLM pipeline for citation extraction, contextualization, and scientific language simplification.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      tags: ["Python", "Flask", "AI/ML", "Hugging Face", "OpenCV"],
      link: "https://github.com/Surya-Repo-Uxk/ARIS",
      features: [
        "Custom LLM pipeline for research paper analysis",
        "25% efficiency improvement through fine-tuning",
        "Open-source ML frameworks integration",
        "Citation extraction and contextualization"
      ]
    },
    {
      title: "CELLINTEL",
      description: "Law enforcement-grade telecom data analysis tool with interactive network visualizations, OSINT integration, and real-time link analysis for comprehensive data correlation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      tags: ["Electron.js", "Python", "Flask", "D3.js", "PostgreSQL"],
      link: "https://github.com/Surya-Repo-Uxk/CELLINTEL",
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
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
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
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of innovative projects spanning AI/ML, web development, 
            and research initiatives that demonstrate my passion for technology.
          </p>
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
