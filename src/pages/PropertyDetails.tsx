
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Bed, Bath, Building, Home, MapPinned } from 'lucide-react';
import { properties } from '@/data/properties';
import PropertyGallery from '@/components/PropertyGallery';
import { useEffect } from 'react';

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Imóvel não encontrado</h2>
        <p className="mb-8">O imóvel que você está procurando não existe ou foi removido.</p>
        <Link 
          to="/"
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Voltar para a página inicial
        </Link>
      </div>
    );
  }

  const formatPrice = (price: number, type: 'sale' | 'rent'): string => {
    return type === 'sale' 
      ? `R$ ${price.toLocaleString('pt-BR')}`
      : `R$ ${price.toLocaleString('pt-BR')}/mês`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to={`/imoveis/${property.city}`} className="flex items-center text-primary hover:text-primary/80 mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Voltar para a listagem de imóveis
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-2xl md:text-3xl font-heading font-bold mb-2">
            {property.title}
          </h1>
          <div className="flex items-center mb-4 text-gray-600">
            <MapPin size={18} className="mr-1" />
            <span>{property.address}, {property.city} - {property.state}</span>
          </div>
          
          <div className="mb-8">
            <PropertyGallery images={property.images} title={property.title} />
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-heading font-semibold mb-3 pb-2 border-b">
              Características do imóvel
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="property-feature">
                <Bed size={20} />
                <span>{property.bedrooms} {property.bedrooms > 1 ? 'Quartos' : 'Quarto'}</span>
              </div>
              <div className="property-feature">
                <Bath size={20} />
                <span>{property.bathrooms} {property.bathrooms > 1 ? 'Banheiros' : 'Banheiro'}</span>
              </div>
              <div className="property-feature">
                <Building size={20} />
                <span>{property.area}m²</span>
              </div>
              <div className="property-feature">
                <Home size={20} />
                <span>{property.garageSpots} {property.garageSpots > 1 ? 'Vagas' : 'Vaga'}</span>
              </div>
            </div>
            
            <h2 className="text-xl font-heading font-semibold mb-3 pb-2 border-b">
              Sobre este imóvel
            </h2>
            <p className="text-gray-700 mb-6">{property.description}</p>
            
            <h2 className="text-xl font-heading font-semibold mb-3 pb-2 border-b">
              Comodidades e características
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 mb-6">
              {property.features.map((feature, index) => (
                <div key={index} className="property-feature">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <h2 className="text-xl font-heading font-semibold mb-3 pb-2 border-b">
              Localização
            </h2>
            <div className="flex items-center gap-2 mb-4">
              <MapPinned size={20} className="text-primary" />
              <span className="text-gray-700">{property.address}, {property.city} - {property.state}</span>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">
              Mapa estaria disponível aqui
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="sticky top-4 bg-white shadow-md rounded-lg p-6 border border-gray-100">
            <div className="mb-4 pb-4 border-b">
              <span className="text-sm text-gray-500 block mb-1">
                {property.type === 'sale' ? 'Preço de venda' : 'Valor do aluguel'}
              </span>
              <span className="text-3xl font-bold text-primary">
                {formatPrice(property.price, property.type)}
              </span>
            </div>
            
            <div className="mb-6">
              <h3 className="font-heading font-semibold mb-3">Contato</h3>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-primary mr-3">
                  {property.contactName.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="font-medium">{property.contactName}</span>
              </div>
              <a 
                href={`tel:${property.contactPhone}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium mb-3"
              >
                <Phone size={18} />
                {property.contactPhone}
              </a>
              <a 
                href={`https://wa.me/${property.contactPhone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contato via WhatsApp
              </a>
            </div>
            
            <div className="text-center text-sm text-gray-500 mt-4">
              <p>Código do imóvel: #{property.id}</p>
              <p>Anunciado em 15/05/2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
