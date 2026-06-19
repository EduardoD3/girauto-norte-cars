import { Youtube, ExternalLink, Play, Music2, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@girautooficial";
const YOUTUBE_CHANNEL_EMBED =
  "https://www.youtube.com/embed?listType=user_uploads&list=girautooficial";

const TIKTOK_PROFILE_URL = "https://www.tiktok.com/@girautooficial";
const TIKTOK_HANDLE = "@girautooficial";

const tiktokVideos = [
  {
    id: "7643937608468303112",
    title: "Bastidores Girauto",
  },
  {
    id: "7644591988725107976",
    title: "Novidades do dia",
  },
  {
    id: "7641593794030275858",
    title: "Destaque automotivo",
  },
];

const GirautoTV = () => {
  return (
    <section id="girauto-tv" className="relative bg-brand-black overflow-hidden">
      {/* ambient glow */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-brand-red/15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-brand-red/10 blur-3xl rounded-full pointer-events-none" />

      {/* ============== TIKTOK ============== */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest font-body mb-3 bg-gradient-to-r from-[#25F4EE] via-white to-[#FE2C55] bg-clip-text text-transparent">
              <Music2 size={16} className="text-[#FE2C55]" />
              Girauto no TikTok
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl text-white">
              Conteúdo rápido,{" "}
              <span className="bg-gradient-to-r from-[#25F4EE] to-[#FE2C55] bg-clip-text text-transparent">
                direto ao ponto
              </span>
            </h2>
            <p className="mt-4 text-white/60 font-body max-w-2xl">
              Os melhores cortes, bastidores e novidades automotivas no nosso TikTok oficial{" "}
              <span className="text-white font-semibold">{TIKTOK_HANDLE}</span>.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="self-start md:self-auto relative overflow-hidden rounded-xl font-bold text-white bg-brand-black border border-white/15 hover:bg-white/5"
          >
            <a href={TIKTOK_PROFILE_URL} target="_blank" rel="noopener noreferrer">
              <span className="absolute inset-0 bg-gradient-to-r from-[#25F4EE]/20 via-transparent to-[#FE2C55]/20" />
              <Music2 size={18} className="mr-2 relative" />
              <span className="relative">Seguir no TikTok</span>
              <ExternalLink size={16} className="ml-2 opacity-80 relative" />
            </a>
          </Button>
        </div>

        {/* TikTok video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiktokVideos.map((v) => (
            <article
              key={v.id}
              className="group relative rounded-3xl p-[2px] bg-gradient-to-br from-[#25F4EE]/60 via-white/10 to-[#FE2C55]/60 hover:from-[#25F4EE] hover:to-[#FE2C55] transition-all duration-500 animate-fade-in"
            >
              <div className="relative rounded-[22px] bg-brand-black overflow-hidden">
                {/* Header bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#25F4EE] to-[#FE2C55] flex items-center justify-center">
                      <Music2 size={14} className="text-white" />
                    </div>
                    <div className="leading-tight">
                      <p className="text-white text-xs font-bold font-body">{TIKTOK_HANDLE}</p>
                      <p className="text-white/40 text-[10px] font-body">TikTok oficial</p>
                    </div>
                  </div>
                  <a
                    href={`${TIKTOK_PROFILE_URL}/video/${v.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition-colors"
                    aria-label="Abrir no TikTok"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Embed - vertical 9:16 */}
                <div className="relative bg-black" style={{ aspectRatio: "9 / 16" }}>
                  <iframe
                    src={`https://www.tiktok.com/embed/v2/${v.id}?lang=pt-BR`}
                    title={v.title}
                    allow="autoplay; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>

                {/* Footer actions */}
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-4 text-white/50 text-xs font-body">
                    <span className="flex items-center gap-1.5">
                      <Heart size={14} className="text-[#FE2C55]" />
                      Curtir
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageCircle size={14} className="text-[#25F4EE]" />
                      Comentar
                    </span>
                  </div>
                  <a
                    href={`${TIKTOK_PROFILE_URL}/video/${v.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white text-xs font-semibold font-body"
                  >
                    Ver no app →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* divider */}
      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      {/* ============== YOUTUBE ============== */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-brand-red text-sm font-semibold uppercase tracking-widest font-body mb-3">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            Girauto no YouTube
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white">
            Acompanhe nosso <span className="text-brand-red">canal oficial</span>
          </h2>
          <p className="mt-4 text-white/60 font-body max-w-2xl mx-auto">
            Programas completos, testes, projetos e os destaques do programa de TV — tudo no canal
            oficial Girauto no YouTube.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 items-stretch">
          {/* Player */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black shadow-red/20 shadow-2xl">
            <div className="aspect-video w-full">
              <iframe
                src={YOUTUBE_CHANNEL_EMBED}
                title="Canal Girauto no YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Channel card */}
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 flex flex-col justify-between backdrop-blur-sm">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#FF0000] flex items-center justify-center mb-5 shadow-lg shadow-red-500/30">
                <Youtube className="text-white" size={28} />
              </div>
              <h3 className="font-display font-black text-white text-2xl mb-2">
                Canal Girauto
              </h3>
              <p className="text-white/60 font-body text-sm leading-relaxed mb-6">
                Inscreva-se para receber as melhores reportagens, testes e cobertura completa do
                universo automotivo da região Norte.
              </p>

              <ul className="space-y-2.5 mb-8">
                {[
                  "Programas semanais completos",
                  "Testes de carros e motos",
                  "Bastidores e cobertura de eventos",
                  "Conteúdo exclusivo do programa de TV",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-white/75 font-body text-sm"
                  >
                    <Play size={14} className="text-brand-red mt-1 flex-shrink-0" fill="currentColor" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full bg-[#FF0000] hover:bg-[#cc0000] text-white rounded-xl font-bold"
            >
              <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                <Youtube size={20} className="mr-2" />
                Acessar canal no YouTube
                <ExternalLink size={16} className="ml-2 opacity-80" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      {/* ============== TIKTOK ============== */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest font-body mb-3 bg-gradient-to-r from-[#25F4EE] via-white to-[#FE2C55] bg-clip-text text-transparent">
              <Music2 size={16} className="text-[#FE2C55]" />
              Girauto no TikTok
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl text-white">
              Conteúdo rápido,{" "}
              <span className="bg-gradient-to-r from-[#25F4EE] to-[#FE2C55] bg-clip-text text-transparent">
                direto ao ponto
              </span>
            </h2>
            <p className="mt-4 text-white/60 font-body max-w-2xl">
              Os melhores cortes, bastidores e novidades automotivas no nosso TikTok oficial{" "}
              <span className="text-white font-semibold">{TIKTOK_HANDLE}</span>.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="self-start md:self-auto relative overflow-hidden rounded-xl font-bold text-white bg-brand-black border border-white/15 hover:bg-white/5"
          >
            <a href={TIKTOK_PROFILE_URL} target="_blank" rel="noopener noreferrer">
              <span className="absolute inset-0 bg-gradient-to-r from-[#25F4EE]/20 via-transparent to-[#FE2C55]/20" />
              <Music2 size={18} className="mr-2 relative" />
              <span className="relative">Seguir no TikTok</span>
              <ExternalLink size={16} className="ml-2 opacity-80 relative" />
            </a>
          </Button>
        </div>

        {/* TikTok video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiktokVideos.map((v) => (
            <article
              key={v.id}
              className="group relative rounded-3xl p-[2px] bg-gradient-to-br from-[#25F4EE]/60 via-white/10 to-[#FE2C55]/60 hover:from-[#25F4EE] hover:to-[#FE2C55] transition-all duration-500 animate-fade-in"
            >
              <div className="relative rounded-[22px] bg-brand-black overflow-hidden">
                {/* Header bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#25F4EE] to-[#FE2C55] flex items-center justify-center">
                      <Music2 size={14} className="text-white" />
                    </div>
                    <div className="leading-tight">
                      <p className="text-white text-xs font-bold font-body">{TIKTOK_HANDLE}</p>
                      <p className="text-white/40 text-[10px] font-body">TikTok oficial</p>
                    </div>
                  </div>
                  <a
                    href={`${TIKTOK_PROFILE_URL}/video/${v.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition-colors"
                    aria-label="Abrir no TikTok"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Embed - vertical 9:16 */}
                <div className="relative bg-black" style={{ aspectRatio: "9 / 16" }}>
                  <iframe
                    src={`https://www.tiktok.com/embed/v2/${v.id}?lang=pt-BR`}
                    title={v.title}
                    allow="autoplay; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>

                {/* Footer actions */}
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-4 text-white/50 text-xs font-body">
                    <span className="flex items-center gap-1.5">
                      <Heart size={14} className="text-[#FE2C55]" />
                      Curtir
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageCircle size={14} className="text-[#25F4EE]" />
                      Comentar
                    </span>
                  </div>
                  <a
                    href={`${TIKTOK_PROFILE_URL}/video/${v.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white text-xs font-semibold font-body"
                  >
                    Ver no app →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GirautoTV;
