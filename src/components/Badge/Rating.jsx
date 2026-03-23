import { IconStar, IconStarFilled } from '../Icons';

export default function Rating({
  value = 0,
  max = 5,
  color = 'primary',
  readOnly = true,
  onChange,
  className = '',
}) {
  const colorClass = color === 'primary'
    ? 'text-[var(--color-icon-brand)]'
    : 'text-[var(--color-text-subtlest)]';

  const emptyClass = 'text-[var(--color-border-default)]';

  const handleClick = (idx) => {
    if (!readOnly && onChange) onChange(idx + 1);
  };

  return (
    <div className={`inline-flex items-center ${className}`}>
      {Array.from({ length: max }, (_, i) => (
        <button
          key={i}
          type="button"
          disabled={readOnly}
          onClick={() => handleClick(i)}
          className={`shrink-0 ${readOnly ? '' : 'cursor-pointer'}`}
        >
          {i < value ? (
            <IconStarFilled className={`w-5 h-5 ${colorClass}`} />
          ) : (
            <IconStar className={`w-5 h-5 ${emptyClass}`} />
          )}
        </button>
      ))}
    </div>
  );
}
