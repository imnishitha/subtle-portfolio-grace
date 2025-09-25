import { Mail, MapPin, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitImage from "@/assets/nishitha-portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <img
            src={portraitImage}
            alt="Nishitha Madhu"
            className="w-32 h-32 rounded-full mx-auto mb-8 shadow-elegant transition-elegant hover:scale-105 object-cover"
          />
          <h1 className="text-5xl md:text-6xl font-display font-medium mb-6 text-foreground">
            Nishitha Madhu
          </h1>
          <p className="text-xl md:text-2xl text-elegant mb-4 font-light">
            Software Engineer
          </p>
          <p className="text-lg text-subtle max-w-2xl mx-auto leading-relaxed">
            Specializing in distributed systems, healthcare technology, and machine learning. 
            Currently pursuing M.S. in Computer Science at Northeastern University.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="transition-smooth hover:shadow-soft"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Nishitha_Madhu_Resume.pdf';
              link.download = 'Nishitha_Madhu_Resume.pdf';
              link.click();
            }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="transition-smooth hover:shadow-soft"
            onClick={() => window.open('mailto:nishitha.madhu23@gmail.com')}
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="transition-smooth hover:shadow-soft"
            onClick={() => window.open('https://linkedin.com/in/nishitha-madhu', '_blank')}
          >
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="transition-smooth hover:shadow-soft"
            onClick={() => window.open('https://github.com/nishitha-madhu', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
        </div>

        <div className="flex items-center justify-center text-subtle">
          <MapPin className="w-4 h-4 mr-2" />
          <span>Boston, MA • (857) 376-8690</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;