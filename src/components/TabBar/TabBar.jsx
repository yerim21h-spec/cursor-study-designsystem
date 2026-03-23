import { IconHomeFilled, IconHome, IconBrand, IconMy, IconMenu } from '../Icons';

const tabConfig = {
  home: { icon: IconHome, activeIcon: IconHomeFilled, label: 'HOME' },
  brand: { icon: IconBrand, activeIcon: IconBrand, label: 'BRAND' },
  my: { icon: IconMy, activeIcon: IconMy, label: 'MY' },
  menu: { icon: IconMenu, activeIcon: IconMenu, label: 'MENU' },
};

function TabBarIcon({ category, active, onClick }) {
  const config = tabConfig[category];
  if (!config) return null;

  const Icon = active ? config.activeIcon : config.icon;
  const textColor = active ? 'text-[var(--color-text-brand)]' : 'text-[var(--color-text-default)]';

  return (
    <button type="button" onClick={onClick} className="flex flex-col items-center justify-center gap-1 w-[26px]">
      <Icon className={`w-6 h-6 ${textColor}`} />
      <span className={`font-kr text-caption-10 font-regular ${textColor}`}>
        {config.label}
      </span>
    </button>
  );
}

export default function TabBar({
  activeTab = 'home',
  tabs = ['home', 'brand', 'my', 'menu'],
  onChange,
  className = '',
}) {
  return (
    <nav
      className={`flex items-center justify-between h-14 px-11 bg-[var(--color-bg-default)] border-t border-[var(--color-border-disabled)] ${className}`}
    >
      {tabs.map((tab) => (
        <TabBarIcon
          key={tab}
          category={tab}
          active={activeTab === tab}
          onClick={() => onChange?.(tab)}
        />
      ))}
    </nav>
  );
}
