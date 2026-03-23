import { IconChevronLeft, IconChevronRight, IconDoubleChevronLeft, IconDoubleChevronRight, IconEllipsis } from '../Icons';

function PageButton({ page, active, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick?.(page)}
      className={`w-6 h-6 flex items-center justify-center rounded-full font-kr text-caption-12 transition-colors ${
        active
          ? 'bg-[var(--color-bg-brand)] text-[var(--color-text-inverse)] font-semibold'
          : 'text-[var(--color-text-default)] hover:bg-[var(--color-bg-subtlest)]'
      }`}
    >
      {page}
    </button>
  );
}

function NavButton({ icon: Icon, disabled, onClick }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`w-6 h-6 flex items-center justify-center transition-colors ${
        disabled ? 'text-[var(--color-text-subtlest)] cursor-not-allowed' : 'text-[var(--color-text-default)]'
      }`}
    >
      <Icon className="w-4 h-4" />
    </button>
  );
}

export default function Pagination({
  totalPages = 5,
  currentPage = 1,
  onChange,
  type = '5page',
  className = '',
}) {
  const maxVisible = type === '5page' ? 5 : type === '3page' ? 3 : 1;
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  const getPages = () => {
    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const half = Math.floor(maxVisible / 2);
    let start = Math.max(1, currentPage - half);
    let end = start + maxVisible - 1;
    if (end > totalPages) {
      end = totalPages;
      start = end - maxVisible + 1;
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pages = getPages();
  const showLeftEllipsis = pages[0] > 1;
  const showRightEllipsis = pages[pages.length - 1] < totalPages;

  return (
    <div className={`flex items-center justify-center gap-1 h-14 px-6 ${className}`}>
      <NavButton icon={IconDoubleChevronLeft} disabled={isFirst} onClick={() => onChange?.(1)} />
      <NavButton icon={IconChevronLeft} disabled={isFirst} onClick={() => onChange?.(currentPage - 1)} />

      {showLeftEllipsis && (
        <span className="w-6 h-6 flex items-center justify-center text-[var(--color-text-subtlest)]">
          <IconEllipsis className="w-4 h-4" />
        </span>
      )}

      {pages.map((page) => (
        <PageButton key={page} page={page} active={page === currentPage} onClick={onChange} />
      ))}

      {showRightEllipsis && (
        <span className="w-6 h-6 flex items-center justify-center text-[var(--color-text-subtlest)]">
          <IconEllipsis className="w-4 h-4" />
        </span>
      )}

      <NavButton icon={IconChevronRight} disabled={isLast} onClick={() => onChange?.(currentPage + 1)} />
      <NavButton icon={IconDoubleChevronRight} disabled={isLast} onClick={() => onChange?.(totalPages)} />
    </div>
  );
}
