import { ExternalLink, Gamepad } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "Turbo Trail",
      type: "In-house Game",
      platform: "Mobile/PC",
      technologies: ["Unity3D", "C#"],
      description: "High-speed racing game with dynamic obstacles and power-ups.",
    },
    {
      title: "Alien Runner",
      type: "In-house Game",
      platform: "Mobile",
      technologies: ["Unity3D", "C#", "Mediapipe"],
      description: "Endless runner with gesture-based controls using Mediapipe.",
    },
    {
      title: "Cupping Muffins",
      type: "In-house Game",
      platform: "Mobile",
      technologies: ["Unity3D", "C#"],
      description: "Puzzle game with unique physics-based mechanics.",
    },
    {
      title: "Football Cup",
      type: "In-house Game",
      platform: "Mobile",
      technologies: ["Unity3D", "C#", "Mediapipe"],
      description: "Interactive football game with AI-powered gesture recognition.",
    },
    {
      title: "Catch the Object",
      type: "In-house Game",
      platform: "Mobile",
      technologies: ["Unity3D", "C#"],
      description: "Reflex-based game with increasing difficulty levels.",
    },
    {
      title: "AR Project Model on QR",
      type: "In-house Project",
      platform: "AR/MR",
      technologies: ["Unity3D", "C#", "ARCore", "Vuforia", "HoloLens"],
      description: "QR-based AR experience for HoloLens with model visualization.",
    },
    {
      title: "Fiction Mech",
      type: "In-house Project",
      platform: "Mobile/MR",
      technologies: ["Unity3D", "C#", "OpenXR", "Agora SDK", "Photon 2"],
      description: "Multiplayer VR experience with voice communication.",
    },
    {
      title: "Radicon Powerbuild AR/MR",
      type: "Client Project",
      platform: "AR/MR",
      technologies: ["Unity3D", "C#", "Meta Oculus SDK", "OVR", "Vuforia"],
      description: "Industrial AR/MR solution for Meta Quest devices.",
    },
  ];

  return (
    <section id="portfolio" className="bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">Portfolio</h2>
          <div className="accent-line mx-auto"></div>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            A showcase of games and XR experiences developed across various platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-border card-hover group animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center h-48 relative overflow-hidden">
                  <Gamepad className="h-20 w-20 text-primary/30 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant="outline" 
                      className="border-primary/50 bg-background/50 backdrop-blur-sm"
                    >
                      {project.platform}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-primary mb-3">{project.type}</p>
                  
                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs border-border"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
