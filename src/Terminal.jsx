import { useState } from "react";
import { save, load } from "./storage";

export default function Terminal() {
  const [logs, setLogs] = useState(load("logs", []));
  const [cmd, setCmd] = useState("");

  const run = () => {
    if (!cmd) return;
    const out = `$ ${cmd}`;
    const newLogs = [...logs, out];
    setLogs(newLogs);
    save("logs", newLogs);
    setCmd("");
  };

  return (
    <div style={{
      background: "black",
      color: "#00ff88",
      padding: 10,
      fontFamily: "monospace",
      height: 300,
      overflow: "auto"
    }}>
      {logs.map((l, i) => <div key={i}>{l}</div>)}
      <input
        value={cmd}
        onChange={e => setCmd(e.target.value)}
        onKeyDown={e => e.key === "Enter" && run()}
        style={{
          width: "100%",
          background: "black",
          color: "#00ff88",
          border: "none"
        }}
      />
    </div>
  );
}
