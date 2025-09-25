import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Clinical Trial Patient Eligibility Classification",
      description: "Built a custom Byte Pair Encoding (BPE) tokenizer tailored for medical terminology, reducing out-of-vocabulary (OOV) rate by ~3% compared to pre-trained language models. Trained an LSTM-based RNN model from scratch to classify patient eligibility based on trial criteria and patient history, benchmarking against BioBERT with ~92% of its F1-score while reducing inference latency by 35% on long-form clinical text.",
      technologies: ["NLP", "PyTorch", "Transformers", "LSTM", "BioBERT", "Medical AI"],
      link: "https://github.com/nishitha-madhu/clinical-trial-classification"
    },
    {
      title: "Cluster-Based Load Balancing for Cloud Environment",
      description: "Published research paper proposing a cluster-based load balancing algorithm to optimize resource allocation and handle dynamic workloads efficiently by clustering both load and available resources. Presented at ICTCS-2019, Udaipur, India and published in Taylor & Francis.",
      technologies: ["Cloud Computing", "Load Balancing", "Research", "Algorithm Design"],
      publication: "ISBN: 9781003052098",
      link: "https://github.com/nishitha-madhu/cluster-load-balancer"
    }
  ];

  return (
    <section className="py-20 bg-section" id="projects">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-elegant max-w-2xl mx-auto">
            Research and development projects showcasing innovation in machine learning and distributed systems
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-soft transition-smooth hover:shadow-elegant bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-display font-medium text-foreground mb-3">
                    {project.title}
                  </h3>
                  {project.publication && (
                    <p className="text-sm text-elegant-blue mb-4 font-medium">
                      Publication: {project.publication}
                    </p>
                  )}
                </div>
                
                <p className="text-elegant leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-elegant-blue hover:bg-elegant-accent transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open(project.link, '_blank')}
                  className="transition-smooth hover:shadow-soft"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;