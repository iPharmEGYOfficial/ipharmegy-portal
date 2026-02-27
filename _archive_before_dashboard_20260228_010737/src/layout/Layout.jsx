import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./layout.css";

export default function Layout({ children, role, identity, appMode }) {
  const isPortal = (appMode || "portal") === "portal";

  return (
    <div className={"layout" + (isPortal ? " isPortal" : " noSide")}>
      {/* Sidebar removed anyway, but keep guard */}
      {!isPortal ? <Sidebar role={role} appMode={appMode} /> : null}

      <div className={"main" + (!isPortal ? " hasTopbar" : "")}>
        {/* TOPBAR only for subdomains */}
        {!isPortal ? (
          <div className="topbarWrap">
            <Topbar role={role} identity={identity} appMode={appMode} />
          </div>
        ) : null}

        {/* CONTENT */}
        <div className="contentWrap">
          <div className="container">
            <div className="content">{children}</div>
          </div>
        </div>

        {/* FOOTER only for subdomains */}
        {!isPortal ? (
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
        ) : null}
      </div>
    </div>
  );
}
