import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Formulaire from "./Formulaire";
import Expert1 from "./Expert1";
import Expert2 from "./Expert2";

function App() {
const [experts, setExperts] = useState([
{
id: 1,
nom_complet: "Amine Benali",
événements: [],
},
{
id: 2,
nom_complet: "Sara Alaoui",
événements: [],
},
]);

function ajouterEvenement(nouvelEvenement) {
setExperts((anciensExperts) =>
anciensExperts.map((expert) =>
expert.nom_complet === nouvelEvenement.expert
? {
...expert,
événements: [...expert.événements, nouvelEvenement],
}
: expert
)
);
}

return ( <BrowserRouter> <div className="min-h-screen bg-purple-50"> <nav className="flex flex-wrap justify-center gap-4 bg-purple-800 p-5 text-white"> <Link to="/formulaire" className="rounded-lg px-4 py-2 hover:bg-purple-600">
Formulaire </Link>

      <Link to="/Experts1" className="rounded-lg px-4 py-2 hover:bg-purple-600">
        Experts 1
      </Link>

      <Link to="/Experts2" className="rounded-lg px-4 py-2 hover:bg-purple-600">
        Experts 2
      </Link>
    </nav>

    <main className="mx-auto max-w-6xl p-6">
      <Routes>
        <Route
          path="/formulaire"
          element={<Formulaire ajouterEvenement={ajouterEvenement} />}
        />

        <Route
          path="/Experts1"
          element={<Expert1 experts={experts} />}
        />

        <Route
          path="/Experts2"
          element={<Expert2 experts={experts} />}
        />
      </Routes>
    </main>
  </div>
</BrowserRouter>

);
}

export default App;
