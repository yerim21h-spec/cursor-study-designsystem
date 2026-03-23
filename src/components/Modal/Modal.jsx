import { useEffect } from 'react';
import Button from '../Button/Button';
import { IconClose } from '../Icons';

export default function Modal({
  open = false,
  title = 'Title',
  body = 'body',
  onClose,
  footer = 'single',
  primaryLabel = '확인',
  secondaryLabel = '취소',
  onPrimary,
  onSecondary,
  className = '',
}) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className={`relative w-[342px] bg-[var(--color-bg-default)] rounded-lg overflow-hidden ${className}`}>
        {/* Header */}
        <div className="flex flex-col items-center pt-8 pb-4 px-8">
          <h2 className="font-kr text-title-20 font-semibold text-[var(--color-text-default)] text-center w-full">
            {title}
          </h2>
        </div>

        {/* Body */}
        <div className="px-8 py-3">
          <p className="font-kr text-body-16 font-regular text-[var(--color-text-default)] text-center">
            {body}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 px-4 pt-7 pb-4">
          {footer === 'single' && (
            <Button label={primaryLabel} variant="primary" onClick={onPrimary || onClose} className="flex-1" />
          )}
          {footer === 'double' && (
            <>
              <Button label={secondaryLabel} variant="outline" onClick={onSecondary || onClose} className="flex-1" />
              <Button label={primaryLabel} variant="primary" onClick={onPrimary} className="flex-1" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
