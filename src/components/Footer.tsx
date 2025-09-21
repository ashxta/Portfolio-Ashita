import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold cosmic-header">ASHITA</h3>
            <p className="text-muted-foreground">
              Data Analyst & AI Engineer passionate about leveraging technology 
              to create impactful solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">eeshosingh@gmail.com</p>
              <p className="text-muted-foreground">+91 8218694843</p>
              <p className="text-muted-foreground">Gurgaon, Haryana</p>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary animate-pulse" />
            <span>by Ashita</span>
          </div>

          <div className="flex space-x-4">
            <button className="p-2 rounded-full bg-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
              <Github className="h-5 w-5 text-primary hover:text-primary-foreground" />
            </button>
            <button className="p-2 rounded-full bg-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
              <Linkedin className="h-5 w-5 text-primary hover:text-primary-foreground" />
            </button>
            <button className="p-2 rounded-full bg-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
              <Mail className="h-5 w-5 text-primary hover:text-primary-foreground" />
            </button>
          </div>
        </div>

        <div className="text-center mt-8 text-muted-foreground text-sm">
          <p>&copy; 2024 Ashita. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;