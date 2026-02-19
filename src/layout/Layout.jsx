import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./layout.css";

export default function Layout({ children, role, identity, appMode }) {
  const isPortal = (appMode || "portal") === "portal";

  return (
    <div className={"layout" + (isPortal ? "" : " noSide")}>
      {isPortal ? <Sidebar role={role} appMode={appMode} /> : null}

      {/* TOPBAR FULL WIDTH */}
      <div className="topbarWrap">
        <Topbar role={role} identity={identity} appMode={appMode} />
      </div>

      {/* CENTERED CONTENT */}
      <div className="container">
        <div className="content">
          {children}
        </div>
      </div>

      {/* FOOTER FULL WIDTH */}
      <div className="footerFull">
        <div className="footerInner">
          <div className="footerLeft">
            {new Date().getFullYear()} iPharmEGY Unified Platform
          </div>
          <div className="footerRight">
            <span className="footerMeta">Status: Online</span>
            <span className="footerSep"></span>
            <span className="footerMeta">Version 1.0.0</span>
            <span className="footerSep"></span>
            <span className="footerMeta">Enterprise Mode</span>
          </div>
        </div>
      </div>
    </div>
  );
}
