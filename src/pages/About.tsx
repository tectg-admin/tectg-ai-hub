import { Target, Eye, Heart, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import tercioImg from "@/assets/tercio.png";
import guilhermeImg from "@/assets/guilherme.png";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="gradient-primary py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-white">{t('about.hero.title')}</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Nossa Jornada */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-center text-foreground">{t('about.journey.title')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              {t('about.journey.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-center text-foreground mb-16">{t('about.mission.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center space-y-4 hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                <Target className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t('about.mission.title')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.mission.description')}
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                <Eye className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t('about.vision.title')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.vision.description')}
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                <Heart className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t('about.values.title')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.values.description')}
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
              <h2 className="text-foreground">{t('about.founders.title')}</h2>
              <p className="text-lg text-muted-foreground">
                Líderes experientes com visão estratégica e expertise técnica
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Tércio */}
              <Card className="p-8 space-y-6 hover:shadow-xl transition-all">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                  <img src={tercioImg} alt="Tércio - Co-fundador" className="w-full h-full object-cover" />
                </div>
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">Tércio</h3>
                  <p className="text-accent font-semibold">{t('about.founders.tercio.role')}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Especialista em Inteligência Artificial e Machine Learning com mais de 10 anos de experiência. Formado em Ciência da Computação, liderou projetos de IA em grandes corporações antes de fundar a TECTG.
                  </p>
                  <div className="pt-4">
                    <p className="text-sm font-semibold text-foreground mb-2">{t('about.founders.tercio.specialty')}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {(t('about.founders.tercio.skills', { returnObjects: true }) as string[]).map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Guilherme */}
              <Card className="p-8 space-y-6 hover:shadow-xl transition-all">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                  <img src={guilhermeImg} alt="Guilherme - Co-fundador" className="w-full h-full object-cover" />
                </div>
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">Guilherme</h3>
                  <p className="text-accent font-semibold">{t('about.founders.guilherme.role')}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Engenheiro de Software com vasta experiência em desenvolvimento de sistemas escaláveis. MBA em Gestão de Projetos, especializado em transformação digital e estratégia de negócios.
                  </p>
                  <div className="pt-4">
                    <p className="text-sm font-semibold text-foreground mb-2">{t('about.founders.guilherme.specialty')}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {(t('about.founders.guilherme.skills', { returnObjects: true }) as string[]).map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
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
