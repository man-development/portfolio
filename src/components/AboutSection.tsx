
import React from 'react';
import { Separator } from '@/components/ui/separator';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-16">
      <h2 className="text-3xl font-bold mb-8">Über mich</h2>
      <Separator className="mb-8" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="animate-slide-in-left">
          <h3 className="text-xl font-semibold mb-4">Wer bin ich</h3>
          <p className="text-muted-foreground mb-6">
            Ich bin ein Entwickler mit 5 Jahren Berufserfahrung. Ich 
          </p>
          <p className="text-muted-foreground">
            In meiner Freizeit fahre ich gerne Motorrad, betreibe Kraftsport oder beschäftige mich auf die unterschiedlichsten Weisen kreativ.
          </p>
        </div>
        
        <div className="animate-slide-in-right">
          <h3 className="text-xl font-semibold mb-4">Berufsweg</h3>
          <p className="text-muted-foreground mb-6">
          Ich habe meine berufliche Laufbahn als hardwarenaher Entwickler begonnen und mir im Laufe der Zeit umfassende Kenntnisse im Bereich Full-Stack-Entwicklung angeeignet.
          </p>
          <p className="text-muted-foreground">
          Diese Kombination ermöglicht es mir, Anwendungen ganzheitlich – von der Systembasis bis zur Benutzeroberfläche – zu konzipieren und umzusetzen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
