import { useState } from "react";
import { Send, CheckCircle, Tv, Globe, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  { icon: Tv, title: "Exposição na TV", description: "Seu veículo no programa mais assistido de veículos do Norte" },
  { icon: Globe, title: "Divulgação online", description: "Anúncio no site com fotos profissionais e destaque" },
  { icon: Users, title: "Alcance regional", description: "Milhares de compradores em toda a região Norte" },
  { icon: Star, title: "Credibilidade", description: "Selo de confiança Girauto em seu anúncio" },
];

const AdvertiseSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", vehicle: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "69981126381"; // coloque seu número com DDI + DDD (sem + ou espaços)

    const text = `Olá! Gostaria de anunciar um veículo.

📌 Nome: ${form.name}
📞 Telefone: ${form.phone}
🚗 Veículo: ${form.vehicle}
📝 Mensagem: ${form.message || "Não informada"}
`;

    const encodedText = encodeURIComponent(text);

    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(url, "_blank");

    setSubmitted(true);
    toast({
      title: "Redirecionando para o WhatsApp!",
      description: "Finalize o envio por lá.",
    });
  };

  return (
    <section id="anuncie" className="py-16 md:py-24 bg-brand-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <span className="inline-block text-brand-red text-sm font-semibold uppercase tracking-widest font-body mb-3">
            Para Anunciantes
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white">
            Anuncie <span className="text-brand-red">seu veículo</span>
          </h2>
          <p className="mt-4 text-white/60 font-body max-w-xl mx-auto">
            Alcance milhares de compradores em todo o Norte do Brasil. Exposição garantida na TV e no site.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-brand-red/30 transition-all duration-200"
              >
                <b.icon size={28} className="text-brand-red mb-3" />
                <h3 className="font-display font-bold text-white text-base mb-1">{b.title}</h3>
                <p className="text-white/50 text-sm font-body">{b.description}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          {submitted ? (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center animate-fade-in">
              <CheckCircle size={48} className="mx-auto text-[#25D366] mb-4" />
              <h3 className="font-display font-bold text-white text-xl mb-2">Mensagem enviada!</h3>
              <p className="text-white/60 font-body">Nossa equipe entrará em contato pelo telefone informado.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
              {(["name", "phone", "vehicle"] as const).map((field) => (
                <div key={field}>
                  <label className="text-xs font-semibold text-white/60 uppercase tracking-wide mb-1.5 block font-body">
                    {field === "name" ? "Nome completo" : field === "phone" ? "Telefone / WhatsApp" : "Veículo"}
                  </label>
                  <input
                    required
                    type={field === "phone" ? "tel" : "text"}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    placeholder={
                      field === "name" ? "Seu nome" : field === "phone" ? "(91) 99999-9999" : "Ex: Corolla 2023"
                    }
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/30 font-body text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red/50 transition-all"
                  />
                </div>
              ))}
              <div>
                <label className="text-xs font-semibold text-white/60 uppercase tracking-wide mb-1.5 block font-body">
                  Mensagem (opcional)
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Detalhes adicionais..."
                  rows={3}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/30 font-body text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red/50 transition-all resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-brand-red hover:bg-brand-red-light text-primary-foreground font-bold py-4 h-14 rounded-xl text-base shadow-red transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Send size={18} className="mr-2" />
                Enviar Solicitação
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdvertiseSection;
