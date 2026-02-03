export default function Now() {
  return (
    <div className="grid">
      <section className="card col12">
        <h1 className="h1">Now</h1>
        <p className="p">
          What I’m focused on right now. Updated regularly.
        </p>
      </section>

      <section className="card col6">
        <h2>Building</h2>
        <ul>
          <li>Projects Hub (search, filters, detail pages)</li>
          <li>Trading tools (risk calculator, journal)</li>
          <li>Personal site v2 (this site)</li>
        </ul>
      </section>

      <section className="card col6">
        <h2>Learning</h2>
        <ul>
          <li>React patterns & state management</li>
          <li>Markets, risk, and expectancy</li>
          <li>Design systems & UX polish</li>
        </ul>
      </section>

      <section className="card col12">
        <h2>Optimizing</h2>
        <ul>
          <li>Consistency & execution speed</li>
          <li>Clear project narratives</li>
          <li>Shipping instead of over-planning</li>
        </ul>
      </section>
    </div>
  );
}