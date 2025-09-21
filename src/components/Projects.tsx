import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp, Shield, BarChart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: TrendingUp,
      title: "HR Data Analysis & Attrition Prediction",
      description: "Designed predictive models that reduced projected HR replacement costs by ₹50L annually by simulating salary and retention strategies.",
      technologies: ["Python", "Pandas", "Scikit-learn", "SMOTE"],
      achievements: [
        "Applied classification and clustering algorithms to identify at-risk employees",
        "Delivered department-level risk analysis and predictive alert systems",
        "Supported workforce planning with data-driven insights"
      ],
      status: "Completed"
    },
    {
      icon: Shield,
      title: "Truthguard – AI Misinformation Detector",
      description: "Currently developing a multi-modal AI platform to detect misinformation across text, images, videos, and links.",
      technologies: ["Python", "React", "NodeJS", "TensorFlow", "GCP"],
      achievements: [
        "Integrating scalable backend services on Google Cloud Run with Firestore DB",
        "Designing real-time content analysis workflows",
        "Building educational insights on manipulative patterns to strengthen media literacy"
      ],
      status: "Ongoing"
    },
    {
      icon: BarChart,
      title: "Netflix Data Analysis",
      description: "Analyzed 1,000+ records to reveal that 65% of top shows belonged to three genres for guided investment strategy.",
      technologies: ["Python", "Power BI", "MySQL", "Matplotlib"],
      achievements: [
        "Identified regional content gaps for improved localization",
        "Built executive-level dashboards for senior decision-makers",
        "Enhanced customer engagement through data-driven recommendations"
      ],
      status: "Completed"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold cosmic-header mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Innovative solutions in data analytics, AI, and machine learning that drive real business impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="cosmic-card p-8 hover:scale-102 transition-all duration-300">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Project Info */}
                <div className="md:col-span-2 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/20 mt-1">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-semibold text-primary">{project.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          project.status === 'Ongoing' 
                            ? 'bg-accent/20 text-accent' 
                            : 'bg-primary/20 text-primary'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-secondary/30 text-secondary-foreground rounded-full border border-secondary/50 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-primary">Key Achievements</h4>
                  <div className="space-y-3">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 animate-pulse"></div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="cosmic-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-4">Want to See More?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for additional projects and contributions to open-source initiatives.
            </p>
            <Button className="cosmic-button text-primary-foreground">
              <Github className="h-5 w-5 mr-2" />
              View All Projects
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;