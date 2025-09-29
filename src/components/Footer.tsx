import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold">TECTG</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-accent transition-colors text-sm">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-white/70 hover:text-accent transition-colors text-sm">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-white/70 hover:text-accent transition-colors text-sm">
                  {t('nav.cases')}
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-white/70 hover:text-accent transition-colors text-sm">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos" className="text-white/70 hover:text-accent transition-colors text-sm">
                  {t('home.services.ai.title')}
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-white/70 hover:text-accent transition-colors text-sm">
                  {t('home.services.software.title')}
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-white/70 hover:text-accent transition-colors text-sm">
                  {t('home.services.mobile.title')}
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-white/70 hover:text-accent transition-colors text-sm">
                  {t('contact.form.projectTypes.consulting')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-white/70 text-sm">
                <Mail size={16} className="text-accent" />
                <a href="mailto:contato@tectg.com.br" className="hover:text-accent transition-colors">
                  contato@tectg.com.br
                </a>
              </li>
              <li className="flex items-center space-x-2 text-white/70 text-sm">
                <Phone size={16} className="text-accent" />
                <a href="tel:+5511999999999" className="hover:text-accent transition-colors">
                  +55 (11) 99999-9999
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-white/70 mb-3">{t('footer.followUs')}</p>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-white/60 text-sm">
            © {currentYear} TECTG. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
