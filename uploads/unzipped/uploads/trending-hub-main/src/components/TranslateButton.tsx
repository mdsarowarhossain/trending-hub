import React, { useState } from "react";

const LANGS = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
];

export function TranslateButton() {
  const [lang, setLang] = useState("en");
  return (
    <div className="flex items-center gap-2">
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="text-[#928aee]"><path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM2 12h20" stroke="#928aee" strokeWidth="1.3"/><path d="M12 21c-2.21 0-4-4.03-4-9s1.79-9 4-9 4 4.03 4 9-1.79 9-4 9Z" stroke="#928aee" strokeWidth="1.3"/></svg>
      <select value={lang} onChange={e=>setLang(e.target.value)} className="bg-transparent text-white border border-[#22283b] rounded px-2 py-1 outline-none hover:bg-[#191c25]">
        {LANGS.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
      </select>
    </div>
  );
}
