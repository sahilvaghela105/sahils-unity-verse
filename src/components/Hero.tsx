import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">VS</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Vaghela <span className="text-primary">Sahil A</span>
            </h1>
            
            <div className="accent-line mb-6"></div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
              Unity Game Developer | AR/VR/MR Software Specialist
            </p>
            
            <p className="text-lg text-foreground/70 mb-8 max-w-xl">
              I am a Unity game developer, focusing on creating games and software for PC, Android, iOS, as well as AR/VR/MR platforms.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30">
                <a href="#portfolio" className="flex items-center gap-2">
                  View Portfolio <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/vaghela-sahil-a-b74064228/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 card-hover"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:vaghelasahil1104@gmail.com"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 card-hover"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:+916351955141"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 card-hover"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-3xl blur-3xl opacity-20 animate-glow"></div>
              <img 
                src={profileImage} 
                alt="Vaghela Sahil A - Unity Game Developer" 
                className="relative rounded-3xl shadow-2xl w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
