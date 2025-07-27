import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Trophy, ExternalLink } from "lucide-react";

export default function Experience() {
  const achievements = [
    {
      title: "HACK-A-BOT 2024",
      description: "1st Place",
      icon: "🥇"
    },
    {
      title: "Cyberthon 2025",
      description: "Group Special Mention",
      icon: "🏆"
    },
    {
      title: "Hack India Spark 1",
      description: "Competed among 200+ national teams",
      icon: "🚀"
    },
    {
      title: "Best UG Paper",
      description: "IMSTEM 2025 International Conference",
      icon: "📄"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-[hsl(240,8%,8%)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Experience
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My experience in software development, AI research, and competitive programming 
            has shaped my expertise in building innovative technological solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Current Role */}
          <Card className="glass-effect border-border hover:border-primary transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Software & AI Developer Intern
                  </h3>
                  <p className="text-xl text-foreground font-medium">
                    Intellect Design Arena
                  </p>
                </div>
                <div className="flex flex-col lg:text-right text-muted-foreground mt-4 lg:mt-0">
                  <div className="flex items-center lg:justify-end mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Jun 2025 – Jul 2025</span>
                  </div>
                  <div className="flex items-center lg:justify-end">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Chennai</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Developed a secure Medical Reimbursement Claim Portal using FOSS tools including 
                  React.js, Node.js (Express), and PostgreSQL, enabling employees to submit, track, 
                  and manage medical claims efficiently.
                </p>
                <p>
                  Implemented open-source libraries like SheetJS for Excel-like data tables and 
                  Socket.IO for real-time internal communication with chat and voice support features.
                </p>
                <p>
                  Designed a comprehensive nested document management system with folder/subfolder 
                  creation, preview, and upload capabilities using community-driven file system tools.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {["React.js", "Node.js", "PostgreSQL", "Socket.IO", "SheetJS", "FOSS"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="glass-effect border-border hover:border-primary transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    BTech Information Technology
                  </h3>
                  <p className="text-xl text-foreground font-medium">
                    St. Joseph's College of Engineering, Chennai
                  </p>
                </div>
                <div className="flex flex-col lg:text-right text-muted-foreground mt-4 lg:mt-0">
                  <div className="flex items-center lg:justify-end mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>2025 – Present</span>
                  </div>
                  <div className="flex items-center lg:justify-end">
                    <Trophy className="w-4 h-4 mr-2" />
                    <span>CGPA: 8.24</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Publication */}
          <Card className="glass-effect border-border hover:border-primary transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Published Research Paper
                  </h3>
                  <p className="text-xl text-foreground font-medium">
                    Swarm Intelligence for Dynamic and Multi-Scale Toxicity Prediction
                  </p>
                </div>
                <div className="flex flex-col lg:text-right text-muted-foreground mt-4 lg:mt-0">
                  <div className="flex items-center lg:justify-end">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>April 2025</span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Co-authored a novel Swarm-Based Toxicity Prediction (SBTP) Model integrating Graph Neural Networks, 
                Multi-Agent Reinforcement Learning, and stigmergy-based learning to predict drug-induced toxicity. 
                Demonstrated a 12.7% increase in prediction accuracy and 18.4% reduction in false positives.
              </p>

              <div className="flex items-center text-primary hover:text-primary/80 transition-colors">
                <ExternalLink className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">View Publication</span>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Achievements & Recognition
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement) => (
                <Card key={achievement.title} className="glass-effect border-border hover:border-primary transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
