
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
      description: 'Fundierte Erfahrung mit eingebetteten Systemen',
      details: 'Durch die Arbeit in der systemnahen Programmierung konnte ich fundierte Kenntnisse in C, C++ und Rust aufbauen. Dabei arbeitete ich routiniert mit Echtzeitsystemen und einem breiten Spektrum von Kommunikationsprotokollen. Diese Anwendungen waren meist für das Messen physikalischer Größen durch unterschiedlichste Sensoren verantwortlich. Meine Erfahrung beschränkt sich hierbei nicht auf die Basics sondern reicht bis zu höheren Themen wie Makroprogrammierung, Generics und mehr.',
    },
    {
      name: 'Fullstack Entwicklung',
      years: 3,
      description: 'Moderne Systeme erfordern moderne Benutzeroberflächen',
      details: 'Ich bin versiert im Arbeiten mit Webtechnologien wie TypeScript, React oder Svelte. Dabei umfassten meine Tätigkeiten den gesamten Prozess – vom Design und der Umsetzung von UI-Komponenten bis zur Anbindung an eigens entwickelte Module auf Embedded-Systemen oder Datenbanken.'
    },
        {
      name: 'Linux Systeme',
      years: 3,
      description: 'Das komplette Feld der Linux Entwicklung',
      details: 'Egal ob im Server, Desktop oder Embedded-Bereich – Linux ist heute überall. Ich arbeitete bereits mit unterschiedlichsten Technologien wie Debian, Yocto oder NixOS. Dabei reicht mein Wissen von einfacher Feature entwicklung bis zum zusammenstellen eigener Systeme.'
    },/*
    {
      name: 'Objektorientierte Programmierung',
      years: 2,
      description: 'Umgang mit Klassenstrukturen',
      details: 'Objektorientiertes Design war in meinen Projekten nie explizit gefordert - aus reiner persönlicher Präferenz wählte ich aber C# für einige berufliche und private Projekte. Dabei arbeitete ich mit gängigen Konzepten wie Kapselung, Polymorphismus und Abstraktion.'
    },*/
    {
      name: 'Agile Teamarbeit & Scrum',
      years: 5,
      description: 'Kollaboratives Arbeiten nach agilen Methoden',
      details: 'Ich arbeite routiniert mit agilen Methoden, insbesondere Scrum – von Sprint-Planung und Daily Standups bis hin zu Retrospektiven. Dabei arbeite ich eigenverantwortlich und eng mit anderen Rollen wie Entwicklern und Product Ownern zusammen.'
    }
  ];
  
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-16">
      <h2 className="text-3xl font-bold mb-8">Erfahrung</h2>
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
