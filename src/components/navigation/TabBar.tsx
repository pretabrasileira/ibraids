import React from "react";

interface TabBarItem {
  label: string;
  icon?: React.ReactNode;
  value: string;
}

interface TabBarProps {
  items: TabBarItem[];
  activeTab: string;
  onTabChange: (value: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ items, activeTab, onTabChange }) => (
  <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-amber-200 flex justify-around z-50">
    {items.map(item => (
      <button
        key={item.value}
        className={`flex flex-col items-center py-2 px-4 flex-1 ${activeTab === item.value ? 'text-[#8B4513] font-bold' : 'text-gray-500'}`}
        onClick={() => onTabChange(item.value)}
      >
        {item.icon && <span className="text-xl mb-1">{item.icon}</span>}
        <span>{item.label}</span>
      </button>
    ))}
  </nav>
);

export default TabBar; 