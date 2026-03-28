import type { LucideIcon } from 'lucide-react';

type IconBoxSize = 'sm' | 'md' | 'lg';
type IconComponent = LucideIcon | React.ComponentType<{ className?: string }>;

interface IconBoxProps {
  icon: IconComponent;
  size?: IconBoxSize;
  className?: string;
}

const sizeConfig: Record<IconBoxSize, { box: string; icon: string }> = {
  sm: { box: 'h-10 w-10 rounded-lg', icon: 'h-5 w-5' },
  md: { box: 'h-12 w-12 rounded-xl', icon: 'h-6 w-6' },
  lg: { box: 'h-14 w-14 rounded-2xl', icon: 'h-7 w-7' },
};

export function IconBox({ icon: Icon, size = 'md', className = '' }: IconBoxProps) {
  const config = sizeConfig[size];
  return (
    <div className={`flex shrink-0 items-center justify-center bg-[#E31E24]/10 border border-[#E31E24]/20 ${config.box} ${className}`}>
      <Icon className={`text-[#E31E24] ${config.icon}`} aria-hidden="true" />
    </div>
  );
}
