import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full bg-white border-t border-amber-200 text-center py-2 text-xs text-gray-500 mt-8">
    © {new Date().getFullYear()} ibraids. Todos os direitos reservados.
  </footer>
);

export default Footer; 