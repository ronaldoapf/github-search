import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { UserPage } from "../pages/UserPage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  )
}