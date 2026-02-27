export default function AccessDenied({ appMode, role, reason }) {
  const app = (appMode || "portal").toUpperCase();
  const r = (role || "viewer").toUpperCase();

  return (
    <div className="denyWrap">
      <div className="denyCard">
        <div className="denyTop">
          <div>
            <div className="denyTitle">Access Restricted</div>
            <div className="denySub">You are trying to open <b>{app}</b> as <b>{r}</b>.</div>
          </div>
          <div className="denyPill">SECURITY</div>
        </div>

        <div className="denyReason">
          <div className="denyLabel">Reason</div>
          <div className="denyText">{reason || `Access denied for role "${role}" on "${appMode}".`}</div>
        </div>

        <div className="denyActions">
          <a className="btn" style={{background:"#0f172a"}} href="https://portal.ipharmegy.com">Back to Portal</a>
          <a className="btn ghost" href={`https://${appMode}.ipharmegy.com`}>Retry</a>
          <a className="btn ghost" href="mailto:support@ipharmegy.com?subject=Access%20Request&body=Please%20grant%20me%20access%20to%20the%20module.">
            Request Access
          </a>
        </div>

        <div className="denyFoot">
          Tip: Viewer mode should be read-only (not blocked). Well enable that next.
        </div>
      </div>
    </div>
  );
}
