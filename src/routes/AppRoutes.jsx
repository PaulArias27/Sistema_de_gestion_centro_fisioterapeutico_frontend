import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";

import MainLayout from "../components/layout/MainLayout";
import PrivateRoute from "./PrivateRoute";
import Pacientes from "../pages/pacientes/Pacientes";

function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/"
                    element={
                        <PrivateRoute>

                            <MainLayout>

                                <Dashboard />

                            </MainLayout>

                        </PrivateRoute>
                    }
                />

                <Route
                    path="*"
                    element={<Navigate to="/" />}
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

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;