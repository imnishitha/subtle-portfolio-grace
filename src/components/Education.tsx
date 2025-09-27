import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap } from "lucide-react";
import neuLogo from "@/assets/NEU.jpg";
import msritLogo from "@/assets/MSRIT.png";


const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Northeastern University – Khoury College of Computer Sciences",
      location: "Boston, MA",
      duration: "Jan 2024 – April 2026",
      type: "Graduate",
      cgpa: "3.83/4.0",
      logoPlaceholder: neuLogo
    },
    {
      degree: "Bachelor of Engineering in Telecommunication Engineering",
      institution: "M S Ramaiah Institute of Technology",
      location: "Bangalore, India",
      duration: "June 2015 – May 2019",
      type: "Undergraduate",
      cgpa: "8.8/10.0",
      logoPlaceholder: msritLogo
    }
  ];

  return (
    <section className="py-20 px-6" id="education">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
            Education
          </h2>
          <p className="text-lg text-elegant max-w-2xl mx-auto">
            Academic foundation in computer science and engineering
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-soft transition-smooth hover:shadow-elegant bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start md:items-start justify-between mb-4 gap-6">
                  <div className="flex-1 w-full">
                    <h3 className="text-2xl font-display font-medium text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-xl text-elegant mb-3">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-4 text-subtle">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    {edu.cgpa && (
                      <div className="mt-3 inline-flex items-center px-3 py-1 bg-elegant-blue text-foreground text-sm rounded-full">
                        <span className="font-medium">CGPA: {edu.cgpa}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-shrink-0 self-center md:self-start">
                    <img
                      src={edu.logoPlaceholder}
                      alt={`${edu.institution} logo`}
                      className="w-24 h-24 md:w-36 md:h-36 object-contain"
                    />
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

export default Education;