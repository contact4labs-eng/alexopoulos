interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'amber' | 'outline';
  className?: string;
}

const variants = {
  default: 'bg-[#3C3C3C]/10 text-[#3C3C3C] border-[#3C3C3C]/10',
  amber: 'bg-[#E31E24]/10 text-[#C41A1F] border-[#E31E24]/20',
  outline: 'bg-transparent text-[#6B7280] border-[#D4D4D4]',
};

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-0.5 text-xs font-semibold tracking-wide ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
