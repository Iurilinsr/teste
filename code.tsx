"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

export default function UltrasoundPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  const slides = [
    {
      title: "Ultrassom Microfocada: Tecnologia que Transforma",
      content: "",
      image: "https://placeholder-image-service.onrender.com/image/800x450?prompt=Modern ultrasound device with high-tech design emitting focused waves&id=ultrasound-device-1",
      animation: "Aparelho girando e emitindo ondas ultrassônicas"
    },
    {
      title: "O que é Ultrassom Microfocada?",
      content: "O ultrassom microfocado é uma tecnologia que utiliza ondas ultrassônicas concentradas em pequenos pontos (microfocos) para atingir camadas profundas da pele e tecidos subjacentes, promovendo estímulo térmico localizado que estimula a produção de colágeno e a remodelação tecidual.",
      image: "https://placeholder-image-service.onrender.com/image/800x450?prompt=Visualization of focused ultrasound waves targeting specific tissue points&id=focused-waves-2",
      animation: "Concentração de ondas em microfocos dentro da pele"
    },
    {
      title: "Diferença entre Ultrassom de Fisioterapia e Ultrassom Microfocado",
      content: "Comparação entre as duas tecnologias:",
      comparison: [
        {
          title: "Ultrassom de Fisioterapia Convencional",
          items: [
            "Ondas de baixa frequência e intensidade",
            "Atua na superfície ou tecidos próximos",
            "Efeito térmico e mecânico",
            "Foco amplo com menor precisão"
          ]
        },
        {
          title: "Ultrassom Microfocado",
          items: [
            "Ondas de alta frequência e intensidade",
            "Concentrado em pequenos pontos (microfocos)",
            "Atinge camadas profundas com alta precisão",
            "Estimula produção de colágeno"
          ]
        }
      ],
      image: "https://placeholder-image-service.onrender.com/image/800x450?prompt=Comparative diagram showing conventional vs focused ultrasound wave patterns&id=comparison-3",
      animation: "Animações 3D mostrando ondas dispersas vs concentradas"
    },
    {
      title: "Profundidades dos Cartuchos e Ação em Cada Camada da Pele",
      content: "Os cartuchos do ultrassom microfocado são projetados para atingir diferentes profundidades:",
      depths: [
        {
          depth: "1,5 mm",
          description: "Atua na derme superficial, estimulando a produção de colágeno para melhorar textura e firmeza da pele."
        },
        {
          depth: "3,0 mm",
          description: "Alcança a derme profunda, promovendo maior estímulo de colágeno e efeito lifting."
        },
        {
          depth: "4,5 mm",
          description: "Atinge o SMAS (Sistema Músculo Aponeurótico Superficial), camada responsável pela sustentação facial, promovendo retração e lifting não invasivo."
        }
      ],
      image: "https://placeholder-image-service.onrender.com/image/800x450?prompt=Cross-section of skin showing different depths with ultrasound focal points&id=skin-depths-4",
      video: "Demonstração do procedimento com aplicação dos cartuchos em diferentes profundidades"
    },
    {
      title: "Indicações e Contraindicações",
      content: "",
      indications: [
        "Rejuvenescimento facial e corporal",
        "Tratamento da flacidez da pele",
        "Melhora da textura e firmeza",
        "Redução de linhas finas e rugas",
        "Terapias musculares e neuromodulação"
      ],
      contraindications: [
        "Gestantes",
        "Pacientes com marcapasso ou dispositivos eletrônicos implantados",
        "Infecções ou inflamações ativas na área a ser tratada",
        "Doenças autoimunes ou câncer na região",
        "Pele muito sensível ou com feridas abertas"
      ],
      image: "https://placeholder-image-service.onrender.com/image/800x450?prompt=Medical diagram showing treatment areas and contraindication symbols&id=indications-5"
    },
    {
      title: "Como Funciona a Tecnologia que Transforma",
      content: "Explicação do princípio físico: geração, foco e efeito térmico das ondas ultrassônicas.",
      image: "https://placeholder-image-service.onrender.com/image/800x450?prompt=Detailed technical diagram of ultrasound wave generation and focusing mechanism&id=technology-6",
      animation: "Animação 3D mostrando camadas da pele e efeito do ultrassom microfocado"
    },
    {
      title: "Aplicações Transformadoras",
      content: "Exemplos de uso da tecnologia:",
      applications: [
        "Rejuvenescimento facial",
        "Tratamento de flacidez",
        "Terapias musculares",
        "Neuromodulação"
      ],
      beforeAfter: [
        {
          before: "https://placeholder-image-service.onrender.com/image/400x300?prompt=Before treatment showing skin with signs of aging&id=before-7a",
          after: "https://placeholder-image-service.onrender.com/image/400x300?prompt=After treatment showing improved skin texture and firmness&id=after-7b"
        }
      ],
      video: "Vídeo demonstrativo mostrando procedimento e resultados"
    },
    {
      title: "Benefícios da Tecnologia",
      content: "Principais vantagens do ultrassom microfocado:",
      benefits: [
        "Não invasivo",
        "Alta precisão",
        "Resultados duradouros",
        "Recuperação rápida"
      ],
      image: "https://placeholder-image-service.onrender.com/image/800x450?prompt=Infographic showing benefits and advantages of focused ultrasound technology&id=benefits-8",
      animation: "Comparação 3D com outras tecnologias tradicionais"
    },
    {
      title: "Estudos e Inovações Recentes",
      content: "Pesquisas científicas comprovam eficácia e segurança:",
      studies: [
        "Estudo clínico com 95% de satisfação dos pacientes",
        "Melhora de 70% na elasticidade da pele",
        "Resultados mantidos por até 2 anos"
      ],
      image: "https://placeholder-image-service.onrender.com/image/800x450?prompt=Scientific charts and graphs showing clinical study results&id=studies-9",
      video: "Depoimento de especialistas sobre o impacto da tecnologia"
    },
    {
      title: "O Futuro do Ultrassom Microfocado",
      content: "Tendências e avanços tecnológicos previstos:",
      future: [
        "Novas aplicações em diferentes áreas da medicina",
        "Integração com inteligência artificial",
        "Dispositivos mais precisos e acessíveis"
      ],
      image: "https://placeholder-image-service.onrender.com/image/800x450?prompt=Futuristic concept of advanced ultrasound technology with AI integration&id=future-10",
      animation: "Possíveis inovações e novas aplicações"
    },
    {
      title: "Conclusão",
      content: "O ultrassom microfocado representa uma tecnologia transformadora na área estética e médica, oferecendo tratamentos precisos, não invasivos e com resultados comprovados.",
      image: "https://placeholder-image-service.onrender.com/image/800x450?prompt=Inspiring image representing technological transformation in healthcare&id=conclusion-11",
      questions: "Espaço para perguntas e discussão"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Slide Content */}
        <div className="relative h-[70vh] overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 p-8">
                <div className="flex flex-col md:flex-row h-full gap-6">
                  {/* Image/Media Section */}
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md mb-4">
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    {slide.animation && (
                      <div className="bg-blue-50 p-4 rounded-lg mb-4">
                        <p className="text-sm text-blue-800 font-semibold">
                          Animação: {slide.animation}
                        </p>
                      </div>
                    )}
                    {slide.video && (
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-sm text-purple-800 font-semibold">
                          Vídeo: {slide.video}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                      {slide.title}
                    </h2>
                    
                    {slide.content && (
                      <p className="text-gray-600 mb-6 text-lg">
                        {slide.content}
                      </p>
                    )}

                    {slide.comparison && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {slide.comparison.map((item, idx) => (
                          <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-lg text-gray-800 mb-2">
                              {item.title}
                            </h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                              {item.items.map((point, i) => (
                                <li key={i}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {slide.depths && (
                      <div className="space-y-4 mb-6">
                        {slide.depths.map((depth, idx) => (
                          <div key={idx} className="bg-blue-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-blue-800">
                              Profundidade: {depth.depth}
                            </h3>
                            <p className="text-blue-700 mt-2">
                              {depth.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {slide.indications && slide.contraindications && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-green-800 mb-2">
                            Indicações
                          </h3>
                          <ul className="list-disc list-inside text-green-700 space-y-1">
                            {slide.indications.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-red-800 mb-2">
                            Contraindicações
                          </h3>
                          <ul className="list-disc list-inside text-red-700 space-y-1">
                            {slide.contraindications.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {slide.applications && (
                      <div className="mb-6">
                        <h3 className="font-semibold text-gray-800 mb-2">
                          Aplicações:
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {slide.applications.map((app, i) => (
                            <span key={i} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {slide.benefits && (
                      <div className="mb-6">
                        <h3 className="font-semibold text-gray-800 mb-2">
                          Benefícios:
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {slide.benefits.map((benefit, i) => (
                            <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {slide.studies && (
                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <h3 className="font-semibold text-gray-800 mb-2">
                          Resultados de Estudos:
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          {slide.studies.map((study, i) => (
                            <li key={i}>{study}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {slide.future && (
                      <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                        <h3 className="font-semibold text-indigo-800 mb-2">
                          Futuro da Tecnologia:
                        </h3>
                        <ul className="list-disc list-inside text-indigo-700 space-y-1">
                          {slide.future.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {slide.questions && (
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <p className="text-yellow-800 font-semibold">
                          {slide.questions}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              {autoPlay ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <span className="text-sm">
              Slide {currentSlide + 1} de {slides.length}
            </span>
          </div>

          <div className="flex space-x-1">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
