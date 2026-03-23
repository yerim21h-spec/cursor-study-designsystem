import { useState, useMemo } from 'react';
import { IconChevronLeft, IconChevronRight } from '../Icons';

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

function isSameDay(a, b) {
  return a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function isToday(date) {
  return isSameDay(date, new Date());
}

function Day({ date, selected, disabled, onSelect }) {
  if (!date) return <div className="w-9 h-9" />;

  const today = isToday(date);
  const isSelected = isSameDay(date, selected);

  let cls = 'w-9 h-9 flex items-center justify-center rounded-full text-body-14 font-kr transition-colors';
  if (disabled) {
    cls += ' text-[var(--color-text-subtlest)] cursor-not-allowed';
  } else if (isSelected) {
    cls += ' bg-[var(--color-bg-brand)] text-[var(--color-text-inverse)] font-semibold';
  } else if (today) {
    cls += ' text-[var(--color-text-brand)] font-semibold cursor-pointer hover:bg-[var(--color-bg-brand-subtle)]';
  } else {
    cls += ' text-[var(--color-text-default)] cursor-pointer hover:bg-[var(--color-bg-subtlest)]';
  }

  return (
    <button type="button" disabled={disabled} onClick={() => !disabled && onSelect?.(date)} className={cls}>
      {date.getDate()}
    </button>
  );
}

export default function DatePicker({
  value = null,
  onChange,
  disabled = false,
  minDate = null,
  maxDate = null,
  className = '',
}) {
  const [viewDate, setViewDate] = useState(value || new Date());

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const days = useMemo(() => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const grid = [];
    for (let i = 0; i < firstDay; i++) grid.push(null);
    for (let d = 1; d <= daysInMonth; d++) grid.push(new Date(year, month, d));
    return grid;
  }, [year, month]);

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const isDayDisabled = (date) => {
    if (disabled) return true;
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  return (
    <div className={`w-[328px] bg-[var(--color-bg-default)] rounded-lg p-5 font-kr ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <button type="button" onClick={prevMonth} disabled={disabled} className="p-1">
          <IconChevronLeft className="w-6 h-6 text-[var(--color-text-default)]" />
        </button>
        <span className="text-body-16 font-semibold text-[var(--color-text-default)]">
          {year}년 {month + 1}월
        </span>
        <button type="button" onClick={nextMonth} disabled={disabled} className="p-1">
          <IconChevronRight className="w-6 h-6 text-[var(--color-text-default)]" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-y-1 mb-2">
        {WEEKDAYS.map((day) => (
          <div key={day} className="w-9 h-9 flex items-center justify-center text-caption-12 font-medium text-[var(--color-text-subtle)]">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-1">
        {days.map((date, i) => (
          <Day
            key={i}
            date={date}
            selected={value}
            disabled={date ? isDayDisabled(date) : true}
            onSelect={onChange}
          />
        ))}
      </div>
    </div>
  );
}
