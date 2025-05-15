
import { Building, Bed, Bath, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Property } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
}

const formatPrice = (price: number, type: 'sale' | 'rent'): string => {
  return type === 'sale' 
    ? `R$ ${price.toLocaleString('pt-BR')}`
    : `R$ ${price.toLocaleString('pt-BR')}/mês`;
};

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-52 overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={property.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
          {property.type === 'sale' ? 'Venda' : 'Aluguel'}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-heading font-semibold text-lg mb-2 text-gray-800">{property.title}</h3>
        <div className="flex items-center mb-3 text-gray-600">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{property.address}</span>
        </div>
        <div className="mb-4">
          <p className="text-xl font-semibold text-primary">{formatPrice(property.price, property.type)}</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <div className="flex items-center">
              <Bed size={16} className="mr-1 text-gray-500" />
              <span className="text-sm text-gray-700">{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath size={16} className="mr-1 text-gray-500" />
              <span className="text-sm text-gray-700">{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Building size={16} className="mr-1 text-gray-500" />
              <span className="text-sm text-gray-700">{property.area}m²</span>
            </div>
          </div>
        </div>
        <Link 
          to={`/imovel/${property.id}`}
          className="flex items-center justify-center gap-2 w-full py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium"
        >
          Ver detalhes
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
