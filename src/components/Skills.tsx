import { Card } from "@/components/ui/card";
import { Code, Database, BarChart3, Brain, Cloud, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages & Tools",
      skills: ["Python", "C/C++", "SQL", "JavaScript", "React", "NodeJS"]
    },
    {
      icon: Database,
      title: "Data & Analytics",
      skills: ["MySQL", "Power BI", "Excel", "Data Cleaning", "KPI Tracking", "Risk Analysis"]
    },
    {
      icon: Brain,
      title: "Machine Learning",
      skills: ["Scikit-learn", "TensorFlow", "Pandas", "Classification", "Clustering", "Predictive Models"]
    },
    {
      icon: Cloud,
      title: "Frameworks & Platforms",
      skills: ["Google Cloud", "Streamlit", "REST APIs", "Git", "Docker", "DevOps"]
    },
    {
      icon: BarChart3,
      title: "Development Tools",
      skills: ["Jupyter", "GitHub", "VS Code", "Google Colab", "IDLE", "Matplotlib"]
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Client Collaboration", "Critical Thinking", "Public Speaking", "Stakeholder Engagement"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold cosmic-header mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis, machine learning, and software development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="cosmic-card p-6 hover:scale-105 transition-all duration-300 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-primary/20 mr-4">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: `${skillIndex * 0.1}s` }}></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tech Stack Highlight */}
        <div className="mt-16 text-center">
          <Card className="cosmic-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-6">Core Technology Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Python", "SQL", "Power BI", "Machine Learning", "React", "Google Cloud", "Git", "Docker"].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary/20 text-primary rounded-full border border-primary/30 hover:bg-primary/30 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;