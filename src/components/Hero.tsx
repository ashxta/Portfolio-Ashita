import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-accent rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="text-center z-10 max-w-6xl mx-auto">
        {/* Main Header with Cosmic Gradient */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 cosmic-header relative z-10">
          ASHITA
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-8 text-glow-subtle relative z-10">
          Data Analyst & AI Engineer
        </h2>
        
        {/* Professional Summary */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed text-glow-subtle relative z-10">
          Passionate about leveraging machine learning, data analytics, and digital transformation 
          to deliver impactful solutions. Experienced in Python, SQL, and Power BI with a focus on 
          aligning technical outcomes with business goals.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button className="cosmic-button text-primary-foreground px-8 py-6 text-lg">
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8">
          <button className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110">
            <Github className="h-6 w-6 text-primary" />
          </button>
          <button className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110">
            <Linkedin className="h-6 w-6 text-primary" />
          </button>
          <button className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110">
            <Mail className="h-6 w-6 text-primary" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;