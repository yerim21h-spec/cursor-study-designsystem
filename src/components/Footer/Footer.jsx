import { useState } from 'react';
import { IconChevronDown, IconChevronUp } from '../Icons';
import channelTalkIcon from '../../assets/images/icon-channel-talk.svg';
import logoFooter1 from '../../assets/images/logo-footer-1.svg';
import logoFooter2 from '../../assets/images/logo-footer-2.svg';

const FOOTER_LINKS = [
  { label: '회사소개' },
  { label: '이용약관' },
  { label: '개인정보처리방침' },
  { label: '이용안내' },
];

export default function Footer({
  state: initialState = 'default',
  links = FOOTER_LINKS,
  companyInfo = 'COPYRIGHT © 땡스킴 thanks_kim. ALL RIGHTS RESERVED.',
  className = '',
}) {
  const [expanded, setExpanded] = useState(initialState === 'open');

  return (
    <footer
      className={`w-full bg-[var(--color-bg-default)] border-t border-[var(--color-border-default)] flex flex-col gap-[60px] items-start px-6 py-[80px] font-kr ${className}`}
    >
      <div className="flex flex-col gap-5 items-start w-full">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1"
        >
          <span className="text-body-14 font-semibold leading-normal text-[var(--color-text-brand-bold)]">
            땡스킴 사업자 정보
          </span>
          {expanded
            ? <IconChevronUp className="w-4 h-4 text-[var(--color-text-brand-bold)]" />
            : <IconChevronDown className="w-4 h-4 text-[var(--color-text-brand-bold)]" />
          }
        </button>

        {expanded && companyInfo && (
          <p className="text-caption-12 font-regular text-[var(--color-text-subtlest)] whitespace-pre-line">
            {companyInfo}
          </p>
        )}

        <img src={channelTalkIcon} alt="Channel Talk" className="w-6 h-6" />

        {links.length > 0 && (
          <div className="flex items-center gap-3 w-full">
            {links.map((link, i) => (
              <div key={i} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="w-0 h-3 border-l border-[var(--color-border-default)]" />
                )}
                <a
                  href={link.href || '#'}
                  className="text-caption-12 font-regular text-[var(--color-text-brand-bold)] whitespace-nowrap"
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        )}

        <p className="text-caption-12 font-regular text-[var(--color-text-brand)]">
          {companyInfo}
        </p>
      </div>

      <div className="relative w-[140px] h-[37px] overflow-hidden">
        <div className="absolute" style={{ inset: '3.31% 0.01% -0.02% 68.26%' }}>
          <img alt="" className="absolute block w-full h-full" src={logoFooter1} />
        </div>
        <div className="absolute" style={{ inset: '0 39.54% 13.34% 0' }}>
          <img alt="" className="absolute block w-full h-full" src={logoFooter2} />
        </div>
      </div>
    </footer>
  );
}
