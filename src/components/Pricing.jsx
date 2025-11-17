export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">Einfaches, faires Preismodell</h2>
          <p className="mt-3 text-white/70">Starte kostenlos, upgrade wenn du bereit bist.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl glass p-6">
            <h3 className="text-lg font-semibold">Kostenlos</h3>
            <p className="mt-2 text-white/70">Ideal zum Kennenlernen</p>
            <p className="mt-6 text-4xl font-bold">0€</p>
            <ul className="mt-6 space-y-2 text-white/70">
              <li>• 1 KI-Videogespräch</li>
              <li>• Basis-Checkliste</li>
              <li>• Erste Einschätzung</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full justify-center rounded-full border border-white/20 px-4 py-2 font-medium bg-white/5 hover:bg-white/10">Jetzt starten</a>
          </div>

          <div className="rounded-2xl p-6 border-2 border-purple-500/60 bg-gradient-to-b from-purple-500/10 to-white/5 glow">
            <h3 className="text-lg font-semibold">Pro</h3>
            <p className="mt-2 text-white/70">Meistgewählt</p>
            <p className="mt-6 text-4xl font-bold">39€ <span className="text-base font-medium text-white/60">/ Monat</span></p>
            <ul className="mt-6 space-y-2 text-white/70">
              <li>• Unbegrenzte KI-Gespräche</li>
              <li>• Alle Checklisten & Trainings</li>
              <li>• Auswertungen & Prüfungsmodus</li>
              <li>• Fortschrittsplan</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full justify-center rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-orange-400 text-white px-4 py-2 font-medium glow">Pro holen</a>
          </div>

          <div className="rounded-2xl glass p-6">
            <h3 className="text-lg font-semibold">Coaching+</h3>
            <p className="mt-2 text-white/70">Mit Expert:in</p>
            <p className="mt-6 text-4xl font-bold">149€ <span className="text-base font-medium text-white/60">/ Monat</span></p>
            <ul className="mt-6 space-y-2 text-white/70">
              <li>• Alles aus Pro</li>
              <li>• 2x Live-Coaching/Monat</li>
              <li>• Individuelle Fallprüfung</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full justify-center rounded-full border border-white/20 px-4 py-2 font-medium bg-white/5 hover:bg-white/10">Kontakt aufnehmen</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/4 h-56 w-56 rounded-full blur-3xl opacity-20 bg-fuchsia-500/40" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full blur-3xl opacity-20 bg-cyan-500/40" />
      </div>
    </section>
  )
}
