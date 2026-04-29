import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";

import DashboardAluno from "../pages/dashboard/DashboardAluno";
import DashboardCoordenador from "../pages/dashboard/DashboardCoordenador";
import DashboardAdmin from "../pages/dashboard/DashboardAdmin";

import PerfilAluno from "../pages/perfil/PerfilAluno";
import PerfilCoordenador from "../pages/perfil/PerfilCoordenador";
import PerfilAdmin from "../pages/perfil/PerfilAdmin";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboards */}
        <Route path="/dashboard/aluno" element={<DashboardAluno />} />
        <Route path="/dashboard/coordenador" element={<DashboardCoordenador />} />
        <Route path="/dashboard/admin" element={<DashboardAdmin />} />

        {/* Perfis */}
        <Route path="/perfil/aluno" element={<PerfilAluno />} />
        <Route path="/perfil/coordenador" element={<PerfilCoordenador />} />
        <Route path="/perfil/admin" element={<PerfilAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}