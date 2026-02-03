import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";
import projectsRaw from "../content/projects.json";

function uniq(arr) {
  return Array.from(new Set(arr)).sort((a, b) => a.localeCompare(b));
}

export default function Projects() {
  const projects = projectsRaw;

  const allTags = useMemo(() => {
    const tags = projects.flatMap((p) => p.tags || []);
    return ["All", ...uniq(tags)];
  }, [projects]);

  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");

  const fuse = useMemo(() => {
    return new Fuse(projects, {
      keys: ["title", "tagline", "tags", "highlights"],
      threshold: 0.35,
    });
  }, [projects]);

  const filtered = useMemo(() => {
    let list = projects;

    if (tag !== "All") list = list.filter((p) => (p.tags || []).includes(tag));

    if (!query.trim()) return list;

    const results = fuse.search(query.trim());
    const ids = new Set(results.map((r) => r.item.slug));
    return list.filter((p) => ids.has(p.slug));
  }, [projects, tag, query, fuse]);

  const featured = filtered.filter((p) => p.featured);
  const others = filtered.filter((p) => !p.featured);

  return (
    <div className="grid">
      <section className="card col12">
        <h1 className="h1">Projects</h1>
        <p className="p">
          Search what I’m building. Click a project for details, links, and highlights.
        </p>

        <div className="row" style={{ marginTop: 14 }}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects (e.g., risk, journal, website)…"
            style={{ flex: "1 1 260px" }}
          />
          <select value={tag} onChange={(e) => setTag(e.target.value)}>
            {allTags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <button
            className="btn"
            onClick={() => {
              setQuery("");
              setTag("All");
            }}
          >
            Reset
          </button>
        </div>
      </section>

      {filtered.length === 0 ? (
        <section className="card col12">
          <p className="p">No matches. Try a different search or tag.</p>
        </section>
      ) : (
        <>
          {featured.length > 0 && (
            <section className="col12">
              <h2 style={{ margin: "8px 0 10px" }}>Featured</h2>
              <div className="grid">
                {featured.map((p) => (
                  <ProjectCard key={p.slug} p={p} />
                ))}
              </div>
            </section>
          )}

          {others.length > 0 && (
            <section className="col12">
              <h2 style={{ margin: "8px 0 10px" }}>More</h2>
              <div className="grid">
                {others.map((p) => (
                  <ProjectCard key={p.slug} p={p} />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}

function ProjectCard({ p }) {
  return (
    <article className="card col6">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
        <div>
          <h3 style={{ margin: "0 0 6px" }}>{p.title}</h3>
          <p className="p">{p.tagline}</p>
        </div>
        <span
          style={{
            height: "fit-content",
            padding: "6px 10px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.06)",
            color: "rgba(255,255,255,0.75)",
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: 0.8,
          }}
        >
          {p.status || "active"}
        </span>
      </div>

      <div className="row" style={{ marginTop: 12 }}>
        <Link className="btn" to={`/projects/${p.slug}`}>
          Open
        </Link>
        {p.links?.demo && (
          <a className="btn" href={p.links.demo}>
            Demo
          </a>
        )}
        {p.links?.github && (
          <a className="btn" href={p.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </div>

      <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
        {(p.tags || []).map((t) => (
          <span
            key={t}
            style={{
              padding: "6px 10px",
              borderRadius: 999,
              background: "rgba(110,231,255,0.10)",
              border: "1px solid rgba(110,231,255,0.18)",
              color: "rgba(255,255,255,0.85)",
              fontSize: 12,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}