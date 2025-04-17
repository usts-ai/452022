import React from "react";
import { motion } from "framer-motion";

const secteurs = [
  { nom: "Plombier", couleur: "from-blue-500 to-cyan-400" },
  { nom: "Électricien", couleur: "from-yellow-400 to-orange-500" },
  { nom: "Coiffeur", couleur: "from-pink-500 to-fuchsia-400" },
  { nom: "Mécanicien", couleur: "from-green-500 to-lime-400" },
  { nom: "Informatique", couleur: "from-indigo-500 to-purple-400" },
];

export default function Accueil() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-200 flex flex-col items-center justify-center relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-fuchsia-500 to-pink-500 mb-6 text-center drop-shadow-xl"
      >
        Trouvez & Réservez<br />
        <span className="text-3xl md:text-5xl font-light text-slate-700">vos prestataires locaux</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl text-center"
      >
        Comparez, consultez les avis, et réservez un créneau en quelques clics. Une expérience locale, rapide et immersive.
      </motion.p>
      <section className="flex flex-wrap gap-4 justify-center mb-14">
        {secteurs.map((s, idx) => (
          <motion.button
            key={s.nom}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className={`px-7 py-3 rounded-xl text-lg font-bold shadow-lg bg-gradient-to-br ${s.couleur} text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400`}
            style={{ zIndex: 1 + idx }}
          >
            {s.nom}
          </motion.button>
        ))}
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="w-96 h-96 bg-gradient-to-br from-pink-400 via-fuchsia-400 to-blue-400 rounded-full blur-3xl opacity-30 absolute -top-40 -left-32 animate-pulse" />
        <div className="w-72 h-72 bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-500 rounded-full blur-2xl opacity-20 absolute -bottom-32 -right-24 animate-pulse" />
      </motion.div>
    </main>
  );
}
