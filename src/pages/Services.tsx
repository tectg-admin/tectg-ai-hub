import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Code, Smartphone, CheckCircle2, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "Soluções de IA que transformam dados em insights acionáveis e automatizam processos complexos.",
      benefits: [
        "Automação de processos repetitivos",
        "Análise preditiva e forecasting",
        "Machine Learning personalizado",
        "Processamento de linguagem natural (NLP)",
        "Visão computacional e reconhecimento de imagens",
        "Chatbots inteligentes e assistentes virtuais",
      ],
      technologies: ["TensorFlow", "PyTorch", "scikit-learn", "OpenAI GPT", "LangChain"],
    },
    {
      icon: Code,
      title: "Desenvolvimento de Software",
      description: "Plataformas web robustas e sistemas corporativos desenvolvidos com tecnologias modernas.",
      benefits: [
        "Sistemas web escaláveis e performáticos",
        "APIs RESTful e GraphQL",
        "Integração com sistemas legados",
        "Painéis administrativos customizados",
        "E-commerce e marketplaces",
        "Arquitetura de microserviços",
      ],
      technologies: ["React", "Node.js", "Python", "PostgreSQL", "AWS"],
    },
    {
      icon: Smartphone,
      title: "Aplicativos Mobile",
      description: "Apps nativos iOS e Android com UX premium e performance excepcional.",
      benefits: [
        "Desenvolvimento nativo iOS e Android",
        "Design UI/UX otimizado",
        "Integração com APIs e backend",
        "Notificações push e engagement",
        "Funcionalidades offline-first",
        "Publicação nas App Stores",
      ],
      technologies: ["React Native", "Swift", "Kotlin", "Firebase", "GraphQL"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="gradient-primary py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-white">Nossas Soluções</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Tecnologia de ponta para impulsionar o crescimento do seu negócio
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="p-8 lg:p-12 hover:shadow-xl transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-6">
                    <div className="w-20 h-20 rounded-xl bg-accent/10 flex items-center justify-center">
                      <service.icon className="text-accent" size={40} />
                    </div>
                    <h2 className="text-foreground">{service.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Tecnologias:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">Benefícios:</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={20} />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-foreground">Nosso Processo</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "01", title: "Descoberta", description: "Entendemos seu negócio e desafios" },
                { number: "02", title: "Planejamento", description: "Definimos estratégia e arquitetura" },
                { number: "03", title: "Desenvolvimento", description: "Criamos a solução com qualidade" },
                { number: "04", title: "Entrega", description: "Deploy e suporte contínuo" },
              ].map((step, index) => (
                <div key={index} className="space-y-3">
                  <div className="text-5xl font-bold text-accent/20">{step.number}</div>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 gradient-accent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-primary">Vamos Construir Algo Incrível Juntos</h2>
            <p className="text-xl text-primary/80 leading-relaxed">
              Entre em contato e descubra como nossas soluções podem transformar seu negócio
            </p>
            <Button asChild variant="default" size="lg" className="text-lg h-14 px-8 bg-primary hover:bg-primary/90">
              <Link to="/contato">
                Solicitar Orçamento
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
