import { resume } from "../data/resume";
import { SectionTitle } from "./SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className=" py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionTitle title="Work Experience" />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-steel/40" />

          <div className="space-y-8">
            {resume.experience.map((exp, i) => (
              <div key={i} className="relative pl-12">
                {/* Timeline dot */}
                <div className="absolute left-2.75 top-6 w-3 h-3 rounded-full bg-sky border-2 border-navy shadow-[0_0_0_3px_rgba(151,210,236,0.2)]" />

                <div className="bg-steel/10 border border-steel/30 hover:border-sky/40 rounded-xl p-6 transition-colors duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-cream font-bold text-lg leading-snug">
                        {exp.position}
                      </h3>
                      <p className="text-sky font-medium text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span className="shrink-0 text-steel/80 text-xs bg-steel/20 border border-steel/30 px-3 py-1.5 rounded-full whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, j) => (
                      <li key={j} className="flex gap-2.5 text-sky/75 text-sm leading-relaxed">
                        <span className="text-sky mt-0.5 shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
