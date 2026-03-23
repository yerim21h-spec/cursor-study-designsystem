import { useState, useRef, useEffect } from 'react';
import { IconChevronDown, IconChevronUp } from '../Icons';

export default function Dropdown({
  options = [],
  value = null,
  onChange,
  placeholder = 'Choices',
  disabled = false,
  className = '',
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const selectedLabel = options.find((o) => o.value === value)?.label ?? placeholder;
  const hasValue = value !== null && value !== undefined;

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen(!open)}
        className={`flex items-center gap-2.5 w-full px-4 py-3 rounded-md border font-kr text-body-16 transition-colors ${
          disabled
            ? 'border-[var(--color-border-disabled)] bg-[var(--color-bg-subtlest)] cursor-not-allowed opacity-60'
            : open
              ? 'border-[var(--color-border-brand)] bg-[var(--color-bg-default)]'
              : 'border-[var(--color-border-default)] bg-[var(--color-bg-default)]'
        }`}
      >
        <span className={`flex-1 text-left font-regular ${hasValue ? 'text-[var(--color-text-default)]' : 'text-[var(--color-text-subtlest)]'}`}>
          {selectedLabel}
        </span>
        {open ? (
          <IconChevronUp className="w-6 h-6 text-[var(--color-text-subtle)]" />
        ) : (
          <IconChevronDown className="w-6 h-6 text-[var(--color-text-subtle)]" />
        )}
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-[var(--color-bg-default)] border border-[var(--color-border-default)] rounded-md shadow-lg max-h-60 overflow-y-auto">
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                onClick={() => {
                  onChange?.(option.value);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-3 font-kr text-body-16 font-regular transition-colors hover:bg-[var(--color-bg-subtlest)] ${
                  option.value === value
                    ? 'text-[var(--color-text-brand)] font-semibold bg-[var(--color-bg-brand-subtle)]'
                    : 'text-[var(--color-text-default)]'
                }`}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
