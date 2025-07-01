import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500" onClick={onClose}>&times;</button>
        {title && <h2 className="text-lg font-bold text-[#8B4513] mb-2">{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default Modal; 