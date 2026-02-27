export default function Skeleton() {
  return (
    <div className="page">
      <div className="pageHead">
        <div>
          <div className="sk sk-title" />
          <div className="sk sk-sub" />
        </div>
        <div className="sk sk-pill" />
      </div>

      <div className="grid">
        {[1,2,3,4,5].map(i => (
          <div key={i} className="card skCard">
            <div className="sk sk-card-title" />
            <div className="sk sk-card-desc" />
            <div className="cardRow">
              <div className="mini"><div className="sk sk-mini" /></div>
              <div className="mini"><div className="sk sk-mini" /></div>
              <div className="mini"><div className="sk sk-mini" /></div>
            </div>
            <div className="cardActions">
              <div className="sk sk-btn" />
              <div className="sk sk-btn" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
