import { Smartphone, Monitor, Glasses } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile Game Development",
      description: "Creating engaging and optimized games for Android and iOS platforms using Unity3D.",
      features: ["Cross-platform development", "Performance optimization", "Touch controls", "App store deployment"],
    },
    {
      icon: Monitor,
      title: "PC Game Development",
      description: "Developing immersive PC games with advanced graphics and gameplay mechanics.",
      features: ["High-quality graphics", "Advanced physics", "Multiplayer systems", "Steam integration"],
    },
    {
      icon: Glasses,
      title: "AR/VR/MR Development",
      description: "Building cutting-edge augmented, virtual, and mixed reality experiences.",
      features: ["Meta Oculus development", "ARCore & Vuforia", "HoloLens integration", "Spatial computing"],
    },
  ];

  return (
    <section id="services">
      <div className="section-container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">Services</h2>
          <div className="accent-line mx-auto"></div>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            Offering comprehensive game development and XR solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border card-hover group animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-foreground/60">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
