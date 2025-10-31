import { useRef, useEffect } from 'react'
import gsap from 'gsap'

interface ArticleCardProps {
  title: string
  summary: string
  link: string
  category?: 'respiratoria' | 'esportiva' | 'primeiros-socorros' | 'geral'
  author?: string
  readTime?: string
  date?: string
  downloadUrl?: string
}

export default function ArticleCard({ 
  title, 
  summary, 
  link, 
  category = 'geral',
  author,
  readTime,
  date,
  downloadUrl
}: ArticleCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  // Definir cores baseadas na categoria
  const getCategoryColors = (cat: string) => {
    switch (cat) {
      case 'respiratoria':
        return {
          gradient: 'from-green-500 to-emerald-600',
          hoverGradient: 'group-hover:from-green-600 group-hover:to-emerald-700',
          border: 'border-green-100 hover:border-green-300',
          accent: 'text-green-600'
        }
      case 'esportiva':
        return {
          gradient: 'from-teal-500 to-cyan-600',
          hoverGradient: 'group-hover:from-teal-600 group-hover:to-cyan-700',
          border: 'border-teal-100 hover:border-teal-300',
          accent: 'text-teal-600'
        }
      case 'primeiros-socorros':
        return {
          gradient: 'from-red-900/70 via-orange-800/60 to-red-900/70',
          hoverGradient: 'group-hover:from-red-900/70 group-hover:via-orange-800/60 group-hover:to-red-900/70',
          border: 'border-emerald-100 hover:border-emerald-300',
          accent: 'text-emerald-600'
        }
        // bg-gradient-to-r from-red-900/70 via-orange-800/60 to-red-900/70
      default:
        return {
          gradient: 'from-cyan-500 to-teal-600',
          hoverGradient: 'group-hover:from-cyan-600 group-hover:to-teal-700',
          border: 'border-cyan-100 hover:border-cyan-300',
          accent: 'text-cyan-600'
        }
    }
  }

  const colors = getCategoryColors(category)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    // Animação de entrada
    gsap.fromTo(card, 
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out" }
    )

    // Animações de hover
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -10,
        scale: 1.001,
        duration: 0.3,
        ease: "power1.out"
      })
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      })
    }

    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const handleCardClick = () => {
    if (link.startsWith('http')) {
      window.open(link, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = link
    }
  }

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation() // Previne que o clique no botão acione o clique do card
    if (downloadUrl) {
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div 
      ref={cardRef}
      className={`group bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${colors.border} cursor-pointer relative`}
      onClick={handleCardClick}
      // onMouseEnter={}
    >
      {/* Header com gradiente */}
      <div className={`bg-gradient-to-r ${colors.gradient} ${colors.hoverGradient} p-6 transition-all duration-300`}>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">
          {title}
        </h3>
        
        {/* Metadados */}
        <div className="flex flex-wrap gap-4 text-white/80 text-sm">
          {author && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              {author}
            </span>
          )}
          {readTime && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              {readTime}
            </span>
          )}
          {date && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {date}
            </span>
          )}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        <p className="text-gray-700 text-base leading-relaxed mb-6 line-clamp-4">
          {summary}
        </p>

        {/* Call to action */}
        <div className="flex items-center justify-between">
          <span className={`${colors.accent} font-semibold text-sm uppercase tracking-wide`}>
            Ler artigo completo
          </span>
          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${colors.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Indicador de categoria e botão de download */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        {downloadUrl && (
          <button
            onClick={handleDownload}
            className={`w-8 h-8 rounded-full bg-gradient-to-r ${colors.gradient} flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
            title="Baixar arquivo"
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
        <div className={`w-3 h-3 rounded-full bg-white/30 group-hover:bg-white/50 transition-colors duration-300`}></div>
      </div>
    </div>
  )
}