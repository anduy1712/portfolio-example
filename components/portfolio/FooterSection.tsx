export default function FooterSection() {
  return (
    <footer className="w-full py-12 bg-surface-container-highest border-t border-outline/20">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8">
        <div className="font-label text-sm uppercase tracking-widest text-on-surface-variant mb-8 md:mb-0">
          © 2024 DIGITAL KINETICIST. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-8 font-label text-sm uppercase tracking-widest">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#"
          >
            GitHub
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#"
          >
            Twitter
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#"
          >
            Itch.io
          </a>
        </div>
      </div>
    </footer>
  )
}

