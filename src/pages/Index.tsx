
import { useState } from 'react';
import { 
  Clock, 
  FileText, 
  TrendingUp, 
  Shield, 
  Target, 
  Calculator,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Carlos Eduardo Santos",
      text: "O planejamento previdenciário que eu fiz com o Miguel teve um impacto tão positivo na minha vida que foi uma das melhores decisões que tomei nos últimos tempos.",
      rating: 5
    },
    {
      name: "Maria Silva Oliveira", 
      text: "Excelente trabalho! O Miguel me ajudou a entender como organizar minha previdência de forma inteligente e segura.",
      rating: 5
    },
    {
      name: "João Pedro Costa",
      text: "Recomendo muito o trabalho do Miguel. Profissional competente que realmente entende do assunto.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-800 text-white py-4 px-4 fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
              <span className="text-slate-800 font-bold text-sm">M</span>
            </div>
            <span className="font-semibold">Advocacia Previdenciária</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#servicos" className="hover:text-yellow-400 transition-colors">Serviços</a>
            <a href="#processo" className="hover:text-yellow-400 transition-colors">Processo</a>
            <a href="#contato" className="hover:text-yellow-400 transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white pt-20 pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            QUAL SERÁ O VALOR DA SUA<br />
            <span className="text-yellow-400">APOSENTADORIA?</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Um planejamento correto de sua vida previdenciária garante que você consiga os maiores benefícios possíveis para ter um futuro tranquilo.
          </p>
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-4 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all"
            aria-label="Quero descobrir minha aposentadoria"
          >
            QUERO DESCOBRIR MINHA APOSENTADORIA
          </Button>
        </div>
      </section>

      {/* Conhecimento Section */}
      <section id="servicos" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Você Sabe Exatamente Quando e Como Vai se Aposentar?
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-3 text-slate-800">Anos de contribuição necessários</h3>
                <p className="text-sm text-gray-600">
                  Você tem conhecimento exato do tempo que ainda falta para se aposentar?
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <FileText className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-3 text-slate-800">Documentação incompleta e desorganizada</h3>
                <p className="text-sm text-gray-600">
                  Você já organizou toda sua documentação previdenciária?
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-3 text-slate-800">Perdendo dinheiro e tempo</h3>
                <p className="text-sm text-gray-600">
                  Você pode estar perdendo dinheiro sem saber e contribuindo mais do que deveria.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-3 text-slate-800">Saúde abalada e necessidade</h3>
                <p className="text-sm text-gray-600">
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
          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Planejamento Previdenciário: A Estratégia Inteligente para uma<br />
            Aposentadoria Tranquila
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            O planejamento previdenciário é uma das ferramentas mais importantes para garantir uma aposentadoria tranquila. Através de análises detalhadas e estratégias personalizadas, é possível maximizar os benefícios previdenciários e garantir que você receba o valor máximo a que tem direito, além de otimizar o tempo de contribuição necessário.
          </p>
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-3 rounded-lg"
            aria-label="Falar com especialista"
          >
            FALAR COM UM ESPECIALISTA
          </Button>
        </div>
      </section>

      {/* Investment Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Por Que o Planejamento Previdenciário é um INVESTIMENTO e<br />
            não um Gasto
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Target className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-3 text-slate-800">Maximização do Benefício</h3>
                <p className="text-sm text-gray-600">
                  Identifica a melhor forma de contribuir para maximizar o valor da sua aposentadoria.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Calculator className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-3 text-slate-800">Antecipação da Aposentadoria</h3>
                <p className="text-sm text-gray-600">
                  Estratégias para conseguir se aposentar mais cedo, sem perder benefícios.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-3 text-slate-800">Segurança Jurídica</h3>
                <p className="text-sm text-gray-600">
                  Conhecimento completo dos seus direitos previdenciários e como exercê-los.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-3 text-slate-800">Tranquilidade Mental</h3>
                <p className="text-sm text-gray-600">
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
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            O Planejamento Previdenciário é Para Você?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Você quer ter certeza de quando poderá se aposentar</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Quer receber o maior valor possível de aposentadoria</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Quer diminuir o tempo de contribuição</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Quer parar de contribuir sem necessidade</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Quer ter uma aposentadoria mais alta</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Quer se aposentar com tranquilidade e segurança</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Se você se identificou com as afirmações acima, então o planejamento previdenciário é ideal para você!
            </p>
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-3 rounded-lg"
              aria-label="Quero garantir minha aposentadoria"
            >
              QUERO GARANTIR MINHA APOSENTADORIA AGORA
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processo" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Nosso Processo Detalhado Para Construir Seu Plano de<br />
            Aposentadoria Ideal:
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-slate-800">Consulta Inicial e Análise do Caso</h3>
                <p className="text-gray-600">
                  Analisamos sua situação atual, histórico de contribuições e objetivos para sua aposentadoria.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-slate-800">Verificação de Pendências Documentais</h3>
                <p className="text-gray-600">
                  Identificamos e organizamos toda documentação necessária para otimizar seu processo previdenciário.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-slate-800">Diagnóstico com o Mapa Previdenciário</h3>
                <p className="text-gray-600">
                  Criamos um mapa completo da sua situação previdenciária atual e das melhores estratégias.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-slate-800">Acompanhamento e Defesa</h3>
                <p className="text-gray-600">
                  Acompanhamos todo o processo e defendemos seus direitos até a concessão do benefício.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-slate-800">Conclusão do Seu Melhor Aposentadoria</h3>
                <p className="text-gray-600">
                  Garantimos que você receba o melhor benefício possível, no menor tempo e com total segurança jurídica.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-3 rounded-lg"
              aria-label="Começar planejamento agora"
            >
              COMEÇAR MEU PLANEJAMENTO AGORA
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            O Que Nossos Clientes Dizem
          </h2>
          
          <div className="relative bg-gray-50 rounded-lg p-8">
            <div className="text-center">
              <div className="text-4xl text-gray-300 mb-4">"</div>
              <p className="text-lg text-gray-700 mb-6 italic">
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
                className="rounded-full"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full"
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
          <h2 className="text-3xl font-bold mb-6">
            NÃO ADIE MAIS A DECISÃO MAIS IMPORTANTE DA SUA VIDA<br />
            PROFISSIONAL!
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Faça diretamente com um dos nossos advogados especializados em direito previdenciário.
          </p>
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-4 text-lg rounded-lg"
            aria-label="Falar com especialista agora"
          >
            FALAR COM UM ESPECIALISTA AGORA
          </Button>
        </div>
      </section>

      {/* Curiosities Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Curiosidades Previdenciárias
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-slate-800">Você sabia?</h3>
                <p className="text-sm text-gray-600">
                  Que é possível ter o valor da sua aposentadoria calculado de formas diferentes? Escolher a regra certa pode fazer toda a diferença no seu benefício.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-slate-800">Você sabia?</h3>
                <p className="text-sm text-gray-600">
                  Que atividades especiais podem dar direito à aposentadoria especial, mesmo que você não trabalhe mais nessa função?
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-slate-800">Você sabia?</h3>
                <p className="text-sm text-gray-600">
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
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                  <span className="text-slate-800 font-bold text-sm">M</span>
                </div>
                <span className="font-semibold">Advocacia Previdenciária</span>
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
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@advocaciaprevidenciaria.com.br</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>São Paulo, SP</span>
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
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Política de Privacidade</li>
                <li>Termos de Uso</li>
                <li>OAB/SP 123.456</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Advocacia Previdenciária. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
