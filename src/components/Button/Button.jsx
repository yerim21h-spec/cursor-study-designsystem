const sizeStyles = {
  default: 'h-12 px-6 text-body-16',
  medium: 'h-10 px-5 text-body-14',
  small: 'h-8 px-4 text-body-14',
};

const variantStyles = {
  primary: {
    default: 'bg-[var(--color-bg-brand)] text-[var(--color-text-inverse)] border border-transparent',
    press: 'bg-[var(--color-green-800)] text-[var(--color-text-inverse)] border border-transparent',
    disabled: 'bg-[var(--color-bg-subtle)] text-[var(--color-text-subtlest)] border border-transparent cursor-not-allowed',
  },
  outline: {
    default: 'bg-[var(--color-bg-default)] text-[var(--color-text-default)] border border-[var(--color-border-default)]',
    press: 'bg-[var(--color-bg-subtlest)] text-[var(--color-text-default)] border border-[var(--color-border-default)]',
    ghost: 'bg-transparent text-[var(--color-text-default)] border border-transparent',
    disabled: 'bg-[var(--color-bg-default)] text-[var(--color-text-subtlest)] border border-[var(--color-border-disabled)] cursor-not-allowed',
  },
};

export default function Button({
  label = 'Button',
  variant = 'primary',
  size = 'default',
  disabled = false,
  prefixIcon = null,
  suffixIcon = null,
  onClick,
  className = '',
}) {
  const state = disabled ? 'disabled' : 'default';
  const base = 'inline-flex items-center justify-center gap-2.5 rounded-md font-kr font-semibold transition-colors';
  const variantClass = variantStyles[variant]?.[state] ?? variantStyles[variant]?.default;
  const sizeClass = sizeStyles[size];

  return (
    <button
      type="button"
      className={`${base} ${sizeClass} ${variantClass} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {prefixIcon && <span className="shrink-0 w-6 h-6">{prefixIcon}</span>}
      <span>{label}</span>
      {suffixIcon && <span className="shrink-0 w-6 h-6">{suffixIcon}</span>}
    </button>
  );
}
