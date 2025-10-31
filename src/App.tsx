import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './App.css'
import { useNavigate } from 'react-router'

export default function App() {
  const mainRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(titleRef.current,{ opacity: 0, y: -50 },{ opacity: 1, y: 0, duration: 1, ease: "power2.out" })
      .fromTo(subtitleRef.current,{ opacity: 0, y: 30 },{ opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.5")
      .fromTo(buttonRef.current,{ opacity: 0, scale: 0.8 },{ opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }, "-=0.3")

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.set(card, { opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 })
        tl.to(card, { opacity: 1, x: 0, y: 0, duration: 0.8, ease: "power2.out" }, `-=${0.6 - index * 0.1}`)
      }
    })
  }, [])

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

  const handleCardClick = (type: string) => {
    const routes: Record<string,string> = {
      "Respiratória":"fisio-resp",
      "Esportiva":"fisio-esp",
      "Primeiros":"pri-s",
      "Domiciliar":"fisio-domi",
      "Reumatológica":"fisio-reum-onco",
    }
    navigate(routes[type])
  }

  return (
    <main 
      ref={mainRef} 
      className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-100 to-teal-100 relative overflow-x-hidden"
      style={{
        minHeight: '100vh',
        height: 'auto',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
      }}
    >

      {/* Elementos decorativos */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-green-200/30 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-52 h-52 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center px-4 py-16">
        
        <h1 
          ref={titleRef}
          className="text-4xl md:text-7xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent drop-shadow mb-6 text-center"
        >
          SosFisio
        </h1>

        <p 
          ref={subtitleRef}
          className="text-lg md:text-lg text-gray-700 max-w-lg mx-auto text-center font-medium leading-relaxed"
        >
          Cuidar do movimento é cuidar da vida. Explore conteúdos que inspiram saúde e bem-estar.
        </p>

        <button
          ref={buttonRef}
          className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl transition-transform hover:scale-105"
          onClick={() => containerRef.current?.scrollIntoView({ behavior: "smooth" })}
        >
          Explore artigos abaixo
        </button>

        {/* Cards */}
        <div ref={containerRef} className="w-full max-w-5xl mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-2">
            
            {[
              { title:"Fisioterapia Respiratória", desc:"Melhora da função pulmonar e respiratória", color:"from-green-500 to-emerald-600", key:"Respiratória", hover:"hover:border-green-300" },
              { title:"Fisioterapia Esportiva", desc:"Prevenção e reabilitação para atletas", color:"from-teal-500 to-cyan-600", key:"Esportiva", hover:"hover:border-cyan-300" },
              { title:"Primeiros Socorros", desc:"Essencial para emergências e atendimento inicial", color:"from-emerald-500 to-green-600", key:"Primeiros", hover:"hover:border-emerald-300" },
              { title:"Fisioterapia Gerontológica", desc:"garantindo um envelhecimento mais ativo, seguro e independente", color:"from-cyan-500 to-teal-600", key:"Domiciliar", hover:"hover:border-teal-300" },
              { title:"Fisioterapia Reumatológica e Oncológica", desc:"Reabilitação em câncer e doenças reumáticas", color:"from-rose-500 to-orange-600", key:"Reumatológica", hover:"hover:border-rose-300" },
            ].map((card) => (
              <div 
                key={card.key}
                ref={addToRefs}
                onClick={() => handleCardClick(card.key)}
                className={`group cursor-pointer bg-white/90 rounded-3xl shadow-xl border border-transparent ${card.hover} hover:shadow-2xl transition-all overflow-hidden`}
              >
                <div className={`p-8 bg-gradient-to-r ${card.color}`}>
                  <p className="text-white text-2xl font-bold text-center">{card.title}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-center">{card.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </main>
  )
}
