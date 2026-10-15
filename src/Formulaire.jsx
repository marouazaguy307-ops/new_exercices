import { useState } from "react";

function Formulaire() {
const [theme, setTheme] = useState("");
const [dateDebut, setDateDebut] = useState("");
const [dateFin, setDateFin] = useState("");
const [cout, setCout] = useState("");
const [expert, setExpert] = useState("");
const [resultat, setResultat] = useState(null);
const [erreur, setErreur] = useState("");

function confirmer(e) {
e.preventDefault();

```
const debut = new Date(dateDebut);
const fin = new Date(dateFin);

if (fin < debut) {
  setErreur("La date de fin doit être après la date de début.");
  setResultat(null);
  return;
}

const duree = Math.round(
  (fin - debut) / (1000 * 60 * 60 * 24)
);

setErreur("");

setResultat({
  theme,
  dateDebut,
  dateFin,
  cout: Number(cout),
  expert,
  duree,
  total: Number(cout) * duree,
});
```

}

return ( <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-lg"> <h2 className="mb-6 text-center text-2xl font-bold text-purple-800">
Formulaire de l'événement </h2>

  <form onSubmit={confirmer} className="space-y-4">
    <div>
      <label className="mb-1 block font-semibold">Thème :</label>
      <input
        className="w-full rounded-lg border p-3 outline-none focus:border-purple-600"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        required
      />
    </div>

    <div>
      <label className="mb-1 block font-semibold">Date de début :</label>
      <input
        type="date"
        className="w-full rounded-lg border p-3"
        value={dateDebut}
        onChange={(e) => setDateDebut(e.target.value)}
        required
      />
    </div>

    <div>
      <label className="mb-1 block font-semibold">Date de fin :</label>
      <input
        type="date"
        className="w-full rounded-lg border p-3"
        value={dateFin}
        onChange={(e) => setDateFin(e.target.value)}
        required
      />
    </div>

    <div>
      <label className="mb-1 block font-semibold">
        Coût journalier (DH) :
      </label>
      <input
        type="number"
        min="0"
        className="w-full rounded-lg border p-3"
        value={cout}
        onChange={(e) => setCout(e.target.value)}
        required
      />
    </div>

    <div>
      <label className="mb-1 block font-semibold">Expert :</label>
      <input
        className="w-full rounded-lg border p-3"
        value={expert}
        onChange={(e) => setExpert(e.target.value)}
        required
      />
    </div>

    {erreur && (
      <p className="rounded-lg bg-red-100 p-3 text-red-700">
        {erreur}
      </p>
    )}

    <button
      type="submit"
      className="w-full rounded-lg bg-purple-700 p-3 font-bold text-white transition hover:bg-purple-900"
    >
      Confirmer
    </button>
  </form>

  {resultat && (
    <div className="mt-6 rounded-xl bg-purple-100 p-5">
      <h3 className="mb-3 text-lg font-bold text-purple-900">
        Résultat
      </h3>

      <p>Expert : {resultat.expert}</p>
      <p>Thème : {resultat.theme}</p>
      <p>Du : {resultat.dateDebut}</p>
      <p>Au : {resultat.dateFin}</p>
      <p>Durée : {resultat.duree} jours</p>
      <p>Coût journalier : {resultat.cout} DH</p>

      <p className="mt-3 text-xl font-bold text-purple-900">
        Coût total : {resultat.total} DH
      </p>
    </div>
  )}
</div>

);
}

export default Formulaire;
