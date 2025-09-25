import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Award } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      title: "Graduate Teaching Assistant",
      organization: "Northeastern University",
      description: "Teaching Programming in C++ and Database Management Systems, helping students master fundamental computer science concepts and practical programming skills.",
      icon: BookOpen,
      type: "Academic"
    },
    {
      title: "Technical Team Lead",
      organization: "Disrupt – The FinTech Initiative at Northeastern University",
      description: "Leading the technical team in developing innovative fintech solutions and organizing events to promote financial technology education and entrepreneurship.",
      icon: Users,
      type: "Leadership"
    }
  ];

  return (
    <section className="py-20 bg-section" id="activities">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
            Other Activities
          </h2>
          <p className="text-lg text-elegant max-w-2xl mx-auto">
            Leadership roles and contributions to the academic and tech community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="shadow-soft transition-smooth hover:shadow-elegant bg-card/80 backdrop-blur-sm h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-elegant-blue rounded-full mr-4">
                    <activity.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-medium text-foreground">
                      {activity.title}
                    </h3>
                    <p className="text-elegant-blue font-medium text-sm">
                      {activity.type}
                    </p>
                  </div>
                </div>
                
                <p className="text-lg text-elegant font-medium mb-4">
                  {activity.organization}
                </p>
                
                <p className="text-elegant leading-relaxed flex-grow">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;