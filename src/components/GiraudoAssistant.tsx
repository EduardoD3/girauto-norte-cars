import { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle, ArrowLeft } from "lucide-react";
import giraudoMascot from "@/assets/giraudo-mascot.png";

interface ChatMessage {
  id: string;
  from: "bot" | "user";
  text: string;
}

interface FAQ {
  q: string;
  a: string;
}

const FAQS: FAQ[] = [
  {
    q: "Como faço para anunciar meu veículo?",
    a: "É simples! Vá até a seção 'Anuncie' aqui no site, preencha o formulário com os dados do seu carro ou moto e nossa equipe entrará em contato para finalizar a publicação. 🚗",
  },
  {
    q: "Quanto custa anunciar no Girauto?",
    a: "Temos planos acessíveis para todos os bolsos! Para saber valores e condições atualizadas, fale com um atendente pelo WhatsApp. 💰",
  },
  {
    q: "Como entro em contato com o vendedor de um veículo?",
    a: "Em cada anúncio você encontra botões de contato direto via WhatsApp e telefone. É só clicar e falar com o vendedor! 📱",
  },
  {
    q: "Os veículos passam por verificação?",
    a: "Sim! Todos os anúncios passam por uma análise antes de serem publicados, garantindo mais segurança e confiança para você. ✅",
  },
  {
    q: "O Girauto tem programa de TV?",
    a: "Sim! Somos vinculados a um programa de TV regional do Norte do Brasil. Acompanhe nosso canal no YouTube para conferir os episódios! 📺",
  },
  {
    q: "Vocês atendem em qual região?",
    a: "Atendemos toda a região Norte do Brasil, com foco em Rondônia e estados vizinhos. 🌎",
  },
];

const WHATSAPP_NUMBER = "5569992370987";

const GiraudoAssistant = () => {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      from: "bot",
      text: "E aí, parceiro! 💪 Eu sou o Giraudo, seu assistente do Girauto. Como posso te ajudar hoje?",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(false), 8000);
    return () => clearTimeout(t);
  }, []);

  const addMessage = (msg: Omit<ChatMessage, "id">) => {
    setMessages((prev) => [...prev, { ...msg, id: `${Date.now()}-${Math.random()}` }]);
  };

  const handleFAQ = (faq: FAQ) => {
    addMessage({ from: "user", text: faq.q });
    setTimeout(() => addMessage({ from: "bot", text: faq.a }), 400);
  };

  const handleSendToAttendant = () => {
    const userMessages = messages.filter((m) => m.from === "user").map((m) => m.text);
    const lastInput = input.trim();
    const conversationSummary =
      userMessages.length > 0
        ? `Olá! Estava conversando com o Giraudo no site e gostaria de falar com um atendente.\n\nMinhas mensagens:\n${userMessages
            .map((m, i) => `${i + 1}. ${m}`)
            .join("\n")}${lastInput ? `\n\nÚltima dúvida: ${lastInput}` : ""}`
        : lastInput
        ? `Olá! Vim do site Girauto. ${lastInput}`
        : "Olá! Vim do site Girauto e gostaria de falar com um atendente.";

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(conversationSummary)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSendInput = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    addMessage({ from: "user", text });
    setInput("");
    setTimeout(() => {
      addMessage({
        from: "bot",
        text: "Anotei aqui! 📝 Para uma resposta personalizada, clique em 'Falar com atendente' e te conecto direto no WhatsApp com nossa equipe.",
      });
    }, 500);
  };

  return (
    <>
      {/* Floating Mascot Button */}
      {!open && (
        <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end gap-2">
          {showBubble && (
            <div className="relative max-w-[220px] rounded-2xl rounded-br-sm bg-white px-4 py-3 shadow-xl animate-fade-in border border-brand-red/20">
              <button
                onClick={() => setShowBubble(false)}
                className="absolute -top-2 -right-2 w-5 h-5 bg-brand-black text-white rounded-full flex items-center justify-center text-xs hover:bg-brand-red transition"
                aria-label="Fechar"
              >
                <X size={12} />
              </button>
              <p className="text-sm font-semibold text-brand-black leading-tight">
                Oi! 👋 Sou o <span className="text-brand-red">Giraudo</span>!
              </p>
              <p className="text-xs text-brand-black/70 mt-1">Clique aqui se precisar de ajuda!</p>
            </div>
          )}

          <button
            onClick={() => setOpen(true)}
            className="group relative animate-bounce-slow"
            aria-label="Abrir chat com Giraudo"
          >
            <div className="absolute inset-0 rounded-full bg-brand-red/40 blur-2xl scale-90 group-hover:scale-110 transition-transform" />
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-brand-red to-brand-black p-1 shadow-2xl ring-4 ring-white/10 hover:scale-110 active:scale-95 transition-transform duration-200">
              <div className="w-full h-full rounded-full overflow-hidden bg-white/5 flex items-center justify-center">
                <img
                  src={giraudoMascot}
                  alt="Giraudo - Assistente Virtual"
                  className="w-full h-full object-cover object-top scale-125"
                />
              </div>
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-red border-2 border-white" />
              </span>
            </div>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 sm:w-[380px] sm:h-[600px] sm:max-h-[85vh] flex flex-col bg-white sm:rounded-3xl shadow-2xl overflow-hidden animate-scale-in border border-brand-red/20">
          {/* Header */}
          <div className="relative bg-gradient-to-br from-brand-black via-brand-black to-brand-red/80 px-4 py-4 flex items-center gap-3">
            <button
              onClick={() => setOpen(false)}
              className="sm:hidden text-white/80 hover:text-white p-1"
              aria-label="Voltar"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="w-12 h-12 rounded-full bg-white/10 ring-2 ring-brand-red overflow-hidden flex-shrink-0">
              <img src={giraudoMascot} alt="Giraudo" className="w-full h-full object-cover object-top scale-125" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-bold text-white text-base">Giraudo</h3>
              <p className="text-xs text-white/70 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Online agora
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="hidden sm:flex text-white/70 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition"
              aria-label="Fechar chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.from === "user"
                      ? "bg-brand-red text-white rounded-br-sm"
                      : "bg-white text-brand-black border border-gray-200 rounded-bl-sm shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Quick FAQ chips */}
            <div className="pt-2">
              <p className="text-xs text-gray-500 font-semibold mb-2 px-1">Perguntas frequentes:</p>
              <div className="flex flex-wrap gap-2">
                {FAQS.map((faq) => (
                  <button
                    key={faq.q}
                    onClick={() => handleFAQ(faq)}
                    className="text-xs px-3 py-1.5 rounded-full bg-white border border-brand-red/30 text-brand-black hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-200 hover:scale-105"
                  >
                    {faq.q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 bg-white">
            <button
              onClick={handleSendToAttendant}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-3 transition"
            >
              <MessageCircle size={18} />
              Falar com atendente
            </button>

            <form onSubmit={handleSendInput} className="flex items-center gap-2 p-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua dúvida..."
                className="flex-1 px-4 py-2.5 rounded-full border border-gray-200 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20 text-sm bg-gray-50"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center hover:bg-brand-red-light transition disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
                aria-label="Enviar"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default GiraudoAssistant;
