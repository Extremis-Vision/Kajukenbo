export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content?: string; // Full content if needed later
}

export const news: NewsItem[] = [
  {
    id: 1,
    title: "Stage National Kajukenbo 2026",
    date: "15 Février 2026",
    category: "Événement",
    image: "/images/training-action.jpg", // Placeholder
    excerpt: "Ne manquez pas le grand stage national avec la présence exceptionnelle des Grands Maîtres. Ouvert à tous les niveaux.",
  },
  {
    id: 2,
    title: "Passage de Grades Réussi",
    date: "20 Janvier 2026",
    category: "Vie du Club",
    image: "/images/training-group.jpg", // Placeholder
    excerpt: "Félicitations à tous nos élèves pour leur engagement et leur réussite lors du dernier passage de ceintures.",
  },
  {
    id: 3,
    title: "Rentrée Sportive : Les inscriptions sont ouvertes",
    date: "01 Septembre 2025",
    category: "Information",
    image: "/images/training-action.jpg", 
    excerpt: "Rejoignez-nous pour une nouvelle saison pleine d'énergie. Découvrez nos créneaux Self-Défense et Kajukenbo.",
  },
  {
    id: 4,
    title: "Démonstration au Forum des Associations",
    date: "05 Septembre 2025",
    category: "Sortie",
    image: "/images/instructor.png", 
    excerpt: "Retrouvez notre équipe de démonstration ce samedi au centre-ville pour découvrir notre discipline.",
  }
];
