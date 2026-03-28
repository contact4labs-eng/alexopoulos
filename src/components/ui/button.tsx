import { forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#E31E24] text-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:bg-[#C41A1F] focus-visible:ring-[#E31E24] font-semibold',
  secondary:
    'border border-[#D4D4D4] bg-white text-[#1A1A1A] shadow-sm hover:bg-[#ECEEF0] hover:border-[#3C3C3C]/30 focus-visible:ring-[#3C3C3C]',
  ghost:
    'text-[#3C3C3C] hover:text-[#1A1A1A] hover:bg-[#ECEEF0] focus-visible:ring-[#3C3C3C]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm rounded-lg',
  md: 'h-11 px-6 text-sm rounded-lg',
  lg: 'h-13 px-8 text-base rounded-xl',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
