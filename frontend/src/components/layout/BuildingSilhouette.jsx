import React from 'react';

export const BuildingSilhouette = () => {
  return (
    <div className="absolute inset-0 bg-background">
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsl(40 20% 97%) 0%, hsl(40 15% 95%) 100%)'
        }}
      />
      
      {/* SVG Building Silhouette */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 1200"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background buildings - furthest layer */}
        <g opacity="0.06" fill="hsl(160 8% 45%)">
          {/* Far left building */}
          <rect x="20" y="500" width="120" height="700" />
          <rect x="30" y="520" width="20" height="30" />
          <rect x="60" y="520" width="20" height="30" />
          <rect x="90" y="520" width="20" height="30" />
          <rect x="30" y="570" width="20" height="30" />
          <rect x="60" y="570" width="20" height="30" />
          <rect x="90" y="570" width="20" height="30" />
          
          {/* Far right building */}
          <rect x="680" y="450" width="100" height="750" />
          <rect x="690" y="470" width="15" height="25" />
          <rect x="715" y="470" width="15" height="25" />
          <rect x="740" y="470" width="15" height="25" />
          <rect x="690" y="510" width="15" height="25" />
          <rect x="715" y="510" width="15" height="25" />
          <rect x="740" y="510" width="15" height="25" />
        </g>
        
        {/* Middle layer buildings */}
        <g opacity="0.08" fill="hsl(160 8% 50%)">
          {/* Left tall building */}
          <rect x="80" y="350" width="140" height="850" />
          <rect x="95" y="370" width="25" height="40" />
          <rect x="135" y="370" width="25" height="40" />
          <rect x="175" y="370" width="25" height="40" />
          <rect x="95" y="430" width="25" height="40" />
          <rect x="135" y="430" width="25" height="40" />
          <rect x="175" y="430" width="25" height="40" />
          <rect x="95" y="490" width="25" height="40" />
          <rect x="135" y="490" width="25" height="40" />
          <rect x="175" y="490" width="25" height="40" />
          <rect x="95" y="550" width="25" height="40" />
          <rect x="135" y="550" width="25" height="40" />
          <rect x="175" y="550" width="25" height="40" />
          
          {/* Right medium building */}
          <rect x="600" y="400" width="130" height="800" />
          <rect x="615" y="420" width="20" height="35" />
          <rect x="650" y="420" width="20" height="35" />
          <rect x="685" y="420" width="20" height="35" />
          <rect x="615" y="475" width="20" height="35" />
          <rect x="650" y="475" width="20" height="35" />
          <rect x="685" y="475" width="20" height="35" />
          <rect x="615" y="530" width="20" height="35" />
          <rect x="650" y="530" width="20" height="35" />
          <rect x="685" y="530" width="20" height="35" />
        </g>
        
        {/* Foreground buildings - closest layer */}
        <g opacity="0.11" fill="hsl(160 10% 55%)">
          {/* Main central tower */}
          <rect x="300" y="150" width="200" height="1050" />
          {/* Tower top details */}
          <rect x="370" y="100" width="60" height="50" />
          <rect x="385" y="70" width="30" height="30" />
          {/* Windows - repeating pattern */}
          {[...Array(18)].map((_, i) => (
            <g key={`main-row-${i}`}>
              <rect x="320" y={180 + i * 55} width="35" height="40" />
              <rect x="370" y={180 + i * 55} width="35" height="40" />
              <rect x="420" y={180 + i * 55} width="35" height="40" />
            </g>
          ))}
          
          {/* Left mid-height building */}
          <rect x="180" y="450" width="150" height="750" />
          <rect x="220" y="420" width="70" height="30" />
          {[...Array(12)].map((_, i) => (
            <g key={`left-row-${i}`}>
              <rect x="195" y={470 + i * 55} width="25" height="40" />
              <rect x="235" y={470 + i * 55} width="25" height="40" />
              <rect x="275" y={470 + i * 55} width="25" height="40" />
            </g>
          ))}
          
          {/* Right building with setbacks */}
          <rect x="480" y="320" width="160" height="880" />
          <rect x="510" y="290" width="100" height="30" />
          {[...Array(15)].map((_, i) => (
            <g key={`right-row-${i}`}>
              <rect x="495" y={340 + i * 55} width="30" height="40" />
              <rect x="540" y={340 + i * 55} width="30" height="40" />
              <rect x="585" y={340 + i * 55} width="30" height="40" />
            </g>
          ))}
        </g>
        
        {/* Decorative elements - antennas and details */}
        <g opacity="0.09" fill="hsl(160 8% 50%)">
          <rect x="395" y="40" width="4" height="30" />
          <rect x="390" y="35" width="14" height="8" />
          <rect x="250" y="435" width="3" height="20" />
          <rect x="560" y="275" width="3" height="18" />
        </g>
        
        {/* Subtle reflection/shadow at base */}
        <rect 
          x="0" 
          y="1150" 
          width="800" 
          height="50" 
          fill="url(#baseGradient)"
        />
        
        <defs>
          <linearGradient id="baseGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(160 8% 55%)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="hsl(160 8% 55%)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Subtle grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default BuildingSilhouette;
