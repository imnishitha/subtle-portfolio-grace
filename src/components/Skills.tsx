const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "C", icon: "⚡" },
        { name: "C++", icon: "⚡" },
        { name: "C#", icon: "#️⃣" },
        { name: "Java", icon: "☕" },
        { name: "JavaScript", icon: "🟨" },
        { name: "SQL", icon: "🗃️" }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: "Flask", icon: "🌶️" },
        { name: "FastAPI", icon: "⚡" },
        { name: ".NET", icon: "🔷" },
        { name: "GraphQL", icon: "🔗" }
      ]
    },
    {
      title: "Cloud & Database",
      skills: [
        { name: "AWS", icon: "☁️" },
        { name: "Microsoft Azure", icon: "🔵" },
        { name: "GCP", icon: "🌥️" },
        { name: "MySQL", icon: "🐬" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Redis", icon: "🔴" }
      ]
    },
    {
      title: "AI/ML & Tools",
      skills: [
        { name: "PyTorch", icon: "🔥" },
        { name: "Scikit-Learn", icon: "🤖" },
        { name: "Pandas", icon: "🐼" },
        { name: "Kubernetes", icon: "☸️" },
        { name: "Docker", icon: "🐳" },
        { name: "Jenkins", icon: "👷" },
        { name: "Terraform", icon: "🏗️" }
      ]
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

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="lg:w-48 flex-shrink-0">
                <h3 className="text-xl font-display font-medium text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 transition-all duration-300 hover:shadow-soft hover:bg-card/80 hover:border-primary/20"
                    >
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-foreground text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;