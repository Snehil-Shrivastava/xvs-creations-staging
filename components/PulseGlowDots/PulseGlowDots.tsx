import './PulseGlowDots.css'

const PulseGlowDots = () => {
  return (
    <div
        className="absolute inset-0 z-[15]"
        style={{
          maskImage:
            "radial-gradient(920px circle at center, #000000, transparent)",
        }}
      >
        <div className="glow-dot-1 blur-xs"></div>
        <div className="glow-dot-2 blur-xs"></div>
        <div className="glow-dot-3 blur-xs"></div>
        <div className="glow-dot-4 blur-xs"></div>
        <div className="glow-dot-5 blur-xs"></div>
        <div className="glow-dot-6 blur-xs"></div>
        <div className="glow-dot-7 blur-xs"></div>
        <div className="glow-dot-8 blur-xs"></div>
        <div className="glow-dot-9 blur-xs"></div>
        <div className="glow-dot-10 blur-xs"></div>
      </div>
  )
}

export default PulseGlowDots