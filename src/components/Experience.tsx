import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import philipsLogo from "@/assets/philips-logo.png";
import biofourmisLogo from "@/assets/biofourmis-logo.png";
import extremeNetworksLogo from "@/assets/extreme-networks-logo.png";

const Experience = () => {
  const experiences = [
    {
      company: "Philips",
      logo: philipsLogo,
      location: "Cambridge, MA",
      position: "Software Engineer Co-op",
      duration: "Jan 2025 – Dec 2025 (12 months)",
      achievements: [
        "Engineered a distributed YugabyteDB system for a hospital patient monitoring cloud platform, enabling real-time data ingestion from **10,000+ bedside monitoring devices**.",
        "Optimized C# microservices with a bulk insertion pipeline, cutting processing time by **75% (20s to 5s)** for high-volume data streams.",
        "Orchestrated load testing (**10k+ users, 5M+ records**) and migration of **120+ tables, 40+ SPs, and 20TB** of patient data from MySQL to PostgreSQL with near-zero downtime.",
        "Spearheaded research on reducing battery-related alarm fatigue with ML models (AdaBoost, Random Forest, Gradient Boosting), running **5+ PoCs** and cutting false alerts by **30%**.",
        "Built an auto-logging tool with GitHub Actions and Azure DevOps Boards to auto-link test cases to requirements and generate release reports."
      ],
      skills: ["C#", "YugabyteDB", "PostgreSQL", "Azure DevOps", "GitHub Actions", "Machine Learning", "Microservices"]
    },
    {
      company: "Biofourmis",
      logo: biofourmisLogo,
      location: "Bangalore, India",
      position: "Software Engineer (2020-2022) | Senior Software Engineer (2022-2023)",
      duration: "June 2020 – Dec 2023 (3.5 years)",
      achievements: [
        "Designed and implemented resilient data pipelines to integrate FDA-approved health monitoring devices into the Remote Patient Monitoring (RPM) platform, supporting up to **10,000 active patients**.",
        "Led the migration of the entire application from AWS DynamoDB to a self-hosted TSDB, significantly reducing operational costs by **70%**.",
        "Optimized loading time of vitals graphs on web dashboard from **3 minutes to less than 3 seconds** by migrating from Flask to FastAPI.",
        "Engineered EMR/EHR integration systems using HL7 interfaces and FHIR standards on the RPM platform, ensuring encryption, compliance, and interoperability.",
        "Orchestrated CI/CD pipelines using Jenkins and Bitbucket to streamline continuous deployment processes."
      ],
      skills: ["Python", "Flask", "FastAPI", "AWS DynamoDB", "TimescaleDB", "HL7/FHIR", "Jenkins", "Kafka", "ETL"]
    },
    {
      company: "Extreme Networks",
      logo: extremeNetworksLogo,
      location: "Bangalore, India",
      position: "Associate Software System Engineer",
      duration: "June 2019 – May 2020 (11 Months)",
      achievements: [
        "Developed new CLI commands, such as 'show tpvm-status history', to log and persist all executed commands on the third-party VM across firmware upgrades.",
        "Created a Linux bond with a front panel port in active-standby mode on **SLX-9150, SLX-9150T, and Celestica platforms** using the iproute2 utility."
      ],
      skills: ["C", "Linux", "CLI Development", "Network Programming", "iproute2", "Firmware"]
    }
  ];

  return (
    <section className="py-20 px-6" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
            Work Experience
          </h2>
          <p className="text-lg text-elegant max-w-2xl mx-auto">
            Building scalable systems and innovative solutions across healthcare, networking, and cloud platforms
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-soft transition-smooth hover:shadow-elegant bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div>
                        <h3 className="text-2xl font-display font-medium text-foreground">
                          {exp.company}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-subtle mt-1">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-16 h-16 object-contain flex-shrink-0"
                    />
                  </div>
                  <p className="text-xl text-elegant mb-3">
                    {exp.position}
                  </p>
                  <div className="flex items-center text-subtle">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-foreground leading-relaxed flex">
                      <span className="text-elegant-blue mr-3 mt-2">•</span>
                      <span 
                        dangerouslySetInnerHTML={{ 
                          __html: achievement.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary font-semibold">$1</strong>') 
                        }}
                      />
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Key Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-elegant-blue hover:bg-elegant-accent transition-smooth text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;