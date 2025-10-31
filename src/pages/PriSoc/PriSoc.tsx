import { useEffect, useRef } from "react"
import gsap from "gsap"
import ArticleCard from "../../components/Article/Article";

export default function PriSoc() {
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
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
            {/* Hero Section with Background Image */}
            <div 
                className="relative h-screen flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: 'url(/originals/card3.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                ref={conteiner_img}
            >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 via-orange-800/60 to-red-900/70"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Animated background elements */}
                <div className="absolute top-20 left-20 w-32 h-32 bg-red-300/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-32 right-32 w-48 h-48 bg-orange-300/20 rounded-full blur-2xl animate-bounce"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-300/15 rounded-full blur-lg"></div>
                
                <h1 
                    className="relative z-10 text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center px-6 drop-shadow-2xl"
                    ref={title}
                >
                    Primeiros
                    <span className="block text-red-300 mt-2">Socorros</span>
                </h1>
                
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* Card 1 - Vermelho emergência */}
                    <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-red-100 hover:border-red-300">
                        <div className="bg-gradient-to-r from-red-500 to-red-600 p-8">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                O que são Primeiros Socorros?
                            </h2>
                        </div>
                        <div className="p-8">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Primeiros socorros são os cuidados imediatos prestados a uma pessoa ferida ou que adoeceu subitamente, antes da chegada do atendimento médico especializado. O objetivo é preservar a vida, prevenir o agravamento das lesões e promover a recuperação da vítima.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 - Laranja urgência */}
                    <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-orange-100 hover:border-orange-300">
                        <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-8">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Por que aprender?
                            </h2>
                        </div>
                        <div className="p-8">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                O conhecimento em primeiros socorros pode fazer a diferença entre a vida e a morte. Saber como agir nos primeiros minutos de uma emergência pode salvar vidas, reduzir o tempo de recuperação e minimizar as sequelas de acidentes e emergências médicas.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 - Vermelho escuro */}
                    <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-rose-100 hover:border-rose-300">
                        <div className="bg-gradient-to-r from-rose-500 to-pink-600 p-8">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Princípios Básicos
                            </h2>
                        </div>
                        <div className="p-8">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Os princípios fundamentais incluem: avaliar a cena e garantir segurança, verificar consciência e respiração, chamar ajuda especializada (SAMU 192), controlar hemorragias, imobilizar fraturas e manter a vítima aquecida e calma até a chegada do socorro.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 - Coral emergência */}
                    <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-red-100 hover:border-red-300">
                        <div className="bg-gradient-to-r from-red-600 to-rose-600 p-8">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Situações Comuns
                            </h2>
                        </div>
                        <div className="p-8">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                As situações mais comuns incluem: parada cardiorrespiratória (RCP), engasgo (manobra de Heimlich), ferimentos e hemorragias, queimaduras, fraturas, desmaios, convulsões, intoxicações e acidentes de trânsito. Cada situação requer técnicas específicas de atendimento.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Articles Section */}
            <div className="bg-gradient-to-r from-red-800 via-orange-800 to-red-800 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg">
                            Artigos
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-orange-400 mx-auto rounded-full"></div>
                        <p className="text-xl text-gray-200 mt-8 max-w-2xl mx-auto mb-8">
                            Explore nossos artigos especializados em primeiros socorros e emergências
                        </p>
                    </div>
                </div>
                {/* Artigos irão ser adicionados aqui */}
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ArticleCard 
                            title="A importância dos primeiros socorros - SINDIHOSPA"
                            summary="Qualquer pessoa pode eventualmente passar por situações de emergência por motivos de lesões, acidentes, ou condições de saúde, seja em casa, no trabalho ou no trânsito."
                            link="https://sindihospa.com.br/noticias_sindihospa/artigo-a-importancia-dos-primeiros-socorros"
                            category="primeiros-socorros"
                            author="SINDHOSPA"
                            date="28 de janeiro de 2022"
                        />

                        <ArticleCard 
                            title="Primeiros socorros na escola: construção e validação de cartilha educativa para professores"
                            summary="Construir e validar uma cartilha educativa para professores da educação infantil e ensino fundamental I sobre primeiros socorros na escola."
                            link="https://www.scielo.br/j/ape/a/MSchgJRB6rds7HHx4TbWZ9B/?lang=pt"
                            category="primeiros-socorros"
                            author="SciElo"
                            date="Janeiro de 2027"
                        />

                        <ArticleCard 
                            title="Primeiros socorros no esporte: conhecimentos gerais ao profissional de saúde"
                            summary="Atualmente, em função da grande quantidade de modalidades esportivas e da alta competitividade existente em campeonatos e eventos esportivos, há um aumento considerável de diversos tipos de lesões associadas aos esportes. Portanto, torna-se necessária a presença de profissionais capacitados em primeiros socorros nos eventos, que sejam capazes de identificar as principais lesões e sua gravidade. Nesse contexto, entende-se a primordialidade da presença de uma equipe multidisciplinar, de ambulância e de kits de primeiros em grandes eventos esportivos, algo que ainda não é a realidade da grande maioria das competições do Brasil. "
                            link="https://www.bombeiros.sp.gov.br/primeiros-socorros/queimaduras"
                            category="primeiros-socorros"
                            author="Letícia Caetano Dias - Maria Eduarda Silva Santos - José Martins Juliano Eustaquio"
                            readTime="12 min"
                            date="2024"
                        />

                        <ArticleCard 
                            title="Como Controlar Hemorragias"
                            summary="Técnicas para controle de sangramento externo e interno. Aprenda sobre compressão direta, elevação do membro e pontos de pressão para estancar hemorragias graves."
                            link="https://www.cruz-vermelha.pt/primeiros-socorros"
                            category="primeiros-socorros"
                            author="Cruz Vermelha"
                            readTime="9 min"
                            date="setembro de 2024"
                        />

                        <ArticleCard 
                            title="Atendimento a Fraturas e Luxações"
                            summary="Como identificar e prestar os primeiros socorros em casos de fraturas ósseas e luxações articulares. Técnicas de imobilização e transporte seguro da vítima."
                            link="https://www.einstein.br/especialidades/ortopedia-traumatologia/primeiros-socorros"
                            category="primeiros-socorros"
                            author="Hospital Einstein"
                            readTime="11 min"
                            date="novembro de 2024"
                        />

                        <ArticleCard 
                            title="Desmaios e Convulsões - Como Agir"
                            summary="Orientações para atendimento em casos de desmaio (síncope) e crises convulsivas. Como posicionar a vítima, proteger de lesões e quando chamar o SAMU."
                            link="https://www.hospitalsiriolibanes.org.br/hospital/especialidades/emergencia/primeiros-socorros"
                            category="primeiros-socorros"
                            author="Hospital Sírio-Libanês"
                            readTime="7 min"
                            date="dezembro de 2024"
                        />
                    </div>
                </div>
            </div>

            {/* Videos Section */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-6xl md:text-7xl font-bold text-red-800 mb-8 drop-shadow-lg">
                            Vídeos
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-orange-400 mx-auto rounded-full"></div>
                        <p className="text-xl text-gray-700 mt-8 max-w-2xl mx-auto mb-8">
                            Aprenda técnicas de primeiros socorros através de vídeos educativos
                        </p>
                    </div>
                    
                    {/* Video Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Video Card 1 */}
                        <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-red-100 hover:border-red-300">
                            <div className="relative">
                                <div className="aspect-video overflow-hidden rounded-t-3xl">
                                    <iframe 
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/XIH8v579xDo"
                                        title="RCP - Reanimação Cardiopulmonar"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    RCP - Reanimação Cardiopulmonar
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Aprenda as técnicas básicas de RCP para salvar vidas em emergências
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-red-600 font-semibold text-sm">
                                        Duração: 5 min
                                    </span>
                                    <a
                                        href="https://www.youtube.com/watch?v=XIH8v579xDo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors"
                                    >
                                        Assistir
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6 4a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 11-4 0V7.414l-7.293 7.293a1 1 0 01-1.414-1.414L12.586 6H10a2 2 0 01-2-2z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Video Card 2 */}
                        <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-orange-100 hover:border-orange-300">
                            <div className="relative">
                                <div className="aspect-video overflow-hidden rounded-t-3xl">
                                    <iframe 
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/1MtKw-uP1NM"
                                        title="Manobra de Heimlich"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    Manobra de Heimlich
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Técnica para desobstruir vias aéreas em casos de engasgo
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-orange-600 font-semibold text-sm">
                                        Duração: 3 min
                                    </span>
                                    <a
                                        href="https://www.youtube.com/watch?v=1MtKw-uP1NM"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600 text-white text-sm font-semibold hover:bg-orange-700 transition-colors"
                                    >
                                        Assistir
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6 4a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 11-4 0V7.414l-7.293 7.293a1 1 0 01-1.414-1.414L12.586 6H10a2 2 0 01-2-2z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Video Card 3 */}
                        <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-rose-100 hover:border-rose-300">
                            <div className="relative">
                                <div className="aspect-video overflow-hidden rounded-t-3xl">
                                    <iframe 
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/dM28SGRdAfE"
                                        title="Controle de Hemorragias"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    Controle de Hemorragias
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Como estancar sangramentos e controlar hemorragias graves
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-rose-600 font-semibold text-sm">
                                        Duração: 4 min
                                    </span>
                                    <a
                                        href="https://www.youtube.com/watch?v=dM28SGRdAfE&pp=ygUddsOtZGVvcyBkZSBwcmltZWlyb3Mgc29jb3Jyb3M%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-600 text-white text-sm font-semibold hover:bg-rose-700 transition-colors"
                                    >
                                        Assistir
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6 4a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 11-4 0V7.414l-7.293 7.293a1 1 0 01-1.414-1.414L12.586 6H10a2 2 0 01-2-2z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}