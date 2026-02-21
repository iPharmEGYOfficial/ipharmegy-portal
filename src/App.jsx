import Layout from "./layout/Layout";
import PortalLanding from "./pages/PortalLanding.jsx";
import ModuleDashboard from "./pages/ModuleDashboard.jsx";
import AccessDenied from "./components/AccessDenied.jsx";
import Skeleton from "./components/Skeleton.jsx";
import { useAuth } from "./auth/useAuth";
import "./App.css";

export default function App() {
  const { loading, role, identity, appMode, error } = useAuth();
  const isPortal = (appMode || "portal") === "portal";

  if (loading) {
    return (
      <Layout role={role} identity={identity} appMode={appMode}>
        <Skeleton />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout role={role} identity={identity} appMode={appMode}>
        <AccessDenied identity={identity} role={role} appMode={appMode} reason={error} />
      </Layout>
    );
  }

  //  Portal landing ONLY on portal host
  if (isPortal) {
    return (
      <Layout role={role} identity={identity} appMode={appMode}>
        <PortalLanding />
      </Layout>
    );
  }

  //  Subdomains render their dashboard (NO landing) => stops the loop
  return (
    <Layout role={role} identity={identity} appMode={appMode}>
      <ModuleDashboard appMode={appMode} role={role} />
    </Layout>
  );
}
