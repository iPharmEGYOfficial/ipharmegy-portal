import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./layout.css";

export default function Layout({ children, role, identity, appMode }) {
  return (
    <div className="layout">
      <Sidebar role={role} appMode={appMode} />
      <div className="main">
        <Topbar role={role} identity={identity} appMode={appMode} />
        <div className="content">{children}</div>
        <div className="footer">{new Date().getFullYear()} iPharmEGY Unified Platform</div>
      </div>
    </div>
  );
}
