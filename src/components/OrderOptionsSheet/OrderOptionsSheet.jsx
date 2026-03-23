import { useEffect } from 'react';
import Button from '../Button/Button';
import { IconClose } from '../Icons';

function BottomsheetHeader({ title = '옵션 선택', onClose }) {
  return (
    <div className="flex items-center justify-between px-6 py-3">
      <span className="font-kr text-body-18 font-semibold text-[var(--color-text-default)]">{title}</span>
      <button type="button" onClick={onClose} className="shrink-0">
        <IconClose className="w-6 h-6 text-[var(--color-text-subtle)]" />
      </button>
    </div>
  );
}

function OptionItem({ label, selected, onSelect, disabled = false }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onSelect}
      className={`w-full text-left px-6 py-4 font-kr text-body-16 transition-colors ${
        selected
          ? 'font-semibold text-[var(--color-text-brand)] bg-[var(--color-bg-brand-subtle)]'
          : disabled
            ? 'font-regular text-[var(--color-text-subtlest)] cursor-not-allowed'
            : 'font-regular text-[var(--color-text-default)] hover:bg-[var(--color-bg-subtlest)]'
      }`}
    >
      {label}
    </button>
  );
}

export default function OrderOptionsSheet({
  open = false,
  title = '옵션 선택',
  options = [],
  selectedOption = null,
  onChange,
  onClose,
  onConfirm,
  totalPrice = null,
  className = '',
}) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className={`relative w-full max-w-[390px] bg-[var(--color-bg-default)] rounded-t-lg max-h-[80vh] flex flex-col ${className}`}>
        <BottomsheetHeader title={title} onClose={onClose} />

        <div className="flex-1 overflow-y-auto border-t border-[var(--color-border-default)]">
          {options.map((opt, i) => (
            <OptionItem
              key={opt.value ?? i}
              label={opt.label}
              selected={selectedOption === (opt.value ?? i)}
              disabled={opt.disabled}
              onSelect={() => onChange?.(opt.value ?? i)}
            />
          ))}
        </div>

        {totalPrice !== null && (
          <div className="flex items-center justify-between px-6 py-3 border-t border-[var(--color-border-default)]">
            <span className="font-kr text-body-14 font-regular text-[var(--color-text-subtle)]">총 금액</span>
            <span className="font-kr text-body-16 font-semibold text-[var(--color-text-default)]">{totalPrice}</span>
          </div>
        )}

        <div className="px-4 pt-2 pb-4">
          <Button label="선택 완료" variant="primary" onClick={onConfirm} className="w-full" />
        </div>
      </div>
    </div>
  );
}
