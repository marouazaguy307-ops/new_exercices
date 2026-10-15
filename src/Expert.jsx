function Expert({ expert }) {
return ( <li className="rounded-xl border border-purple-200 bg-white p-5 shadow-md"> <h3 className="mb-3 text-xl font-bold text-purple-800">
{expert.nom_complet} </h3>

  <h4 className="mb-2 font-semibold text-gray-700">
    Événements :
  </h4>

  {expert.événements && expert.événements.length > 0 ? (
    <ul className="space-y-3">
      {expert.événements.map((evenement, index) => (
        <li
          key={evenement.id ?? index}
          className="rounded-lg bg-purple-50 p-4"
        >
          <p>
            <strong>Thème :</strong> {evenement.thème}
          </p>

          <p>
            <strong>Date début :</strong> {evenement.date_debut}
          </p>

          <p>
            <strong>Date fin :</strong> {evenement.date_fin}
          </p>

          <p>
            <strong>Description :</strong> {evenement.description}
          </p>

          <p>
            <strong>Coût journalier :</strong>{" "}
            {evenement.cout_journalier} DH
          </p>

          <p>
            <strong>Durée :</strong> {evenement.durée} jours
          </p>
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-gray-500">Aucun événement.</p>
  )}
</li>

);
}

export default Expert;
