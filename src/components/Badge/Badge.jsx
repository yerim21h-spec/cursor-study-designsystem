const typeStyles = {
  default: 'bg-[var(--color-bg-brand-subtle)] text-[var(--color-text-brand-bold)]',
  bold: 'bg-[var(--color-bg-brand)] text-[var(--color-text-inverse)]',
};

const sizeStyles = {
  small: 'px-1 py-0.5 text-caption-10',
  medium: 'px-2 py-1 text-caption-12',
};

export default function Badge({
  label = 'badge',
  type = 'default',
  size = 'small',
  className = '',
}) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-sm font-kr font-regular whitespace-nowrap ${typeStyles[type]} ${sizeStyles[size]} ${className}`}
    >
      {label}
    </span>
  );
}
