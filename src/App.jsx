import { useAuth } from "./auth/useAuth";
import Layout from "./layout/Layout";
import AccessDenied from "./components/AccessDenied";
import "./App.css";

export default function App() {
  const { loading, appMode, identity, role, allowed, reason } = useAuth();

  if (loading) {
    return <div className="app-container"><h1>Loading...</h1></div>;
  }

  if (!allowed) {
    return <AccessDenied appMode={appMode} role={role} reason={reason} />;
  }

  return (
    <Layout role={role} identity={identity} appMode={appMode}>
      <h1>Dashboard</h1>
      <p>Welcome to iPharmEGY {appMode.toUpperCase()} Module</p>
    </Layout>
  );
}
