import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedServiceCard from "@/components/AnimatedServiceCard";
import { Brain, Code, Smartphone, ArrowRight, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Home = () => {
  const heroRef = useScrollReveal({ delay: 0 });
  const aboutRef = useScrollReveal({ delay: 0.1 });
  const servicesRef = useScrollReveal({ delay: 0.2 });
  const benefitsRef = useScrollReveal({ delay: 0.1 });
  const ctaRef = useScrollReveal({ delay: 0 });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div ref={heroRef} className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-white leading-tight">
              Transformamos Negócios com{" "}
              <span className="text-gradient">Inteligência Artificial</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Soluções de IA personalizadas que otimizam processos, reduzem custos e maximizam resultados
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild variant="accent" size="lg" className="text-lg h-14 px-8">
                <Link to="/contato">
                  Fale com um Especialista
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg h-14 px-8 bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white">
                <Link to="/servicos">Conheça Nossas Soluções</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={aboutRef} className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-foreground">Quem Somos</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A TECTG é uma empresa de tecnologia especializada em desenvolver soluções de Inteligência Artificial que transformam a forma como empresas operam e crescem. Combinamos expertise técnica com visão estratégica para entregar resultados mensuráveis.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">50+</div>
                <div className="text-muted-foreground">Projetos Entregues</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">98%</div>
                <div className="text-muted-foreground">Satisfação dos Clientes</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">10+</div>
                <div className="text-muted-foreground">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços em Destaque */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={servicesRef} className="text-center space-y-4 mb-16">
            <h2 className="text-white">Nossas Soluções</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Oferecemos soluções tecnológicas completas para impulsionar o crescimento do seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedServiceCard
              icon={Brain}
              title="Inteligência Artificial"
              description="Automação inteligente, análise preditiva e machine learning personalizado para otimizar seus processos e gerar insights data-driven."
              gradient
              delay={0.1}
            />
            <AnimatedServiceCard
              icon={Code}
              title="Software Sob Medida"
              description="Plataformas web robustas, sistemas corporativos escaláveis e APIs seguras desenvolvidas com as mais modernas tecnologias."
              gradient
              delay={0.2}
            />
            <AnimatedServiceCard
              icon={Smartphone}
              title="Apps Mobile"
              description="Aplicativos nativos iOS e Android de alta performance com UX otimizada e design premium para máximo engajamento."
              gradient
              delay={0.3}
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="default" size="lg">
              <Link to="/servicos">
                Ver Todos os Serviços
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={benefitsRef} className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-foreground">Por que escolher a TECTG?</h2>
              <p className="text-lg text-muted-foreground">
                Entregamos soluções que geram resultados reais
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Redução de custos operacionais em até 40%",
                "Automação de processos repetitivos",
                "Aumento da produtividade da equipe",
                "Tomada de decisão baseada em dados",
                "Escalabilidade e segurança garantidas",
                "Suporte técnico especializado 24/7",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-secondary transition-colors">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 lg:py-32 gradient-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div ref={ctaRef} className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-primary">Pronto para Inovar?</h2>
            <p className="text-xl text-primary/80 leading-relaxed">
              Vamos conversar sobre como a TECTG pode transformar o seu negócio com soluções inteligentes e personalizadas.
            </p>
            <Button asChild variant="default" size="lg" className="text-lg h-14 px-8 bg-primary hover:bg-primary/90">
              <Link to="/contato">
                Vamos Conversar
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
