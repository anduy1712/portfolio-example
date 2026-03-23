function ProjectCard({
  badge,
  title,
  description,
  tags,
  href,
  linkLabel,
  imgSrc,
  imgAlt,
  rightIcon,
}: {
  badge: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  linkLabel: string;
  imgSrc: string;
  imgAlt: string;
  rightIcon: "open_in_new" | "bolt" | "link";
}) {
  return (
    <div className="group bg-surface-container-low rounded-xl overflow-hidden shadow-none border border-white/5 hover:translate-y-[-8px] transition-all duration-300">
      <div className="aspect-video bg-slate-800 relative overflow-hidden">
        <img
          className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100"
          data-alt={imgAlt}
          src={imgSrc}
          alt={imgAlt}
        />
        <div className="absolute top-4 right-4 bg-primary text-on-primary text-[10px] font-bold px-2 py-1 rounded">
          {badge}
        </div>
      </div>

      <div className="p-8">
        <h3 className="font-headline text-2xl font-bold mb-2 text-on-surface">{title}</h3>
        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((t) => (
            <span
              key={t}
              className="text-[10px] font-bold tracking-tighter uppercase text-primary border border-primary/20 px-2 py-0.5 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
          href={href}
        >
          {linkLabel}
          <span className="material-symbols-outlined text-sm" data-icon={rightIcon}>
            {rightIcon}
          </span>
        </a>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-surface-container-lowest" id="projects">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-primary font-label text-xs uppercase tracking-widest mb-2 block">Case Studies</span>
            <h2 className="font-headline text-5xl font-bold text-on-surface">Selected Works</h2>
          </div>
          <span className="hidden md:block text-outline font-label text-sm uppercase">03 / PROJECTS_ACTIVE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard
            badge="UNITY ENGINE"
            title="Nebula Quest"
            description="A 2D sci-fi RPG built with Unity. Explore procedurally generated galaxies with tactical turn-based combat."
            tags={["C#", "Unity"]}
            href="https://github.com/alexr/nebula"
            linkLabel="GITHUB.COM/NEBULA"
            imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuArXpRZSCWiMb5lD6ZK4sgGqYNig3Pj0k5emhwj7egDAr7hjqqzxcYwPHV_adAv_CBA3rpzhV139u8KsSOHsyRkYpG70raSGhum9ow-U7F4_dLgNnpwUCggO5nU0VhZJjzTknI7lNJ2ZOV07GDxcGyfp6ggeSvwa8Stb7i6LJA9LhJdOkU2HEysL-1eJaSZ4xVpBGL28hBlet2LmL7WlLaQD_R6UHDSEND4Ma1hZ2skNsZ-69XM1_zQvAwL92hFyx730eLZLJEMewQ"
            imgAlt="Sci-fi nebula landscape with futuristic spacecraft"
            rightIcon="open_in_new"
          />

          <ProjectCard
            badge="WEB GL"
            title="Cyber-Pulse"
            description="Fast-paced rhythm game pushing the boundaries of WebGL performance and audio synchronization."
            tags={["Next.js", "Three.js"]}
            href="https://cyber-pulse.dev"
            linkLabel="CYBER-PULSE.DEV"
            imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuB7s-t2rjKeWrtVnZY8jLPobJeDtY0VB6w5v3HcwFxDZbfmH8vqW9QDN7aSSFaRYYFT0VrXnu3YsFJHAR1pGWM7UMSKG6XDeEGvSmunWos8ac2bIoeIAdvUVRLETZSrbI8t_n5mJQz-ULjHH7qc-AsLVqFjTyKvRsv0UHia9pf071B9vOQRx7IKjot3Hw-HMb3wH8d3yJklvrzW2DOl0Mh0QFNOC_k8opSKtcy94VnEV5k1Imb0usUMG3TV2IZTvHGkZ_TS4hsE31c"
            imgAlt="Neon grid rhythm game interface abstract"
            rightIcon="bolt"
          />

          <ProjectCard
            badge="PWA"
            title="Hexagon Siege"
            description="Strategic board game featuring complex state management and real-time multiplayer capabilities."
            tags={["React", "TypeScript"]}
            href="https://hex-siege.app"
            linkLabel="HEX-SIEGE.APP"
            imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDT3K6PgIuz-rxLm9sxHJWi2S1FTlvH0WPF0Cm7WQ91L3UshgVHTozjfOfnZ6D0ClQ_bMIvCBS-B22WCEcYNg2kHUY59kUjg-D1j4Bb6McnT2bio_9RfX5NoegnHn8faECxklQRkQNXyL6AapeWMdji68mucQenbDU-lWutNfP2fj97odga9m-r03qsMoPu5H55y-UlMxEtJcwzHzeskGCOqUNPrgk_XNmP6SIgWB76XXuaCU9V1KfKZLUIOIbcR-xXsnwSCdhBMa8"
            imgAlt="Minimalist hexagon board game layout"
            rightIcon="link"
          />
        </div>
      </div>
    </section>
  );
}
