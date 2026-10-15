import Expert from "./Expert";

function Expert1() {
const experts = [
{
id: 1,
nom_complet: "Hamza",
événements: [
{
id: 1,
thème: "Développement Web",
date_debut: "2026-10-10",
date_fin: "2026-10-12",
description: "Formation React JS",
cout_journalier: 500,
durée: 3,
},
],
},
{
id: 2,
nom_complet: "Ismail",
événements: [
{
id: 2,
thème: "Base de données",
date_debut: "2026-10-15",
date_fin: "2026-10-16",
description: "Formation SQL",
cout_journalier: 400,
durée: 2,
},
],
},
{
id: 3,
nom_complet: "Maroua",
événements: [],
},
];

return ( <div className="space-y-6"> <h2 className="text-3xl font-bold text-purple-800">
Liste des experts </h2>

  <ul className="space-y-4">
    {experts.map((expert) => (
      <Expert key={expert.id} expert={expert} />
    ))}
  </ul>
</div>

);
}

export default Expert1;
