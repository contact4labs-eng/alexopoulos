interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-[#1A1A1A] pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#E31E24]/8 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E31E24]/20 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {children}
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-300/90">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
