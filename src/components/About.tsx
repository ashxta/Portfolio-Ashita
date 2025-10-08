import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold cosmic-header mb-6 relative z-10">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-4 text-glow-subtle">
              Professional Summary
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Analyst with expertise in artificial intelligence, DevOps, machine learning, basic software engineering.
              I specialize in aligning technical outcomes with business goals using Python, SQL, Power BI, and 
              consulting workflows.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Currently pursuing BTech in Computer Science at SRM Institute of Science and Technology with a 
              CGPA of 8.71/10. Passionate about leveraging technology and digital transformation to deliver 
              impactful solutions for clients.
            </p>
            
            {/* Education Card */}
            <Card className="cosmic-card p-6 mt-8">
              <h4 className="text-xl font-semibold text-primary mb-2">Education</h4>
              <div className="space-y-2">
                <p className="font-medium">BTech in Computer Science and Engineering</p>
                <p className="text-muted-foreground">SRM Institute of Science and Technology</p>
                <p className="text-muted-foreground">CGPA: 8.71/10 | August 2023 - May 2027</p>
              </div>
            </Card>
          </div>

          {/* Skills & Highlights */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Key Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
                  <p className="text-muted-foreground">Reduced HR replacement costs by ₹50L annually through predictive modeling</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
                  <p className="text-muted-foreground">National semi-finalist at Flipkart Grid 7.0</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
                  <p className="text-muted-foreground">Shortlisted at Hack4Bihar 2025 with health-tech MVP</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
                  <p className="text-muted-foreground">Active in NGO service and leadership roles</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <Card className="cosmic-card p-6">
              <h4 className="text-xl font-semibold text-primary mb-4">Certifications</h4>
              <div className="grid grid-cols-1 gap-2 text-muted-foreground">
                <p>• Google Data Analytics</p>
                <p>• Tata Data Visualization</p>
                <p>• Oracle Cloud Infrastructure</p>
                <p>• CS50 Python</p>
                <p>• NPTEL Java</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
