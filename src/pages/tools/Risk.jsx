import { useState } from "react";

export default function Risk() {
  const [account, setAccount] = useState("");
  const [riskPct, setRiskPct] = useState("");
  const [entry, setEntry] = useState("");
  const [stop, setStop] = useState("");

  const riskAmount =
    account && riskPct ? (Number(account) * Number(riskPct)) / 100 : 0;

  const perUnitRisk =
    entry && stop ? Math.abs(Number(entry) - Number(stop)) : 0;

  const positionSize =
    perUnitRisk > 0 ? (riskAmount / perUnitRisk).toFixed(2) : 0;

  return (
    <div className="grid">
      <section className="card col12">
        <h1 className="h1">Risk Calculator</h1>
        <p className="p">
          Calculate position size based on account size and risk per trade.
        </p>
      </section>

      <section className="card col6">
        <label>Account Size ($)</label>
        <input value={account} onChange={(e) => setAccount(e.target.value)} />

        <label style={{ marginTop: 12 }}>Risk % per Trade</label>
        <input value={riskPct} onChange={(e) => setRiskPct(e.target.value)} />

        <label style={{ marginTop: 12 }}>Entry Price</label>
        <input value={entry} onChange={(e) => setEntry(e.target.value)} />

        <label style={{ marginTop: 12 }}>Stop Price</label>
        <input value={stop} onChange={(e) => setStop(e.target.value)} />
      </section>

      <section className="card col6">
        <h2>Results</h2>
        <p className="p">Risk Amount: <strong>${riskAmount.toFixed(2)}</strong></p>
        <p className="p">Per-Unit Risk: <strong>${perUnitRisk.toFixed(2)}</strong></p>
        <p className="p">
          Position Size: <strong>{positionSize}</strong> units
        </p>
      </section>
    </div>
  );
}