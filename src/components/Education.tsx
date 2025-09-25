import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Northeastern University – Khoury College of Computer Sciences",
      location: "Boston, MA",
      duration: "Jan 2024 – April 2026",
      type: "Graduate"
    },
    {
      degree: "Bachelor of Engineering in Telecommunication Engineering",
      institution: "M S Ramaiah Institute of Technology",
      location: "Bangalore, India",
      duration: "June 2015 – May 2019",
      type: "Undergraduate"
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
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
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
                  </div>
                  <div className="ml-6">
                    <GraduationCap className="w-12 h-12 text-elegant-blue" />
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