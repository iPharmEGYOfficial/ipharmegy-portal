import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props){
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error){
    return { hasError: true, error };
  }

  componentDidCatch(error, info){
    console.error("UI crashed:", error, info);
  }

  render(){
    if(!this.state.hasError) return this.props.children;

    return (
      <div className="denyWrap">
        <div className="denyCard">
          <div className="denyTop">
            <div>
              <div className="denyTitle">Something went wrong</div>
              <div className="denySub">The UI crashed. This prevents the blank white screen.</div>
            </div>
            <div className="denyPill">RECOVERY</div>
          </div>

          <div className="denyReason">
            <div className="denyLabel">Error</div>
            <div className="denyText" style={{whiteSpace:"pre-wrap"}}>
              {String(this.state.error || "Unknown error")}
            </div>
          </div>

          <div className="denyActions">
            <button className="btn" style={{background:"#0f172a"}} onClick={() => location.reload()}>
              Reload
            </button>
            <a className="btn ghost" href="https://portal.ipharmegy.com">Back to Portal</a>
          </div>

          <div className="denyFoot">If this repeats, open DevTools Console and copy the error.</div>
        </div>
      </div>
    );
  }
}
