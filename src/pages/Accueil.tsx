import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

// Mock de données pour les secteurs d'activité
const secteurs = [
  { nom: "Plombier", couleur: "from-blue-500 to-cyan-400", icon: "🔧" },
  { nom: "Électricien", couleur: "from-yellow-400 to-orange-500", icon: "⚡" },
  { nom: "Coiffeur", couleur: "from-pink-500 to-fuchsia-400", icon: "✂️" },
  { nom: "Mécanicien", couleur: "from-green-500 to-lime-400", icon: "🔩" },
  { nom: "Informatique", couleur: "from-indigo-500 to-purple-400", icon: "💻" },
];

// Mock de villes populaires
const villesPopulaires = ["Paris", "Lyon", "Marseille", "Toulouse", "Bordeaux", "Lille"];

export default function Accueil() {
  const navigate = useNavigate();
  const [recherche, setRecherche] = useState("");
  const [ville, setVille] = useState("");
  
  // Fonction de recherche
  const handleRecherche = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/recherche?q=${recherche}&ville=${ville}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-200 flex flex-col items-center py-8 px-4 relative overflow-hidden">
      {/* Barre de navigation */}
      <nav className="w-full max-w-6xl flex justify-between items-center mb-16 z-10">
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-fuchsia-500">
          LocalServices
        </Link>
        <div className="flex gap-4">
          <Link to="/recherche" className="px-4 py-2 rounded-lg bg-white/80 hover:bg-white/90 text-blue-700 font-medium transition-all shadow-sm">
            Rechercher
          </Link>
          <Link to="/" className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white font-medium shadow-md hover:shadow-lg transition-all">
            Inscription Pro
          </Link>
        </div>
      </nav>

      {/* Titre principal avec animation */}
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

      {/* Formulaire de recherche */}
      <motion.form 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        onSubmit={handleRecherche}
        className="w-full max-w-2xl bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl mb-12 z-10"
      >
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="recherche" className="block text-sm font-medium text-gray-700 mb-1">Que recherchez-vous ?</label>
            <input
              id="recherche"
              type="text"
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              placeholder="Ex: Plombier, Coiffeur..."
              className="w-full px-4 py-3 rounded-xl border-2 border-fuchsia-200 focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 outline-none transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-1">Où ?</label>
            <input
              id="ville"
              type="text"
              value={ville}
              onChange={(e) => setVille(e.target.value)}
              placeholder="Votre ville ou code postal"
              className="w-full px-4 py-3 rounded-xl border-2 border-fuchsia-200 focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 outline-none transition-all"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white font-bold text-lg shadow-md hover:shadow-lg transition-all"
        >
          Rechercher maintenant
        </button>
      </motion.form>

      {/* Section des catégories */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mb-14 z-10"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Catégories populaires</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {secteurs.map((s, idx) => (
            <motion.button
              key={s.nom}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setRecherche(s.nom);
                navigate(`/recherche?q=${s.nom}&ville=${ville}`);
              }}
              className={`px-7 py-3 rounded-xl text-lg font-bold shadow-lg bg-gradient-to-br ${s.couleur} text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400 flex items-center gap-2`}
              style={{ zIndex: 1 + idx }}
            >
              <span>{s.icon}</span> {s.nom}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Section villes populaires */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mb-14 z-10"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Villes populaires</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {villesPopulaires.map((v) => (
            <motion.button
              key={v}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setVille(v);
                navigate(`/recherche?q=${recherche}&ville=${v}`);
              }}
              className="px-5 py-2 rounded-lg bg-white/70 hover:bg-white text-gray-700 font-medium shadow-md transition-all border border-gray-200"
            >
              {v}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Bannière avantages */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="w-full max-w-4xl grid md:grid-cols-3 gap-6 mb-16 z-10"
      >
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
          <div className="text-3xl mb-3">🔍</div>
          <h3 className="font-bold text-lg text-gray-800 mb-2">Trouvez facilement</h3>
          <p className="text-gray-600">Des milliers de prestataires locaux classés par catégorie et proximité.</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
          <div className="text-3xl mb-3">⭐</div>
          <h3 className="font-bold text-lg text-gray-800 mb-2">Consultez les avis</h3>
          <p className="text-gray-600">Des évaluations vérifiées pour vous aider à faire le meilleur choix.</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
          <div className="text-3xl mb-3">📅</div>
          <h3 className="font-bold text-lg text-gray-800 mb-2">Réservez en ligne</h3>
          <p className="text-gray-600">Prenez rendez-vous directement depuis la plateforme, sans attente.</p>
        </div>
      </motion.div>

      {/* Footer simplifié */}
      <footer className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4 mt-auto pt-8 pb-4 z-10">
        <div className="text-gray-600 text-sm">© 2025 LocalServices. Tous droits réservés.</div>
        <div className="flex gap-4">
          <Link to="/" className="text-gray-600 hover:text-fuchsia-600 transition-colors">À propos</Link>
          <Link to="/" className="text-gray-600 hover:text-fuchsia-600 transition-colors">Contact</Link>
          <Link to="/" className="text-gray-600 hover:text-fuchsia-600 transition-colors">Mentions légales</Link>
        </div>
      </footer>

      {/* Éléments décoratifs d'arrière-plan */}
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
