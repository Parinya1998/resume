import { resume } from "../data/resume";

export default function Footer() {
  return (
    <footer className=" border-t border-steel/30 py-8 px-6 text-center">
      <p className="text-steel/60 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-sky/80">{resume.name}</span>
        {" "}— Built with React + Vite + TailwindCSS
      </p>
    </footer>
  );
}
