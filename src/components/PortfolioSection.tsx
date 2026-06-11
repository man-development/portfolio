
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
    title: 'Microcontrollerbasierte Frischwasseregelung',
    category: 'Systemnahe Entwicklung',
    images: [
      'mcu.jpeg',
    ],
    description: 'Eine smarte firschwasserregelung abgebildet auf einfacher AVR Hardware. Für die Regelung wurden Konzepte wie PID-Regler, Dreipunktregelung und Neuronale Netze verwendet. Auch Methoden zur Codegenerierung wie Simulink wurden verwendet.',
    technologies: [
      { name: 'C' },
      { name: 'AVR', url: 'https://www.microchip.com/en-us/products/microcontrollers/8-bit-mcus/avr-mcus' },
      { name: 'Modbus', url: ' https://www.modbus.org/'},
      { name: 'I²C', url: 'https://de.i2c-bus.org/' },
      { name: 'Simulink', url: 'https://de.mathworks.com/help/simulink/modeling.html' },
      { name: 'UART' },
    ],
    duration: 'Über 5 Jahre',
    role: 'Embedded Entwickler',
details: [
  'Vernetzung mehrerer Geräte über Modbus (z. B. für Kaskadenschaltungen).',
  'MCU-Konfiguration durch Setzen von Bits in Hardwareregistern (Prescaler, Timer-Modi, Free-Running-Mode).',
  'Kommunikation mit Ethernet-SoC über UART (zur Anbindung an Smart-Netze).',
  'Messen von Temperaturen über ADCs.',
  'I²C-Kommunikation mit RTC und Multiplexer.',
  'Interruptbasierte Frequenzmessung (u. a. für PWM).',
]
  },
    {
    id: 2,
    title: 'Heizregler Ökosystem',
    category: 'Fullstack + Embedded Entwicklung',
    images: [
      'int.jpeg',
    ],
    description: 'Ein Eigenständiges Hardware-Ökusystem zum Steuern komplexer Gebäudeheizungen. Das System besteht aus unterschiedlichen Plattformen, welche per CAN-Bus miteinander kommunizieren und von der Kern-Webanwendung welche Konfigurationen erhalten. Diese nutzen Sie um zur Laufzeit ein Netz aus Regelungsfunktionsmodule aufzubauen und auszuführen.',
    technologies: [
      { name: 'Rust', url: 'https://rust-lang.org/' },
      { name: 'React', url: 'https://react.dev/' },
      { name: 'AntD', url: 'https://ant.design/' },
      { name: 'Webdesign' },
      { name: 'prometheus', url: 'https://prometheus.io/' },
      { name: 'ARM Cortex' },
      { name: 'SPI' },
      {name: 'EFM32'},
      { name: 'CAN-Bus', url: 'https://www.me-systeme.de/de/canbus' },
    ],
    duration: '1,5 Jahre',
    role: 'Entwickler / Designer',
    details: 'Der ESP32 lässt verschiedene Funktionsmodule in einer Runtime laufen. Basierend darauf werden die Ausgänge der Platine geschalten, indem die Pinzustände per SPI an einen EFM32 gesendet werden, werlcher diese setzt.'
  },
  {
  id: 3,
  title: 'Embedded Linux für Touchscreen HMIs',
  category: 'Linux Entwicklung + Management',
  images: [
    'hmi.png',
  ],
  description: 'Aufgabe war die Verwaltung und Weiterentwicklung einer breiten Palette von Touchscreen-Displays unterschiedlicher Hersteller. Neben der Pflege der Linux-Basis wurden Build-Systeme, Update-Mechanismen und Konfigurationswerkzeuge modernisiert, um Wartbarkeit, Stabilität und langfristige Skalierbarkeit sicherzustellen.',
  technologies: [
    { name: 'Yocto Linux', url: 'https://www.yoctoproject.org/' },
    { name: 'CI/CD Pipelines', url: 'https://docs.gitlab.com/ci/' },
    { name: 'QT Webengine', url: 'https://doc.qt.io/qt-6/qtwebengine-index.html' },
    { name: 'RAUC', url: 'https://rauc.io/' },
    { name: 'rpi-image-gen', url: 'https://github.com/raspberrypi/rpi-image-gen' },
    { name: 'NXP i.MX536 | ARM Cortex-A8'},
    { name: 'NXP i.MX6 | ARM Cortex-A9', url: 'https://www.nxp.com/products/i.MX6Q?cid=ps_PRG100148_CAM262037_EETECH' },
    
  ],
  duration: '3 Jahre - Teilzeit',
  role: 'Technischer Direktor / Entwickler',
  details: [
    'Pflege der Yocto Meta-Layer-Struktur sowie Entwicklung und Wartung von BitBake-Rezepten',
    'Anpassung und Erweiterung von Device-Tree-Overlays für unterschiedliche Hardwareplattformen',
    'Implementierung von RAUC A/B-Update-Systemen inklusive Delta-Updates',
    'Analyse und Auflösung von Treiber- und Paketabhängigkeiten im Build-System',
    'Browserentwicklung mit Chromium und der Qt WebEngine',
    'Migration von Shell-Skripten zu vollwertigen Konfigurationsanwendungen',
    'Einführung und Pflege von Versionsverwaltungs- und Release-Prozessen',
    'Linux-Basisentwicklung: Systemd-Services, Ressourcenüberwachung und Netzwerkverwaltung',
  ]
},
    {
    id: 4,
    title: 'ESP32 basierte Laborüberwachung',
    category: 'Systemnahe Entwicklung',
    images: [
      'esp32.jpeg',
    ],
    description: 'Um in einem Labor physische Größen wie Temperatur, Druck oder Volumenstrom zu erfassen und aufzuzeichnen wurde eine eigene Hardwareplattform geschaffen. Hierfür wurde anschließend eine Anwendung erstellt, welche die gemessenen Werte via WebSocket-Server an beliebige Clients überträgt. ',
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
  {
    id: 5,
    title: 'Konfigurationsanwendung für Linuxgeräte',
    category: 'Fullstack Entwicklung',
    images: [
      'config-tool.jpeg',
    ],
    description: 'Eine Plattformunabhängige Anwendung zum Konfigurieren von Linuxgeräten.',
    technologies: [
      { name: 'Rust', url: 'https://rust-lang.org/' },
      { name: 'Svelte', url: 'https://svelte.dev/' },
      { name: 'SvelteKit', url: 'https://svelte.dev/docs/kit/introduction' },
      { name: 'Linux' },
      { name: 'Tauri', url: 'https://v2.tauri.app/' },
    ],
    duration: '2 Monate',
    role: 'Product Owner / Entwickler',
    details: 'Die Anwendung bietet die Möglichkeit Softwarepakete für bestimmte Systeme abzulegen. Wird ein passendes System per Ethernet erkannt, werden zur Installation verfügbare Softwarepakete angezeigt. Dabei kann sehr präzise eingestellt werden welche Softwarepakete auf welchem System angewendet werden können. (u. a. Betriebssystem, IP-Range, Produkthersteller, SSH-Credentials)'
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
