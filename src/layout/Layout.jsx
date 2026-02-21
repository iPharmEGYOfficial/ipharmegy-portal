import Topbar from "./Topbar";
import "./layout.css";

export default function Layout({ children, role, identity, appMode }) {
  return (
    <div className="layout noSide">
      <div className="main">
        {/* HEADER */}
        <div className="topbarWrap">
          <Topbar role={role} identity={identity} appMode={appMode} />
        </div>

        {/* CONTENT */}
        <div className="contentWrap">
          <div className="container">
            <div className="content">
              {children}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="footerFull">
          <div className="footerInner">
            <div className="footerLeft">{new Date().getFullYear()} iPharmEGY</div>
            <div className="footerRight">
              <span className="footerMeta">Status: Online</span>
              <span className="footerSep"></span>
              <span className="footerMeta">Version 1.0.0</span>
              <span className="footerSep"></span>
              <span className="footerMeta">Enterprise</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
