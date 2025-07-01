import React from "react";

const mockCourses = [
  { id: 1, title: "Curso de Tranças Afro", desc: "Aprenda técnicas ancestrais", isFree: false },
  { id: 2, title: "Empreendedorismo na Beleza", desc: "Gestão de negócios para trancistas", isFree: true },
];

const Courses: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-[#8B4513] mb-4">Cursos Disponíveis</h1>
        <div className="grid gap-4">
          {mockCourses.map(c => (
            <div key={c.id} className="border border-amber-200 rounded-lg p-4 bg-white shadow flex justify-between items-center">
              <div>
                <div className="font-bold text-[#8B4513]">{c.title}</div>
                <div className="text-xs text-gray-500 mb-1">{c.desc}</div>
                <span className={`text-xs font-bold ${c.isFree ? "text-green-700" : "text-red-700"}`}>{c.isFree ? "Gratuito" : "Pago"}</span>
              </div>
              <button className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold">Inscrever-se</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses; 