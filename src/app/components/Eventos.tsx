import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Eventos() {
  const events = [
    {
      title: "Festival de Música Afro",
      date: "15 Fev 2026",
      time: "18:00",
      location: "Luanda",
      price: "Grátis",
      category: "Música",
      image: "https://images.unsplash.com/photo-1509099955921-f0b4ed0c175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGVvcGxlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4MDYwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Feira de Artesanato",
      date: "20 Fev 2026",
      time: "10:00",
      location: "Benguela",
      price: "5.000 Kz",
      category: "Cultura",
      image: "https://images.unsplash.com/photo-1761342612154-57377cda7a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY3VsdHVyZSUyMHZpbGxhZ2V8ZW58MXx8fHwxNzY4MDYwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Maratona da Paz",
      date: "28 Fev 2026",
      time: "06:00",
      location: "Huambo",
      price: "15.000 Kz",
      category: "Desporto",
      image: "https://images.unsplash.com/photo-1613908853317-8606178b3e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzY4MDYwNzU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Festival Gastronómico",
      date: "05 Mar 2026",
      time: "12:00",
      location: "Lobito",
      price: "20.000 Kz",
      category: "Gastronomia",
      image: "https://images.unsplash.com/photo-1647632250951-931b4c6f3b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbG9jYWwlMjBmb29kJTIwY3Vpc2luZXxlbnwxfHx8fDE3NjgwNjExOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Conferência de Turismo",
      date: "10 Mar 2026",
      time: "09:00",
      location: "Luanda",
      price: "50.000 Kz",
      category: "Negócios",
      image: "https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwaG90ZWwlMjBsdXh1cnl8ZW58MXx8fHwxNzY3OTg4ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Carnaval de Luanda",
      date: "15 Mar 2026",
      time: "14:00",
      location: "Luanda",
      price: "Grátis",
      category: "Cultura",
      image: "https://images.unsplash.com/photo-1509099955921-f0b4ed0c175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGVvcGxlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4MDYwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const categories = ["Todos", "Música", "Cultura", "Desporto", "Gastronomia", "Negócios"];
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Eventos em Angola</h1>
          <p className="text-xl">Descubra os melhores eventos acontecendo em todo o país</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3">Categorias</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-white border-2 border-gray-200 hover:border-purple-600 hover:text-purple-600 transition-colors whitespace-nowrap font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3">Mês</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {months.map((month) => (
              <button
                key={month}
                className="px-6 py-2 rounded-full bg-white border-2 border-gray-200 hover:border-purple-600 hover:text-purple-600 transition-colors whitespace-nowrap font-medium"
              >
                {month}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative h-48">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.category}
                </div>
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{event.date.split(' ')[0]}</div>
                  <div className="text-xs text-gray-600">{event.date.split(' ')[1]}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-purple-600" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Ticket className="w-4 h-4 text-purple-600" />
                    <span className="font-bold text-purple-600">{event.price}</span>
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition-colors font-medium">
                  Comprar ingresso
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
