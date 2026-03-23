import { resume } from "../data/resume";
import { SectionTitle } from "./SectionTitle";

export default function Education() {
  return (
    <section id="education" className="-fade py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionTitle title="Education" />
        <div className="space-y-6">
          {resume.education.map((edu, i) => (
            <div
              key={i}
              className="bg-steel/10 border border-steel/30 hover:border-sky/40 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-colors duration-200"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-steel/20 border border-steel/30 flex items-center justify-center text-2xl shrink-0">
                  🎓
                </div>
                <div>
                  <h3 className="text-cream font-bold text-lg leading-snug">
                    {edu.institution}
                  </h3>
                  <p className="text-sky text-sm mt-1">{edu.degree}</p>
                  <p className="text-steel/70 text-xs mt-1">{edu.period}</p>
                </div>
              </div>
              <div className="shrink-0 text-center bg-cream/10 border border-cream/20 rounded-xl px-6 py-4">
                <p className="text-cream/50 text-xs uppercase tracking-widest mb-1">GPA</p>
                <p className="text-cream font-extrabold text-3xl leading-none">{edu.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
