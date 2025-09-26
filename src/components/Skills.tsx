import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C", "C++", "C#", "Java", "JavaScript", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Flask", "FastAPI", "React", "Node.js", ".NET", "GraphQL", "Pandas", "Scikit-Learn", "PyTorch", "Transformers", "NLP", "LLMs", "Hugging Face"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "Timescale DB", "YugabyteDB", "Redis", "MongoDB", "DynamoDB"]
    },
    {
      title: "Tools & Technologies",
      skills: ["AWS", "Microsoft Azure", "GCP", "Apache Kafka", "Celery", "Kubernetes", "Terraform", "ArgoCD", "Jenkins", "GitHub Actions", "Grafana", "ETL Pipelines", "Weights & Biases"]
    }
  ];

  return (
    <section className="py-20 bg-section" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
            Technical Skills
          </h2>
          <p className="text-lg text-elegant max-w-2xl mx-auto">
            A comprehensive toolkit developed through years of experience in software engineering and research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-soft transition-smooth hover:shadow-elegant bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-display font-medium mb-6 text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-elegant-blue text-foreground text-sm rounded-full transition-smooth hover:bg-elegant-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;