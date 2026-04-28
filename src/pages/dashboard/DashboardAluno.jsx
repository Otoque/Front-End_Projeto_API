import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function DashboardAluno() {
  const [arquivo, setArquivo] = useState(null);

  const progressoMensal = [
    { mes: "Jan", horas: 10 },
    { mes: "Fev", horas: 15 },
    { mes: "Mar", horas: 8 },
    { mes: "Abr", horas: 20 },
    { mes: "Mai", horas: 19 },
  ];

  const statusSolicitacoes = [
    { name: "Aprovadas", value: 5 },
    { name: "Pendentes", value: 2 },
    { name: "Reprovadas", value: 1 },
  ];

  const cores = ["#2563eb", "#f59e0b", "#ef4444"];

  function enviarArquivo(e) {
    e.preventDefault();

    if (!arquivo) {
      alert("Selecione um arquivo.");
      return;
    }

    alert(`Arquivo ${arquivo.name} pronto para envio!`);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-950 text-white p-6">
        <h1 className="text-2xl font-bold mb-10">Portal de Horas</h1>

        <nav className="space-y-4">
          <p className="bg-blue-600 p-2 rounded-lg">Dashboard</p>
          <p className="p-2">Minhas Solicitações</p>
          <p className="p-2">Enviar Certificado</p>
          <p className="p-2">Perfil</p>
        </nav>
      </aside>

      {/* Conteúdo */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Dashboard Aluno
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card titulo="Horas Concluídas" valor="72h" />
          <Card titulo="Meta Total" valor="120h" />
          <Card titulo="Pendentes" valor="2" />
        </div>

        {/* Gráficos */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Barras */}
          <div className="bg-white rounded-2xl shadow p-4">
            <h3 className="text-lg font-semibold mb-4">
              Progresso Mensal
            </h3>

            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={progressoMensal}>
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="horas" fill="#2563eb" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pizza */}
          <div className="bg-white rounded-2xl shadow p-4">
            <h3 className="text-lg font-semibold mb-4">
              Status das Solicitações
            </h3>

            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={statusSolicitacoes}
                  dataKey="value"
                  outerRadius={90}
                  label
                >
                  {statusSolicitacoes.map((entry, index) => (
                    <Cell key={index} fill={cores[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Upload */}
        <div className="bg-white rounded-2xl shadow p-6 max-w-2xl">
          <h3 className="text-xl font-semibold mb-4">
            Enviar Certificado / Comprovante
          </h3>

          <form onSubmit={enviarArquivo} className="space-y-4">
            <input
              type="text"
              placeholder="Nome da atividade"
              className="w-full border p-2 rounded-lg"
            />

            <input
              type="number"
              placeholder="Quantidade de horas"
              className="w-full border p-2 rounded-lg"
            />

            <input
              type="file"
              accept=".pdf,image/*"
              onChange={(e) => setArquivo(e.target.files[0])}
              className="w-full border p-2 rounded-lg"
            />

            {arquivo && (
              <p className="text-sm text-gray-600">
                Arquivo selecionado: {arquivo.name}
              </p>
            )}

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Enviar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

function Card({ titulo, valor }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <p className="text-gray-500">{titulo}</p>
      <h3 className="text-2xl font-bold text-blue-600">{valor}</h3>
    </div>
  );
}