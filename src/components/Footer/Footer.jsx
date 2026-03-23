import { useState } from 'react';
import { IconChevronDown, IconChevronUp } from '../Icons';

export default function Footer({
  state: initialState = 'default',
  links = [],
  companyInfo = '',
  className = '',
}) {
  const [expanded, setExpanded] = useState(initialState === 'open');

  return (
    <footer className={`w-full bg-[var(--color-bg-subtlest)] px-6 py-8 font-kr ${className}`}>
      {links.length > 0 && (
        <div className="flex flex-wrap gap-4 mb-4">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href || '#'}
              className="text-body-14 font-semibold text-[var(--color-text-default)] hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1 mb-3"
      >
        <span className="text-caption-12 font-regular text-[var(--color-text-subtle)]">사업자 정보</span>
        {expanded
          ? <IconChevronUp className="w-4 h-4 text-[var(--color-text-subtle)]" />
          : <IconChevronDown className="w-4 h-4 text-[var(--color-text-subtle)]" />
        }
      </button>

      {expanded && companyInfo && (
        <p className="text-caption-12 font-regular text-[var(--color-text-subtlest)] whitespace-pre-line">
          {companyInfo}
        </p>
      )}
    </footer>
  );
}
