import { Search, Menu, Star, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Carousel } from './components/Carousel';
import { Viagens } from './components/Viagens';
import { Lugares } from './components/Lugares';
import { Eventos } from './components/Eventos';
import { FaMoneyBillWave, FaBook, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { Blog } from './components/Blog';
import { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const carouselImages = [
    {
      url: "https://i.ibb.co/dwprFRcg/Rectangle-33.png",
      alt: "Deserto",
      label: "Família"
    },
    {
      url: "https://i.ibb.co/ccT1xJyT/Rectangle-34.png",
      alt: "Cultura",
      label: "Cultura"
    },
    {
      url: "https://i.ibb.co/yBb6cm8D/Imagem-Whats-App-2025-12-05-s-12-41-00-52eb540f.jpg",
      alt: "Aventura",
      label: "Aventura"
    }
  ];

  // Render different pages based on currentPage state
  if (currentPage === 'viagens') return <><Header setCurrentPage={setCurrentPage} currentPage={currentPage} /><Viagens /><Footer setCurrentPage={setCurrentPage} /></>;
  if (currentPage === 'lugares') return <><Header setCurrentPage={setCurrentPage} currentPage={currentPage} /><Lugares /><Footer setCurrentPage={setCurrentPage} /></>;
  if (currentPage === 'eventos') return <><Header setCurrentPage={setCurrentPage} currentPage={currentPage} /><Eventos /><Footer setCurrentPage={setCurrentPage} /></>;
  if (currentPage === 'blog') return <><Header setCurrentPage={setCurrentPage} currentPage={currentPage} /><Blog /><Footer setCurrentPage={setCurrentPage} /></>;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://i.ibb.co/Z1NXpbSX/Rectangle-4.png')`
      }}>
        <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Explorar Angola nunca<br />foi tão fácil
          </h1>
          <p className="text-xl text-white mb-8">
            Descubra experiências incríveis em cada canto do país
          </p>
          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-[5px] hover:bg-orange-600 font-medium">
              Começar 
            </button>
           <button className="px-8 py-3 rounded-[5px] border border-white bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors">
  Baixar o App
</button>
          </div>
        </div>
      </section>

      {/* Para cada momento section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">
            Para cada momento, um Wizenda<br />diferente
          </h2>
          <p className="text-center text-gray-500 mb-12">Quero a melhor experiência para Tour</p>
          <Carousel images={carouselImages} />
        </div>
      </section>

      {/* Negócios e sociedade */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Negócios e sociedade</h2>
          <p className="text-center text-gray-600 mb-12">
            Conecte-se com oportunidades e eventos em Angola
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Investir em Angola", desc: "Oportunidades de negócio"  },
              { title: "Guia de Negócios", desc: "Informações essenciais" },
              { title: "Eventos", desc: "Calendário completo" },
              { title: "Networking", desc: "Conecte-se com profissionais" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-500 rounded-lg mb-4"></div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acomodações em Ondjiva */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Acomodações em Ondjiva</h2>
            <button className="text-orange-500 hover:text-orange-600 font-medium">
              Ver tudo →
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "HOTEL BUNGALOW MARIA", rating: 4.5, reviews: 120, price: "120.000 Kz", image: "https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwaG90ZWwlMjBsdXh1cnl8ZW58MXx8fHwxNzY3OTg4ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080" },
              { name: "HOTEL COMPLEXO LUXO", rating: 4.8, reviews: 85, price: "180.000 Kz", image: "https://images.unsplash.com/photo-1601057278541-a64df1197c19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmZhbGwlMjBuYXR1cmUlMjBzY2VuaWN8ZW58MXx8fHwxNzY4MDYwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080" },
              { name: "POUSADA VISTA MAR", rating: 4.3, reviews: 95, price: "95.000 Kz", image: "https://images.unsplash.com/photo-1613908853317-8606178b3e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzY4MDYwNzU5fDA&ixlib=rb-4.1.0&q=80&w=1080" }
            ].map((hotel, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-65">
                  <ImageWithFallback 
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-xs font-medium">
                    Popular
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">{hotel.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(hotel.rating) ? 'fill-orange-500 text-orange-500' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({hotel.reviews})</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-orange-500 font-bold text-lg">{hotel.price}</span>
                      <span className="text-gray-600 text-sm">/noite</span>
                    </div>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600">
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiências Populares */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Experiências Populares</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Tour pelas Quedas de Kalandula", price: "45.000 Kz", image: "https://images.unsplash.com/photo-1601057278541-a64df1197c19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmZhbGwlMjBuYXR1cmUlMjBzY2VuaWN8ZW58MXx8fHwxNzY4MDYwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080" },
              { title: "Safari no Parque Nacional", price: "85.000 Kz", image: "https://images.unsplash.com/photo-1602410125631-7e736e36797c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjBhZHZlbnR1cmUlMjBhZnJpY2F8ZW58MXx8fHwxNzY4MDYwNzU5fDA&ixlib=rb-4.1.0&q=80&w=1080" },
              { title: "Tour Cultural em Luanda", price: "35.000 Kz", image: "https://images.unsplash.com/photo-1761342612154-57377cda7a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY3VsdHVyZSUyMHZpbGxhZ2V8ZW58MXx8fHwxNzY4MDYwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080" },
              { title: "Expedição ao Deserto", price: "120.000 Kz", image: "https://images.unsplash.com/photo-1613908853317-8606178b3e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzY4MDYwNzU5fDA&ixlib=rb-4.1.0&q=80&w=1080" }
            ].map((exp, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-60">
                  <ImageWithFallback 
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">{exp.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-500 font-bold">{exp.price}</span>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600">
                      Ver mais
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-[#1E3A5F] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">93.000+</div>
              <div className="text-gray-300">Viajantes satisfeitos</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">9000+</div>
              <div className="text-gray-300">Acomodações</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">800+</div>
              <div className="text-gray-300">Experiências únicas</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">180.000+</div>
              <div className="text-gray-300">Avaliações</div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que dizem Nossos Viajantes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Maria Silva", location: "Lisboa", text: "Uma experiência incrível! Angola surpreendeu em cada momento." },
              { name: "João Santos", location: "Luanda", text: "O melhor guia para explorar Angola. Recomendo muito!" },
              { name: "Ana Costa", location: "Porto", text: "Descobri lugares incríveis que nunca imaginei existir." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-200 rounded-full"></div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Leve Angola no Seu Bolso</h2>
              <p className="text-gray-600 mb-6">
                Baixe nosso aplicativo e tenha acesso a guias, mapas offline e ofertas exclusivas onde quer que esteja.
              </p>
              <div className="flex gap-4 mb-8">
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2">
                  <span>App Store</span>
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2">
                  <span>Google Play</span>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-[550px] bg-gray-200 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                <ImageWithFallback 
                  src="https://i.ibb.co/39wBjfBx/Rectangle-41.png"
                  alt="App Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Receba Ofertas Exclusivas</h2>
          <p className="text-lg mb-8">Inscreva-se na nossa newsletter e fique por dentro das melhores ofertas</p>
          <div className="flex gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail"
              className="flex-1 px-6 py-4 rounded-full text-gray-800 outline-none"
            />
            <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold hover:bg-gray-100">
              Inscrever
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

function Header({ setCurrentPage, currentPage }: { setCurrentPage: (page: string) => void, currentPage: string }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-orange-500">Wizenda</button>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => setCurrentPage('viagens')} className={`${currentPage === 'viagens' ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}>Viagens</button>
            <button onClick={() => setCurrentPage('lugares')} className={`${currentPage === 'lugares' ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}>Lugares</button>
            <button onClick={() => setCurrentPage('eventos')} className={`${currentPage === 'eventos' ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}>Eventos</button>
            <button onClick={() => setCurrentPage('blog')} className={`${currentPage === 'blog' ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}>Blog</button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 border rounded-full px-4 py-2">
            <Search className="w-4 h-4 text-gray-400" />
            <input type="text" placeholder="Buscar..." className="outline-none text-sm" />
          </div>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-[5px]  hover:bg-orange-600">
            Entrar
          </button>
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <footer className="bg-[#1E3A5F] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Wizenda</h3>
            <p className="text-gray-400 text-sm">
              Sua plataforma completa para explorar Angola
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-white">Sobre Nós</button></li>
              <li><button onClick={() => setCurrentPage('lugares')} className="hover:text-white">Destinos</button></li>
              <li><button onClick={() => setCurrentPage('blog')} className="hover:text-white">Blog</button></li>
              <li><a href="#" className="hover:text-white">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Suporte</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white">Privacidade</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+244 957 184 813</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>wizenda0@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Luanda, Angola</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2026 Wizenda Angola. Todos os direitos reservados.
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-500"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-orange-500"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-orange-500"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}