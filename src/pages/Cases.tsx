import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Clock, Award, ArrowRight } from "lucide-react";

const Cases = () => {
  const cases = [
    {
      title: "Automação de Atendimento com IA",
      client: "Empresa de E-commerce",
      category: "Inteligência Artificial",
      description: "Implementamos um sistema de chatbot inteligente que reduziu o tempo de resposta e aumentou a satisfação dos clientes.",
      results: [
        { icon: TrendingUp, label: "ROI", value: "+250%" },
        { icon: Clock, label: "Tempo de Resposta", value: "-70%" },
        { icon: Award, label: "Satisfação", value: "4.8/5" },
      ],
      technologies: ["GPT-4", "Python", "React", "WebSockets"],
    },
    {
      title: "Plataforma de Gestão Corporativa",
      client: "Indústria Farmacêutica",
      category: "Desenvolvimento Web",
      description: "Desenvolvemos um sistema completo de gestão que integra todos os departamentos e automatiza processos críticos.",
      results: [
        { icon: TrendingUp, label: "Produtividade", value: "+45%" },
        { icon: Clock, label: "Economia de Tempo", value: "15h/sem" },
        { icon: Award, label: "Processos Automatizados", value: "32" },
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      title: "Aplicativo de Delivery Premium",
      client: "Rede de Restaurantes",
      category: "Mobile",
      description: "Criamos um aplicativo mobile nativo com recursos avançados de geolocalização e pagamentos integrados.",
      results: [
        { icon: TrendingUp, label: "Downloads", value: "50k+" },
        { icon: Clock, label: "Tempo de Entrega", value: "-30%" },
        { icon: Award, label: "Rating nas Lojas", value: "4.9/5" },
      ],
      technologies: ["React Native", "Firebase", "Stripe", "Maps API"],
    },
    {
      title: "Sistema de Análise Preditiva",
      client: "Fintech",
      category: "Inteligência Artificial",
      description: "Desenvolvemos modelos de ML para previsão de risco de crédito e detecção de fraudes em tempo real.",
      results: [
        { icon: TrendingUp, label: "Precisão", value: "94%" },
        { icon: Clock, label: "Detecção", value: "<2s" },
        { icon: Award, label: "Fraudes Bloqueadas", value: "99.2%" },
      ],
      technologies: ["Python", "TensorFlow", "Kafka", "Redis"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="gradient-primary py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-white">Cases de Sucesso</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Conheça projetos reais que transformaram negócios e geraram resultados mensuráveis
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {cases.map((caseItem, index) => (
              <Card key={index} className="p-8 space-y-6 hover:shadow-xl transition-all">
                <div className="space-y-3">
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {caseItem.category}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{caseItem.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{caseItem.client}</p>
                  <p className="text-muted-foreground leading-relaxed">{caseItem.description}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
                  {caseItem.results.map((result, i) => (
                    <div key={i} className="text-center space-y-2">
                      <result.icon className="text-accent mx-auto" size={24} />
                      <div className="text-2xl font-bold text-foreground">{result.value}</div>
                      <div className="text-xs text-muted-foreground">{result.label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Tecnologias:</p>
                  <div className="flex flex-wrap gap-2">
                    {caseItem.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-secondary text-foreground rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center text-foreground mb-12">O Que Nossos Clientes Dizem</h2>
            <div className="space-y-8">
              {[
                {
                  quote: "A TECTG transformou completamente nosso atendimento ao cliente. A solução de IA que desenvolveram superou todas as expectativas.",
                  author: "Maria Silva",
                  role: "Diretora de Operações",
                },
                {
                  quote: "Profissionalismo e expertise técnica de alto nível. Entregaram no prazo e com qualidade excepcional.",
                  author: "João Santos",
                  role: "CTO",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="p-8 space-y-4">
                  <p className="text-lg text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">{testimonial.author[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 gradient-accent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-primary">Seu Projeto Pode Ser o Próximo Case de Sucesso</h2>
            <p className="text-xl text-primary/80 leading-relaxed">
              Vamos conversar sobre como podemos ajudar seu negócio a alcançar resultados extraordinários
            </p>
            <Button asChild variant="default" size="lg" className="text-lg h-14 px-8 bg-primary hover:bg-primary/90">
              <Link to="/contato">
                Iniciar Meu Projeto
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cases;
