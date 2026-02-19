import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./layout.css";

export default function Layout({ children, role, identity, appMode }) {
  const isPortal = (appMode || "portal") === "portal";

  return (
    <div className={"layout" + (isPortal ? "" : " noSide")}>
      {isPortal ? <Sidebar role={role} appMode={appMode} /> : null}

      <div className="main">
        <Topbar role={role} identity={identity} appMode={appMode} />
        <div className="content">{children}</div>
        <div className="footer">
  <div className="footerLeft">
     {new Date().getFullYear()} iPharmEGY Unified Platform
  </div>

  <div className="footerRight">
    <span>Status: Online</span>
    <span>Version 1.0.0</span>
    <span>Enterprise Mode</span>
  </div>
</div>
      </div>
    </div>
  );
}

