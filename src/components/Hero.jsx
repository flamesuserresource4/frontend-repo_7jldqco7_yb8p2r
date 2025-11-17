import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-24 flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-purple-50 text-purple-700 ring-1 ring-purple-200">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400" />
            KI-gestützte MPU Vorbereitung
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Bestehe deine MPU mit deiner persönlichen KI
          </h1>
          <p className="mt-5 text-lg text-gray-700 max-w-xl">
            Videogespräche mit KI-Coach, individuelle Checklisten und Trainings für deinen persönlichen Fall. Erhalte klare Auswertungen und erkenne deinen Fortschritt – jederzeit, überall.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex justify-center items-center rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-orange-400 text-white px-6 py-3 font-medium shadow hover:opacity-95 transition">
              Kostenlos testen
            </a>
            <a href="#features" className="inline-flex justify-center items-center rounded-full border border-gray-300 text-gray-800 px-6 py-3 font-medium bg-white/70 backdrop-blur hover:bg-white">
              Mehr erfahren
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-600">Keine Kreditkarte nötig. Sofort startklar.</div>
        </div>
        <div className="lg:justify-self-end">
          <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white/60 backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/60 via-fuchsia-100/40 to-orange-100/40" />
            <div className="relative p-6">
              <div className="flex items-center justify-between">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="mt-6 space-y-3 text-sm text-gray-700">
                <p>• Live KI-Videogespräche mit realistischen Antworten</p>
                <p>• Fallbezogene Trainings mit Feedback</p>
                <p>• Checklisten je nach Fragestellung (Alkohol, Drogen, Punkte, etc.)</p>
                <p>• Messbare Fortschritte mit Auswertungen</p>
              </div>
              <div className="mt-6 rounded-xl border border-gray-200 bg-white/70 p-4">
                <p className="text-xs text-gray-500">Nächster Termin</p>
                <p className="font-semibold text-gray-900">Gespräch mit KI-Coach – Heute, 18:00</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">bereit</span>
                  <span className="text-xs text-gray-500">15–20 Minuten</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
