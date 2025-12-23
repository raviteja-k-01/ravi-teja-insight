import { ExternalLink, Github, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Uber Ride Cancellations & Wasted Capacity Analysis",
      description: "Business-focused analysis of ride cancellations and operational inefficiencies using large-scale data.",
      dataset: "150,000+ ride records (NCR region)",
      keyOutcome: "~38% cancellation rate; ~INR 19.9M estimated revenue impact",
      tools: ["SQL", "Python (pandas)", "Power BI"],
      gradient: "from-primary/20 to-secondary/20",
      links: {
        project: "#uber-project",
        powerbi: "#",
        github: "https://github.com/raviteja-k-01",
      },
    },
    {
      title: "Customer Churn Analysis",
      description: "Customer churn analysis to identify high-risk segments and key churn drivers.",
      dataset: "7,043 customer records (21 features)",
      keyOutcome: "~55–60% customers identified as high-risk",
      tools: ["Python (pandas)", "Matplotlib", "Seaborn"],
      gradient: "from-secondary/20 to-primary/20",
      links: {
        project: "#churn-project",
        github: "https://github.com/raviteja-k-01",
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
              Real-world business analytics projects delivering actionable insights
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 animate-slide-up group hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`} />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <BarChart2 className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm sm:text-base text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <span className="text-sm font-semibold text-foreground min-w-[80px]">Dataset:</span>
                      <span className="text-sm text-muted-foreground">{project.dataset}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-sm font-semibold text-foreground min-w-[80px]">Outcome:</span>
                      <span className="text-sm text-muted-foreground">{project.keyOutcome}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-sm font-semibold text-foreground min-w-[80px]">Tools:</span>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                      asChild
                    >
                      <a href={project.links.project}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </a>
                    </Button>
                    {project.links.powerbi && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors"
                        asChild
                      >
                        <a href={project.links.powerbi} target="_blank" rel="noopener noreferrer">
                          <BarChart2 className="mr-2 h-4 w-4" />
                          Power BI
                        </a>
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-muted-foreground/50 text-muted-foreground hover:bg-muted-foreground hover:text-white transition-colors"
                      asChild
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
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
