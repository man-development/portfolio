
import React, { useState, useEffect } from 'react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  images: string[];
  description: string;
  technologies: { name: string; url?: string }[];
  duration: string;
  role: string;
  details: string | string[];
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Regelungsanwendung',
    category: 'Fullstack + Embedded Development',
    images: [
      'int.jpeg',
    ],
    description: 'Eine Webanwendung zum Steuern komplexer Gebäudeheizungen.',
    technologies: [
      { name: 'Rust', url: 'https://rust-lang.org/' },
      { name: 'React', url: 'https://react.dev/' },
      { name: 'AntD', url: 'https://ant.design/' },
      { name: 'Webdesign' },
      { name: 'prometheus', url: 'https://prometheus.io/' },
    ],
    duration: '1,5 Jahre',
    role: 'Entwickler / Designer',
    details: 'Kern der Anwendung war ein System welche Konfigurationen per CAN-BUS an verteile Mikrocontroller sendet. Diese führen basierend auf der zugesendeten Konfiguartion Funktionsmodule aus welche für Regelfunktionen aller Art genutzt werden können. Anschließend senden sie die Ergebnisse zurück an die Anwendung, wo sie für den Kunden dargestellt werden.'
  },
  {
    id: 2,
    title: 'E-commerce Website',
    category: 'Development',
    images: [
      'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1470&auto=format&fit=crop',
    ],
    description: 'A full-stack e-commerce platform built with modern web technologies. Features include user authentication, payment processing, inventory management, and an admin dashboard.',
    technologies: [
      { name: 'React', url: 'https://www.google.com' },
      { name: 'Node.js', url: 'https://www.google.com' },
      { name: 'MongoDB', url: 'https://www.google.com' },
      { name: 'Stripe', url: 'https://www.google.com' },
      { name: 'Tailwind CSS' },
    ],
    duration: '6 months',
    role: 'Full Stack Developer',
    details: 'Built with a microservices architecture, the platform handles over 10,000 products and processes hundreds of transactions daily. Implemented features like real-time inventory updates, advanced search filters, wishlist functionality, and automated email notifications.'
  },
  {
    id: 3,
    title: 'Touchscreen Displays',
    category: 'Linux Entwicklung + Management',
    images: [
      'X3-group-image.png',
      'schaltschraenke.jpeg',
    ],
    description: 'Schaltschrank Displays wurden mehrere Jahre in vielerlei Kombinationen von Hardware, Betriebssystemen und Anwendungssoftware undokumentiert ausgeliefert. Ich nahm mich diesem Projekt an, und sorgte neben neuen Features auch für Stabilitätsverbesserungen, bessere Dokumentation und klaren Prozessabläufen. ',
    technologies: [
      { name: 'Yocto Linux', url: 'https://www.yoctoproject.org/' },
      { name: 'CI/CD Pipelines', url: 'https://docs.gitlab.com/ci/' },
      { name: 'QT Webengine', url: 'https://doc.qt.io/qt-6/qtwebengine-index.html' },
    ],
    duration: '2,5 Jahre - Teilzeit',
    role: 'Technischer Direktor / Entwickler',
    details: [
      'Produktionsumgebung: Umstellung von undokumentierten Shell Scripten auf eigene Konfigurationsanwendung',
      'Einführung von Versionsverwaltung',
      'Automatiserte Softwarebuilds durch CI/CD Pipelines',
      'Marktanalyse: Suchen alternativer Hersteller unter Beachung von Ausschlusskriterien (z.B UL-Zertifikate)',
      'Browserentwicklung auf chromiumbasis mit der QT Webengine',
      'Linux Feature Entwicklung: Bildschrimschoner, Bootlogos, cronjobs',
      'Bugfixes: Memory leaks, fehlerhaftes caching, Verbindungsabbrüche',
    ]
  },
  {
    id: 4,
    title: 'ESP32 Messgerät',
    category: 'Systemnahe Entwicklung',
    images: [
      '/esp32.jpeg',
    ],
    description: 'Ziel war, bestimmte physischen Größen wie Temperatur, Druck oder Volumenstrom in einer Testumgebung zu erfassen und aufzuzeichnen. Hierfür wurde eine Anwendung erstellt, welche die gemessenen Werte via WebSocket-Server an beliebige Clients überträgt. ',
    technologies: [
      { name: 'FreeRTOS', url: 'https://www.freertos.org/Documentation/00-Overview'},
      { name: 'C' },
      { name: 'esp-idf', url: 'https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html' },
      { name: 'ESP32', url: 'https://www.conrad.de/de/p/espressif-esp32-devkitc-32e-entwickler-platine-esp32-devkitc-32e-2814007.html?experience=b2c&qwer=CjwKCAjw46HPBhAMEiwASZpLREddiGP0r7nRLkqzi8VWAj4uzgguuhmcD29wAoKHT2UyBX93_me7kRoCG8IQAvD_BwE&utm_source=google&utm_medium=cpc&utm_campaign=DE%20-%20PMAX%20-%20Nonbrand%20-%20Poor%20Performer&utm_id=20455042210&gad_source=1&gad_campaignid=20455043008&gbraid=0AAAAAD1-3H5V19tUEnJ3ciMqCqQ7a7lwD&gclid=CjwKCAjw46HPBhAMEiwASZpLREddiGP0r7nRLkqzi8VWAj4uzgguuhmcD29wAoKHT2UyBX93_me7kRoCG8IQAvD_BwE' },
    ],
    duration: '2 Monate',
    role: 'Embedded Entwickler',
    details: [
      'Verwendet FreeRTOS Multitasking zur Entkopplung der einzelnen Messungen.',
      'Unterstützt asynchrones Senden von WebSocket-Daten ohne Blockieren des HTTP-Handlers.',
      'Die Auflösung der Messungen kann konfiguriert werden. (Untere Grenze: 10ms)',
      'Für den Server wurde esp_http_server, ein nativer ESP HTTP Stack, verwendet.',
      'Die Werte werden verteilt über 4 ADC-Eingänge und 2 Interruptzähler gemessen.',
    ]
  },
];
const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!selectedProject) {
      setCurrentImageIndex(0);
      return;
    }
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [selectedProject]);

  return (
    <section id="portfolio" className="min-h-screen flex flex-col justify-center py-16">
      <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
      <Separator className="mb-8" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioItems.map((item) => (
          <Card 
            key={item.id} 
            className="overflow-hidden border-border transition-all duration-300 hover:shadow-lg cursor-pointer"
            onClick={() => { setCurrentImageIndex(0); setSelectedProject(item); }}
          >
            <CardContent className="p-0 relative group">
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.images[0]} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <p className="text-white/70">{item.category}</p>
                <p className="text-white/90 text-sm mt-2">Für weitere Infos anklicken</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          
          {selectedProject && (
            <div className="space-y-6">
              <div className="w-full h-64 md:h-80 overflow-hidden rounded-lg relative">
                {selectedProject.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${selectedProject.title} ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-white w-6'
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Informationen</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Kategorie:</span> {selectedProject.category}</p>
                    <p><span className="font-medium">Dauer:</span> {selectedProject.duration}</p>
                    <p><span className="font-medium">Rolle:</span> {selectedProject.role}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Toolstack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      tech.url ? (
                        <a
                          key={index}
                          href={tech.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs no-underline hover:bg-accent transition-colors cursor-pointer"
                        >
                          {tech.name}
                        </a>
                      ) : (
                        <span key={index} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs">
                          {tech.name}
                        </span>
                      )
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Beschreibung</h3>
                <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
                
                <h3 className="text-lg font-semibold mb-2">Details</h3>
                {Array.isArray(selectedProject.details) ? (
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {selectedProject.details.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">{selectedProject.details}</p>
                )}
              </div>
              

            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
