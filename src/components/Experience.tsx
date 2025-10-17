import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Junior Unity Game Developer",
      company: "Invisible Fiction",
      period: "May 2023 – Present",
      technologies: ["Unity", "C#", "Figma"],
      description: "Leading game development projects and implementing innovative solutions for mobile and PC platforms.",
      current: true,
    },
    {
      title: "Artificial Intelligence Intern",
      company: "Invisible Fiction",
      period: "Feb 2023 – May 2023",
      technologies: ["Python", "Unity", "C#"],
      description: "Developed AI-powered game mechanics and integrated machine learning solutions into Unity projects.",
      current: false,
    },
  ];

  return (
    <section id="experience">
      <div className="section-container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">Experience</h2>
          <div className="accent-line mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`bg-card border-border card-hover animate-slide-in ${
                exp.current ? "border-l-4 border-l-primary" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                        {exp.current && (
                          <Badge className="bg-primary text-primary-foreground">Current</Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-xl text-primary mb-2">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-foreground/70 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="border-primary/50 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
