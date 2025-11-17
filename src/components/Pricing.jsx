export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Einfaches, faires Preismodell</h2>
          <p className="mt-3 text-gray-600">Starte kostenlos, upgrade wenn du bereit bist.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-200 p-6 bg-white">
            <h3 className="text-lg font-semibold text-gray-900">Kostenlos</h3>
            <p className="mt-2 text-gray-600">Ideal zum Kennenlernen</p>
            <p className="mt-6 text-4xl font-bold">0€</p>
            <ul className="mt-6 space-y-2 text-gray-600">
              <li>• 1 KI-Videogespräch</li>
              <li>• Basis-Checkliste</li>
              <li>• Erste Einschätzung</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full justify-center rounded-full border border-gray-300 px-4 py-2 font-medium">Jetzt starten</a>
          </div>

          <div className="rounded-2xl border-2 border-purple-500 p-6 bg-gradient-to-b from-purple-50 to-white">
            <h3 className="text-lg font-semibold text-gray-900">Pro</h3>
            <p className="mt-2 text-gray-600">Meistgewählt</p>
            <p className="mt-6 text-4xl font-bold">39€ <span className="text-base font-medium text-gray-600">/ Monat</span></p>
            <ul className="mt-6 space-y-2 text-gray-600">
              <li>• Unbegrenzte KI-Gespräche</li>
              <li>• Alle Checklisten & Trainings</li>
              <li>• Auswertungen & Prüfungsmodus</li>
              <li>• Fortschrittsplan</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full justify-center rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-orange-400 text-white px-4 py-2 font-medium">Pro holen</a>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 bg-white">
            <h3 className="text-lg font-semibold text-gray-900">Coaching+</h3>
            <p className="mt-2 text-gray-600">Mit Expert:in</p>
            <p className="mt-6 text-4xl font-bold">149€ <span className="text-base font-medium text-gray-600">/ Monat</span></p>
            <ul className="mt-6 space-y-2 text-gray-600">
              <li>• Alles aus Pro</li>
              <li>• 2x Live-Coaching/Monat</li>
              <li>• Individuelle Fallprüfung</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full justify-center rounded-full border border-gray-300 px-4 py-2 font-medium">Kontakt aufnehmen</a>
          </div>
        </div>
      </div>
    </section>
  )
}
