export default function Scroll({ children, className = '' }) {
  return (
    <div
      className={`overflow-y-auto ${className}`}
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: 'var(--color-gray-400) transparent',
      }}
    >
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: var(--color-gray-400);
          border-radius: 2px;
        }
      `}</style>
      <div className="custom-scroll overflow-y-auto h-full">
        {children}
      </div>
    </div>
  );
}
