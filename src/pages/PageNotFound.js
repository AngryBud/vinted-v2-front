import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>Oups ! Cette page n'existe pas</h1>
      <Link to="/">
        <button>Retour à l'accueil</button>
      </Link>
    </div>
  );
};

export default PageNotFound;