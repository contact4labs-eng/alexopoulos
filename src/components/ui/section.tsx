interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'mist' | 'dark' | 'primary';
}

const bgStyles = {
  white: 'bg-white',
  mist: 'bg-[#ECEEF0]',
  dark: 'bg-[#1A1A1A] text-white',
  primary: 'bg-[#1A1A1A] text-white',
};

export function Section({ children, className = '', id, background = 'white' }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${bgStyles[background]} ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  eyebrow,
  centered = true,
  className = '',
  light = false,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-widest ${light ? 'text-[#E31E24]' : 'text-[#E31E24]'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-tight ${light ? 'text-white' : 'text-[#1A1A1A]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-[#6B7280]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
