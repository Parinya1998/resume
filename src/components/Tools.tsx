import { resume } from "../data/resume";
import { SectionTitle } from "./SectionTitle";

export default function Tools() {
  return (
    <section id="tools" className="-fade py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionTitle title="Tools" />
        <div className="flex flex-wrap justify-center gap-3">
          {resume.tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2.5 bg-steel/15 border border-steel/35 hover:border-sky/60 hover:bg-steel/25 text-cream px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-default"
            >
              <span className="text-xl leading-none">{tool.icon}</span>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
