
import React from 'react';

const ProfileImage = () => {
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full overflow-hidden rounded-md border border-border shadow-md relative">
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop" 
          alt="Profile" 
          className="object-cover w-full h-full grayscale transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
      </div>
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-background border border-border rounded-md flex items-center justify-center shadow-lg">
        <span className="font-serif text-4xl font-bold">MA</span>
      </div>
      <div className="absolute top-4 left-4 px-3 py-1 bg-background/70 backdrop-blur-sm border border-border rounded-md">
        <p className="text-xs font-medium">Entwickler</p>
      </div>
    </div>
  );
};

export default ProfileImage;
