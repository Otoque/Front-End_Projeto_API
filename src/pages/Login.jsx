import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [tipo, setTipo] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  function entrar(e) {
    e.preventDefault();

    if (tipo === "aluno") {
      navigate("/dashboard/dashboardaluno");
    } else if (tipo === "admin") {
      navigate("/dashboard/dashboardadmin");
    } else if (tipo === "coordenador") {
      navigate("/dashboard/dashboardcoordenador");
    } else {
      alert("Selecione um perfil");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Portal de Horas
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Sistema de Gestão de Horas Complementares
        </p>

        <form onSubmit={entrar} className="space-y-4">
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="w-full border p-2 rounded-lg"
          >
            <option value="">Selecione</option>
            <option value="aluno">Aluno</option>
            <option value="coordenador">Coordenador</option>
            <option value="admin">Administrador</option>
          </select>

          <input
            type="text"
            placeholder="Login / Matrícula"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="w-full border p-2 rounded-lg"
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full border p-2 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}