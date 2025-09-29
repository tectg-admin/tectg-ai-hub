import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedServiceCard from "@/components/AnimatedServiceCard";
import { Brain, Code, Smartphone, ArrowRight, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
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
              {t('home.hero.title')}{" "}
              <span className="text-gradient">{t('home.hero.highlight')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild variant="accent" size="lg" className="text-lg h-14 px-8">
                <Link to="/contato">
                  {t('home.hero.cta1')}
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg h-14 px-8 bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white">
                <Link to="/servicos">{t('home.hero.cta2')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={aboutRef} className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-foreground">{t('home.about.title')}</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t('home.about.subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">50+</div>
                <div className="text-muted-foreground">{t('home.about.projects')}</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">98%</div>
                <div className="text-muted-foreground">{t('home.about.satisfaction')}</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">10+</div>
                <div className="text-muted-foreground">{t('home.about.experience')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços em Destaque */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={servicesRef} className="text-center space-y-4 mb-16">
            <h2 className="text-foreground">{t('home.services.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedServiceCard
              icon={Brain}
              title={t('home.services.ai.title')}
              description={t('home.services.ai.description')}
              gradient
              delay={0.1}
            />
            <AnimatedServiceCard
              icon={Code}
              title={t('home.services.software.title')}
              description={t('home.services.software.description')}
              gradient
              delay={0.2}
            />
            <AnimatedServiceCard
              icon={Smartphone}
              title={t('home.services.mobile.title')}
              description={t('home.services.mobile.description')}
              gradient
              delay={0.3}
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="default" size="lg">
              <Link to="/servicos">
                {t('home.services.viewAll')}
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
              <h2 className="text-foreground">{t('home.benefits.title')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('home.benefits.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                t('home.benefits.costReduction'),
                t('home.benefits.productivity'),
                t('home.benefits.insights'),
                t('home.benefits.support'),
                t('home.benefits.scalability'),
                t('home.benefits.innovation'),
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
            <h2 className="text-white">{t('home.cta.title')}</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              {t('home.cta.subtitle')}
            </p>
            <Button asChild variant="default" size="lg" className="text-lg h-14 px-8 bg-white text-accent hover:bg-white/90">
              <Link to="/contato">
                {t('home.cta.button')}
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
