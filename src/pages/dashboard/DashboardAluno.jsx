import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  LineChart,
  Line,
  CartesianGrid,
  Legend,
} from "recharts";

export default function DashboardAluno() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const navigate = useNavigate();

  const progressoMensal = [
    { mes: "Jan", horas: 10 },
    { mes: "Fev", horas: 15 },
    { mes: "Mar", horas: 8 },
    { mes: "Abr", horas: 20 },
    { mes: "Mai", horas: 19 },
  ];

  const statusData = [
    { name: "Aprovado", value: 5 },
    { name: "Pendente", value: 2 },
    { name: "Recusado", value: 1 },
  ];

  const historico = [
    {
      atividade: "Semana de Tecnologia",
      horas: "20h",
      status: "Aprovado",
    },
    {
      atividade: "Workshop React",
      horas: "10h",
      status: "Pendente",
    },
    {
      atividade: "Palestra Carreira",
      horas: "5h",
      status: "Recusado",
    },
  ];

  const cores = ["#2563eb", "#f59e0b", "#ef4444"];

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* MENU FIXO */}
      <aside className="w-64 h-screen bg-[#14245c] text-white p-6 fixed left-0 top-0 flex flex-col">
        <h1 className="text-3xl font-bold mb-10">Portal de Horas</h1>

        <nav className="space-y-4 flex-1">
          <button
            onClick={() => navigate("/dashboard/aluno")}
            className="w-full text-left bg-blue-600 p-3 rounded-lg"
          >
            Dashboard
          </button>

          <button className="w-full text-left p-3 hover:bg-blue-600 rounded-lg">
            Minhas Solicitações
          </button>

          <button
            onClick={() => setMostrarModal(true)}
            className="w-full text-left p-3 hover:bg-blue-600 rounded-lg"
          >
            Enviar Certificado
          </button>

          <button
            onClick={() => navigate("/perfil/aluno")}
            className="w-full text-left p-3 hover:bg-blue-600 rounded-lg"
          >
            Perfil
          </button>
        </nav>

        <button
          onClick={() => navigate("/login")}
          className="w-full text-left p-3 bg-red-600 hover:bg-red-700 rounded-lg"
        >
          Sair
        </button>
      </aside>

      {/* CONTEUDO */}
      <main className="ml-64 flex-1 h-screen flex flex-col">
        {/* TOPO FIXO */}
        <div className="bg-gray-100 px-8 py-6 flex justify-between items-center border-b sticky top-0 z-20">
          <h2 className="text-5xl font-bold text-gray-800">
            Dashboard Aluno
          </h2>

          <button
            onClick={() => setMostrarModal(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow"
          >
            + Enviar Certificado
          </button>
        </div>

        {/* ÁREA COM SCROLL */}
        <div className="flex-1 overflow-y-auto p-8">
          {/* CARDS */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-2xl shadow">
              <p className="text-gray-500">Horas Concluídas</p>
              <h3 className="text-4xl font-bold text-blue-600">72h</h3>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow">
              <p className="text-gray-500">Meta Total</p>
              <h3 className="text-4xl font-bold text-blue-600">120h</h3>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow">
              <p className="text-gray-500">Pendentes</p>
              <h3 className="text-4xl font-bold text-blue-600">2</h3>
            </div>
          </div>

          {/* GRAFICOS */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded-2xl shadow">
              <h3 className="text-2xl font-semibold mb-4">
                Progresso Mensal
              </h3>

              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={progressoMensal}>
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="horas"
                    fill="#2563eb"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow">
              <h3 className="text-2xl font-semibold mb-4">
                Status das Solicitações
              </h3>

              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={statusData}
                    dataKey="value"
                    outerRadius={100}
                    label
                  >
                    {statusData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={cores[index % cores.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* LINHA */}
          <div className="bg-white rounded-2xl shadow p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Evolução das Horas Complementares
            </h3>

            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={progressoMensal}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line
                  type="monotone"
                  dataKey="horas"
                  stroke="#2563eb"
                  strokeWidth={4}
                  name="Horas Acumuladas"
                />
              </LineChart>
            </ResponsiveContainer>

            <p className="text-gray-500 mt-3">
              Meta final: 120h | Atual: 72h
            </p>
          </div>

          {/* HISTORICO */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-2xl font-bold mb-4">
              Histórico de Solicitações
            </h3>

            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-3">Atividade</th>
                  <th className="py-3">Horas</th>
                  <th className="py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {historico.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3">{item.atividade}</td>
                    <td>{item.horas}</td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          item.status === "Aprovado"
                            ? "bg-green-100 text-green-700"
                            : item.status === "Pendente"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* MODAL */}
      {mostrarModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[550px] rounded-2xl p-6 shadow-2xl">
            <div className="flex justify-between mb-6">
              <h2 className="text-3xl font-bold">
                Enviar Certificado
              </h2>

              <button
                onClick={() => setMostrarModal(false)}
                className="text-2xl"
              >
                ×
              </button>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nome da atividade"
                className="w-full border p-3 rounded-lg"
              />

              <div className="grid grid-cols-2 gap-4">
                <select className="border p-3 rounded-lg">
                  <option>Selecione</option>
                  <option>Curso</option>
                  <option>Palestra</option>
                  <option>Workshop</option>
                </select>

                <input
                  type="number"
                  placeholder="Carga horária"
                  className="border p-3 rounded-lg"
                />
              </div>

              <input
                type="file"
                className="w-full border p-3 rounded-lg"
              />

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold">
                Enviar Certificado
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}