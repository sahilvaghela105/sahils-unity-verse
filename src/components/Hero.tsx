import { ArrowRight, Sparkles, Code2, Linkedin, Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-glow"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">Available for Projects</span>
            </div>
            
            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                Vaghela{" "}
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent animate-fade-in">
                  Sahil A
                </span>
              </h1>
              <div className="accent-line mb-6"></div>
            </div>
            
            {/* Role badges */}
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-secondary/50 backdrop-blur-sm border border-primary/10">
                <Code2 className="w-4 h-4 mr-2" />
                Unity Developer
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-secondary/50 backdrop-blur-sm border border-primary/10">
                <Sparkles className="w-4 h-4 mr-2" />
                AR/VR/MR Specialist
              </Badge>
            </div>
            
            <p className="text-lg text-foreground/80 max-w-xl leading-relaxed">
              Creating immersive gaming experiences and cutting-edge software for PC, Android, iOS, and extended reality platforms. Specializing in Unity3D development with a passion for innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
              >
                <a href="#portfolio" className="flex items-center gap-2">
                  View Portfolio 
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-2 border-primary/30 bg-background/50 backdrop-blur-sm hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Contact Me
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              <a 
                href="https://www.linkedin.com/in/vaghela-sahil-a-b74064228/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-secondary/50 backdrop-blur-sm border border-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="mailto:vaghelasahil1104@gmail.com"
                className="group w-12 h-12 bg-secondary/50 backdrop-blur-sm border border-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="tel:+916351955141"
                className="group w-12 h-12 bg-secondary/50 backdrop-blur-sm border border-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
              >
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="flex justify-center md:justify-end animate-fade-in">
            <div className="relative group">
              {/* Animated glow effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-glow"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              
              {/* Image container with glass effect */}
              <div className="relative rounded-3xl overflow-hidden border border-primary/20 bg-gradient-to-br from-secondary/30 to-background/30 backdrop-blur-sm p-2">
                <img 
                  src={profileImage} 
                  alt="Vaghela Sahil A - Unity Game Developer" 
                  className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg shadow-primary/30 animate-bounce text-sm font-bold border-2 border-background">
                9.11 CGPA
              </div>
              <div className="absolute -bottom-4 -left-4 bg-secondary/90 backdrop-blur-sm text-secondary-foreground px-4 py-2 rounded-full shadow-lg border border-primary/20 text-sm font-medium">
                2+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
