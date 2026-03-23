interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-cream inline-block">
        {title}
      </h2>
      <div className="flex justify-center mt-3">
        <span className="h-1 w-16 bg-sky rounded-full" />
      </div>
      {subtitle && (
        <p className="text-sky/60 mt-3 text-sm">{subtitle}</p>
      )}
    </div>
  );
}
