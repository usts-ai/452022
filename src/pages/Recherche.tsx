import React, { useState } from "react";
import { motion } from "framer-motion";

const mockPrestataires = [
  {
    nom: "Sophie Martin",
    secteur: "Coiffeur",
    ville: "Lyon",
    note: 4.8,
    couleur: "from-pink-400 to-fuchsia-500",
  },
  {
    nom: "Jean Dupuis",
    secteur: "Plombier",
    ville: "Paris",
    note: 4.6,
    couleur: "from-blue-500 to-cyan-400",
  },
  {
    nom: "Claire Bernard",
    secteur: "Électricien",
    ville: "Marseille",
    note: 4.7,
    couleur: "from-yellow-400 to-orange-500",
  },
];

export default function Recherche() {
  const [query, setQuery] = useState("");
  const filtered = mockPrestataires.filter(
    (p) =>
      p.nom.toLowerCase().includes(query.toLowerCase()) ||
      p.secteur.toLowerCase().includes(query.toLowerCase()) ||
      p.ville.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 flex flex-col items-center py-14">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-fuchsia-500 to-pink-500 mb-6 drop-shadow-xl"
      >
        Recherche de prestataires
      </motion.h2>
      <motion.input
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        type="text"
        placeholder="Nom, secteur ou ville..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-6 py-3 rounded-xl border-2 border-fuchsia-300 focus:border-fuchsia-500 outline-none text-lg w-full max-w-xl mb-8 shadow"
      />
      <section className="grid md:grid-cols-2 gap-8 w-full max-w-3xl">
        {filtered.map((p, idx) => (
          <motion.div
            key={p.nom}
            whileHover={{ scale: 1.03 }}
            className={`rounded-2xl p-7 bg-gradient-to-br ${p.couleur} shadow-xl text-white relative transition-all duration-200`}
            style={{ zIndex: 1 + idx }}
          >
            <div className="flex items-center mb-3">
              <span className="text-2xl font-extrabold mr-2">{p.nom}</span>
              <span className="ml-auto flex items-center gap-1">
                <svg width="18" height="18" fill="currentColor" className="text-yellow-300"><path d="M9 1.5l2.47 5.01 5.53.8-4 3.89.94 5.5L9 13.77l-4.94 2.59.94-5.5-4-3.89 5.53-.8z" /></svg>
                <span className="font-bold">{p.note}</span>
              </span>
            </div>
            <div className="mb-1 text-lg font-medium">{p.secteur} - {p.ville}</div>
            <button className="mt-4 px-5 py-2 rounded-lg bg-white/90 text-fuchsia-700 font-bold shadow-md hover:bg-white/100 transition">Voir la fiche</button>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
