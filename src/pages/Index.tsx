
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
          <Navigation />
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col relative">
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none z-0 opacity-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-border h-full"></div>
          ))}
        </div>
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8 z-10">
          {/* Left Side - Profile Image */}
          <div className="h-full flex items-center justify-center md:justify-end">
            <div className="w-full max-w-md aspect-square animate-slide-in-left">
              <ProfileImage />
            </div>
          </div>
          
          {/* Right Side - Navigation */}
          <div className="h-full flex flex-col items-center md:items-start justify-center animate-slide-in-right">
            <div className="hidden md:block mb-8">
              <h1 className="text-5xl font-bold mb-2 tracking-tight">Mika Ansorge</h1>
              <div className="h-1 w-16 bg-primary mb-4"></div>
              <p className="text-muted-foreground text-lg">Embedded Entwickler im Allgäu</p>
            </div>
            
            <div className="hidden md:block">
              <Navigation />
            </div>
            
            <div className="md:hidden text-center">
              <h1 className="text-4xl font-bold mb-2">Mika Ansorge</h1>
              <p className="text-muted-foreground mb-6">Entwickler</p>
              <Button
                onClick={() => setMobileMenuOpen(true)}
                className="w-full"
              >
                View Menu
              </Button>
            </div>
          </div>
        </div>
        
  
      </section>

      <div className="container mx-auto px-4">
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </div>

      <footer className="border-t border-border py-6 text-center text-muted-foreground">
        <div className="container mx-auto">
          <p>© 2025 Mika Ansorge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
