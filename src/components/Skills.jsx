import { useInView } from '../hooks/useInView'
import { useLang } from '../LangContext'
import { Users, Server } from 'lucide-react'
import prototypeSvg from '../assets/prototype.svg'

const dev = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`

const skills = [
  // Frontend
  { name: 'React', icons: [dev('react')] },
  { name: 'JavaScript', icons: [dev('javascript')] },
  { name: 'HTML / CSS', icons: [dev('html5'), dev('css3')] },
  { name: 'Tailwind CSS', icons: [dev('tailwindcss')] },
  // Backend
  { name: 'Laravel', icons: [dev('laravel')] },
  { name: 'PHP', icons: [dev('php')] },
  { name: 'Node.js', icons: [dev('nodejs')] },
  { name: 'MySQL', icons: [dev('mysql')] },
  // DevOps & Infra
  { name: 'Docker', icons: [dev('docker')] },
  { name: 'Git & GitHub', icons: [dev('git'), dev('github')], invert: [false, true] },
  { name: 'Linux / SSH', Icon: Server },
  { name: 'Google Analytics', icons: [`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg`] },
  // Design & UX
  { name: 'Figma', icons: [dev('figma')] },
  { name: 'Adobe CC', icons: [dev('photoshop'), dev('illustrator')] },
  { name: 'UX Research', Icon: Users },
  { name: 'Prototyping', svg: prototypeSvg },
]

export default function Skills() {
  const [ref, inView] = useInView()
  const { t } = useLang()
  const s = t.skills
  return (
    <section id="skills" ref={ref} className="py-32 px-6">
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-secondary text-sm font-medium tracking-widest uppercase mb-3">{s.label}</p>
        <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-12">
          {s.heading} <span className="text-gradient">{s.highlight}</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map(({ name, icons, Icon, svg, invert }, i) => (
            <div
              key={name}
              style={{ transitionDelay: `${i * 60}ms` }}
              className={`flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10
                hover:border-secondary/50 hover:-translate-y-1 transition-all duration-500
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              {icons ? (
                <div className="flex items-center gap-2 h-10">
                  {icons.map((src, idx) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      loading="lazy"
                      className={`${icons.length > 1 ? 'w-7 h-7' : 'w-10 h-10'} ${Array.isArray(invert) ? (invert[idx] ? 'brightness-0 invert' : '') : (invert ? 'brightness-0 invert' : '')}`}
                    />
                  ))}
                </div>
              ) : svg ? (
                <img src={svg} alt="" className="w-10 h-10" />
              ) : (
                <Icon className="w-10 h-10 text-secondary" strokeWidth={1.5} />
              )}
              <span className="text-sm font-medium text-white text-center">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
