
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type MenuItem = {
  id: string;
  label: string;
};

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  const menuItems: MenuItem[] = [
    { id: 'home', label: 'Überblick' },
    { id: 'about', label: 'Über mich' },
    { id: 'skills', label: 'Fähigkeiten' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Kontakt' }
  ];
  
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <nav className="animate-fade-in">
      <ul className="flex flex-col space-y-8">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "menu-item px-1 py-1 text-2xl tracking-wide",
                activeSection === item.id ? "font-bold" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
