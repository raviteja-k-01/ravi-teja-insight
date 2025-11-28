import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction using Machine Learning",
      description: "Built an ML model to predict customer churn using classification techniques.",
      process: [
        "Data cleaning and preprocessing of customer behavioral data",
        "Feature engineering to identify key churn indicators",
        "Model training using Random Forest and XGBoost",
        "Achieved 85% accuracy and 0.88 ROC AUC Score",
        "Created visual dashboards for business insights",
      ],
      output: "Identified key churn drivers & improved retention strategy with actionable insights.",
      technologies: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "Seaborn", "Matplotlib"],
      gradient: "from-primary/20 to-secondary/20",
      links: {
        github: "https://github.com/raviteja-k-01",
        caseStudy: "#",
      },
    },
    {
      title: "Uber Ride Cancellations and Wasted Capacity Analysis",
      description: "Comprehensive analysis of ride cancellations to optimize operational efficiency.",
      process: [
        "Cleaned 150K+ trip records into 37K analysis-ready dataset",
        "Identified 18% driver cancellations across operations",
        "Discovered 12 high-risk zones with ~60% cancellation rate",
        "Peak cancellations during 6-8 PM time window",
        "Built Power BI dashboard for real-time monitoring",
      ],
      output: "Estimated ~$185K/month loss; proposed strategies projected to increase completion rate from 62% to ~75%.",
      technologies: ["SQL", "Python", "Pandas", "Excel", "Power BI"],
      gradient: "from-secondary/20 to-primary/20",
      links: {
        github: "https://github.com/raviteja-k-01",
        caseStudy: "#",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world solutions leveraging data science and machine learning
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`} />
                
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Process & Methodology:</h4>
                    <ul className="space-y-2">
                      {project.process.map((step, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-muted-foreground">
                          <span className="text-primary mt-1">▪</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Output:</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">{project.output}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs sm:text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                      asChild
                    >
                      <a href={project.links.caseStudy}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Case Study
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors"
                      asChild
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub Repo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
