export default function About() {
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "5+", label: "Enterprise Clients" },
    { value: "75%", label: "Performance Improvement" },
    { value: "97%", label: "Bug Resolution Rate" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="about-title">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate software engineer with expertise in building scalable applications and data-driven solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a software engineer with a strong foundation in Electronics and Communication Engineering 
                and specialized expertise in Business Analytics. My journey began with IoT and smart systems 
                during my B.Tech, where I developed precision agriculture solutions using LoRaWAN technology.
              </p>
              <p>
                Currently, I focus on building scalable enterprise applications using Python, Django, and React. 
                I've successfully implemented multi-tenant architectures, optimized database performance, and 
                deployed microservices on AWS, helping organizations reduce costs and improve efficiency.
              </p>
              <p>
                My experience spans from ETL pipeline development to frontend React components, 
                making me a versatile full-stack developer who understands both the technical and business 
                aspects of software development.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
                data-testid={`stat-${index}`}
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
