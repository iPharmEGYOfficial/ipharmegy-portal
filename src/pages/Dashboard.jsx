import React from "react";
import SummaryCard from "../components/SummaryCard.jsx";
import AlertsPanel from "../components/AlertsPanel.jsx";
import { getDashboardData } from "../data/dashboard-data-provider.js";

export default function Dashboard(){

  const data = getDashboardData();
  const summary = data.summary;

  const modules = [
    "Inventory",
    "POS",
    "Admin",
    "Cloud",
    "Academy",
    "Reports"
  ];

  return (

  <div style={{fontFamily:"Arial",padding:"30px",background:"#f6f8fb",minHeight:"100vh"}}>

    <h1>iPharmEGY Control Center</h1>
    <p style={{opacity:0.6}}>Smart Pharmacy Intelligence Platform</p>

    <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
      gap:"16px",
      marginTop:"20px"
    }}>
      <SummaryCard title="Sales" value={summary.sales} subtitle="Total sales"/>
      <SummaryCard title="Profit" value={summary.profit} subtitle="Total profit"/>
      <SummaryCard title="Expired Batches" value={summary.expired} subtitle="Immediate review"/>
      <SummaryCard title="Expiring Soon" value={summary.expiringSoon} subtitle="30+90 day window"/>
      <SummaryCard title="Smart Reorder" value={summary.reorder} subtitle="Current candidates"/>
      <SummaryCard title="Velocity Scope" value={summary.velocity} subtitle="180-day intelligence base"/>
    </div>

    <h2 style={{marginTop:"40px"}}>System Modules</h2>

    <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",
      gap:"12px",
      marginTop:"10px"
    }}>
      {modules.map((m,i)=>(
        <div key={i} style={{
          padding:"20px",
          borderRadius:"12px",
          background:"#fff",
          textAlign:"center",
          boxShadow:"0 2px 8px rgba(0,0,0,0.05)"
        }}>
          {m}
        </div>
      ))}
    </div>

    <div style={{
      marginTop:"40px",
      display:"grid",
      gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",
      gap:"16px"
    }}>
      <AlertsPanel title="Expiry Alerts" items={data.expiryAlerts}/>
      <AlertsPanel title="Sales Intelligence" items={data.salesIntelligence}/>
      <AlertsPanel title="Velocity Intelligence" items={data.velocityIntelligence}/>
      <AlertsPanel title="System Status" items={data.systemStatus}/>
    </div>

  </div>

  );

}
