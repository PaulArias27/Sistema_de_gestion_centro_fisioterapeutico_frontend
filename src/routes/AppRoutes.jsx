import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";

import MainLayout from "../components/layout/MainLayout";
import PrivateRoute from "./PrivateRoute";
import Pacientes from "../pages/pacientes/Pacientes";
import Fisioterapeutas from "../pages/fisioterapeutas/Fisioterapeutas";

function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <MainLayout>
                                <Dashboard />
                            </MainLayout>
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace />}
                />

                <Route
                    path="/pacientes"
                    element={
                        <PrivateRoute>
                            <MainLayout>
                                <Pacientes />
                            </MainLayout>
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/fisioterapeutas"
                    element={
                        <PrivateRoute>
                            <MainLayout>
                                <Fisioterapeutas />
                            </MainLayout>
                        </PrivateRoute>
                    }
                />

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;