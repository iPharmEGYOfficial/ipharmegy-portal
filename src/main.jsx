/// ===== iPharmEGY Subdomain Detection =====
const host = window.location.hostname;

if (host.startsWith("admin.")) {
  window.appMode = "admin";
}
else if (host.startsWith("cloud.")) {
  window.appMode = "cloud";
}
else if (host.startsWith("academy.")) {
  window.appMode = "academy";
}
else if (host.startsWith("inventory.")) {
  window.appMode = "inventory";
}
else if (host.startsWith("pos.")) {
  window.appMode = "pos";
}
else {
  window.appMode = "portal";
}
/// ==========================================
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary><ErrorBoundary><App /></ErrorBoundary></ErrorBoundary>
  </StrictMode>,
)



