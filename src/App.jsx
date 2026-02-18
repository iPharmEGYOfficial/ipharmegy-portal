import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shell from "./layout/Shell";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Billing from "./pages/Billing";
import Api from "./pages/Api";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shell appName="iPharmEGY Cloud" badge="Cloud v1" />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/api" element={<Api />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
