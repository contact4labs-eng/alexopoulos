interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-[#D4D4D4] bg-white p-7 ${
        hover ? 'transition-all duration-200 hover:border-[#E31E24]/30 hover:shadow-[0_4px_20px_-8px_rgba(26,26,26,0.1)]' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`text-lg font-bold text-[#1A1A1A] ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <p className={`mt-2 text-[#6B7280] leading-relaxed ${className}`}>{children}</p>;
}
