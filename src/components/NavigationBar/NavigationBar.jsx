import Logo from '../Logo/Logo';
import { IconArrowLeft, IconShoppingBag } from '../Icons';

export default function NavigationBar({
  state = 'home',
  variant = 'default',
  title = '',
  onBack,
  onCart,
  className = '',
}) {
  const isHome = state === 'home';

  return (
    <nav
      className={`flex items-center justify-between w-full h-14 px-6 ${
        isHome ? 'bg-[var(--color-bg-brand)]' : 'bg-[var(--color-bg-default)]'
      } ${className}`}
    >
      <div className="flex items-center gap-3">
        {isHome ? (
          <Logo color={false} />
        ) : (
          <button type="button" onClick={onBack} className="shrink-0">
            <IconArrowLeft className={`w-6 h-6 ${isHome ? 'text-[var(--color-icon-inverse)]' : 'text-[var(--color-text-default)]'}`} />
          </button>
        )}

        {!isHome && variant !== 'onlyText' && title && (
          <span className="font-kr text-body-18 font-semibold text-[var(--color-text-default)] truncate">
            {title}
          </span>
        )}

        {!isHome && variant === 'onlyText' && title && (
          <span className="font-kr text-body-18 font-semibold text-[var(--color-text-default)] truncate">
            {title}
          </span>
        )}
      </div>

      {variant !== 'onlyText' && (
        <button type="button" onClick={onCart} className="shrink-0">
          <IconShoppingBag className={`w-7 h-7 ${isHome ? 'text-[var(--color-icon-inverse)]' : 'text-[var(--color-text-default)]'}`} />
        </button>
      )}
    </nav>
  );
}
