import React from "react";

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-[#8B4513] border-opacity-30"></div>
  </div>
);

export default LoadingSpinner; 