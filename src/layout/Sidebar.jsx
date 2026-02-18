import "./layout.css";

export default function Sidebar({ role }) {

  const menuByRole = {
    admin: ["Dashboard","Users","Roles","Logs","Settings"],
    pos: ["Dashboard","Sales","Returns","Reports"],
    inventory: ["Dashboard","Stock","Transfers","Expiry"],
    academy: ["Dashboard","Courses","Students"],
    cloud: ["Dashboard","Clients","Billing"],
    viewer: ["Dashboard"]
  };

  const items = menuByRole[role] || ["Dashboard"];

  return (
    <div className="sidebar">
      <h2>iPharmEGY</h2>
      {items.map(i => (
        <a key={i} href="#">{i}</a>
      ))}
    </div>
  );
}
