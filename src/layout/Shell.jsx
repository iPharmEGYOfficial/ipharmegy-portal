import { NavLink, Outlet } from "react-router-dom";
import "./Shell.css";
import TopLinks from "../components/TopLinks";
import Footer from "../components/Footer";

const nav = [
  { to: "/", label: "Dashboard" },
  { to: "/clients", label: "Clients" },
  { to: "/billing", label: "Billing" },
  { to: "/api", label: "API" },
  { to: "/settings", label: "Settings" },
];

export default function Shell({ appName = "iPharmEGY", badge = "v1" }) {
  return (
    <div className="shell">
      <aside className="side">
        <div className="brand">
          <div className="logo">iP</div>
          <div className="brandText">
            <div className="brandName">{appName}</div>
            <div className="brandSub">Local Egypt System</div>
          </div>
        </div>

        <nav className="menu">
          {nav.map((x) => (
            <NavLink key={x.to} to={x.to} end={x.to === "/"} className="item">
              {x.label}
            </NavLink>
          ))}
        </nav>

        <div className="footNote">
          <div className="pill">{badge}</div>
          <div className="small">Cloudflare Zero Trust  GitHub  Pages</div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="title">{appName} Dashboard</div>
          <div className="right" style={{display:"flex", gap:12, alignItems:"center"}}>
            <TopLinks />
            <span className="pill soft">{badge}</span>
          </div>
        </header>

        <section className="content">
          <Outlet />
        </section>

        <Footer />
      </main>
    </div>
  );
}
