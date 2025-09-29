import { Target, Eye, Heart, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="gradient-primary py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-white">Sobre a TECTG</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Somos especialistas em transformar desafios em soluções através da tecnologia e inovação
            </p>
          </div>
        </div>
      </section>

      {/* Nossa Jornada */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-center text-foreground">Nossa Jornada</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Fundada por profissionais apaixonados por tecnologia, a TECTG nasceu com o propósito de democratizar o acesso à Inteligência Artificial e soluções tecnológicas de ponta. Ao longo dos anos, construímos uma trajetória sólida baseada em inovação, excelência técnica e resultados mensuráveis para nossos clientes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Nossa missão é tornar a tecnologia acessível e eficiente, transformando ideias em produtos digitais que impactam positivamente negócios e pessoas.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-center text-foreground mb-16">Nossos Pilares</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center space-y-4 hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                <Target className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Desenvolver soluções tecnológicas inovadoras que transformam negócios e maximizam resultados através da Inteligência Artificial e desenvolvimento de software de excelência.
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                <Eye className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência em soluções de IA e desenvolvimento de software no Brasil, reconhecida pela qualidade técnica, inovação e impacto positivo nos negócios dos nossos clientes.
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                <Heart className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Excelência técnica, inovação constante, transparência, compromisso com resultados e foco na satisfação do cliente em cada projeto que desenvolvemos.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Fundadores */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <div className="flex justify-center mb-6">
                <Users className="text-accent" size={48} />
              </div>
              <h2 className="text-foreground">Nossos Fundadores</h2>
              <p className="text-lg text-muted-foreground">
                Líderes experientes com visão estratégica e expertise técnica
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Tércio */}
              <Card className="p-8 space-y-6 hover:shadow-xl transition-all">
                <div className="w-32 h-32 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <span className="text-5xl font-bold text-accent">T</span>
                </div>
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">Tércio</h3>
                  <p className="text-accent font-semibold">Co-Fundador & CTO</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Especialista em Inteligência Artificial e Machine Learning com mais de 10 anos de experiência. Formado em Ciência da Computação, liderou projetos de IA em grandes corporações antes de fundar a TECTG.
                  </p>
                  <div className="pt-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Especialidades:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">IA & ML</span>
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Deep Learning</span>
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Python</span>
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">TensorFlow</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Guilherme */}
              <Card className="p-8 space-y-6 hover:shadow-xl transition-all">
                <div className="w-32 h-32 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <span className="text-5xl font-bold text-accent">G</span>
                </div>
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">Guilherme</h3>
                  <p className="text-accent font-semibold">Co-Fundador & CEO</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Engenheiro de Software com vasta experiência em desenvolvimento de sistemas escaláveis. MBA em Gestão de Projetos, especializado em transformação digital e estratégia de negócios.
                  </p>
                  <div className="pt-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Especialidades:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Full Stack</span>
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Cloud</span>
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">DevOps</span>
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Gestão</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
