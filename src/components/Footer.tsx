import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-foreground/70">
            <span>© {currentYear} Vaghela Sahil A. Crafted with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>using Unity & React</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="#home" 
              className="text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
