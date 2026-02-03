import { Link } from "react-router-dom";
import projects from "../content/projects.json";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="grid">
      <section className="card col12">
        <h1 className="h1">Building an edge: markets, tech, and systems.</h1>
        <p className="p">
          This site is my operating system: projects, tools, notes, and proof of work.
        </p>
        <div className="row">
          <Link className="btn" to="/projects">Explore Projects</Link>
          <Link className="btn" to="/tools">Use Tools</Link>
          <Link className="btn" to="/now">What I'm Doing Now</Link>
        </div>
      </section>

      <section className="col12">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <h2 style={{ margin: "8px 0 10px" }}>Featured Projects</h2>
          <Link to="/projects" style={{ color: "rgba(255,255,255,0.75)" }}>
            View all →
          </Link>
        </div>

        <div className="grid">
          {featured.map((p) => (
            <article key={p.slug} className="card col6">
              <h3 style={{ margin: "0 0 6px" }}>{p.title}</h3>
              <p className="p">{p.tagline}</p>
              <div className="row" style={{ marginTop: 12 }}>
                <Link className="btn" to={`/projects/${p.slug}`}>Open</Link>
                {p.links?.demo && <a className="btn" href={p.links.demo}>Demo</a>}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}