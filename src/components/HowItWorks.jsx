import { Play, MessageSquare, ClipboardCheck, Award } from 'lucide-react'

const steps = [
  {
    icon: Play,
    title: 'Sofort starten',
    desc: 'Account anlegen und eine erste kurze Einschätzung erhalten.'
  },
  {
    icon: MessageSquare,
    title: 'KI-Videogespräch',
    desc: 'Führe ein realistisches Gespräch mit deiner KI – inklusive Rückfragen.'
  },
  {
    icon: ClipboardCheck,
    title: 'Checklisten & Training',
    desc: 'Arbeite personalisierte Aufgaben und Übungen zu deinem Fall durch.'
  },
  {
    icon: Award,
    title: 'Auswertung & Freigabe',
    desc: 'Erhalte ein klares Bild deines Fortschritts und wann du bereit bist.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">So funktioniert's</h2>
          <p className="mt-3 text-white/70">Klarer Ablauf – echte Sicherheit.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="rounded-2xl glass p-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-orange-400 text-white flex items-center justify-center shadow-lg glow">
                <Icon size={22} />
              </div>
              <div className="mt-4 text-sm text-white/60">Schritt {i + 1}</div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* floating accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full blur-3xl opacity-30 bg-purple-600/40 animate-[pulse_7s_ease-in-out_infinite]" />
        <div className="absolute right-24 bottom-0 h-52 w-52 rounded-full blur-3xl opacity-20 bg-orange-500/40 animate-[ping_12s_linear_infinite]" />
      </div>
    </section>
  )
}
