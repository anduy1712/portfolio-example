import { Gamepad, MoveRight, SquareTerminal } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[921px] flex flex-col justify-center px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-tertiary/20 rounded-full blur-[100px]" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div>
          <span className="text-primary font-label font-medium uppercase tracking-[0.2em] mb-4 block">
            System Initialized // Alex Rivers
          </span>

          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-on-surface mb-6">
            Game Developer
            <br />
            &amp; <span className="kinetic-text">UX Engineer</span>
          </h1>

          <p className="text-on-surface-variant max-w-xl text-lg md:text-xl leading-relaxed mb-10">
            Crafting immersive digital worlds with code and creative vision. I bridge the gap between complex mechanics
            and intuitive human interaction.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              className="px-8 py-4 kinetic-gradient text-on-primary font-bold rounded-md hover:scale-[1.02] active:scale-95 transition-transform flex items-center gap-2"
              href="#projects"
            >
              View Projects
              <MoveRight className="material-symbols-outlined text-sm" />
            </a>

            <a
              className="px-8 py-4 bg-surface-container-highest text-on-surface font-bold rounded-md hover:bg-surface-variant transition-all flex items-center gap-2"
              href="#contact"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="relative hidden lg:flex justify-center items-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 border border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

            <div className="absolute inset-8 rounded-full bg-surface-container-low border border-white/5 flex items-center justify-center overflow-hidden shadow-2xl">
              {/* <span
                className="material-symbols-outlined text-primary/40 text-[160px]"
                style={{ fontVariationSettings: "'wght' 100" }}
              >
                account_circle
              </span> */}
              <Image src="/avatar.jpeg" width={800} height={800} alt="avatar" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-surface-container-high rounded-xl border border-white/10 flex items-center justify-center shadow-lg transform rotate-12">
              <Gamepad className="material-symbols-outlined text-primary" width={36} height={36} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
