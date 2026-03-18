import { Tv, Heart, Shield } from "lucide-react";

const AboutSection = () => (
  <section id="sobre" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-brand-red text-sm font-semibold uppercase tracking-widest font-body mb-3">
            Quem Somos
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-foreground">
            Sobre o <span className="text-brand-red">Girauto</span>
          </h2>
        </div>

        <div className="bg-card border border-brand-border rounded-2xl p-8 md:p-12 shadow-card mb-12">
          <p className="text-lg font-body text-muted-foreground leading-relaxed mb-6">
            O <strong className="text-foreground">Girauto</strong> é o programa de TV referência em compra e venda de veículos no Norte do Brasil. Há mais de 12 anos, conectamos vendedores e compradores com transparência, credibilidade e agilidade.
          </p>
          <p className="text-lg font-body text-muted-foreground leading-relaxed">
            Nossa plataforma online amplia o alcance dos nossos anunciantes, oferecendo exposição digital além da televisão. Cada veículo passa por uma curadoria para garantir segurança e confiança para quem compra.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Tv, title: "Presença na TV", desc: "Programa consolidado há 12+ anos em toda região Norte" },
            { icon: Heart, title: "Conexão Regional", desc: "Entendemos as necessidades do mercado automotivo local" },
            { icon: Shield, title: "Confiança", desc: "Veículos verificados e anunciantes de credibilidade" },
          ].map((item) => (
            <div key={item.title} className="text-center bg-card border border-brand-border rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-200">
              <div className="w-14 h-14 mx-auto bg-brand-red/10 rounded-2xl flex items-center justify-center mb-4">
                <item.icon size={24} className="text-brand-red" />
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
