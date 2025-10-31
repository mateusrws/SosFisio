import { useEffect, useRef } from "react"
import gsap from "gsap"
import ArticleCard from "../../components/Article/Article";

export default function FisioEsp() {
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
                    backgroundImage: 'url(/originals/card2.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                ref={conteiner_img}
            >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-indigo-800/60 to-purple-900/70"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Animated background elements */}
                <div className="absolute top-20 left-20 w-32 h-32 bg-purple-300/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-300/20 rounded-full blur-2xl animate-bounce"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-300/15 rounded-full blur-lg"></div>
                
                <h1 
                    className="relative z-10 text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center px-6 drop-shadow-2xl"
                    ref={title}
                >
                    Fisioterapia
                    <span className="block text-purple-300 mt-2">Esportiva</span>
                </h1>
                
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* Card 1 - Roxo esporte */}
                    <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-purple-100 hover:border-purple-300">
                        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-8">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                O que é Fisioterapia Esportiva?
                            </h2>
                        </div>
                        <div className="p-8">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                A fisioterapia esportiva é uma especialidade da fisioterapia voltada para a prevenção, tratamento e reabilitação de lesões relacionadas à prática esportiva. Atua tanto com atletas profissionais quanto amadores, utilizando técnicas específicas para otimizar o desempenho e acelerar a recuperação de lesões esportivas.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 - Índigo performance */}
                    <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-indigo-100 hover:border-indigo-300">
                        <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-8">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Por que é importante?
                            </h2>
                        </div>
                        <div className="p-8">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                A fisioterapia esportiva é fundamental para manter atletas em atividade, prevenir lesões recorrentes e otimizar o desempenho físico. Através de avaliações específicas e programas de exercícios direcionados, ajuda a identificar e corrigir desequilíbrios musculares que podem levar a lesões.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 - Violeta reabilitação */}
                    <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-violet-100 hover:border-violet-300">
                        <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-8">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Principais Objetivos
                            </h2>
                        </div>
                        <div className="p-8">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Os objetivos incluem: prevenção de lesões através de programas de fortalecimento e alongamento, tratamento rápido e eficaz de lesões agudas, reabilitação completa para retorno seguro ao esporte, melhora da performance atlética e educação sobre biomecânica do movimento esportivo.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 - Roxo escuro modalidades */}
                    <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-purple-100 hover:border-purple-300">
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Modalidades Atendidas
                            </h2>
                        </div>
                        <div className="p-8">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Atende praticantes de futebol, corrida, musculação, natação, tênis, basquete, vôlei, artes marciais, ciclismo e outras modalidades. Cada esporte possui características específicas de movimento e lesões mais comuns, exigindo abordagens personalizadas de prevenção e tratamento.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Articles Section */}
            <div className="bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-800 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg">
                            Artigos
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full"></div>
                        <p className="text-xl text-gray-200 mt-8 max-w-2xl mx-auto mb-8">
                            Explore nossos artigos especializados em fisioterapia esportiva
                        </p>
                    </div>
                </div>
                {/* Artigos irão ser adicionados aqui */}
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ArticleCard 
                            title="Fisioterapia Esportiva: Prevenção e Reabilitação de Lesões Esportivas em Atletas do América Futebol Clube”"
                            summary="O futebol é um dos esportes mais populares do mundo, mas também um dos que mais causam lesões. Conheça as principais lesões que afetam jogadores de futebol e as estratégias de prevenção mais eficazes."
                            link="#"
                            category="esportiva"
                            author="SIEXBRASIL"
                            date="03-08 de outubro de 2005"
                            downloadUrl="../../../artigos/fisioterapia esportiva/FISIOTERAPIA-ESPORTIVA-PREVENÇÃO-E-REABILITAÇÃO-DE-LESÕES-ESPORTIVAS-EM-ATLETAS-DO-AMÉRICA-FUTEBOL-CLUBE.pdf"
                        />

                        <ArticleCard 
                            title="Fisioterapia Esportiva"
                            summary="A Fisioterapia Esportiva é uma especialidade que atua na prevenção e reabilitação de lesões relacionadas a atividades físicas, na otimização do desempenho do atleta, correção de desequilíbrios posturais e musculares, promovendo assim, saúde e longevidade esportiva."
                            link="#"
                            category="esportiva"
                            downloadUrl="../../../artigos//fisioterapia esportiva/Fisioterapia Esportiva.pdf"
                        />

                        <ArticleCard 
                            title="UM PROGRAMA DE AQUECIMENTO COMPLETO PARA PREVENIR LESÕES NO FUTEBOL"
                            summary=" Jogar futebol exige várias habilidades e competências, incluindo resistência, agilidade, velocidade e compreensão técnica e tática do jogo. Todos esses aspectos são instruídos e melhorados durante os treinos, mas jogar futebol também implica em um risco de lesão considerável. Assim, umtreinamento ideal deve incluir também exercícios para reduzir o risco de lesão. "
                            link="#"
                            category="esportiva"
                            author="Joseph S. Blatter & Prof. Jiri Dvorak"
                            downloadUrl="../../../artigos/fisioterapia esportiva/Fifa11+ manual FISIOTERAPIA DO ESPORTE.pdf"
                        />

                        <ArticleCard 
                            title="EXERCÍCIOS EXCÊNTRICOS E SUAS APLICAÇÕES NA FISIOTERAPIA ESPORTIVA: UMA REVISÃO DE LITERATURA"
                            summary="A fisioterapia esportiva apresenta uma gama de opções de tratamento para seus pacientes, dentre elas, o exercício excêntrico. O exercício excêntrico pode se fazer presente desde o momento de prevenção de lesões até no protocolo de tratamento das mesmas. Há uma carência na literatura com artigos de boa qualidade metodológica para as diversas aplicabilidades dos exercícios excêntricos aplicados na fisioterapia esportiva.O objetivo desse estudo foi verificar a importância dos exercícios excêntricos e suas aplicabilidades a nível 
                            tendíneo, flexibilidade/alongamento e na prevenção de lesões em atletas. Com relação a metodologia, foram selecionados artigos com publicações até 2012, encontrados em bancos de dados de artigos científicos como PeDro, Medline, Pubmed, Lilacs e Scielo. Os exercícios excêntricos ocupam são muito utilizados nos casos de prevenção e tratamento de lesões, tendinopatias, melhora de flexibilidade, entre outras patologias. É claro sua importância nos casos citados, mas vale ressaltar a importância de um protocolo elaborado com uma padronização do seu uso para cada finalidade, respeitando as especificidades de cada indivíduo, sendo 
                            que o mesmo possa ser utilizado em várias vertentes, desde a prevenção de lesões até no tratamento das mesmas."
                            link="#"
                            category="esportiva"
                            author="Lucas Stortini Fagundes"
                            readTime="15 min"
                            downloadUrl="../../../artigos/fisioterapia esportiva/content.pdf"
                        />

                        <ArticleCard 
                            title=" PRIMEIROS SOCORROS NO ESPORTE: CONHECIMENTOS GERAIS AO PROFISSIONAL DE SAÚDE"
                            summary=" Atualmente, em função da grande quantidade de modalidades esportivas e da alta competitividade existente em campeonatos e eventos esportivos, há um aumento considerável de diversos tipos de lesões associadas aos esportes. Portanto, torna-se necessária a presença de profissionais capacitados em primeiros socorros nos eventos, que sejam capazes de identificar as principais lesões e sua gravidade. Nesse contexto, entende-se a primordialidade da presença de uma equipe multidisciplinar, de ambulância equipada e de kits de primeiros em grandes eventos esportivos, algo que ainda não é a realidade da grande maioria das competições do Brasil. "
                            link="#"
                            category="esportiva"
                            author="Letícia Caetano Dias & Maria Eduarda Silva Santos & José Martins Juliano Eustaquio"
                            downloadUrl="../../../artigos/fisioterapia esportiva//230111876.pdf"
                        />
                    </div>
                </div>
            </div>

            {/* Videos Section */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-6xl md:text-7xl font-bold text-indigo-900 mb-8 drop-shadow-lg">
                            Vídeos
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full"></div>
                        <p className="text-xl text-gray-700 mt-8 max-w-2xl mx-auto mb-8">
                            Conteúdos sobre fisioterapia esportiva
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {/* Video 1 */}
                        <div className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-purple-100 hover:shadow-2xl transition-all">
                            <div className="aspect-video overflow-hidden rounded-t-3xl">
                                <iframe 
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/EyrSTVl0U8o"
                                    title="Vídeo 1 - Fisioterapia Esportiva"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800">Fisioterapia Esportiva - Vídeo 1</h3>
                            </div>
                        </div>

                        {/* Video 2 */}
                        <div className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-purple-100 hover:shadow-2xl transition-all">
                            <div className="aspect-video overflow-hidden rounded-t-3xl">
                                <iframe 
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/ZZPXaGoaBQI"
                                    title="Vídeo 2 - Fisioterapia Esportiva"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800">Fisioterapia Esportiva - Vídeo 2</h3>
                            </div>
                        </div>

                        {/* Video 3 */}
                        <div className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-purple-100 hover:shadow-2xl transition-all">
                            <div className="aspect-video overflow-hidden rounded-t-3xl">
                                <iframe 
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/A16TSfWiPIM"
                                    title="Vídeo 3 - Fisioterapia Esportiva"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800">Fisioterapia Esportiva - Vídeo 3</h3>
                            </div>
                        </div>

                        {/* Video 4 */}
                        <div className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-purple-100 hover:shadow-2xl transition-all">
                            <div className="aspect-video overflow-hidden rounded-t-3xl">
                                <iframe 
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/lhxM_JNX2mY"
                                    title="Vídeo 4 - Fisioterapia Esportiva"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800">Fisioterapia Esportiva - Vídeo 4</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
