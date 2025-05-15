
import { Link } from 'react-router-dom';
import { Building } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-primary">
          <Building size={24} />
          <span className="text-xl font-heading font-semibold">ImóveisBR</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
            Início
          </Link>
          <Link to="/sobre" className="text-gray-700 hover:text-primary transition-colors">
            Sobre
          </Link>
          <Link to="/contato" className="text-gray-700 hover:text-primary transition-colors">
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
