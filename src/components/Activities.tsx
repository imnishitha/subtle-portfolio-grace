import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Award } from "lucide-react";


const Activities = () => {
  const activities = [
    {
      title: "Graduate Teaching Assistant",
      organization: "C++ under Prof. Adeel Bhutta and DBMS under Prof. Kathleen Durant",
      description:
        "• Assisted in teaching C++ and DBMS to 100+ students by designing and grading advanced assignments and providing one-on-one support through office hours.\n" +
        "• Collaborated with professors on curriculum design to integrate modern software engineering practices and align coursework with industry standards.",
      icon: BookOpen,
      type: "Academic",
    },
    {
      title: "Technical Team Lead",
      organization: "Disrupt – The FinTech Initiative",
      description:
        "• Led the technical team at Disrupt, a fintech club at Northeastern University, driving the development of innovative financial technology solutions and organizing events that fostered entrepreneurship and industry engagement.\n" +
        "• Designed and delivered hands-on workshops on building scalable backend solutions with Flask and SQL, equipping participants with practical skills in rapid fintech product development.",
      icon: Users,
      type: "Leadership",
    }
  ];

  return (
    <section className="py-20 bg-section" id="activities">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
            Campus Activities
          </h2>
          <p className="text-lg text-elegant max-w-2xl mx-auto">
            Leadership roles and contributions to the academic and tech community at Northeastern University
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
                
                <div className="text-elegant leading-relaxed flex-grow whitespace-pre-line text-justify">
                  {activity.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;