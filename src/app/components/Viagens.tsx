import { MapPin, Calendar, Users, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Viagens() {
  const trips = [
    {
      title: "Expedição Namibe - 7 Dias",
      location: "Namibe",
      duration: "7 dias / 6 noites",
      group: "Máx. 12 pessoas",
      price: "450.000 Kz",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1647199066877-846462218404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBkZXNlcnQlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY4MDYxMTkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: ["Deserto do Namibe", "Praia do Baba", "Welwitschia"]
    },
    {
      title: "Rota das Quedas - 5 Dias",
      location: "Malanje",
      duration: "5 dias / 4 noites",
      group: "Máx. 15 pessoas",
      price: "320.000 Kz",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1601057278541-a64df1197c19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmZhbGwlMjBuYXR1cmUlMjBzY2VuaWN8ZW58MXx8fHwxNzY4MDYwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: ["Quedas de Kalandula", "Pedras Negras", "Vila histórica"]
    },
    {
      title: "Safari Kissama - 3 Dias",
      location: "Parque Nacional da Kissama",
      duration: "3 dias / 2 noites",
      group: "Máx. 8 pessoas",
      price: "280.000 Kz",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1602410125631-7e736e36797c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjBhZHZlbnR1cmUlMjBhZnJpY2F8ZW58MXx8fHwxNzY4MDYwNzU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: ["Safari fotográfico", "Observação de elefantes", "Acampamento"]
    },
    {
      title: "Cultura e História - 4 Dias",
      location: "Luanda e arredores",
      duration: "4 dias / 3 noites",
      group: "Máx. 20 pessoas",
      price: "180.000 Kz",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1761342612154-57377cda7a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY3VsdHVyZSUyMHZpbGxhZ2V8ZW58MXx8fHwxNzY4MDYwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: ["Fortaleza de São Miguel", "Museu da Escravatura", "Ilha de Luanda"]
    },
    {
      title: "Praias do Sul - 6 Dias",
      location: "Benguela e Namibe",
      duration: "6 dias / 5 noites",
      group: "Máx. 10 pessoas",
      price: "390.000 Kz",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1711802536751-59c868b37108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYmVhY2glMjBzdW5zZXR8ZW58MXx8fHwxNzY4MDYwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: ["Praia Morena", "Baía Azul", "Desportos aquáticos"]
    },
    {
      title: "Aventura no Interior - 8 Dias",
      location: "Huambo e Bié",
      duration: "8 dias / 7 noites",
      group: "Máx. 12 pessoas",
      price: "520.000 Kz",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1613908853317-8606178b3e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzY4MDYwNzU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: ["Planalto Central", "Cachoeiras", "Aldeias tradicionais"]
    }
  ];

  const filters = ["Todas", "Aventura", "Cultura", "Praias", "Safari", "História"];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Viagens Inesquecíveis</h1>
          <p className="text-xl">Descubra Angola através de experiências cuidadosamente planejadas</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              className="px-6 py-2 rounded-full bg-white border-2 border-gray-200 hover:border-orange-500 hover:text-orange-500 transition-colors whitespace-nowrap font-medium"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <ImageWithFallback
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                  <span className="font-bold text-sm">{trip.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{trip.title}</h3>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span>{trip.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>{trip.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span>{trip.group}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {trip.highlights.map((highlight, idx) => (
                    <span key={idx} className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-medium">
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">A partir de</div>
                    <div className="text-2xl font-bold text-orange-500">{trip.price}</div>
                  </div>
                  <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 font-medium">
                    Ver detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
