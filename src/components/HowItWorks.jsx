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
    <section id="how" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">So funktioniert's</h2>
          <p className="mt-3 text-gray-600">Klarer Ablauf – echte Sicherheit.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-orange-400 text-white flex items-center justify-center shadow-lg">
                <Icon size={22} />
              </div>
              <div className="mt-4 text-sm text-gray-500">Schritt {i + 1}</div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
