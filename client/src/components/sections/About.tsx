import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const skills = [
    { name: "React.js", icon: "⚛️", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Python", icon: "🐍", category: "Language" },
    { name: "JavaScript", icon: "💛", category: "Language" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "Git", icon: "📋", category: "Tool" },
    { name: "Linux", icon: "🐧", category: "OS" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Docker", icon: "🐳", category: "Tool" },
    { name: "AI/ML", icon: "🤖", category: "Specialty" },
    { name: "FOSS", icon: "🔓", category: "Philosophy" },
  ];

  return (
    <section id="about" className="section-padding bg-[hsl(240,8%,8%)] relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="parallax-bg space-y-6">
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="AI and machine learning development workspace"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover hover-lift"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                About Me
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-shimmer">
                Passionate Developer & AI Enthusiast
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Write your introduction here. Include your name, current education/job, and what you're passionate about.
              </p>
              <p>
                Describe your experience, internships, or projects. Mention specific technologies you've worked with 
                and any special interests you have in your field.
              </p>
              <p>
                Highlight your achievements, awards, competitions, or any notable work you've done. This helps 
                showcase your accomplishments and expertise.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Technical Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {skills.map((skill) => (
                  <Card key={skill.name} className="glass-effect border-border hover:border-primary transition-colors hover-lift card-glow">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl mb-2 animate-bounce-slow">{skill.icon}</div>
                      <p className="text-sm font-medium">{skill.name}</p>
                      <p className="text-xs text-muted-foreground">{skill.category}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
