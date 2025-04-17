import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

const mockPrestataires = [
  {
    id: "p1",
    nom: "Sophie Martin",
    secteur: "Coiffeur",
    ville: "Lyon",
    note: 4.8,
    couleur: "from-pink-400 to-fuchsia-500",
    description: "Spécialiste en coiffure moderne et coloration, accueil chaleureux et conseils personnalisés.",
    disponible: true,
  },
  {
    id: "p2",
    nom: "Jean Dupuis",
    secteur: "Plombier",
    ville: "Paris",
    note: 4.6,
    couleur: "from-blue-500 to-cyan-400",
    description: "Intervention rapide, dépannage d'urgence 7j/7, devis gratuit. Expérience de plus de 15 ans.",
    disponible: true,
  },
  {
    id: "p3",
    nom: "Claire Bernard",
    secteur: "Électricien",
    ville: "Marseille",
    note: 4.7,
    couleur: "from-yellow-400 to-orange-500",
    description: "Installation, rénovation et mise aux normes électriques. Certification qualibat.",
    disponible: false,
  },
  {
    id: "p4",
    nom: "Thomas Leclerc",
    secteur: "Plombier",
    ville: "Lyon",
    note: 4.5,
    couleur: "from-blue-500 to-cyan-400",
    description: "Spécialiste en plomberie sanitaire, chauffage et climatisation. Service réactif et professionnel.",
    disponible: true,
  },
  {
    id: "p5",
    nom: "Marie Rousseau",
    secteur: "Coiffeur",
    ville: "Paris",
    note: 4.9,
    couleur: "from-pink-400 to-fuchsia-500",
    description: "Salon moderne, spécialiste des coupes tendance et colorations naturelles. Produits bio.",
    disponible: true,
  },
  {
    id: "p6",
    nom: "Antoine Mercier",
    secteur: "Mécanicien",
    ville: "Bordeaux",
    note: 4.4,
    couleur: "from-green-500 to-lime-400",
    description: "Réparation toutes marques, spécialiste diagnostic électronique et hybrides.",
    disponible: true,
  },
  {
    id: "p7",
    nom: "Léa Dufour",
    secteur: "Informatique",
    ville: "Toulouse",
    note: 4.8,
    couleur: "from-indigo-500 to-purple-400",
    description: "Dépannage informatique, installation réseaux et formations personnalisées.",
    disponible: true,
  },
];

// Filtres de secteurs disponibles
const secteurs = [
  { nom: "Tous", couleur: "from-gray-600 to-gray-800" },
  { nom: "Plombier", couleur: "from-blue-500 to-cyan-400" },
  { nom: "Électricien", couleur: "from-yellow-400 to-orange-500" },
  { nom: "Coiffeur", couleur: "from-pink-400 to-fuchsia-500" },
  { nom: "Mécanicien", couleur: "from-green-500 to-lime-400" },
  { nom: "Informatique", couleur: "from-indigo-500 to-purple-400" },
];

// Filtres de villes disponibles
const villes = ["Toutes", "Paris", "Lyon", "Marseille", "Toulouse", "Bordeaux"];

export default function Recherche() {
  const navigate = useNavigate();
  const location = useLocation();

  // Récupération des paramètres d'URL
  const queryParams = new URLSearchParams(location.search);
  const queryFromUrl = queryParams.get("q") || "";
  const villeFromUrl = queryParams.get("ville") || "";

  // États pour les filtres et la recherche
  const [query, setQuery] = useState(queryFromUrl);
  const [villeFilter, setVilleFilter] = useState(villeFromUrl);
  const [secteurFilter, setSecteurFilter] = useState("Tous");
  const [disponibleSeul, setDisponibleSeul] = useState(false);
  const [noteMin, setNoteMin] = useState(0);
  const [sorted, setSorted] = useState("note");

  // Mise à jour des états lors du changement d'URL
  useEffect(() => {
    setQuery(queryFromUrl);
    setVilleFilter(villeFromUrl);
  }, [queryFromUrl, villeFromUrl]);

  // Mise à jour de l'URL lors du changement des filtres principaux
  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (villeFilter && villeFilter !== "Toutes") params.set("ville", villeFilter);
    
    const newUrl = `${location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }, [query, villeFilter, location.pathname]);

  // Fonction de filtrage des prestataires
  const filteredPrestataires = mockPrestataires.filter((p) => {
    // Filtrage par recherche textuelle
    const matchesQuery = !query || 
      p.nom.toLowerCase().includes(query.toLowerCase()) || 
      p.secteur.toLowerCase().includes(query.toLowerCase()) || 
      p.description.toLowerCase().includes(query.toLowerCase());

    // Filtrage par ville
    const matchesVille = !villeFilter || villeFilter === "Toutes" || p.ville === villeFilter;

    // Filtrage par secteur
    const matchesSecteur = secteurFilter === "Tous" || p.secteur === secteurFilter;

    // Filtrage par disponibilité
    const matchesDisponible = !disponibleSeul || p.disponible;

    // Filtrage par note minimale
    const matchesNote = p.note >= noteMin;

    return matchesQuery && matchesVille && matchesSecteur && matchesDisponible && matchesNote;
  }).sort((a, b) => {
    // Tri des résultats
    if (sorted === "note") return b.note - a.note;
    if (sorted === "nom") return a.nom.localeCompare(b.nom);
    return 0;
  });

  // Fonction de recherche
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // La mise à jour de l'URL se fait automatiquement via l'useEffect
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 flex flex-col items-center py-8 px-4">
      {/* Barre de navigation */}
      <nav className="w-full max-w-6xl flex justify-between items-center mb-8 z-10">
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-fuchsia-500">
          LocalServices
        </Link>
        <div className="flex gap-4">
          <Link to="/" className="px-4 py-2 rounded-lg bg-white/80 hover:bg-white/90 text-blue-700 font-medium transition-all shadow-sm">
            Accueil
          </Link>
          <Link to="/" className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white font-medium shadow-md hover:shadow-lg transition-all">
            Inscription Pro
          </Link>
        </div>
      </nav>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-fuchsia-500 to-pink-500 mb-2 drop-shadow-xl"
      >
        Recherche de prestataires
      </motion.h2>

      {query || villeFilter ? 
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 mb-6"
        >
          {filteredPrestataires.length} résultats trouvés
          {query ? ` pour "${query}"` : ""}
          {villeFilter && villeFilter !== "Toutes" ? ` à ${villeFilter}` : ""}
        </motion.p> 
        : 
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 mb-6"
        >
          Trouvez les meilleurs prestataires près de chez vous
        </motion.p>
      }

      {/* Formulaire de recherche */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white/90 rounded-xl shadow-md p-4 mb-8 flex flex-col md:flex-row gap-3"
      >
        <div className="flex-1">
          <input
            type="text"
            placeholder="Rechercher un prestataire, un service..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border-2 border-fuchsia-200 focus:border-fuchsia-500 outline-none text-lg"
          />
        </div>
        <div className="flex-1 flex">
          <select
            value={villeFilter}
            onChange={(e) => setVilleFilter(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border-2 border-fuchsia-200 focus:border-fuchsia-500 outline-none text-lg"
          >
            <option value="">Toutes les villes</option>
            {villes.filter(v => v !== "Toutes").map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
          <button
            type="submit"
            className="ml-2 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white font-bold shadow-md hover:shadow-lg transition-all"
          >
            Rechercher
          </button>
        </div>
      </motion.form>

      {/* Filtres avancés */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-4xl mb-8 flex flex-wrap gap-3"
      >
        <div className="flex flex-wrap gap-2 mr-4">
          {secteurs.map((s) => (
            <button
              key={s.nom}
              onClick={() => setSecteurFilter(s.nom)}
              className={`px-3 py-1 rounded-lg text-sm font-medium ${
                secteurFilter === s.nom 
                  ? `bg-gradient-to-br ${s.couleur} text-white shadow-md` 
                  : "bg-white/70 text-gray-600 border border-gray-200"
              } transition-all`}
            >
              {s.nom}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 mr-4">
          <input
            type="checkbox"
            id="disponible"
            checked={disponibleSeul}
            onChange={() => setDisponibleSeul(!disponibleSeul)}
            className="rounded text-fuchsia-500"
          />
          <label htmlFor="disponible" className="text-sm text-gray-700">Disponible uniquement</label>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="noteMin" className="text-sm text-gray-700">Note minimale:</label>
          <select
            id="noteMin"
            value={noteMin}
            onChange={(e) => setNoteMin(Number(e.target.value))}
            className="px-2 py-1 rounded border border-gray-200 text-sm"
          >
            <option value="0">Tous</option>
            <option value="3">3+ étoiles</option>
            <option value="4">4+ étoiles</option>
            <option value="4.5">4.5+ étoiles</option>
          </select>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <label htmlFor="tri" className="text-sm text-gray-700">Trier par:</label>
          <select
            id="tri"
            value={sorted}
            onChange={(e) => setSorted(e.target.value)}
            className="px-2 py-1 rounded border border-gray-200 text-sm"
          >
            <option value="note">Note</option>
            <option value="nom">Nom</option>
          </select>
        </div>
      </motion.div>

      {/* Résultats de recherche */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
      >
        {filteredPrestataires.length > 0 ? (
          filteredPrestataires.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`rounded-2xl p-5 bg-gradient-to-br ${p.couleur} shadow-xl text-white relative transition-all duration-200`}
            >
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-extrabold mr-2">{p.nom}</h3>
                <span className="ml-auto flex items-center gap-1">
                  <svg width="18" height="18" fill="currentColor" className="text-yellow-300"><path d="M9 1.5l2.47 5.01 5.53.8-4 3.89.94 5.5L9 13.77l-4.94 2.59.94-5.5-4-3.89 5.53-.8z" /></svg>
                  <span className="font-bold">{p.note}</span>
                </span>
              </div>
              <div className="flex items-center mb-1">
                <span className="text-sm font-medium mr-2">{p.secteur}</span>
                <span className="text-sm opacity-90">📍 {p.ville}</span>
                {p.disponible ? (
                  <span className="ml-auto text-xs bg-green-500/70 px-2 py-0.5 rounded-full">Disponible</span>
                ) : (
                  <span className="ml-auto text-xs bg-red-500/70 px-2 py-0.5 rounded-full">Indisponible</span>
                )}
              </div>
              <p className="text-sm text-white/90 mb-3 line-clamp-2">{p.description}</p>
              <div className="flex justify-between">
                <button 
                  onClick={() => navigate(`/fiche-prestataire?id=${p.id}`)}
                  className="px-4 py-1.5 rounded-lg bg-white/90 text-fuchsia-700 font-bold shadow-md hover:bg-white/100 transition-all text-sm"
                >
                  Voir la fiche
                </button>
                {p.disponible && (
                  <button className="px-4 py-1.5 rounded-lg bg-fuchsia-800/40 hover:bg-fuchsia-800/60 text-white font-bold shadow-md transition-all text-sm">
                    Rendez-vous
                  </button>
                )}
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div 
            className="col-span-3 text-center py-10 bg-white/80 backdrop-blur-sm rounded-xl shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">Aucun résultat trouvé</h3>
            <p className="text-gray-600">Essayez d'autres critères de recherche</p>
          </motion.div>
        )}
      </motion.section>
    </main>
  );
}
