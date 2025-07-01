import React from "react";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  color?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, color }) => (
  <div className={`rounded-lg p-4 shadow bg-white flex items-center gap-4 border-t-4 ${color || 'border-[#8B4513]'}`}>
    {icon && <div className="text-3xl">{icon}</div>}
    <div>
      <div className="text-xs text-gray-500 font-bold uppercase mb-1">{title}</div>
      <div className="text-2xl font-bold text-[#8B4513]">{value}</div>
    </div>
  </div>
);

export default MetricCard; 