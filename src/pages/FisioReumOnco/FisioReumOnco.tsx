import { useEffect, useRef } from "react"
import gsap from "gsap"
import ArticleCard from "../../components/Article/Article"

export default function FisioReumOnco() {
  const tl = gsap.timeline();
  const container_img = useRef<HTMLDivElement>(null)
  const title = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    tl.from(title.current, {
      y: "25vh",
      opacity: 0.5
    })
    tl.to(title.current, {
      y: "0",
      opacity: 1,
      duration: 0.4
    })
  }, [tl])

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-orange-50">
      {/* Hero Section */}
      <div
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/originals/card-6.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        ref={container_img}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/60 via-red-800/50 to-orange-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-rose-300/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-orange-300/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-300/15 rounded-full blur-lg"></div>

        <h1
          className="relative z-10 text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center px-6 drop-shadow-2xl"
          ref={title}
        >
          Fisioterapia
          <span className="block text-orange-300 mt-2">Reumatológica e Oncológica</span>
        </h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Card 1 - Fisioterapia Oncológica */}
          <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-rose-100 hover:border-rose-300">
            <div className="bg-gradient-to-r from-rose-500 to-red-600 p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Fisioterapia Oncológica
              </h2>
            </div>
            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                A Fisioterapia Oncológica oferece reabilitação para pacientes com câncer — reduz fadiga, melhora força, mobilidade e bem-estar durante e após tratamentos oncológicos. Atua na recuperação funcional, controle da dor e melhora da qualidade de vida.
              </p>
            </div>
          </div>

          {/* Card 2 - Fisioterapia Reumatológica */}
          <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-orange-100 hover:border-orange-300">
            <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Fisioterapia Reumatológica
              </h2>
            </div>
            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                A Fisioterapia Reumatológica atua no manejo de dor, rigidez e limitação funcional em doenças reumáticas como artrite, artrose e esclerose sistêmica, utilizando exercícios terapêuticos, educação postural e recursos manuais para preservar função e qualidade de vida.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="bg-gradient-to-r from-rose-800 via-red-800 to-orange-800 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg">
              Artigos
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-orange-400 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-200 mt-8 max-w-2xl mx-auto mb-8">
              Pesquisas e revisões sobre Fisioterapia Oncológica e Reumatológica
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ArticleCard 
              title="Fisioterapia em Oncologia e nas Ações de Controle do Câncer"
              summary="Estudo sobre o papel da fisioterapia em programas de controle e reabilitação oncológica, com foco em qualidade de vida e funcionalidade dos pacientes com câncer."
              link="#"
              category="geral"
              author="BERGMANN, A. et al."
              date="2025"
              downloadUrl="../../../artigos/fisioterapia_reumatologica_oncologica/fisioterapia_em_oncologia.pdf"
            />
            <ArticleCard 
              title="Fisioterapia oncológica e qualidade de vida em cuidados paliativos"
              summary="Revisão da literatura sobre os efeitos da fisioterapia oncológica na qualidade de vida de pacientes em cuidados paliativos."
              link="https://jhsc.emnuvens.com.br/revista/article/view/35?utm_source"
              category="geral"
              author="QUARESMA, E. A. da S.; SANTANA, A.; JARDIM, R. F."
              date="2023"
            />
            <ArticleCard 
              title="Abordagem integral na fisioterapia oncológica"
              summary="Análise dos aspectos biopsicossociais e funcionais da atuação fisioterapêutica no cuidado integral ao paciente oncológico."
              link="https://educapes.capes.gov.br/bitstream/capes/1130945/3/ABORDAGEM%20INTEGRAL%20NA%20FISIOTERAPIA%20ONCOLÓGICA.pdf?utm_source"
              category="geral"
              author="SANTOS, M. de O. et al."
              date="2024"
            />
            <ArticleCard 
              title="Physical activity guidelines in oncology: A systematic review"
              summary="Revisão sistemática internacional que apresenta diretrizes para atividade física em pacientes oncológicos, destacando segurança e benefícios funcionais."
              link="https://www.sciencedirect.com/science/article/pii/S1040842825001064?utm_source"
              category="geral"
              author="AVANCINI, A. et al."
              date="2025"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
