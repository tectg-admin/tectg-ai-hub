import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Clock, Award, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Cases = () => {
  const { t } = useTranslation();
  
  const cases = [
    {
      title: t('cases.case1.title'),
      client: "E-commerce",
      category: t('home.services.ai.title'),
      description: t('cases.case1.description'),
      results: [
        { icon: TrendingUp, label: "ROI", value: t('cases.case1.result') },
        { icon: Clock, label: t('cases.testimonials.title'), value: "-70%" },
        { icon: Award, label: t('home.about.satisfaction'), value: "4.8/5" },
      ],
      technologies: t('cases.case1.technologies', { returnObjects: true }) as string[],
    },
    {
      title: t('cases.case2.title'),
      client: "Logística",
      category: "Mobile",
      description: t('cases.case2.description'),
      results: [
        { icon: TrendingUp, label: t('home.benefits.productivity'), value: "+45%" },
        { icon: Clock, label: "Economia", value: t('cases.case2.result') },
        { icon: Award, label: "Rating", value: "4.9/5" },
      ],
      technologies: t('cases.case2.technologies', { returnObjects: true }) as string[],
    },
    {
      title: t('cases.case3.title'),
      client: "Indústria",
      category: t('home.services.software.title'),
      description: t('cases.case3.description'),
      results: [
        { icon: TrendingUp, label: "Eficiência", value: t('cases.case3.result') },
        { icon: Clock, label: "Tempo", value: "15h/sem" },
        { icon: Award, label: "Processos", value: "32" },
      ],
      technologies: t('cases.case3.technologies', { returnObjects: true }) as string[],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="gradient-primary py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-white">{t('cases.hero.title')}</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {t('cases.hero.subtitle')}
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
            <h2 className="text-center text-foreground mb-12">{t('cases.testimonials.title')}</h2>
            <div className="space-y-8">
              {[
                {
                  quote: t('cases.testimonials.testimonial1.text'),
                  author: t('cases.testimonials.testimonial1.author'),
                  role: t('cases.testimonials.testimonial1.role'),
                },
                {
                  quote: t('cases.testimonials.testimonial2.text'),
                  author: t('cases.testimonials.testimonial2.author'),
                  role: t('cases.testimonials.testimonial2.role'),
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
            <h2 className="text-white">{t('cases.cta.title')}</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Vamos conversar sobre como podemos ajudar seu negócio a alcançar resultados extraordinários
            </p>
            <Button asChild variant="default" size="lg" className="text-lg h-14 px-8 bg-white text-accent hover:bg-white/90">
              <Link to="/contato">
                {t('cases.cta.button')}
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
