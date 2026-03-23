import { resume } from "../data/resume";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center  pt-20 pb-16 px-6">
      <div className="text-center">
        {/* Avatar */}
        <div className="relative inline-block mb-8">
          <div className="w-40 h-40 rounded-full border-4 border-sky shadow-2xl overflow-hidden mx-auto ring-4 ring-steel/30">
            <img
              src={resume.avatar}
              alt={resume.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(resume.nameEn)}&background=5F6F94&color=FEF5AC&size=160&bold=true`;
              }}
            />
          </div>
          <span className="absolute bottom-3 right-3 w-4 h-4 bg-green-400 rounded-full border-2 border-navy" />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-cream mb-1 tracking-tight">
          {resume.nameEn}
        </h1>
        <p className="text-sky/70 mb-4 tracking-widest uppercase text-sm">
          {resume.name}
        </p>

        {/* Position Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 bg-steel/20 border border-sky/30 text-sky px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-sky animate-pulse inline-block" />
            {resume.position}
          </span>
        </div>

        {/* Contact Row */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-sky/60 mb-10">
          <span className="flex items-center gap-1.5">
            <span>📧</span> {resume.email}
          </span>
          <span className="flex items-center gap-1.5">
            <span>📞</span> {resume.phone}
          </span>
          <span className="flex items-center gap-1.5">
            <span>📍</span> {resume.location}
          </span>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-4 mb-16">
          <a
            href={`https://${resume.github}`}
            target="_blank"
            rel="noreferrer"
            className="bg-steel hover:bg-sky hover:text-navy text-cream px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 shadow-lg"
          >
            GitHub
          </a>
          <a
            href={`https://${resume.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="bg-cream hover:bg-sky text-navy px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 shadow-lg"
          >
            LinkedIn
          </a>
        </div>

        {/* Scroll hint */}
        <a href="#profile" className="text-steel hover:text-sky transition-colors duration-200 text-2xl block animate-bounce">
          ↓
        </a>
      </div>
    </section>
  );
}
