import { Link, useParams } from "react-router-dom";
import projects from "../content/projects.json";

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);

  if (!p) {
    return (
      <div className="card">
        <p className="p">Project not found.</p>
        <div className="row">
          <Link className="btn" to="/projects">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid">
      <section className="card col12">
        <h1 className="h1" style={{ marginBottom: 8 }}>{p.title}</h1>
        <p className="p">{p.tagline}</p>

        <div className="row" style={{ marginTop: 14 }}>
          <Link className="btn" to="/projects">← All Projects</Link>
          {p.links?.demo && <a className="btn" href={p.links.demo}>Demo</a>}
          {p.links?.github && (
            <a className="btn" href={p.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div>
      </section>

      <section className="card col6">
        <h2 style={{ marginTop: 0 }}>Highlights</h2>
        <ul style={{ margin: 0, paddingLeft: 18, color: "rgba(255,255,255,0.82)" }}>
          {(p.highlights || []).map((h) => (
            <li key={h} style={{ marginBottom: 8 }}>{h}</li>
          ))}
        </ul>
      </section>

      <section className="card col6">
        <h2 style={{ marginTop: 0 }}>Tags</h2>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {(p.tags || []).map((t) => (
            <span
              key={t}
              style={{
                padding: "6px 10px",
                borderRadius: 999,
                background: "rgba(167,139,250,0.10)",
                border: "1px solid rgba(167,139,250,0.18)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}