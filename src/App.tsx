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

    // Animação inicial - fade in dos elementos principais
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: -50 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
    .fromTo(subtitleRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 
      "-=0.5"
    )
    .fromTo(buttonRef.current, 
      { opacity: 0, scale: 0.8 }, 
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }, 
      "-=0.3"
    )

    // Animação dos cards - entrada escalonada
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.set(card, { opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 })
        
        tl.to(card, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }, `-=${0.6 - index * 0.1}`)
      }
    })

    // Animação de hover para os cards
    cardsRef.current.forEach((card) => {
      if (card) {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            duration: 0.1,
            ease: "power2.out"
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.1,
            ease: "power2.out"
          })
        })
      }
    })

    // Animação do botão
    if (buttonRef.current) {
      buttonRef.current.addEventListener('mouseenter', () => {
        gsap.to(buttonRef.current, {
          scale: 1.1,
          duration: 0.2,
          ease: "power2.out"
        })
      })

      buttonRef.current.addEventListener('mouseleave', () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out"
        })
      })
    }

  }, [])

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

  const handleCardClick = (cardType: string) => {
    // Animação de click
    const clickedCard = cardsRef.current.find(card => 
      card.querySelector('.text-card')?.textContent?.includes(cardType)
    )

    if(cardType == "Respiratória"){
        navigate('fisio-resp')
    }
    if(cardType == "Esportiva"){
        navigate('fisio-esp')
    }
    if(cardType == "Primeiros"){
        navigate('pri-s')
    }
    if(cardType == "Domiciliar"){
        navigate('fisio-domi')
    }
    if(cardType == "Reumatológica"){
      navigate('fisio-reum-onco')
    }
    
    if (clickedCard) {
      gsap.to(clickedCard, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      })
    }
  }

  return (
    <main 
      ref={mainRef} 
      className='min-h-screen bg-gradient-to-br from-green-50 via-emerald-100 to-teal-100 relative overflow-hidden'
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-teal-200/25 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="text-center mb-16">
          <h1 
            ref={titleRef}
            className='text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent drop-shadow-lg mb-6'
          >
            SosFisio
          </h1>
          
          <p 
            ref={subtitleRef}
            className='text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium'
          >
            Cuidar do movimento é cuidar da vida. Explore conteúdos que inspiram saúde e bem-estar.
          </p>

          <button 
            ref={buttonRef}
            className='mt-10 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105'
            onClick={() => {
              containerRef.current?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
              })
            }}
          >
            <span className='text-lg'>Explore artigos abaixo</span>
          </button>
        </div>

        <div ref={containerRef} className='w-full max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Card 1 - Fisioterapia Respiratória */}
            <div 
              ref={addToRefs}
              className='group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-green-100 hover:border-green-300 cursor-pointer'
              onClick={() => handleCardClick('Respiratória')}
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className='text-card text-white text-2xl md:text-3xl font-bold text-center'>
                  Fisioterapia Respiratória
                </p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-center">
                  Técnicas especializadas para melhorar a função pulmonar e respiratória
                </p>
              </div>
            </div>
            
            {/* Card 2 - Fisioterapia Esportiva */}
            <div 
              ref={addToRefs}
              className='group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-teal-100 hover:border-teal-300 cursor-pointer'
              onClick={() => handleCardClick('Esportiva')}
            >
              <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className='text-card text-white text-2xl md:text-3xl font-bold text-center'>
                  Fisioterapia Esportiva
                </p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-center">
                  Prevenção e reabilitação de lesões em atletas e praticantes de esportes
                </p>
              </div>
            </div>

            {/* Card 3 - Primeiros Socorros */}
            <div 
              ref={addToRefs}
              className='group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-emerald-100 hover:border-emerald-300 cursor-pointer'
              onClick={() => handleCardClick('Primeiros')}
            >
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className='text-card text-white text-2xl md:text-3xl font-bold text-center'>
                  Primeiros Socorros
                </p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-center">
                  Conhecimentos essenciais para situações de emergência e atendimento inicial
                </p>
              </div>
            </div>
            
            {/* Card 4 - Fisioterapia Domiciliar */}
            <div 
              ref={addToRefs}
              className='group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-cyan-100 hover:border-cyan-300 cursor-pointer'
              onClick={() => handleCardClick('Domiciliar')}
            >
              <div className="bg-gradient-to-r from-cyan-500 to-teal-600 p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 0v1a1 1 0 102 0V3a2 2 0 012 2v6.5A1.5 1.5 0 0112.5 13H12v2a1 1 0 11-2 0v-2h-.5A1.5 1.5 0 018 11.5V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className='text-card text-white text-2xl md:text-3xl font-bold text-center'>Fisioterapia Domiciliar</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-center">Atendimento em casa: conforto, segurança e personalização do cuidado</p>
              </div>
            </div>

            <div
              ref={addToRefs}
              className='group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-rose-100 hover:border-rose-300 cursor-pointer'
              onClick={() => handleCardClick('Reumatológica')}
            >
              <div className="bg-gradient-to-r from-rose-500 to-orange-600 p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    </svg>
                  </div>
                </div>
                <p className='text-card text-white text-2xl md:text-3xl font-bold text-center'>
                  Fisioterapia Reumatológica e Oncológica
                </p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-center">
                  Reabilitação em câncer e doenças reumáticas: alívio da dor, mobilidade e qualidade de vida.
                </p>
              </div>
            </div>






            
          </div>
        </div>
      </div>
    </main>
  )
}