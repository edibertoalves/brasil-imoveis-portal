
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building } from 'lucide-react';
import { properties } from '@/data/properties';
import PropertyCard from '@/components/PropertyCard';
import CitySearch from '@/components/CitySearch';
import { useEffect, useState } from 'react';

const PropertyList = () => {
  const { city } = useParams<{ city: string }>();
  const [propertyType, setPropertyType] = useState<'all' | 'sale' | 'rent'>('all');
  
  const filteredProperties = properties.filter(property => {
    return (
      property.city.toLowerCase() === city?.toLowerCase() &&
      (propertyType === 'all' || property.type === propertyType)
    );
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [city, propertyType]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/" className="flex items-center text-primary hover:text-primary/80 mb-4">
          <ArrowLeft size={20} className="mr-2" />
          Voltar para a página inicial
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
          Imóveis em {city}
        </h1>
        <p className="text-gray-600 mb-6">
          {filteredProperties.length} imóveis encontrados
        </p>
        
        <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">Filtrar por:</span>
            <div className="flex gap-2">
              <button
                className={`px-4 py-2 rounded-full text-sm ${
                  propertyType === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setPropertyType('all')}
              >
                Todos
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm ${
                  propertyType === 'sale'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setPropertyType('sale')}
              >
                Venda
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm ${
                  propertyType === 'rent'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setPropertyType('rent')}
              >
                Aluguel
              </button>
            </div>
          </div>
          
          <div className="max-w-xs w-full">
            <CitySearch />
          </div>
        </div>
      </div>
      
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Building size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Nenhum imóvel encontrado</h3>
          <p className="text-gray-600 mb-6">
            Não encontramos imóveis em {city} com os filtros selecionados.
          </p>
          <button
            onClick={() => setPropertyType('all')}
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Ver todos os imóveis
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyList;
