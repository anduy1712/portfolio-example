"use client";

export default function ContactSection() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <span className="text-primary font-label text-xs uppercase tracking-widest mb-4 block">
            Connection Terminal
          </span>
          <h2 className="font-headline text-5xl font-bold mb-8 text-on-surface leading-tight">
            Let&apos;s build something <span className="text-primary">epic</span> together.
          </h2>

          <p className="text-on-surface-variant text-lg mb-12">
            I&apos;m currently available for freelance opportunities or full-time roles in game development and
            high-performance UI engineering.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined" data-icon="mail">
                  mail
                </span>
              </div>
              <div>
                <div className="text-[10px] font-bold text-outline uppercase tracking-widest">Protocol: Email</div>
                <div className="text-on-surface font-headline font-bold">hello@rivers.dev</div>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined" data-icon="location_on">
                  location_on
                </span>
              </div>
              <div>
                <div className="text-[10px] font-bold text-outline uppercase tracking-widest">Zone: Remote</div>
                <div className="text-on-surface font-headline font-bold">Pacific Standard Time</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-low p-10 rounded-xl border border-white/5">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-outline uppercase tracking-widest px-2">
                Identification / Name
              </label>
              <input
                className="w-full bg-surface-container-lowest border-0 rounded-sm focus:ring-0 focus:border-b-2 focus:border-primary transition-all p-4 text-on-surface placeholder-outline"
                placeholder="John Doe"
                type="text"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-outline uppercase tracking-widest px-2">
                Channel / Email
              </label>
              <input
                className="w-full bg-surface-container-lowest border-0 rounded-sm focus:ring-0 focus:border-b-2 focus:border-primary transition-all p-4 text-on-surface placeholder-outline"
                placeholder="john@example.com"
                type="email"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-outline uppercase tracking-widest px-2">
                Data / Message
              </label>
              <textarea
                className="w-full bg-surface-container-lowest border-0 rounded-sm focus:ring-0 focus:border-b-2 focus:border-primary transition-all p-4 text-on-surface resize-none placeholder-outline"
                placeholder="Your transmission here..."
                rows={4}
              />
            </div>

            <button
              className="w-full py-4 kinetic-gradient text-on-primary font-bold rounded-md hover:scale-[0.98] transition-transform flex items-center justify-center gap-2"
              type="submit"
            >
              TRANSMIT MESSAGE
              <span className="material-symbols-outlined text-sm" data-icon="send">
                send
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
