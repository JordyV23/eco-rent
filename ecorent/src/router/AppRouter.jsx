import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage, VehiclesPage, RentsPage } from "../EcoApp/pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/users/*" element={<UsersPage />} />
      <Route path="/vehicles/*" element={<VehiclesPage />} />
      <Route path="/rentals/*" element={<RentsPage />} />
      <Route path="/*" element={<Navigate to="/users" />} />
    </Routes>
  );
};
