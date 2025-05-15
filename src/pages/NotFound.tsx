
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-8xl font-bold text-primary mb-6">404</h1>
      <p className="text-2xl text-gray-700 mb-2">Página não encontrada</p>
      <p className="text-gray-600 mb-8 text-center">
        A página que você está procurando não existe ou foi removida.
      </p>
      <Link 
        to="/" 
        className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
      >
        <Home size={20} />
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default NotFound;
