export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 opacity-60 bg-gradient-to-br from-purple-600/30 via-fuchsia-500/30 to-orange-400/30" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Bereit für den nächsten Schritt?</h2>
            <p className="mt-3 text-white/80">Starte kostenlos, führe dein erstes KI-Gespräch und erhalte eine klare Einschätzung deiner Situation.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex justify-center items-center rounded-full bg-white text-gray-900 px-6 py-3 font-medium shadow hover:bg-white/90 transition">
                Kostenlos testen
              </a>
              <a href="#pricing" className="inline-flex justify-center items-center rounded-full border border-white/20 text-white px-6 py-3 font-medium bg-white/10 backdrop-blur hover:bg-white/20">
                Preise ansehen
              </a>
            </div>
          </div>

          <div className="rounded-3xl glass p-6">
            <form className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Vorname" className="w-full rounded-xl bg-white/10 placeholder-white/70 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/40" />
              <input type="email" placeholder="E-Mail" className="w-full rounded-xl bg-white/10 placeholder-white/70 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/40" />
              <input type="text" placeholder="Fragestellung (z.B. Alkohol)" className="w-full sm:col-span-2 rounded-xl bg-white/10 placeholder-white/70 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/40" />
              <button type="button" className="sm:col-span-2 inline-flex justify-center items-center rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-orange-400 text-white px-6 py-3 font-semibold hover:opacity-95 transition glow">
                Zugang erhalten
              </button>
            </form>
            <p className="mt-3 text-sm text-white/70">Mit Anmeldung stimmst du unseren Nutzungsbedingungen und Datenschutzbestimmungen zu.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
