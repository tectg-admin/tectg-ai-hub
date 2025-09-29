import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast.error(t('contact.form.error'));
      return;
    }

    // Aqui você pode integrar com seu backend ou serviço de email
    console.log("Form submitted:", formData);
    toast.success(t('contact.form.success'));
    
    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      projectType: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="gradient-primary py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-white">{t('contact.hero.title')}</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">{t('contact.info.title')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nossa equipe está pronta para entender suas necessidades e apresentar as melhores soluções para o seu negócio.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t('contact.info.title')}</h3>
                      <a href={`mailto:${t('contact.info.email')}`} className="text-muted-foreground hover:text-accent transition-colors">
                        {t('contact.info.email')}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Telefone / WhatsApp</h3>
                      <a href={`tel:${t('contact.info.phone')}`} className="text-muted-foreground hover:text-accent transition-colors">
                        {t('contact.info.phone')}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t('contact.info.location')}</h3>
                      <p className="text-muted-foreground">{t('contact.info.location')}</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-2">Horário de Atendimento:</p>
                <p className="text-foreground font-medium">Segunda a Sexta: 9h às 18h</p>
              </div>
            </div>

            {/* Formulário */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('contact.form.name')} *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder={t('contact.form.name')}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact.form.email')} *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder={t('contact.form.email')}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">{t('contact.form.company')}</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder={t('contact.form.company')}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">{t('contact.form.projectType')}</Label>
                    <Select value={formData.projectType} onValueChange={(value) => handleChange("projectType", value)}>
                      <SelectTrigger id="projectType">
                        <SelectValue placeholder={t('contact.form.projectType')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ia">{t('contact.form.projectTypes.ai')}</SelectItem>
                        <SelectItem value="software">{t('contact.form.projectTypes.software')}</SelectItem>
                        <SelectItem value="mobile">{t('contact.form.projectTypes.mobile')}</SelectItem>
                        <SelectItem value="consultoria">{t('contact.form.projectTypes.consulting')}</SelectItem>
                        <SelectItem value="outro">{t('contact.form.projectTypes.other')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.form.message')} *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder={t('contact.form.message')}
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" variant="accent" size="lg" className="w-full md:w-auto">
                    <Send className="mr-2" size={18} />
                    {t('contact.form.submit')}
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    * Campos obrigatórios. Suas informações são confidenciais e não serão compartilhadas.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Alternativo */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-foreground">{t('contact.cta.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('contact.cta.description')}
            </p>
            <Button asChild variant="accent" size="lg">
              <a
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20TECTG."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2" size={18} />
                {t('contact.cta.button')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
