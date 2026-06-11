
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileImage from "@/components/ProfileImage";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile Menu Button */}
      <div className="block md:hidden fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-background/80 backdrop-blur-sm border-border"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-background z-40 transform ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 md:hidden flex items-center justify-center`}>
        <div className="p-8">
          <Navigation onNavigate={() => setMobileMenuOpen(false)} />
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col relative">
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none z-0 opacity-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-border h-full"></div>
          ))}
        </div>
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 p-4 md:p-8 z-10 items-center">
          {/* Left Side - Title */}
          <div className="h-full flex items-center justify-center md:justify-end animate-slide-in-left">
            <div className="text-center md:text-right">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight leading-none">
                Mika<br />Ansorge
              </h1>
              <div className="h-1 w-16 bg-primary mb-4 md:ml-auto mx-auto md:mx-0"></div>
              <p className="text-muted-foreground text-xl md:text-2xl">
                Software Entwickler im Allgäu
              </p>
            </div>
          </div>
          
          {/* Right Side - Navigation with separator */}
          <div className="h-full flex items-center justify-center md:justify-start animate-slide-in-right">
            <div className="hidden md:flex items-center">
              <div className="w-px h-64 bg-border mr-12"></div>
              <Navigation />
            </div>
            
            <div className="md:hidden w-full text-center">
              <Button
                onClick={() => setMobileMenuOpen(true)}
                className="w-full"
              >
                Menü
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
      </div>

      <footer className="border-t border-border py-6 text-center text-muted-foreground">
        <div className="container mx-auto">
          <p>© 2026 Mika Ansorge</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
