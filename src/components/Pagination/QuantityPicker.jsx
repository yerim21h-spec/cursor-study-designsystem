import { IconMinus, IconPlus } from '../Icons';

export default function QuantityPicker({
  value = 1,
  min = 1,
  max = 99,
  onChange,
  disabled = false,
  className = '',
}) {
  const canDecrease = !disabled && value > min;
  const canIncrease = !disabled && value < max;

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <button
        type="button"
        disabled={!canDecrease}
        onClick={() => canDecrease && onChange?.(value - 1)}
        className={`w-8 h-8 flex items-center justify-center rounded-md border border-[var(--color-border-default)] transition-colors ${
          canDecrease ? 'text-[var(--color-text-default)]' : 'text-[var(--color-text-subtlest)] cursor-not-allowed'
        }`}
      >
        <IconMinus className="w-5 h-5" />
      </button>

      <span className="w-8 text-center font-kr text-body-14 font-semibold text-[var(--color-text-default)]">
        {value}
      </span>

      <button
        type="button"
        disabled={!canIncrease}
        onClick={() => canIncrease && onChange?.(value + 1)}
        className={`w-8 h-8 flex items-center justify-center rounded-md border border-[var(--color-border-default)] transition-colors ${
          canIncrease ? 'text-[var(--color-text-default)]' : 'text-[var(--color-text-subtlest)] cursor-not-allowed'
        }`}
      >
        <IconPlus className="w-5 h-5" />
      </button>
    </div>
  );
}
