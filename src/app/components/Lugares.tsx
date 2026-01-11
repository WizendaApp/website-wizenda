import { MapPin, Navigation, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Lugares() {
  const places = [
    {
      name: "Quedas de Kalandula",
      province: "Malanje",
      description: "Uma das maiores quedas de água de África, com 105 metros de altura",
      category: "Natureza",
      image: "https://images.unsplash.com/photo-1601057278541-a64df1197c19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmZhbGwlMjBuYXR1cmUlMjBzY2VuaWN8ZW58MXx8fHwxNzY4MDYwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Deserto do Namibe",
      province: "Namibe",
      description: "Paisagens desérticas únicas com dunas e flora endémica",
      category: "Deserto",
      image: "https://images.unsplash.com/photo-1647199066877-846462218404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBkZXNlcnQlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY4MDYxMTkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Ilha de Luanda",
      province: "Luanda",
      description: "Península com praias paradisíacas e vida noturna vibrante",
      category: "Praia",
      image: "https://images.unsplash.com/photo-1711802536751-59c868b37108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYmVhY2glMjBzdW5zZXR8ZW58MXx8fHwxNzY4MDYwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Parque Nacional da Kissama",
      province: "Bengo",
      description: "Reserva natural com elefantes, girafas e outros animais selvagens",
      category: "Safari",
      image: "https://images.unsplash.com/photo-1602410125631-7e736e36797c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjBhZHZlbnR1cmUlMjBhZnJpY2F8ZW58MXx8fHwxNzY4MDYwNzU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Fortaleza de São Miguel",
      province: "Luanda",
      description: "Fortaleza histórica do século XVI com vistas panorâmicas",
      category: "História",
      image: "https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwaG90ZWwlMjBsdXh1cnl8ZW58MXx8fHwxNzY3OTg4ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Serra da Leba",
      province: "Huíla",
      description: "Estrada icónica com curvas sinuosas e vistas espetaculares",
      category: "Natureza",
      image: "https://images.unsplash.com/photo-1613908853317-8606178b3e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzY4MDYwNzU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Mussulo",
      province: "Luanda",
      description: "Ilha com praias de areia branca e águas cristalinas",
      category: "Praia",
      image: "https://images.unsplash.com/photo-1711802536751-59c868b37108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYmVhY2glMjBzdW5zZXR8ZW58MXx8fHwxNzY4MDYwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Miradouro da Lua",
      province: "Luanda",
      description: "Formações rochosas que lembram a superfície lunar",
      category: "Natureza",
      image: "https://images.unsplash.com/photo-1647199066877-846462218404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBkZXNlcnQlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY4MDYxMTkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Tundavala",
      province: "Huíla",
      description: "Falésia com vista panorâmica sobre o vale e o planalto",
      category: "Natureza",
      image: "https://images.unsplash.com/photo-1613908853317-8606178b3e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzY4MDYwNzU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const categories = ["Todos", "Natureza", "Praia", "História", "Safari", "Deserto"];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Lugares Imperdíveis</h1>
          <p className="text-xl">Explore os destinos mais fascinantes de Angola</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-white border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors whitespace-nowrap font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group">
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {place.category}
                </div>
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-red-50 transition-colors">
                  <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{place.name}</h3>
                <div className="flex items-center gap-2 mb-3 text-gray-600">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span className="text-sm">{place.province}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{place.description}</p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2">
                  <Navigation className="w-4 h-4" />
                  Ver no mapa
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
