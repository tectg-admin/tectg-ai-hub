import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Code, Smartphone, CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: Brain,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      benefits: t('services.ai.benefits', { returnObjects: true }) as string[],
      technologies: t('services.ai.technologies', { returnObjects: true }) as string[],
    },
    {
      icon: Code,
      title: t('services.software.title'),
      description: t('services.software.description'),
      benefits: t('services.software.benefits', { returnObjects: true }) as string[],
      technologies: t('services.software.technologies', { returnObjects: true }) as string[],
    },
    {
      icon: Smartphone,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      benefits: t('services.mobile.benefits', { returnObjects: true }) as string[],
      technologies: t('services.mobile.technologies', { returnObjects: true }) as string[],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="gradient-primary py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-white">{t('services.hero.title')}</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {t('services.hero.subtitle')}
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
                    <h3 className="text-xl font-bold text-foreground">{t('services.process.title')}:</h3>
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
            <h2 className="text-foreground">{t('services.process.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "01", title: t('services.process.discovery.title'), description: t('services.process.discovery.description') },
                { number: "02", title: t('services.process.planning.title'), description: t('services.process.planning.description') },
                { number: "03", title: t('services.process.development.title'), description: t('services.process.development.description') },
                { number: "04", title: t('services.process.delivery.title'), description: t('services.process.delivery.description') },
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
            <h2 className="text-white">{t('services.cta.title')}</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              {t('services.cta.description')}
            </p>
            <Button asChild variant="default" size="lg" className="text-lg h-14 px-8 bg-white text-accent hover:bg-white/90">
              <Link to="/contato">
                {t('services.cta.button')}
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
