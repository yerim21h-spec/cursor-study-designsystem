function Tab1DepthItem({ label, subText, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-1 h-full px-3 py-5 font-kr text-body-16 font-semibold transition-colors whitespace-nowrap ${
        active
          ? 'text-[var(--color-text-brand)] border-b-2 border-[var(--color-border-brand)]'
          : 'text-[var(--color-text-subtle)]'
      }`}
    >
      {label}
      {subText && (
        <span className="text-caption-12 font-regular text-[var(--color-text-brand-subtle)]">
          {subText}
        </span>
      )}
    </button>
  );
}

function Tab2DepthItem({ label, active, pressed, onClick }) {
  let cls = 'px-4 py-3 rounded-md font-kr text-body-14 font-semibold transition-colors whitespace-nowrap';
  if (active) {
    cls += ' bg-[var(--color-bg-brand)] text-[var(--color-text-inverse)]';
  } else if (pressed) {
    cls += ' bg-[var(--color-bg-subtlest)] text-[var(--color-text-default)]';
  } else {
    cls += ' bg-transparent text-[var(--color-text-subtle)]';
  }

  return (
    <button type="button" onClick={onClick} className={cls}>
      {label}
    </button>
  );
}

export default function Tab({
  items = [],
  activeIndex = 0,
  onChange,
  depth = 1,
  size = 'default',
  className = '',
}) {
  const is1Depth = depth === 1;

  return (
    <div
      className={`flex items-center font-kr ${
        is1Depth
          ? `gap-3 px-6 bg-[var(--color-bg-default)] border-b border-[var(--color-border-default)] ${size === 'large' ? 'h-[51px]' : 'h-[51px]'}`
          : 'gap-1 px-4'
      } ${className}`}
    >
      {items.map((item, i) =>
        is1Depth ? (
          <Tab1DepthItem
            key={i}
            label={typeof item === 'string' ? item : item.label}
            subText={typeof item === 'object' ? item.subText : undefined}
            active={i === activeIndex}
            onClick={() => onChange?.(i)}
          />
        ) : (
          <Tab2DepthItem
            key={i}
            label={typeof item === 'string' ? item : item.label}
            active={i === activeIndex}
            onClick={() => onChange?.(i)}
          />
        ),
      )}
    </div>
  );
}
