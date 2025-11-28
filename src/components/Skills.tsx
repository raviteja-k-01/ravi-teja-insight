import { Brain, Database, Code, GitBranch } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      category: "AI/ML",
      skills: [
        { name: "Python", level: 90 },
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 85 },
        { name: "Scikit-learn", level: 80 },
      ],
      gradient: "from-primary to-primary/70",
    },
    {
      icon: Database,
      category: "Data Analytics",
      skills: [
        { name: "SQL", level: 85 },
        { name: "Excel", level: 80 },
        { name: "Power BI", level: 75 },
      ],
      gradient: "from-secondary to-secondary/70",
    },
    {
      icon: Code,
      category: "Databases",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 },
      ],
      gradient: "from-primary/80 to-secondary/80",
    },
    {
      icon: GitBranch,
      category: "Tools",
      skills: [
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Jupyter", level: 85 },
      ],
      gradient: "from-secondary/80 to-primary/80",
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for transforming data into insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.category}
                  className="glass-card p-6 sm:p-8 hover:shadow-xl transition-all duration-300 animate-slide-up group"
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {category.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm sm:text-base font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-accent rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${categoryIndex * 0.1 + 0.3}s`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
