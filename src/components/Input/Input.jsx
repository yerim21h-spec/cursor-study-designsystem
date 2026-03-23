import { useState } from 'react';

const stateStyles = {
  default: 'border-[var(--color-border-default)] bg-[var(--color-bg-default)]',
  focus: 'border-[var(--color-border-brand)] bg-[var(--color-bg-default)]',
  filled: 'border-[var(--color-border-default)] bg-[var(--color-bg-default)]',
  disabled: 'border-[var(--color-border-disabled)] bg-[var(--color-bg-subtlest)] cursor-not-allowed opacity-60',
};

export default function Input({
  label = '',
  placeholder = 'Placeholder',
  value = '',
  onChange,
  disabled = false,
  variant = 'textfield',
  suffix = null,
  className = '',
}) {
  const [focused, setFocused] = useState(false);

  const computedState = disabled
    ? 'disabled'
    : focused
      ? 'focus'
      : value
        ? 'filled'
        : 'default';

  const textColor = value
    ? 'text-[var(--color-text-default)]'
    : 'text-[var(--color-text-subtlest)]';

  const isTextarea = variant === 'textarea';

  return (
    <div className={className}>
      {label && (
        <label className="block mb-1.5 font-kr text-body-14 font-semibold text-[var(--color-text-default)]">
          {label}
        </label>
      )}
      <div
        className={`flex items-center gap-2.5 rounded-md border px-4 font-kr text-body-16 transition-colors ${stateStyles[computedState]} ${isTextarea ? 'items-start py-3' : 'h-12'}`}
      >
        {isTextarea ? (
          <textarea
            className={`flex-1 bg-transparent outline-none resize-none min-h-[120px] font-regular leading-normal ${textColor}`}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            disabled={disabled}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        ) : (
          <input
            type="text"
            className={`flex-1 bg-transparent outline-none font-regular leading-normal ${textColor}`}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            disabled={disabled}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        )}
        {suffix && <span className="shrink-0 w-6 h-6">{suffix}</span>}
      </div>
    </div>
  );
}
