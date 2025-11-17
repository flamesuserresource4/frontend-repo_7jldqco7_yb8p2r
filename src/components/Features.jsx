import { Video, CheckCircle2, ListTodo, BarChart3, Shield, Mic } from 'lucide-react'

const items = [
  {
    icon: Video,
    title: 'KI-Videogespräche',
    desc: 'Realistische Gespräche mit einem empathischen KI-Coach – jederzeit verfügbar.'
  },
  {
    icon: ListTodo,
    title: 'Individuelle Checklisten',
    desc: 'Schritt-für-Schritt-Checklisten je nach Fragestellung: Alkohol, Drogen, Punkte, Medizinisches.'
  },
  {
    icon: Mic,
    title: 'Training deines Falls',
    desc: 'Übungen zu deiner Vorgeschichte, Einsicht, Verhalten und Zukunftsstrategie mit direkten Hinweisen.'
  },
  {
    icon: BarChart3,
    title: 'Auswertungen & Fortschritt',
    desc: 'Klares Feedback, Score-Entwicklung und Empfehlungen – du weißt immer, wo du stehst.'
  },
  {
    icon: CheckCircle2,
    title: 'MPU-Prüfungsmodus',
    desc: 'Simulation der Untersuchung mit Zeitlimit, typischen Fragen und Bewertung.'
  },
  {
    icon: Shield,
    title: 'Datenschutz made in EU',
    desc: 'Verschlüsselte Speicherung, DSGVO-konform, volle Kontrolle über deine Daten.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="absolute inset-x-0 -top-24 -z-0 blur-3xl opacity-30 pointer-events-none" aria-hidden>
        <div className="mx-auto h-48 w-3/4 rounded-full bg-gradient-to-r from-purple-300 via-fuchsia-300 to-orange-300" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Alles, was du für die MPU brauchst</h2>
          <p className="mt-3 text-gray-600">Strukturiert, persönlich, verständlich – geführt von KI.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 p-6 bg-white hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-orange-400 text-white flex items-center justify-center shadow-lg">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
