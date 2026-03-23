export default function Logo({ color = true, className = '' }) {
  const textColor = color
    ? 'text-[var(--color-text-brand)]'
    : 'text-[var(--color-text-inverse)]';

  return (
    <div className={`inline-flex items-center ${textColor} ${className}`}>
      <span className="font-eng font-semibold text-title-20 tracking-tight leading-none">
        LOGO
      </span>
    </div>
  );
}
