import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

// Base de données mockée pour les prestataires
const prestatairesDB = [
  {
    id: "p1",
    nom: "Sophie Martin",
    secteur: "Coiffeur",
    ville: "Lyon",
    note: 4.8,
    couleur: "from-pink-400 to-fuchsia-500",
    description: "Spécialiste en coiffure moderne et coloration, accueil chaleureux et conseils personnalisés.",
    adresse: "15 rue de la République, 69002 Lyon",
    telephone: "04 78 XX XX XX",
    disponibilites: ["09:00", "10:30", "14:00", "16:00", "17:30"],
    disponible: true,
    services: [
      { nom: "Coupe femme", prix: 35, duree: "45 min" },
      { nom: "Coupe homme", prix: 22, duree: "30 min" },
      { nom: "Couleur", prix: 55, duree: "1h30" },
      { nom: "Brushing", prix: 25, duree: "30 min" }
    ],
    avis: [
      { auteur: "Lucas", texte: "Très satisfait, coupe parfaite et ambiance agréable !", note: 5, date: "15/03/2025" },
      { auteur: "Emma", texte: "Accueil top et bons conseils pour ma nouvelle coupe.", note: 4.5, date: "28/02/2025" },
      { auteur: "Sophie", texte: "Technique parfaite et prix correct, je recommande.", note: 5, date: "10/02/2025" }
    ],
    photos: ["coiffure1.jpg", "coiffure2.jpg", "salon.jpg"]
  },
  {
    id: "p2",
    nom: "Jean Dupuis",
    secteur: "Plombier",
    ville: "Paris",
    note: 4.6,
    couleur: "from-blue-500 to-cyan-400",
    description: "Intervention rapide, dépannage d'urgence 7j/7, devis gratuit. Expérience de plus de 15 ans.",
    adresse: "45 rue des Lilas, 75020 Paris",
    telephone: "01 42 XX XX XX",
    disponibilites: ["08:00", "10:00", "13:00", "15:00", "17:00"],
    disponible: true,
    services: [
      { nom: "Dépannage d'urgence", prix: 85, duree: "1h" },
      { nom: "Réparation fuite", prix: 75, duree: "1h" },
      { nom: "Installation sanitaire", prix: 150, duree: "2h" },
      { nom: "Débouchage canalisation", prix: 120, duree: "1h30" }
    ],
    avis: [
      { auteur: "Martin", texte: "Très réactif, problème résolu rapidement.", note: 5, date: "02/04/2025" },
      { auteur: "Julie", texte: "Service impeccable, prix convenus respectés.", note: 4.5, date: "15/03/2025" }
    ],
    photos: ["plomberie1.jpg", "plomberie2.jpg"]
  },
  {
    id: "p3",
    nom: "Claire Bernard",
    secteur: "Électricien",
    ville: "Marseille",
    note: 4.7,
    couleur: "from-yellow-400 to-orange-500",
    description: "Installation, rénovation et mise aux normes électriques. Certification qualibat.",
    adresse: "28 rue du Paradis, 13006 Marseille",
    telephone: "04 91 XX XX XX",
    disponibilites: [],
    disponible: false,
    services: [
      { nom: "Installation électrique", prix: 90, duree: "1h" },
      { nom: "Mise aux normes", prix: 250, duree: "3h" },
      { nom: "Dépannage", prix: 70, duree: "1h" },
      { nom: "Remplacement tableau", prix: 350, duree: "4h" }
    ],
    avis: [
      { auteur: "Thomas", texte: "Travail soigné et professionnel.", note: 5, date: "25/03/2025" },
      { auteur: "Léa", texte: "Excellents conseils et interventions rapides.", note: 4.5, date: "10/03/2025" },
      { auteur: "Philippe", texte: "Qualité de service, respect des délais.", note: 4.5, date: "18/02/2025" }
    ],
    photos: ["electricite1.jpg", "electricite2.jpg"]
  },
  {
    id: "p4",
    nom: "Thomas Leclerc",
    secteur: "Plombier",
    ville: "Lyon",
    note: 4.5,
    couleur: "from-blue-500 to-cyan-400",
    description: "Spécialiste en plomberie sanitaire, chauffage et climatisation. Service réactif et professionnel.",
    adresse: "5 rue Garibaldi, 69007 Lyon",
    telephone: "04 72 XX XX XX",
    disponibilites: ["08:30", "11:00", "14:30", "16:30"],
    disponible: true,
    services: [
      { nom: "Installation chauffage", prix: 180, duree: "2h" },
      { nom: "Réparation fuite", prix: 70, duree: "1h" },
      { nom: "Entretien chaudière", prix: 100, duree: "1h30" },
      { nom: "Installation sanitaire", prix: 140, duree: "2h" }
    ],
    avis: [
      { auteur: "Marie", texte: "Intervention rapide et efficace.", note: 4, date: "01/04/2025" },
      { auteur: "Paul", texte: "Travail de qualité, je recommande.", note: 5, date: "15/03/2025" }
    ],
    photos: ["plomberie3.jpg", "chauffage.jpg"]
  }
];

export default function FichePrestataire() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  // Récupération de l'ID du prestataire depuis l'URL
  const queryParams = new URLSearchParams(location.search);
  const prestaId = queryParams.get("id") || "p1"; // ID par défaut si non spécifié
  
  // Récupération des données du prestataire
  const prestataire = prestatairesDB.find(p => p.id === prestaId) || prestatairesDB[0];
  
  // Fonction pour réserver un créneau
  const handleReservation = () => {
    if (selectedDate) {
      setShowConfirmation(true);
      // Dans une vraie application, on enverrait une requête à l'API ici
    }
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
          <Link to="/recherche" className="px-4 py-2 rounded-lg bg-white/80 hover:bg-white/90 text-blue-700 font-medium transition-all shadow-sm">
            Recherche
          </Link>
        </div>
      </nav>

      {/* Bouton retour */}
      <div className="w-full max-w-4xl mb-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/80 hover:bg-white text-gray-700 font-medium shadow-sm transition-all"
        >
          ← Retour aux résultats
        </button>
      </div>

      {/* Fiche prestataire */}
      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-6">
        {/* Colonne principale */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 flex-1"
        >
          {/* En-tête */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 border-b border-gray-100 pb-6">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <motion.h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-fuchsia-600">
                  {prestataire.nom}
                </motion.h2>
                {prestataire.disponible ? (
                  <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">Disponible</span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-medium">Indisponible</span>
                )}
              </div>
              <div className="flex items-center gap-3 mt-2">
                <span className={`bg-gradient-to-r ${prestataire.couleur} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {prestataire.secteur}
                </span>
                <span className="text-gray-600 text-sm flex items-center gap-1">
                  <span>📍</span> {prestataire.ville}
                </span>
                <span className="flex items-center gap-1">
                  <svg width="18" height="18" fill="currentColor" className="text-yellow-400"><path d="M9 1.5l2.47 5.01 5.53.8-4 3.89.94 5.5L9 13.77l-4.94 2.59.94-5.5-4-3.89 5.53-.8z" /></svg>
                  <span className="font-bold text-gray-800">{prestataire.note}</span>
                  <span className="text-gray-500 text-sm">({prestataire.avis.length} avis)</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <a 
                href={`tel:${prestataire.telephone}`} 
                className="px-4 py-2 rounded-lg bg-white text-blue-600 font-medium border border-blue-200 shadow-sm hover:bg-blue-50 transition-colors flex items-center justify-center gap-1"
              >
                <span>📞</span> Appeler
              </a>
              {prestataire.disponible && (
                <button 
                  onClick={() => document.getElementById('section-reservation')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white font-medium hover:shadow-lg transition-all flex items-center justify-center gap-1"
                >
                  <span>📅</span> Réserver
                </button>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="font-semibold text-xl text-gray-800 mb-3">À propos</h3>
            <motion.p className="text-lg text-gray-700 mb-4">
              {prestataire.description}
            </motion.p>
            <div className="flex flex-col gap-2 text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-gray-500">📍</span>
                <span>{prestataire.adresse}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-500">📞</span>
                <span>{prestataire.telephone}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-8">
            <h3 className="font-semibold text-xl text-gray-800 mb-3">Services proposés</h3>
            <div className="bg-gray-50 rounded-xl p-4">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-2 font-medium text-gray-600">Service</th>
                    <th className="pb-2 font-medium text-gray-600">Durée</th>
                    <th className="pb-2 font-medium text-gray-600">Prix</th>
                  </tr>
                </thead>
                <tbody>
                  {prestataire.services.map((service, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-none">
                      <td className="py-3 font-medium">{service.nom}</td>
                      <td className="py-3 text-gray-600">{service.duree}</td>
                      <td className="py-3 font-bold">{service.prix}€</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Avis clients */}
          <div className="mb-8" id="section-avis">
            <h3 className="font-semibold text-xl text-gray-800 mb-3">Avis clients</h3>
            <ul className="space-y-3">
              {prestataire.avis.map((a, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                  className="bg-gray-50 rounded-xl px-5 py-3"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-fuchsia-700">{a.auteur}</span>
                    <span className="text-yellow-500 flex">
                      {Array.from({ length: Math.floor(a.note) }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                      {a.note % 1 !== 0 && <span>½</span>}
                    </span>
                    <span className="text-gray-400 text-sm ml-auto">{a.date}</span>
                  </div>
                  <p className="text-gray-700">{a.texte}</p>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Section Réservation */}
          {prestataire.disponible && (
            <div id="section-reservation" className="mb-4">
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Réserver un créneau</h3>
              
              {prestataire.disponibilites.length > 0 ? (
                <>
                  <p className="text-gray-600 mb-4">Sélectionnez un horaire pour aujourd'hui :</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {prestataire.disponibilites.map((heure) => (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        key={heure}
                        onClick={() => setSelectedDate(heure)}
                        className={`px-5 py-2 rounded-lg ${
                          selectedDate === heure
                            ? `bg-gradient-to-br ${prestataire.couleur} text-white font-bold shadow-md`
                            : "bg-white border border-gray-200 text-gray-700 hover:border-fuchsia-300"
                        } transition-all`}
                      >
                        {heure}
                      </motion.button>
                    ))}
                  </div>
                  
                  {selectedDate && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="bg-gray-50 rounded-xl p-5 mb-4"
                    >
                      <h4 className="font-bold text-gray-800 mb-2">Confirmez votre réservation</h4>
                      <p className="text-gray-600 mb-4">
                        Vous êtes sur le point de réserver un rendez-vous avec {prestataire.nom} à {selectedDate} aujourd'hui.
                      </p>
                      <button
                        onClick={handleReservation}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white font-bold text-lg shadow-md hover:shadow-lg transition-all"
                      >
                        Confirmer la réservation
                      </button>
                    </motion.div>
                  )}
                </>
              ) : (
                <p className="text-red-500">Aucun créneau disponible pour aujourd'hui.</p>
              )}
            </div>
          )}
        </motion.section>

        {/* Colonne latérale (mobile: en dessous) */}
        <div className="lg:w-80">
          {/* Carte interactive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 mb-6"
          >
            <h3 className="font-semibold text-gray-800 mb-2">Localisation</h3>
            <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center mb-2">
              <p className="text-gray-500">Carte interactive</p>
            </div>
            <p className="text-sm text-gray-600">{prestataire.adresse}</p>
          </motion.div>

          {/* Galerie photos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4"
          >
            <h3 className="font-semibold text-gray-800 mb-2">Photos</h3>
            <div className="grid grid-cols-2 gap-2">
              {prestataire.photos.map((photo, i) => (
                <div key={i} className="bg-gray-200 h-24 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500 text-xs">{photo}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal de confirmation */}
      {showConfirmation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full"
          >
            <div className="text-center mb-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl text-green-600">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Réservation confirmée !</h3>
              <p className="text-gray-600">
                Votre rendez-vous avec {prestataire.nom} est confirmé à {selectedDate}.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Date</span>
                <span className="font-medium">Aujourd'hui</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Heure</span>
                <span className="font-medium">{selectedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Prestataire</span>
                <span className="font-medium">{prestataire.nom}</span>
              </div>
            </div>
            <button
              onClick={() => {
                setShowConfirmation(false);
                navigate("/");
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white font-bold shadow-md hover:shadow-lg transition-all"
            >
              Retour à l'accueil
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Éléments décoratifs d'arrière-plan */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.7, duration: 1.2 }}
        className="fixed inset-0 pointer-events-none -z-10"
      >
        <div className="w-80 h-80 bg-gradient-to-br from-pink-400 via-fuchsia-400 to-blue-400 rounded-full blur-3xl opacity-30 absolute -top-32 -left-24 animate-pulse" />
        <div className="w-60 h-60 bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-500 rounded-full blur-2xl opacity-20 absolute -bottom-24 -right-20 animate-pulse" />
      </motion.div>
    </main>
  );
}
