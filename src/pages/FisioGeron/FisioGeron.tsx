import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ArticleCard from "../../components/Article/Article";

export default function FisioDomi(){
    const tl = gsap.timeline();
    const conteiner_img = useRef<HTMLDivElement>(null)
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
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
            {/* Hero Section with Background Image */}
            <div 
                className="relative h-screen flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: 'url(/originals/card-5.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                ref={conteiner_img}
            >
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 via-indigo-800/50 to-blue-900/60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Animated background elements */}
                <div className="absolute top-20 left-20 w-32 h-32 bg-purple-300/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-300/20 rounded-full blur-2xl animate-bounce"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-300/15 rounded-full blur-lg"></div>

                <h1 
                    className="relative z-10 text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center px-6 drop-shadow-2xl"
                    ref={title}
                >
                    Fisioterapia
                    <span className="block text-purple-300 mt-2">Gerontológica</span>
                </h1>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* Card 1 */}
                    <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-purple-100 hover:border-purple-300">
                        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-8">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                O que é Fisioterapia Gerontológica?
                            </h2>
                        </div>
                        <div className="p-8">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                A Fisioterapia Gerontológica atua na promoção da saúde e na reabilitação de pessoas idosas, com foco em mobilidade, prevenção de quedas, recuperação funcional e manutenção da independência nas atividades diárias.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-indigo-100 hover:border-indigo-300">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Para quem é indicada?
                            </h2>
                        </div>
                        <div className="p-8">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Indicada para pessoas idosas que necessitam de cuidados especializados para manter ou recuperar a funcionalidade, mobilidade e qualidade de vida durante o processo de envelhecimento.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-blue-100 hover:border-blue-300">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Benefícios
                            </h2>
                        </div>
                        <div className="p-8">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Intervenções exercíciocêntricas, reabilitação domiciliar e estratégias multidisciplinares melhoram qualidade de vida e diminuem morbidade associada ao envelhecimento.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-purple-100 hover:border-purple-300">
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Principais abordagens
                            </h2>
                        </div>
                        <div className="p-8">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Exercícios terapêuticos específicos para idosos, treino de equilíbrio e coordenação, prevenção de quedas, fortalecimento muscular, melhoria da flexibilidade e manutenção da autonomia funcional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Articles Section */}
            <div className="bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-800 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg">
                            Artigos
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full"></div>
                        <p className="text-xl text-gray-200 mt-8 max-w-2xl mx-auto mb-8">
                            Conteúdos sobre fisioterapia gerontológica e cuidados com idosos
                        </p>
                    </div>
                </div>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ArticleCard 
                            title="Atuação fisioterapêutica na prevenção de quedas em idosos"
                            summary="Estratégias e intervenções fisioterapêuticas específicas para reduzir o risco de quedas em pessoas idosas, promovendo segurança e independência."
                            link="https://bjihs.emnuvens.com.br/bjihs/article/view/1141"
                            category="geral"
                            author="PARENTE, L. G.; LIVRAMENTO, R. A."
                        />
                        <ArticleCard 
                            title="Capacidade funcional, quedas e desempenho físico de idosos"
                            summary="Estudo descritivo sobre a relação entre capacidade funcional e quedas em idosos atendidos em unidades de saúde."
                            link="https://revistaeixo.ifb.edu.br"
                            category="geral"
                            author="GIULIANI, F. N. G."
                        />
                        <ArticleCard 
                            title="Impacto da fisioterapia domiciliar na qualidade de vida de idosos"
                            summary="Revisão sobre os benefícios da fisioterapia domiciliar para melhoria da qualidade de vida e funcionalidade em pessoas idosas."
                            link="https://ojs.editoracognitus.com.br"
                            category="geral"
                            author="LANGOWSKI, D. S."
                        />
                        <ArticleCard 
                            title="The Effects of Exercise Intervention in Older Adults With and Without Sarcopenia"
                            summary="Revisão de 2025 sobre os efeitos de intervenções com exercícios em idosos com e sem sarcopenia, analisando benefícios funcionais."
                            link="https://www.mdpi.com/journal/sports"
                            category="geral"
                            author="CABROLIER-MOLINA, J. et al."
                        />
                        <ArticleCard 
                            title="Physiotherapist-led, exercise-based telerehabilitation for older adults"
                            summary="Revisão sistemática sobre telereabilitação baseada em exercícios conduzida por fisioterapeutas para pessoas idosas."
                            link="https://academic.oup.com/ageing"
                            category="geral"
                            author="WICKS, M. et al."
                        />
                        <ArticleCard 
                            title="ATUAÇÃO FISIOTERAPÊUTICA NA PREVENÇÃO DE QUEDAS EM IDOSOS"
                            summary="O envelhecimento pode ser conceituado como um processo progressivo, subjetivo,
multifatorial, que reduz a reserva funcional de órgãos e dispositivos . Este processo é
caracterizado por uma série de alterações morfológicas, fisiológicas, bioquímicas e
psicológicas."
                            link="#"
                            category="geral"
                            author="Luara Gomes Parente e Rosileide Alves Livramento"
                            downloadUrl='../../../artigos/fisioterapia gerontologica/tem+que+submeter+2+(2)+(1).pdf'
                        
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}










// Faça mais uma  pagina de fisiologia reumatologica e oncologica

// conteudo:

// A Fisioterapia Oncológica oferece reabilitação para pacientes com câncer — reduz fadiga, melhora força, mobilidade e bem-estar durante e após tratamentos oncológicos. A Fisioterapia Reumatológica atua no manejo de dor, rigidez e limitação funcional em doenças reumáticas (artrite, artrose, esclerose sistêmica), combinando exercícios, educação e recursos manuais para preservar função e qualidade de vida.


// Artigos:

// BERGMANN, A. et al. Fisioterapia em Oncologia e nas Ações de Controle do Câncer. Revista Brasileira de Cancerologia (RBC/INCA), 2025. PDF disponível em: 
// Revista Brasileira de Cancerologia
//  vou te mandar ele em pdf 

// QUARESMA, E. A. da S.; SANTANA, A.; JARDIM, R. Fisioterapia oncológica e qualidade de vida em cuidados paliativos: revisão da literatura. JHSC (revista), 2023. Disponível em: 
// https://jhsc.emnuvens.com.br/revista/article/view/35?utm_source

// SANTOS, M. de O. et al. Abordagem integral na fisioterapia oncológica. Cedigma / Revista (capítulo/artigo), 2024. PDF disponível em: 
//  https://educapes.capes.gov.br/bitstream/capes/1130945/3/ABORDAGEM%20INTEGRAL%20NA%20FISIOTERAPIA%20ONCOLÓGICA.pdf?utm_source

// AVANCINI, A. et al. Physical activity guidelines in oncology: A systematic review (2025). (Journal: review article, 2025). Disponível em: 
// https://www.sciencedirect.com/science/article/pii/S1040842825001064?utm_source