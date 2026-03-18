import { MapPin, Mail, Phone, Instagram, Facebook, Youtube } from "lucide-react";
import girautoLogo from "@/assets/girauto-logo.png";

const Footer = () => (
  <footer id="contato" className="bg-brand-black text-white py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <img src={girautoLogo} alt="Girauto" className="h-20 w-auto mb-4" />
          <p className="text-white/50 font-body text-sm leading-relaxed">
            O maior portal de veículos do Norte do Brasil. Conectando compradores e vendedores há mais de 12 anos.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Navegação</h4>
          <ul className="space-y-2 font-body text-sm">
            {["Início", "Veículos", "Anuncie Conosco", "Sobre"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(/ /g, '')}`} className="text-white/50 hover:text-brand-red transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Contato</h4>
          <ul className="space-y-3 font-body text-sm">
            <li className="flex items-center gap-2 text-white/50">
              <Phone size={14} className="text-brand-red" />
              (91) 3333-4444
            </li>
            <li className="flex items-center gap-2 text-white/50">
              <Mail size={14} className="text-brand-red" />
              contato@girauto.com.br
            </li>
            <li className="flex items-start gap-2 text-white/50">
              <MapPin size={14} className="text-brand-red mt-0.5" />
              Rondonia, RO — Região Norte
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Redes Sociais</h4>
          <div className="flex gap-3">
            {[
              { icon: Instagram, href: "#" },
              { icon: Facebook, href: "#" },
              { icon: Youtube, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/50 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-200"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="border-t border-white/10 pt-8 text-center">
        <p className="text-white/30 text-sm font-body">
          © {new Date().getFullYear()} Girauto. Todos os direitos reservados. Feito com ❤️ no Norte do Brasil.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
