
import React, { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type Skill = {
  name: string;
  years: number;
  description: string;
  details: string;
};

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  
  const skills: Skill[] = [
    {
      name: 'Systemnahe Programmierung',
      years: 5,
      description: 'Hauptschwerpunkt meiner Erfahrung, das Entwicklen auf Mikrocontrollern',
      details: 'Hauptschwerpunkt ist die Mehrjährige Erfahrung in der systemnahen Programmierung mit fundierten Kenntnissen in C, C++ und Rust. Entwicklung von Echtzeitanwendungen auf Mikrocontrollern, unter anderem mit FreeRTOS, sowie Umsetzung von Regelanwendungen auf Basis von Messwerten aus einer Vielzahl von Sensoren.'
    },
    {
      name: 'Fullstack Development',
      years: 3,
      description: 'Building responsive and interactive web applications',
      details: '6 years of hands-on experience with React, TypeScript, and modern frontend frameworks. Expert in responsive design, performance optimization, and state management. Built scalable applications serving thousands of users daily with focus on clean, maintainable code.'
    },
    {
      name: 'Linux Systeme',
      years: 2,
      description: 'Capturing moments and telling stories through images',
      details: 'A decade of photography experience spanning portrait, landscape, and commercial work. Proficient in both digital and film photography, with expertise in Adobe Lightroom and Photoshop. Published work in various magazines and collaborated with brands on visual storytelling campaigns.'
    },
    {
      name: 'Brand Strategy',
      years: 5,
      description: 'Developing cohesive brand identities and strategies',
      details: '5 years of experience in brand development, from startup identity creation to established brand refreshes. Skilled in market research, competitive analysis, and creating comprehensive brand guidelines. Successfully launched 20+ brands across various industries.'
    }
  ];
  
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-16">
      <h2 className="text-3xl font-bold mb-8">Meine Erfahrung</h2>
      <Separator className="mb-8" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="animate-slide-in-left">
          <h3 className="text-xl font-semibold mb-6"></h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                onClick={() => setSelectedSkill(skill)}
                className="p-4 border border-border rounded-md cursor-pointer hover:bg-accent/50 transition-colors"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{skill.name}</h4>
                  <span className="text-sm font-bold text-primary">{skill.years} Jahre</span>
                </div>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="animate-slide-in-right">
          {selectedSkill ? (
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  {selectedSkill.name}
                  <span className="text-sm font-normal text-primary">{selectedSkill.years} Jahre Erfahrung</span>
                </CardTitle>
                <CardDescription>{selectedSkill.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{selectedSkill.details}</p>
              </CardContent>
            </Card>
          ) : (
            <div className="h-full flex items-center justify-center border border-dashed border-border rounded-md">
              <p className="text-muted-foreground text-center">
                Klicken Sie auf eine Fähigkeit
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
