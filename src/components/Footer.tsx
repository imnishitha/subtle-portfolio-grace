import { Mail, Linkedin, Github, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-16 gradient-subtle border-t border-border/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-display font-medium text-foreground mb-4">
            Let's Connect
          </h3>
          <p className="text-elegant max-w-2xl mx-auto leading-relaxed text-justify">
            I'm always interested in discussing new opportunities, collaborating on exciting projects, 
            or simply connecting with fellow engineers and researchers.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="transition-smooth hover:shadow-soft"
            onClick={() => window.open('mailto:nishitha.madhu23@gmail.com')}
          >
            <Mail className="w-5 h-5 mr-2" />
            Email
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="transition-smooth hover:shadow-soft"
            onClick={() => window.open('https://www.linkedin.com/in/nishitha23/', '_blank')}
          >
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="transition-smooth hover:shadow-soft"
            onClick={() => window.open('https://github.com/imnishitha', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
        </div>

        <div className="pt-8 border-t border-border/30">
          <p className="text-subtle flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 text-elegant-blue" fill="currentColor" /> by Nishitha Madhu
          </p>
          <p className="text-subtle text-sm mt-2">
            © 2024 Nishitha Madhu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;