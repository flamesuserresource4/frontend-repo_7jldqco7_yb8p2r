import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-24 flex items-center overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0 -z-10 opacity-80">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark veil + animated gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full glass text-white/90">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400" />
            KI-gestützte MPU Vorbereitung
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight neon-text">
            Bestehe deine MPU mit deiner persönlichen KI
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-xl">
            Videogespräche mit KI-Coach, individuelle Checklisten und Trainings für deinen persönlichen Fall. Erhalte klare Auswertungen und erkenne deinen Fortschritt – jederzeit, überall.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex justify-center items-center rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-orange-400 text-white px-6 py-3 font-medium shadow hover:opacity-95 transition glow">
              Kostenlos testen
            </a>
            <a href="#features" className="inline-flex justify-center items-center rounded-full border border-white/20 text-white px-6 py-3 font-medium bg-white/5 backdrop-blur hover:bg-white/10">
              Mehr erfahren
            </a>
          </div>
          <div className="mt-6 text-sm text-white/60">Keine Kreditkarte nötig. Sofort startklar.</div>
        </div>
        <div className="lg:justify-self-end">
          <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[4/5] rounded-3xl overflow-hidden glass glow">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-fuchsia-500/10 to-orange-400/10" />
            <div className="relative p-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="mt-6 space-y-3 text-sm text-white/80">
                <p>• Live KI-Videogespräche mit realistischen Antworten</p>
                <p>• Fallbezogene Trainings mit Feedback</p>
                <p>• Checklisten je nach Fragestellung (Alkohol, Drogen, Punkte, etc.)</p>
                <p>• Messbare Fortschritte mit Auswertungen</p>
              </div>
              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/60">Nächster Termin</p>
                <p className="font-semibold text-white">Gespräch mit KI-Coach – Heute, 18:00</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-300">bereit</span>
                  <span className="text-xs text-white/60">15–20 Minuten</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Moving gradient orbs */}
      <div className="pointer-events-none absolute -z-10 inset-0 mix-blend-screen">
        <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full blur-3xl opacity-50 bg-gradient-to-tr from-purple-600 to-fuchsia-500 animate-pulse" />
        <div className="absolute right-10 top-40 h-56 w-56 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-cyan-500 to-blue-600 animate-[ping_10s_ease_infinite]" />
        <div className="absolute left-1/3 bottom-10 h-64 w-64 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-orange-500 to-amber-400 animate-[pulse_8s_ease_in_out_infinite]" />
      </div>
    </section>
  )
}
