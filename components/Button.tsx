import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'ghost' | 'hero-ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-display font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-titan-orange focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed btn-shine';

  const variants = {
    primary:
      'bg-titan-orange text-titan-midnight shadow-orange hover:bg-titan-amber hover:-translate-y-0.5 rounded-lg',
    secondary:
      'bg-titan-blue text-white hover:bg-titan-navy hover:-translate-y-0.5 rounded-lg',
    outline:
      'border-2 border-titan-navy/20 text-titan-navy bg-white hover:bg-titan-navy hover:text-white rounded-lg',
    white:
      'bg-white text-titan-navy shadow-soft hover:shadow-titan hover:-translate-y-0.5 rounded-lg',
    ghost:
      'text-titan-navy hover:bg-titan-off-white rounded-lg',
    'hero-ghost':
      'border-2 border-white/60 text-white bg-transparent hover:bg-white/10 hover:border-white rounded-lg',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href && (href.startsWith('tel:') || href.startsWith('mailto:'))) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
