import React from 'react';

export const BuildingSilhouette = () => {
  return (
    <div className="absolute inset-0 bg-background overflow-hidden">
      {/* Sophisticated gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% 120%, hsl(205 35% 88%) 0%, transparent 50%),
            linear-gradient(to bottom, 
              hsl(200 30% 98%) 0%, 
              hsl(205 25% 95%) 40%,
              hsl(210 20% 92%) 70%,
              hsl(215 18% 89%) 100%
            )
          `
        }}
      />
      
      {/* SVG Building Silhouette - Enhanced Definition */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 1400"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* LAYER 1: Far Background - Atmospheric */}
        <g opacity="0.06" fill="hsl(215 15% 50%)">
          <rect x="0" y="700" width="100" height="700" />
          <rect x="105" y="650" width="95" height="750" />
          <rect x="205" y="720" width="80" height="680" />
          <rect x="900" y="680" width="90" height="720" />
          <rect x="995" y="640" width="105" height="760" />
          <rect x="1105" y="710" width="95" height="690" />
        </g>
        
        {/* LAYER 2: Middle Distance - More Defined */}
        <g opacity="0.09">
          {/* Left cluster */}
          <rect x="80" y="550" width="120" height="850" fill="hsl(215 18% 48%)" />
          <rect x="102" y="520" width="76" height="30" fill="hsl(215 18% 46%)" />
          {[...Array(24)].map((_, i) => (
            <g key={`md-l1-${i}`}>
              <rect x="95" y={580 + i * 34} width="16" height="24" fill="hsl(215 25% 40%)" opacity="0.35" />
              <rect x="120" y={580 + i * 34} width="16" height="24" fill="hsl(215 25% 40%)" opacity="0.35" />
              <rect x="145" y={580 + i * 34} width="16" height="24" fill="hsl(215 25% 40%)" opacity="0.35" />
              <rect x="170" y={580 + i * 34} width="16" height="24" fill="hsl(215 25% 40%)" opacity="0.35" />
            </g>
          ))}
          
          {/* Left-center tall */}
          <rect x="205" y="450" width="130" height="950" fill="hsl(215 18% 47%)" />
          <rect x="230" y="415" width="80" height="35" fill="hsl(215 18% 45%)" />
          <rect x="250" y="390" width="40" height="25" fill="hsl(215 18% 43%)" />
          {[...Array(26)].map((_, i) => (
            <g key={`md-lc-${i}`}>
              <rect x="220" y={485 + i * 36} width="18" height="26" fill="hsl(215 25% 38%)" opacity="0.35" />
              <rect x="248" y={485 + i * 36} width="18" height="26" fill="hsl(215 25% 38%)" opacity="0.35" />
              <rect x="276" y={485 + i * 36} width="18" height="26" fill="hsl(215 25% 38%)" opacity="0.35" />
              <rect x="304" y={485 + i * 36} width="18" height="26" fill="hsl(215 25% 38%)" opacity="0.35" />
            </g>
          ))}
          
          {/* Right-center */}
          <rect x="865" y="520" width="140" height="880" fill="hsl(215 18% 48%)" />
          <rect x="890" y="485" width="90" height="35" fill="hsl(215 18% 46%)" />
          {[...Array(24)].map((_, i) => (
            <g key={`md-rc-${i}`}>
              <rect x="880" y={555 + i * 36} width="19" height="26" fill="hsl(215 25% 40%)" opacity="0.35" />
              <rect x="910" y={555 + i * 36} width="19" height="26" fill="hsl(215 25% 40%)" opacity="0.35" />
              <rect x="940" y={555 + i * 36} width="19" height="26" fill="hsl(215 25% 40%)" opacity="0.35" />
              <rect x="970" y={555 + i * 36} width="19" height="26" fill="hsl(215 25% 40%)" opacity="0.35" />
            </g>
          ))}
          
          {/* Far right */}
          <rect x="1010" y="580" width="110" height="820" fill="hsl(215 18% 49%)" />
          {[...Array(22)].map((_, i) => (
            <g key={`md-fr-${i}`}>
              <rect x="1025" y={615 + i * 36} width="16" height="26" fill="hsl(215 25% 42%)" opacity="0.35" />
              <rect x="1052" y={615 + i * 36} width="16" height="26" fill="hsl(215 25% 42%)" opacity="0.35" />
              <rect x="1079" y={615 + i * 36} width="16" height="26" fill="hsl(215 25% 42%)" opacity="0.35" />
            </g>
          ))}
        </g>
        
        {/* LAYER 3: Mid-Foreground - Sharper Details */}
        <g opacity="0.13">
          {/* Left building complex */}
          <rect x="150" y="680" width="150" height="720" fill="hsl(218 22% 42%)" />
          <rect x="180" y="650" width="90" height="30" fill="hsl(218 22% 40%)" />
          <rect x="200" y="630" width="50" height="20" fill="hsl(218 22% 38%)" />
          {[...Array(17)].map((_, i) => (
            <g key={`mf-l-${i}`}>
              <rect x="165" y={710 + i * 41} width="22" height="30" fill="hsl(218 30% 32%)" opacity="0.5" />
              <rect x="199" y={710 + i * 41} width="22" height="30" fill="hsl(218 30% 32%)" opacity="0.5" />
              <rect x="233" y={710 + i * 41} width="22" height="30" fill="hsl(218 30% 32%)" opacity="0.5" />
              <rect x="267" y={710 + i * 41} width="22" height="30" fill="hsl(218 30% 32%)" opacity="0.5" />
            </g>
          ))}
          
          {/* Right stepped building */}
          <rect x="900" y="600" width="160" height="800" fill="hsl(218 22% 43%)" />
          <rect x="925" y="560" width="110" height="40" fill="hsl(218 22% 41%)" />
          <rect x="950" y="530" width="60" height="30" fill="hsl(218 22% 39%)" />
          {[...Array(18)].map((_, i) => (
            <g key={`mf-r-${i}`}>
              <rect x="915" y={635 + i * 42} width="24" height="30" fill="hsl(218 30% 33%)" opacity="0.5" />
              <rect x="953" y={635 + i * 42} width="24" height="30" fill="hsl(218 30% 33%)" opacity="0.5" />
              <rect x="991" y={635 + i * 42} width="24" height="30" fill="hsl(218 30% 33%)" opacity="0.5" />
              <rect x="1029" y={635 + i * 42} width="24" height="30" fill="hsl(218 30% 33%)" opacity="0.5" />
            </g>
          ))}
        </g>
        
        {/* LAYER 4: Foreground - Maximum Definition */}
        <g opacity="0.18">
          {/* Left modern tower */}
          <rect x="280" y="480" width="160" height="920" fill="hsl(220 25% 38%)" />
          <rect x="310" y="445" width="100" height="35" fill="hsl(220 25% 36%)" />
          <rect x="335" y="420" width="50" height="25" fill="hsl(220 25% 34%)" />
          {/* Vertical accent strip */}
          <rect x="355" y="465" width="10" height="935" fill="hsl(220 30% 32%)" opacity="0.3" />
          {[...Array(21)].map((_, i) => (
            <g key={`fg-l-${i}`}>
              <rect x="295" y={510 + i * 43} width="26" height="32" fill="hsl(220 35% 28%)" opacity="0.6" />
              <rect x="333" y={510 + i * 43} width="26" height="32" fill="hsl(220 35% 28%)" opacity="0.6" />
              <rect x="371" y={510 + i * 43} width="26" height="32" fill="hsl(220 35% 28%)" opacity="0.6" />
              <rect x="409" y={510 + i * 43} width="26" height="32" fill="hsl(220 35% 28%)" opacity="0.6" />
            </g>
          ))}
          
          {/* Central iconic skyscraper - Hero building */}
          <rect x="500" y="200" width="200" height="1200" fill="hsl(220 25% 36%)" />
          
          {/* Spire structure */}
          <rect x="585" y="140" width="30" height="60" fill="hsl(220 25% 32%)" />
          <rect x="577" y="130" width="46" height="10" fill="hsl(220 25% 30%)" />
          <polygon points="600,100 577,130 623,130" fill="hsl(220 25% 28%)" />
          <rect x="597" y="90" width="6" height="10" fill="hsl(220 25% 26%)" />
          
          {/* Crown and top details */}
          <rect x="520" y="175" width="160" height="25" fill="hsl(220 25% 34%)" />
          <rect x="540" y="155" width="120" height="20" fill="hsl(220 25% 32%)" />
          <rect x="560" y="140" width="80" height="15" fill="hsl(220 25% 30%)" />
          
          {/* Vertical accent strips */}
          <rect x="540" y="230" width="12" height="1170" fill="hsl(220 30% 30%)" opacity="0.25" />
          <rect x="648" y="230" width="12" height="1170" fill="hsl(220 30% 30%)" opacity="0.25" />
          
          {/* Window grid with variation */}
          {[...Array(26)].map((_, i) => (
            <g key={`fg-c-${i}`}>
              <rect x="515" y={240 + i * 45} width="30" height="36" fill="hsl(220 40% 25%)" opacity="0.65" />
              <rect x="558" y={240 + i * 45} width="30" height="36" fill="hsl(220 40% 25%)" opacity="0.65" />
              <rect x="601" y={240 + i * 45} width="30" height="36" fill="hsl(220 40% 25%)" opacity="0.65" />
              <rect x="644" y={240 + i * 45} width="30" height="36" fill="hsl(220 40% 25%)" opacity="0.65" />
            </g>
          ))}
          
          {/* Lit windows (selective accent) */}
          {[4, 7, 11, 14, 18, 21].map((row) => (
            <g key={`lit-${row}`}>
              <rect x="558" y={240 + row * 45} width="30" height="36" fill="hsl(45 85% 70%)" opacity="0.4" />
            </g>
          ))}
          
          {/* Right Art Deco tower */}
          <rect x="710" y="380" width="170" height="1020" fill="hsl(220 25% 37%)" />
          
          {/* Art Deco setback crown */}
          <rect x="735" y="345" width="120" height="35" fill="hsl(220 25% 35%)" />
          <rect x="760" y="315" width="70" height="30" fill="hsl(220 25% 33%)" />
          <rect x="785" y="290" width="20" height="25" fill="hsl(220 25% 31%)" />
          
          {/* Decorative vertical lines */}
          <rect x="745" y="380" width="6" height="1020" fill="hsl(220 30% 31%)" opacity="0.3" />
          <rect x="825" y="380" width="6" height="1020" fill="hsl(220 30% 31%)" opacity="0.3" />
          <rect x="865" y="380" width="6" height="1020" fill="hsl(220 30% 31%)" opacity="0.3" />
          
          {[...Array(22)].map((_, i) => (
            <g key={`fg-r-${i}`}>
              <rect x="725" y={415 + i * 45} width="25" height="34" fill="hsl(220 35% 27%)" opacity="0.6" />
              <rect x="763" y={415 + i * 45} width="25" height="34" fill="hsl(220 35% 27%)" opacity="0.6" />
              <rect x="801" y={415 + i * 45} width="25" height="34" fill="hsl(220 35% 27%)" opacity="0.6" />
              <rect x="839" y={415 + i * 45} width="25" height="34" fill="hsl(220 35% 27%)" opacity="0.6" />
            </g>
          ))}
          
          {/* Left-front building */}
          <rect x="410" y="640" width="130" height="760" fill="hsl(220 25% 39%)" />
          <rect x="430" y="615" width="90" height="25" fill="hsl(220 25% 37%)" />
          {[...Array(17)].map((_, i) => (
            <g key={`fg-lf-${i}`}>
              <rect x="425" y={670 + i * 44} width="22" height="32" fill="hsl(220 35% 29%)" opacity="0.6" />
              <rect x="458" y={670 + i * 44} width="22" height="32" fill="hsl(220 35% 29%)" opacity="0.6" />
              <rect x="491" y={670 + i * 44} width="22" height="32" fill="hsl(220 35% 29%)" opacity="0.6" />
              <rect x="524" y={670 + i * 44} width="22" height="32" fill="hsl(220 35% 29%)" opacity="0.6" />
            </g>
          ))}
        </g>
        
        {/* Architectural details - Antennas and rooftop equipment */}
        <g opacity="0.15" fill="hsl(220 25% 32%)">
          {/* Main spire details */}
          <rect x="598" y="85" width="4" height="8" />
          <circle cx="600" cy="82" r="3" />
          
          {/* Other antennas */}
          <rect x="357" y="410" width="5" height="28" />
          <rect x="352" y="405" width="15" height="7" />
          
          <rect x="792" y="280" width="5" height="25" />
          <rect x="787" y="275" width="15" height="6" />
          
          <rect x="465" y="605" width="4" height="20" />
          
          {/* Rooftop equipment boxes */}
          <rect x="565" y="190" width="20" height="10" />
          <rect x="615" y="190" width="20" height="10" />
          <rect x="340" y="435" width="15" height="8" />
          <rect x="755" y="335" width="18" height="9" />
        </g>
        
        {/* Atmospheric effects */}
        <defs>
          {/* Horizon atmosphere */}
          <linearGradient id="horizonFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(215 20% 45%)" stopOpacity="0.04" />
            <stop offset="100%" stopColor="hsl(215 20% 45%)" stopOpacity="0" />
          </linearGradient>
          
          {/* Base shadow gradient */}
          <linearGradient id="baseShadow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(220 15% 40%)" stopOpacity="0.06" />
            <stop offset="50%" stopColor="hsl(220 15% 40%)" stopOpacity="0.02" />
            <stop offset="100%" stopColor="hsl(220 15% 40%)" stopOpacity="0" />
          </linearGradient>
          
          {/* Radial glow */}
          <radialGradient id="centerGlow" cx="50%" cy="100%">
            <stop offset="0%" stopColor="hsl(200 40% 85%)" stopOpacity="0.06" />
            <stop offset="70%" stopColor="hsl(200 40% 85%)" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Apply atmospheric effects */}
        <rect x="0" y="1200" width="1200" height="200" fill="url(#baseShadow)" />
        <ellipse cx="600" cy="1400" rx="700" ry="120" fill="url(#centerGlow)" />
        <rect x="0" y="1100" width="1200" height="300" fill="url(#horizonFade)" />
      </svg>
      
      {/* Refined grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'soft-light'
        }}
      />
      
      {/* Subtle vignette for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 0%, hsl(215 20% 85%) 100%)',
          opacity: 0.12
        }}
      />
    </div>
  );
};

export default BuildingSilhouette;