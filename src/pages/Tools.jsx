import { Link } from "react-router-dom";

export default function Tools() {
  return (
    <div className="grid">
      <section className="card col12">
        <h1 className="h1">Tools</h1>
        <p className="p">Practical tools I use and build.</p>
      </section>

      <section className="card col6">
        <h3>Risk Calculator</h3>
        <p className="p">Position sizing & risk management.</p>
        <Link className="btn" to="/tools/risk">Open</Link>
      </section>

      <section className="card col6">
        <h3>Trading Journal</h3>
        <p className="p">Log trades and review performance.</p>
        <Link className="btn" to="/tools/journal">Open</Link>
      </section>

      <section className="card col6">
        <h3>Pomodoro</h3>
        <p className="p">Focus timer for deep work.</p>
        <Link className="btn" to="/tools/pomodoro">Open</Link>
      </section>
    </div>
  );
}