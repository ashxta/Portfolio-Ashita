import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold cosmic-header mb-6 relative z-10">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto text-glow-subtle">
            Let's collaborate on your next data science project or discuss opportunities in AI and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="cosmic-card p-6">
              <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">eeshosingh@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 8218694843</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Gurgaon, Haryana</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="cosmic-card p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <button className="p-3 rounded-full bg-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                  <Github className="h-6 w-6 text-primary hover:text-primary-foreground" />
                </button>
                <button className="p-3 rounded-full bg-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                  <Linkedin className="h-6 w-6 text-primary hover:text-primary-foreground" />
                </button>
                <button className="p-3 rounded-full bg-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                  <Mail className="h-6 w-6 text-primary hover:text-primary-foreground" />
                </button>
              </div>
            </Card>

            {/* Availability */}
            <Card className="cosmic-card p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Current Status</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Available for opportunities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Open to collaborations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Graduating May 2027</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="cosmic-card p-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    First Name
                  </label>
                  <Input 
                    placeholder="Your first name"
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Your last name"
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Email
                </label>
                <Input 
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-background/50 border-primary/30 focus:border-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Subject
                </label>
                <Input 
                  placeholder="What's this about?"
                  className="bg-background/50 border-primary/30 focus:border-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  className="bg-background/50 border-primary/30 focus:border-primary resize-none"
                />
              </div>

              <Button className="cosmic-button text-primary-foreground w-full">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;