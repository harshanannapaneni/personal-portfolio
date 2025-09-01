import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import profileImage from "@assets/1000000478.jpeg";

export default function Hero() {
  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Harsha_Nannapaneni_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="pt-24 pb-16 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Software Engineer
              <span className="text-primary block">& Python Developer</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              2+ years of experience in full-stack development using Python, Django, and React. 
              Specialized in designing scalable enterprise systems, REST APIs, and database optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-center"
                data-testid="btn-contact"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                onClick={handleResumeDownload}
                className="px-8 py-3 text-center"
                data-testid="btn-resume"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center animate-slide-up">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20">
              <img 
                src={profileImage} 
                alt="Harsha Nannapaneni - Software Engineer" 
                className="w-full h-full object-cover"
                data-testid="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
