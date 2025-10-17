import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "B.E (Computer Engineering)",
      institution: "Ipcowala Institute Of Engineering And Technology",
      year: "2023",
      grade: "CGPA 9.11",
    },
    {
      degree: "HSC",
      institution: "Sagar International School",
      year: "2019",
      grade: "69.9%",
    },
    {
      degree: "SSC",
      institution: "Sarvajanik High School",
      year: "2017",
      grade: "84.6%",
    },
  ];

  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">About Me</h2>
          <div className="accent-line mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold mb-4 text-primary">Professional Background</h3>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              I'm a passionate Unity game developer specializing in creating immersive experiences 
              across multiple platforms. With a strong foundation in computer engineering and hands-on 
              experience in game development, I bring ideas to life through innovative technology.
            </p>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              My expertise spans PC and mobile game development, as well as cutting-edge AR/VR/MR 
              software solutions. I'm dedicated to pushing the boundaries of interactive entertainment 
              and creating engaging user experiences.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              From concept to deployment, I ensure every project meets the highest standards of quality 
              and performance. My goal is to create memorable gaming experiences that resonate with users 
              across all platforms.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              Education
            </h3>
            {education.map((edu, index) => (
              <Card key={index} className="bg-card border-border card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1">{edu.degree}</h4>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-foreground/60">{edu.year}</span>
                        <span className="text-primary font-semibold">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
