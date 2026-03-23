export default function AboutSkillsBento() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="about">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-surface-container-low p-10 rounded-xl relative overflow-hidden group border border-white/5">
          <span className="text-primary font-label text-xs uppercase tracking-widest mb-4 block">
            Core Philosophy
          </span>

          <h2 className="font-headline text-4xl font-bold mb-6 text-on-surface">
            Interactive Storytelling via{' '}
            <span className="italic text-primary">High-Performance</span>{' '}
            Engineering
          </h2>

          <p className="text-on-surface-variant text-lg leading-relaxed max-w-3xl">
            I blend high-performance engineering with interactive storytelling to
            create unique gaming experiences. My approach treats every line of
            code as a brushstroke in a larger digital canvas, ensuring that
            every frame served is as meaningful as it is functional.
          </p>

          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <span
              className="material-symbols-outlined text-8xl"
              data-icon="deployed_code"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              deployed_code
            </span>
          </div>
        </div>

        <div
          className="md:col-span-4 bg-surface-container-lowest p-10 rounded-xl shadow-none border border-white/5 flex flex-col justify-between"
          id="skills"
        >
          <div>
            <span className="text-primary font-label text-xs uppercase tracking-widest mb-4 block">
              Tech Stack
            </span>
            <h3 className="font-headline text-2xl font-bold mb-8 text-on-surface">
              System Architecture
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-medium">
              React
            </span>
            <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-medium">
              TypeScript
            </span>
            <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-medium">
              Next.js
            </span>
            <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-medium">
              C#
            </span>
            <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-medium">
              Unity
            </span>
            <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-medium">
              Three.js
            </span>
            <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-medium">
              GLSL
            </span>
            <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-medium">
              PostgreSQL
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

