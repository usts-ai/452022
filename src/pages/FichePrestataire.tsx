import React from "react";
import { motion } from "framer-motion";

const ficheMock = {
  nom: "Sophie Martin",
  secteur: "Coiffeur",
  ville: "Lyon",
  note: 4.8,
  description:
    "Spécialiste en coiffure moderne et coloration, accueil chaleureux et conseils personnalisés.",
  disponibilites: ["09:00", "10:30", "14:00", "16:00"],
  avis: [
    { auteur: "Lucas", texte: "Très satisfait, coupe parfaite !", note: 5 },
    { auteur: "Emma", texte: "Accueil top et bons conseils.", note: 4.5 },
  ],
};

export default function FichePrestataire() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 flex flex-col items-center justify-center py-12">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 rounded-3xl shadow-2xl p-10 max-w-2xl w-full relative z-10"
      >
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-fuchsia-700 mb-2">
          {ficheMock.nom}
        </motion.h2>
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {ficheMock.secteur}
          </span>
          <span className="text-gray-600 text-sm">{ficheMock.ville}</span>
          <span className="ml-auto flex items-center gap-1">
            <svg width="18" height="18" fill="currentColor" className="text-yellow-400"><path d="M9 1.5l2.47 5.01 5.53.8-4 3.89.94 5.5L9 13.77l-4.94 2.59.94-5.5-4-3.89 5.53-.8z" /></svg>
            <span className="font-bold text-gray-800">{ficheMock.note}</span>
          </span>
        </div>
        <motion.p className="text-lg text-gray-700 mb-6">
          {ficheMock.description}
        </motion.p>
        <div className="mb-8">
          <h3 className="font-semibold text-fuchsia-600 mb-2">Disponibilités</h3>
          <div className="flex gap-3 flex-wrap">
            {ficheMock.disponibilites.map((h) => (
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                key={h}
                className="px-5 py-2 rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-400 text-white font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              >
                {h}
              </motion.button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-fuchsia-600 mb-2">Avis</h3>
          <ul className="space-y-2">
            {ficheMock.avis.map((a, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="bg-gray-100 rounded-xl px-4 py-2 flex items-center gap-2"
              >
                <span className="font-bold text-fuchsia-700">{a.auteur}</span>
                <span className="text-gray-700 flex-1">{a.texte}</span>
                <span className="text-yellow-400">★ {a.note}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.7, duration: 1.2 }}
        className="absolute inset-0 pointer-events-none -z-10"
      >
        <div className="w-80 h-80 bg-gradient-to-br from-pink-400 via-fuchsia-400 to-blue-400 rounded-full blur-3xl opacity-30 absolute -top-32 -left-24 animate-pulse" />
        <div className="w-60 h-60 bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-500 rounded-full blur-2xl opacity-20 absolute -bottom-24 -right-20 animate-pulse" />
      </motion.div>
    </main>
  );
}
