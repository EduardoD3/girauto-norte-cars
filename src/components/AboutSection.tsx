import { Tv, Heart, Shield, Radio } from "lucide-react";

const AboutSection = () => (
  <section id="sobre" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-brand-red text-sm font-semibold uppercase tracking-widest font-body mb-3">
            Quem Somos
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-foreground">
            Sobre o <span className="text-brand-red">Girauto</span>
          </h2>
        </div>

        {/* Main Card */}
        <div className="relative bg-card border border-brand-border rounded-2xl p-8 md:p-12 shadow-card mb-12 overflow-hidden">
          
          {/* Glow decor */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-red/10 blur-3xl rounded-full" />

          {/* Badge TV */}
          <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 text-brand-red px-4 py-2 rounded-full text-xs font-semibold mb-6">
            <Radio size={14} />
            Exibido na RTN TV • Canal 21.1 • Rondônia
          </div>

          <p className="text-lg font-body text-muted-foreground leading-relaxed mb-6">
            O <strong className="text-foreground">Girauto</strong> é um dos principais programas de TV voltados ao mercado automotivo no Norte do Brasil, com forte atuação em Rondônia através da <strong className="text-foreground">RTN TV</strong>.
          </p>

          <p className="text-lg font-body text-muted-foreground leading-relaxed mb-6">
            Há mais de <strong className="text-foreground">12 anos</strong>, conectamos compradores e vendedores com credibilidade, visibilidade e resultados reais, unindo televisão e digital em uma única plataforma.
          </p>

          <p className="text-lg font-body text-muted-foreground leading-relaxed">
            Nossa missão é facilitar negócios com segurança, oferecendo aos anunciantes exposição estratégica e ao público as melhores oportunidades da região.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              icon: Tv, 
              title: "Na TV e no Digital", 
              desc: "Transmitido pela RTN TV e ampliado pela plataforma online" 
            },
            { 
              icon: Heart, 
              title: "Foco Regional", 
              desc: "Especialistas no mercado automotivo de Rondônia e Norte do Brasil" 
            },
            { 
              icon: Shield, 
              title: "Segurança", 
              desc: "Anúncios confiáveis com curadoria e credibilidade" 
            },
          ].map((item) => (
            <div 
              key={item.title} 
              className="group text-center bg-card border border-brand-border rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto bg-brand-red/10 group-hover:bg-brand-red/20 rounded-2xl flex items-center justify-center mb-4 transition-all">
                <item.icon size={24} className="text-brand-red" />
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;