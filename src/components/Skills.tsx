import { Card } from "@/components/ui/card";
import { Code, Database, BarChart3, Brain, Cloud, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages & Tools",
      skills: ["Python", "C/C++", "SQL", "Javascript", "HTML", "CSS"]
    },
    {
      icon: Cloud,
      title: "Frameworks and Tools",
      skills: ["Streamlit", "REST APIs", "Git", "MySQL", "Power BI", "Excel", "DevOps"]
    },
    {
      icon: Database,
      title: "Data Handling",
      skills: ["MySQL", "Data Cleaning", "Preprocessing", "KPI Tracking", "Risk Analysis", "Object-Oriented Design"]
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Client Collaboration", "Critical Thinking", "Public Speaking", "Insight Presentation", "Stakeholder Engagement"]
    },
    {
      icon: BarChart3,
      title: "Platforms",
      skills: ["Jupyter", "GitHub", "IDLE", "Google Colab", "VS Code", "Docker"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold cosmic-header mb-6 relative z-10">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto text-glow-subtle">
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
              {["Python", "C/C++", "SQL", "Javascript", "React", "NodeJS", "MySQL", "Power BI", "Git", "Docker", "Google Cloud"].map((tech, index) => (
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
