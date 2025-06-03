import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../pages/login/Login";
import AdminPage from "../pages/admin/admin";
import UserPage from "../pages/user/user";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
