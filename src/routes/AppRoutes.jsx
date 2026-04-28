// src/routes/AppRoutes.jsx

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";

import DashboardAluno from "../pages/dashboard/DashboardAluno";
import DashboardAdmin from "../pages/dashboard/DashboardAdmin";
import DashboardCoordenador from "../pages/dashboard/DashboardCoordenador";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Dashboards */}
        <Route
          path="/dashboard/dashboardaluno"
          element={<DashboardAluno />}
        />

        <Route
          path="/dashboard/dashboardadmin"
          element={<DashboardAdmin />}
        />

        <Route
          path="/dashboard/dashboardcoordenador"
          element={<DashboardCoordenador />}
        />

        {/* Qualquer rota vai para login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}