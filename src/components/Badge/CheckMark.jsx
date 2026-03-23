import { IconCheckOutline, IconCheckFilled } from '../Icons';

export default function CheckMark({
  checked = false,
  disabled = false,
  onChange,
  className = '',
}) {
  const handleClick = () => {
    if (!disabled && onChange) onChange(!checked);
  };

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      disabled={disabled}
      onClick={handleClick}
      className={`shrink-0 w-6 h-6 ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
    >
      {checked ? (
        <IconCheckFilled className="w-6 h-6 text-[var(--color-icon-brand)]" />
      ) : (
        <IconCheckOutline className="w-6 h-6 text-[var(--color-text-subtlest)]" />
      )}
    </button>
  );
}
