import { resume } from "../data/resume";
import { SectionTitle } from "./SectionTitle";

export default function Profile() {
  return (
    <section id="profile" className="-fade py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionTitle title="Profile" />
        <div className="bg-steel/10 border border-steel/30 rounded-2xl p-8">
          <p className="text-sky/90 text-lg leading-relaxed text-center whitespace-pre-line">
            {resume.profile}
          </p>
        </div>
      </div>
    </section>
  );
}
