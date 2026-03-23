const NAV_LINKS = [
  { label: "Profile", href: "#profile" },
  { label: "Skills", href: "#skills" },
  { label: "Tools", href: "#tools" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 /95 backdrop-blur-sm border-b border-steel/30">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-cream font-bold text-lg tracking-wide">
          Portfolio
        </span>
        <ul className="hidden md:flex gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sky/80 hover:text-cream text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
