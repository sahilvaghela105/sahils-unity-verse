import { Gamepad2, Code2, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      icon: Code2,
      title: "Game Programming",
      description: "Expert in C# and Unity scripting, creating efficient and scalable game systems.",
      level: 95,
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "End-to-end game development for PC, mobile, and VR/AR platforms.",
      level: 90,
    },
    {
      icon: Palette,
      title: "Game Design",
      description: "Creating engaging gameplay mechanics and user experiences.",
      level: 85,
    },
  ];

  return (
    <section id="skills" className="bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="accent-line mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="bg-card border-border card-hover group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <skill.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
                <p className="text-foreground/70 mb-6">{skill.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-primary">Technical Stack</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["Unity3D", "C#", "Python", "ARCore", "Vuforia", "Meta Oculus SDK", "OpenXR", "Photon", "Mediapipe", "Figma", "Agora SDK", "Microsoft HoloLens"].map((tech, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-card border border-border rounded-lg hover:border-primary transition-colors duration-300 card-hover"
              >
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
