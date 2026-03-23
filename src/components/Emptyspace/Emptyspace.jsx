export default function Emptyspace({
  message = '데이터가 없습니다.',
  background = 'gray',
  icon = null,
  className = '',
}) {
  const bgClass = background === 'white'
    ? 'bg-[var(--color-bg-default)]'
    : 'bg-[var(--color-bg-subtlest)]';

  return (
    <div className={`flex flex-col items-center justify-center gap-4 py-20 px-6 ${bgClass} ${className}`}>
      {icon && <div className="text-[var(--color-text-subtlest)]">{icon}</div>}
      <p className="font-kr text-body-16 font-regular text-[var(--color-text-subtlest)] text-center">
        {message}
      </p>
    </div>
  );
}
