
import { useState } from 'react';
import { Clock, FileText, TrendingUp, Shield, Target, Calculator, CheckCircle, Phone, Mail, MapPin, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const whatsappLink = "https://api.whatsapp.com/send/?phone=552730291350&text=Ol%C3%A1%2C+quero+conversar+com+um+advogado+previdenci%C3%A1rio&type=phone_number&app_absent=0";
  
  const testimonials = [{
    name: "Carlos Eduardo Santos",
    text: "O planejamento previdenciário que eu fiz com o Miguel teve um impacto tão positivo na minha vida que foi uma das melhores decisões que tomei nos últimos tempos.",
    rating: 5
  }, {
    name: "Maria Silva Oliveira",
    text: "Excelente trabalho! O Miguel me ajudou a entender como organizar minha previdência de forma inteligente e segura.",
    rating: 5
  }, {
    name: "João Pedro Costa",
    text: "Recomendo muito o trabalho do Miguel. Profissional competente que realmente entende do assunto.",
    rating: 5
  }];
  
  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-800 text-white py-4 px-4 fixed w-full top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/88a542bf-64b0-4bb3-9408-d46dae734818.png" 
              alt="FB Advocacia Previdenciária - Especialistas em Direito Previdenciário" 
              className="h-12 w-auto"
              loading="eager"
            />
          </div>
          <nav className="hidden md:flex space-x-6" role="navigation" aria-label="Menu principal">
            <a href="#servicos" className="hover:text-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400">Serviços</a>
            <a href="#processo" className="hover:text-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400">Processo</a>
            <a href="#contato" className="hover:text-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400">Contato</a>
          </nav>
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Menu mobile"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white pt-24 pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            QUAL SERÁ O VALOR DA SUA<br />
            <span className="text-yellow-400">APOSENTADORIA?</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Um planejamento correto de sua vida previdenciária garante que você consiga os maiores benefícios possíveis para ter um futuro tranquilo.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              QUERO DESCOBRIR MINHA APOSENTADORIA
            </Button>
          </a>
        </div>
      </section>

      {/* Conhecimento Section */}
      <section id="servicos" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-800">
            Você Sabe Exatamente Quando e Como Vai se Aposentar?
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <Clock className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-3 text-slate-800 text-sm md:text-base">Anos de contribuição necessários</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Você tem conhecimento exato do tempo que ainda falta para se aposentar?
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <FileText className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-3 text-slate-800 text-sm md:text-base">Documentação incompleta e desorganizada</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Você já organizou toda sua documentação previdenciária?
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <TrendingUp className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-3 text-slate-800 text-sm md:text-base">Perdendo dinheiro e tempo</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Você pode estar perdendo dinheiro sem saber e contribuindo mais do que deveria.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <Shield className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-3 text-slate-800 text-sm md:text-base">Saúde abalada e necessidade</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Você está preparado para situações imprevistas que podem afetar sua capacidade de trabalho?
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Planejamento Strategy Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800">
            Planejamento Previdenciário: A Estratégia Inteligente para uma<br className="hidden md:block" />
            Aposentadoria Tranquila
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
            O planejamento previdenciário é uma das ferramentas mais importantes para garantir uma aposentadoria tranquila. Através de análises detalhadas e estratégias personalizadas, é possível maximizar os benefícios previdenciários e garantir que você receba o valor máximo a que tem direito, além de otimizar o tempo de contribuição necessário.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-6 md:px-8 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              FALAR COM UM ESPECIALISTA
            </Button>
          </a>
        </div>
      </section>

      {/* Investment Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-800">
            Por Que o Planejamento Previdenciário é um INVESTIMENTO e<br className="hidden md:block" />
            não um Gasto
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <Target className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-3 text-slate-800 text-sm md:text-base">Maximização do Benefício</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Identifica a melhor forma de contribuir para maximizar o valor da sua aposentadoria.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <Calculator className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-3 text-slate-800 text-sm md:text-base">Antecipação da Aposentadoria</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Estratégias para conseguir se aposentar mais cedo, sem perder benefícios.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <Shield className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-3 text-slate-800 text-sm md:text-base">Segurança Jurídica</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Conhecimento completo dos seus direitos previdenciários e como exercê-los.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <TrendingUp className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-3 text-slate-800 text-sm md:text-base">Tranquilidade Mental</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Paz de espírito sabendo que seu futuro financeiro está planejado e seguro.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-800">
            O Planejamento Previdenciário é Para Você?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm md:text-base">Você quer ter certeza de quando poderá se aposentar</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm md:text-base">Quer receber o maior valor possível de aposentadoria</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm md:text-base">Quer diminuir o tempo de contribuição</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm md:text-base">Quer parar de contribuir sem necessidade</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm md:text-base">Quer ter uma aposentadoria mais alta</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm md:text-base">Quer se aposentar com tranquilidade e segurança</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Se você se identificou com as afirmações acima, então o planejamento previdenciário é ideal para você!
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-6 md:px-8 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                QUERO GARANTIR MINHA APOSENTADORIA AGORA
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processo" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-800">
            Nosso Processo Detalhado Para Construir Seu Plano de<br className="hidden md:block" />
            Aposentadoria Ideal:
          </h2>
          
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-base md:text-lg mb-2 text-slate-800">Consulta Inicial e Análise do Caso</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Analisamos sua situação atual, histórico de contribuições e objetivos para sua aposentadoria.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-base md:text-lg mb-2 text-slate-800">Verificação de Pendências Documentais</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Identificamos e organizamos toda documentação necessária para otimizar seu processo previdenciário.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-base md:text-lg mb-2 text-slate-800">Diagnóstico com o Mapa Previdenciário</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Criamos um mapa completo da sua situação previdenciária atual e das melhores estratégias.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold text-base md:text-lg mb-2 text-slate-800">Acompanhamento e Defesa</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Acompanhamos todo o processo e defendemos seus direitos até a concessão do benefício.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="font-semibold text-base md:text-lg mb-2 text-slate-800">Conclusão do Seu Melhor Aposentadoria</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Garantimos que você receba o melhor benefício possível, no menor tempo e com total segurança jurídica.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-6 md:px-8 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                COMEÇAR MEU PLANEJAMENTO AGORA
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-800">
            O Que Nossos Clientes Dizem
          </h2>
          
          <div className="relative bg-gray-50 rounded-lg p-6 md:p-8">
            <div className="text-center">
              <div className="text-4xl text-gray-300 mb-4">"</div>
              <p className="text-base md:text-lg text-gray-700 mb-6 italic">
                {testimonials[currentTestimonial].text}
              </p>
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="font-semibold text-slate-800">
                {testimonials[currentTestimonial].name}
              </p>
            </div>
            
            <div className="flex justify-center space-x-4 mt-8">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={prevTestimonial} 
                className="rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400" 
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-2 h-2 rounded-full ${index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'}`} 
                  />
                ))}
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={nextTestimonial} 
                className="rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400" 
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-slate-800 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            NÃO ADIE MAIS A DECISÃO MAIS IMPORTANTE DA SUA VIDA<br className="hidden md:block" />
            PROFISSIONAL!
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Faça diretamente com um dos nossos advogados especializados em direito previdenciário.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              FALAR COM UM ESPECIALISTA AGORA
            </Button>
          </a>
        </div>
      </section>

      {/* Curiosities Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-800">
            Curiosidades Previdenciárias
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-slate-800 text-sm md:text-base">Você sabia?</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Que é possível ter o valor da sua aposentadoria calculado de formas diferentes? Escolher a regra certa pode fazer toda a diferença no seu benefício.
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-slate-800 text-sm md:text-base">Você sabia?</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Que atividades especiais podem dar direito à aposentadoria especial, mesmo que você não trabalhe mais nessa função?
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-slate-800 text-sm md:text-base">Você sabia?</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Que existem estratégias legais para aumentar o valor da sua aposentadoria sem precisar contribuir por mais tempo?
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/88a542bf-64b0-4bb3-9408-d46dae734818.png" 
                  alt="FB Advocacia Previdenciária Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm">
                Especialistas em direito previdenciário, dedicados a garantir o melhor para sua aposentadoria.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+552730291350" className="hover:text-white transition-colors">(27) 3029-1350</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:contato@fbadvocaciaprevidenciaria.com.br" className="hover:text-white transition-colors">
                    contato@fbadvocaciaprevidenciaria.com.br
                  </a>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Av. Presidente Vargas, 2.700, Sl. 305, Jd. da Penha<br />
                    Vitória/ES, CEP 29.060-422</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Planejamento Previdenciário</li>
                <li>Aposentadoria por Tempo</li>
                <li>Aposentadoria Especial</li>
                <li>Revisão de Benefícios</li>
                <li>Auxílio-Doença</li>
                <li>Pensão por Morte</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Acompanhe</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                  WhatsApp
                </a>
                <p>OAB/ES 123456</p>
                <p>CNPJ: 00.000.000/0001-00</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 FB Advocacia Previdenciária. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com foco em resultados para nossos clientes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
