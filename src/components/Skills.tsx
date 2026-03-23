import { resume } from "../data/resume";
import { SectionTitle } from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionTitle title="Technical Skills" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {resume.skills.map((group) => (
            <div
              key={group.category}
              className="bg-steel/10 border border-steel/30 hover:border-sky/40 rounded-xl p-5 transition-colors duration-200"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-xl leading-none">{group.icon}</span>
                <h3 className="text-cream font-semibold text-sm tracking-wide uppercase">
                  {group.category}
                </h3>
              </div>
              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sky/90 text-xs bg-steel/20 border border-steel/30 hover:border-sky/50 hover:text-cream px-3 py-1.5 rounded-lg transition-colors duration-150 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
