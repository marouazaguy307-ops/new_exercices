import { useState } from "react";

function Expert2() {
const [experts] = useState([
{
id: 1,
nom_complet: "Amine",
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
id: 2,
nom_complet: "Mohamed",
événements: [
{
id: 3,
thème: "JavaScript",
date_debut: "2026-10-20",
date_fin: "2026-10-22",
description: "Formation JavaScript",
cout_journalier: 600,
durée: 3,
},
],
},
]);

return ( <div className="space-y-6"> <h2 className="text-3xl font-bold text-purple-800">
Liste des experts </h2>

  {experts.map((expert) => (
    <div
      key={expert.id}
      className="rounded-xl bg-white p-6 shadow-lg"
    >
      <h3 className="mb-4 text-xl font-bold text-purple-700">
        {expert.nom_complet}
      </h3>

      {expert.événements.map((e) => (
        <div
          key={e.id}
          className="mb-3 rounded-lg bg-purple-50 p-4"
        >
          <p>
            <strong>Thème :</strong> {e.thème}
          </p>

          <p>
            <strong>Date début :</strong> {e.date_debut}
          </p>

          <p>
            <strong>Date fin :</strong> {e.date_fin}
          </p>

          <p>
            <strong>Description :</strong> {e.description}
          </p>

          <p>
            <strong>Coût journalier :</strong>{" "}
            {e.cout_journalier} DH
          </p>

          <p>
            <strong>Durée :</strong> {e.durée} jours
          </p>

          <p className="mt-2 font-bold text-purple-800">
            Coût total : {e.cout_journalier * e.durée} DH
          </p>
        </div>
      ))}
    </div>
  ))}
</div>

);
}

export default Expert2;
