import Button from './Button';

export default function ButtonFooter({
  variant = 'single',
  primaryLabel = '확인',
  secondaryLabel = '취소',
  icon = null,
  onPrimary,
  onSecondary,
  className = '',
}) {
  return (
    <div className={`flex items-center gap-2 px-4 pt-7 pb-4 bg-[var(--color-bg-default)] ${className}`}>
      {variant === 'single' && (
        <Button label={primaryLabel} variant="primary" size="default" onClick={onPrimary} className="flex-1" />
      )}

      {variant === 'double' && (
        <>
          <Button label={secondaryLabel} variant="outline" size="default" onClick={onSecondary} className="flex-1" />
          <Button label={primaryLabel} variant="primary" size="default" onClick={onPrimary} className="flex-1" />
        </>
      )}

      {variant === 'iconText' && (
        <>
          {icon && (
            <button type="button" className="shrink-0 w-12 h-12 flex items-center justify-center rounded-md border border-[var(--color-border-default)]">
              {icon}
            </button>
          )}
          <Button label={primaryLabel} variant="primary" size="default" onClick={onPrimary} className="flex-1" />
        </>
      )}
    </div>
  );
}
