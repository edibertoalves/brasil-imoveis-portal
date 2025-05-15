
import CitySearch from '@/components/CitySearch';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Encontre o imóvel dos seus sonhos
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100">
              Milhares de opções para compra e aluguel em todo o Brasil
            </p>
            <div className="flex justify-center">
              <CitySearch />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-semibold text-center mb-12">
            Como encontrar seu imóvel ideal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Busque por cidade</h3>
              <p className="text-gray-600">
                Digite o nome da cidade onde deseja encontrar seu imóvel ideal.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Explore os imóveis</h3>
              <p className="text-gray-600">
                Navegue pelos imóveis disponíveis e encontre aquele que atende suas necessidades.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Entre em contato</h3>
              <p className="text-gray-600">
                Entre em contato diretamente com o anunciante para agendar uma visita.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-semibold text-center mb-12">
            O que nossos clientes dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  MS
                </div>
                <div>
                  <h4 className="font-semibold">Maria Silva</h4>
                  <p className="text-gray-600 text-sm">São Paulo, SP</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Encontrei meu apartamento dos sonhos através do ImóveisBR. A plataforma é intuitiva e facilitou muito minha busca."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  JR
                </div>
                <div>
                  <h4 className="font-semibold">João Rodrigues</h4>
                  <p className="text-gray-600 text-sm">Rio de Janeiro, RJ</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Como corretor, o ImóveisBR me ajuda a conectar com potenciais compradores de forma rápida e eficiente."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  AS
                </div>
                <div>
                  <h4 className="font-semibold">Ana Santos</h4>
                  <p className="text-gray-600 text-sm">Belo Horizonte, MG</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Consegui alugar meu primeiro apartamento sem complicações. O contato direto com os proprietários tornou tudo mais fácil."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
