"use client"

export const GeometricBackground = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-[0.05] animate-pulse"
        style={{ backgroundColor: "#92301a", animationDuration: "8s" }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-[0.05] animate-pulse"
        style={{ backgroundColor: "#92301a", animationDelay: "4s", animationDuration: "10s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full opacity-[0.03] animate-bounce"
        style={{ backgroundColor: "#92301a", animationDuration: "12s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full opacity-[0.02] animate-bounce"
        style={{ backgroundColor: "#92301a", animationDelay: "6s", animationDuration: "15s" }}
      />
    </div>
  )
}

export const FloatingShapes = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div
        className="absolute top-20 left-10 w-4 h-4 rotate-45 opacity-[0.45] animate-float"
        style={{ backgroundColor: "#92301a" }}
      />
      <div
        className="absolute top-40 right-20 w-6 h-6 rotate-12 opacity-[0.40] animate-float"
        style={{ backgroundColor: "#92301a", animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-32 left-1/4 w-3 h-3 rotate-45 opacity-[0.50] animate-float"
        style={{ backgroundColor: "#92301a", animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-20 right-1/3 w-5 h-5 rotate-12 opacity-[0.38] animate-float"
        style={{ backgroundColor: "#92301a", animationDelay: "6s" }}
      />
      <div
        className="absolute top-1/3 left-1/2 w-2 h-2 rotate-45 opacity-[0.55] animate-float"
        style={{ backgroundColor: "#92301a", animationDelay: "1s" }}
      />
    </div>
  )
}

export const WaveBackground = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute bottom-0 left-0 w-full h-32 opacity-[0.22]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="#92301a" className="animate-wave" />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-full h-24 opacity-[0.18]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M0,80 C400,20 800,100 1200,40 L1200,120 L0,120 Z" fill="#92301a" className="animate-wave-reverse" />
      </svg>
    </div>
  )
}

export const GridBackground = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(146, 48, 26, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(146, 48, 26, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  )
}

export const ParticleBackground = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full opacity-[0.10] animate-float"
          style={{
            backgroundColor: "#92301a",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  )
}

export const HexagonPattern = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]" viewBox="0 0 100 100">
        <defs>
          <pattern id="hexagons" x="0" y="0" width="20" height="17.32" patternUnits="userSpaceOnUse">
            <polygon
              points="10,1 18.66,6 18.66,16 10,21 1.34,16 1.34,6"
              fill="none"
              stroke="#92301a"
              strokeWidth="0.5"
              className="animate-pulse"
              style={{ animationDuration: "12s" }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  )
}

export const MorphingBlobs = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="absolute top-10 right-10 w-64 h-64 opacity-[0.15]" viewBox="0 0 200 200">
        <path
          d="M40,80 Q80,20 120,80 Q160,120 120,160 Q80,180 40,160 Q0,120 40,80 Z"
          fill="#92301a"
          className="animate-morph"
        />
      </svg>
      <svg className="absolute bottom-20 left-20 w-48 h-48 opacity-[0.18]" viewBox="0 0 200 200">
        <path
          d="M60,40 Q140,60 160,120 Q140,180 60,160 Q20,120 60,40 Z"
          fill="#92301a"
          className="animate-morph-reverse"
        />
      </svg>
    </div>
  )
}

export const NetworkDots = ({ className = "" }: { className?: string }) => {
  const dots = [
    { x: 20, y: 30, delay: 0 },
    { x: 60, y: 20, delay: 2 },
    { x: 80, y: 60, delay: 4 },
    { x: 40, y: 80, delay: 1 },
    { x: 70, y: 40, delay: 3 },
  ]

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 100 100">
        {/* Connection lines */}
        <line x1="20" y1="30" x2="60" y2="20" stroke="#92301a" strokeWidth="0.3" opacity="0.6" />
        <line x1="60" y1="20" x2="80" y2="60" stroke="#92301a" strokeWidth="0.3" opacity="0.6" />
        <line x1="80" y1="60" x2="40" y2="80" stroke="#92301a" strokeWidth="0.3" opacity="0.6" />
        <line x1="40" y1="80" x2="20" y2="30" stroke="#92301a" strokeWidth="0.3" opacity="0.6" />
        <line x1="70" y1="40" x2="60" y2="20" stroke="#92301a" strokeWidth="0.3" opacity="0.6" />
        <line x1="70" y1="40" x2="80" y2="60" stroke="#92301a" strokeWidth="0.3" opacity="0.6" />

        {/* Animated dots */}
        {dots.map((dot, i) => (
          <circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r="1.5"
            fill="#92301a"
            className="animate-pulse"
            style={{
              animationDelay: `${dot.delay}s`,
              animationDuration: "8s",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export const SpiralPattern = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute top-1/2 left-1/2 w-96 h-96 opacity-[0.08] -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 200 200"
      >
        <path
          d="M100,100 m-80,0 a80,80 0 1,1 160,0 a70,70 0 1,1 -140,0 a60,60 0 1,1 120,0 a50,50 0 1,1 -100,0 a40,40 0 1,1 80,0 a30,30 0 1,1 -60,0 a20,20 0 1,1 40,0 a10,10 0 1,1 -20,0"
          fill="none"
          stroke="#92301a"
          strokeWidth="1"
          className="animate-spin"
          style={{ animationDuration: "60s" }}
        />
      </svg>
    </div>
  )
}
