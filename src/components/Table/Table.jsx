const typeStyles = {
  nonTitle: {
    header: false,
    cellClass: 'px-4 py-3 border-b border-[var(--color-border-default)]',
  },
  title: {
    header: true,
    cellClass: 'px-4 py-3 border-b border-[var(--color-border-default)]',
  },
  card: {
    header: true,
    cellClass: 'px-4 py-4 border-b border-[var(--color-border-default)]',
  },
};

export default function Table({
  type = 'nonTitle',
  headers = [],
  rows = [],
  className = '',
}) {
  const config = typeStyles[type] || typeStyles.nonTitle;

  return (
    <div className={`w-full font-kr overflow-hidden ${type === 'card' ? 'border border-[var(--color-border-default)] rounded-lg' : ''} ${className}`}>
      <table className="w-full">
        {config.header && headers.length > 0 && (
          <thead>
            <tr className="bg-[var(--color-bg-subtlest)]">
              {headers.map((h, i) => (
                <th
                  key={i}
                  className="px-4 py-3 text-left text-body-14 font-semibold text-[var(--color-text-default)] border-b border-[var(--color-border-default)]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="bg-[var(--color-bg-default)]">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`text-body-14 font-regular text-[var(--color-text-default)] ${config.cellClass}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
