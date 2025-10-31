import { useEffect, useRef } from "react"
import gsap from "gsap"
import ArticleCard from "../../components/Article/Article";

export default function FisioResp() {
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
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
            {/* Hero Section with Background Image */}
            <div 
                className="relative h-screen flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: 'url(/originals/card1.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                ref={conteiner_img}
            >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-teal-800/60 to-blue-900/70"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Animated background elements */}
                <div className="absolute top-20 left-20 w-32 h-32 bg-green-300/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-32 right-32 w-48 h-48 bg-teal-300/20 rounded-full blur-2xl animate-bounce"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-300/15 rounded-full blur-lg"></div>
                
                <h1 
                    className="relative z-10 text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center px-6 drop-shadow-2xl"
                    ref={title}
                >
                    Fisioterapia
                    <span className="block text-green-300 mt-2">Respiratória</span>
                </h1>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* Card 1 - Verde saúde */}
                    <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-green-100 hover:border-green-300">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                O que é Fisioterapia Respiratória?
                            </h2>
                        </div>
                        <div className="p-8">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                A fisioterapia respiratória é uma especialidade da Fisioterapia voltada para a prevenção, avaliação e tratamento de alterações que comprometem o sistema respiratório. Por meio de técnicas manuais, exercícios e equipamentos específicos, o fisioterapeuta busca melhorar a ventilação pulmonar, facilitar a troca gasosa e promover uma respiração mais eficiente.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 - Azul saúde */}
                    <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-blue-100 hover:border-blue-300">
                        <div className="bg-gradient-to-r from-blue-500 to-sky-600 p-8">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Por que ela existe?
                            </h2>
                        </div>
                        <div className="p-8">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                A fisioterapia respiratória existe para restaurar e manter o bom funcionamento do sistema respiratório. Sua aplicação é fundamental para melhorar a oxigenação do sangue, reduzir o esforço necessário para respirar e prevenir o acúmulo de secreções que podem causar infecções pulmonares.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 - Teal saúde */}
                    <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-teal-100 hover:border-teal-300">
                        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-8">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Objetivos Principais
                            </h2>
                        </div>
                        <div className="p-8">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Os principais objetivos envolvem a mobilização e eliminação de secreções, melhora da oxigenação sanguínea, reexpansão de áreas pulmonares colapsadas e reeducação do padrão respiratório. Busca-se reduzir o trabalho respiratório e prevenir complicações.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 - Verde-azul saúde */}
                    <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-emerald-100 hover:border-emerald-300">
                        <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-8">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Em quais casos é indicada
                            </h2>
                        </div>
                        <div className="p-8">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                É indicada em doenças pulmonares crônicas (DPOC, asma, bronquite), doenças restritivas (fibrose pulmonar), período pós-operatório, internações em UTI e recuperação de infecções respiratórias agudas como pneumonia e COVID-19.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Articles Section */}
            <div className="bg-gradient-to-r from-green-800 via-teal-800 to-blue-800 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg">
                            Artigos
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-teal-400 mx-auto rounded-full"></div>
                        <p className="text-xl text-gray-200 mt-8 max-w-2xl mx-auto mb-8">
                            Explore nossos artigos especializados em fisioterapia respiratória
                        </p>
                    </div>
                </div>

                {/* Artigos irão ser adicionados aqui */}
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ArticleCard 
                        title="O que é ventilação mecânica?"
                        summary="A ventilação mecânica é uma modalidade terapêutica fundamental para pacientes que apresentam insuficiência respiratória aguda ou crônica, quando o sistema respiratório não é capaz de manter, por si só"
                        link="https://www.resmed.com.br/o-que-e-ventilacao-mecanica"
                        category="respiratoria"
                        author="ResMed"
                        />
                        <ArticleCard 
                                title="Ventilação mecânica: o que é, para que serve, tipos e riscos"
                                summary="Ventilação mecânica é o uso de máquinas para ajudar a pessoa a respirar, sendo indicado quando as vias aéreas e a ventilação estão comprometidas ou a pessoa tem insuficiência respiratória grave."
                                link="https://www.tuasaude.com/ventilacao-mecanica"
                                category="respiratoria"
                                author="Tua Saude"
                                date="agosto de 2024"
                        />
                        <ArticleCard 
                                title="SciELO Brasil - Ventilação mecânica: princípios, análise gráfica e modalidades ventilatórias Ventilação mecânica: princípios, análise gráfica e modalidades ventilatórias."
                                summary="A ventilação mecânica (VM) ou, como seria mais adequado chamarmos, o suporte ventilatório, consiste em um método de suporte para o tratamento de pacientes com insuficiência respiratória aguda ou crônica agudizada."
                                link="https://www.scielo.br/j/jbpneu/a/4y7hFzHCx3HwdWpjpD9yNQJ/?lang=pt"
                                category="respiratoria"
                                author="SciElo Brazil"
            
                                date="Julho de 2017"
                        />
                    </div>
                </div> 

            </div>
            {/* Videos Section */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-6xl md:text-7xl font-bold text-green-900 mb-8 drop-shadow-lg">
                            Vídeos
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-teal-400 mx-auto rounded-full"></div>
                        <p className="text-xl text-gray-700 mt-8 max-w-2xl mx-auto mb-8">
                            Conteúdos sobre fisioterapia respiratória
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {/* Video 1 */}
                        <div className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100 hover:shadow-2xl transition-all">
                            <div className="aspect-video overflow-hidden rounded-t-3xl">
                                <iframe 
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/7wAg-_bdkkI"
                                    title="Vídeo 1 - Fisioterapia Respiratória"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800">Fisioterapia Respiratória - Vídeo 1</h3>
                            </div>
                        </div>

                        {/* Video 2 */}
                        <div className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100 hover:shadow-2xl transition-all">
                            <div className="aspect-video overflow-hidden rounded-t-3xl">
                                <iframe 
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/ziXAdcY5DCU"
                                    title="Vídeo 2 - Fisioterapia Respiratória"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800">Fisioterapia Respiratória - Vídeo 2</h3>
                            </div>
                        </div>

                        {/* Video 3 */}
                        <div className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100 hover:shadow-2xl transition-all">
                            <div className="aspect-video overflow-hidden rounded-t-3xl">
                                <iframe 
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/1kV79XSzs70"
                                    title="Vídeo 3 - Fisioterapia Respiratória"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800">Fisioterapia Respiratória - Vídeo 3</h3>
                            </div>
                        </div>

                        {/* Video 4 */}
                        <div className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100 hover:shadow-2xl transition-all">
                            <div className="aspect-video overflow-hidden rounded-t-3xl">
                                <iframe 
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/uXgexbPTbwI"
                                    title="Vídeo 4 - Fisioterapia Respiratória"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800">Fisioterapia Respiratória - Vídeo 4</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}