export default function FAQ() {
  const faqs = [
    {
      q: 'Wie realistisch sind die KI-Videogespräche?',
      a: 'Unsere Dialoge sind auf MPU-typische Situationen trainiert. Du erhältst Rückfragen, Hinweise und Feedback in Echtzeit.'
    },
    {
      q: 'Brauche ich Vorkenntnisse?',
      a: 'Nein. Die App führt dich Schritt für Schritt – von der ersten Einschätzung bis zur Freigabe.'
    },
    {
      q: 'Sind meine Daten sicher?',
      a: 'Ja. Deine Daten werden verschlüsselt gespeichert und DSGVO-konform verarbeitet.'
    },
    {
      q: 'Kann ich kostenlos testen?',
      a: 'Ja. Du bekommst ein erstes KI-Gespräch, eine Basis-Checkliste und eine Einschätzung gratis.'
    }
  ]

  return (
    <section id="faq" className="relative py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Häufige Fragen</h2>
          <p className="mt-3 text-white/70">Alles Wichtige auf einen Blick.</p>
        </div>
        <div className="grid gap-4">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-2xl glass p-5 group">
              <summary className="cursor-pointer list-none text-left font-medium text-white/90 flex items-center justify-between">
                {f.q}
                <span className="ml-4 inline-block h-6 w-6 rounded-full bg-white/10 text-white/70 grid place-items-center group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-10 top-0 h-56 w-56 rounded-full blur-3xl opacity-20 bg-purple-600/40" />
        <div className="absolute right-20 bottom-10 h-72 w-72 rounded-full blur-3xl opacity-10 bg-orange-500/40" />
      </div>
    </section>
  )
}
