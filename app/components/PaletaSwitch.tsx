"use client";
import { useEffect, useState } from "react";

const opciones = [
  { id: "", label: "Actual" },
  { id: "a", label: "A Zinc" },
  { id: "b", label: "B Costera" },
  { id: "c", label: "C Blanco" },
];

export default function PaletaSwitch() {
  const [actual, setActual] = useState("");

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("p") ?? "";
    aplicar(p);
  }, []);

  function aplicar(id: string) {
    setActual(id);
    if (id) document.documentElement.dataset.palette = id;
    else delete document.documentElement.dataset.palette;
    const url = new URL(window.location.href);
    if (id) url.searchParams.set("p", id);
    else url.searchParams.delete("p");
    window.history.replaceState(null, "", url);
  }

  return (
    <div className="paleta-switch" role="group" aria-label="Paleta">
      {opciones.map((o) => (
        <button key={o.id || "actual"} type="button" aria-pressed={actual === o.id} onClick={() => aplicar(o.id)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}
