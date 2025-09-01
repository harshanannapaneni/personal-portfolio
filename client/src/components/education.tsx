import { GraduationCap, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Education() {
  const education = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      degree: "Master of Science, Business Analytics",
      school: "University at Buffalo, SUNY",
      period: "AUG 2022 - JUN 2023",
      additional: "STEM Designated Program",
      gpa: "3.867/4.0",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      degree: "Bachelor of Technology",
      school: "CVR College of Engineering, Hyderabad",
      period: "JUN 2018 - JUN 2022",
      additional: "Electronics and Communication Engineering",
      gpa: null,
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="education-title">
            Education
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
              data-testid={`education-${index}`}
            >
              <div className="text-primary mb-4">
                {edu.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h3>
              <h4 className="text-primary font-medium mb-2">{edu.school}</h4>
              <p className="text-muted-foreground mb-2">{edu.additional}</p>
              <p className="text-muted-foreground mb-4">{edu.period}</p>
              {edu.gpa && (
                <Badge className="bg-accent/10 text-accent hover:bg-accent/20">
                  GPA: {edu.gpa}
                </Badge>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
