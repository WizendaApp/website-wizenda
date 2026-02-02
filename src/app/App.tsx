import { useState } from "react";
import { Search, Menu, Star, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Carousel } from "./components/Carousel";
import { Viagens } from "./components/Viagens";
import { Lugares } from "./components/Lugares";
import { Eventos } from "./components/Eventos";
import { Blog } from "./components/Blog";
import { Modal } from "./components/Modal";
import clsx from "clsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const carouselImages = [
    { url: "https://i.ibb.co/dwprFRcg/Rectangle-33.png", alt: "Deserto", label: "Família" },
    { url: "https://i.ibb.co/ccT1xJyT/Rectangle-34.png", alt: "Cultura", label: "Cultura" },
    { url: "https://i.ibb.co/yBb6cm8D/Imagem-Whats-App-2025-12-05-s-12-41-00-52eb540f.jpg", alt: "Aventura", label: "Aventura" },
  ];

  // Render pages
  if (currentPage === "viagens") return <><Header currentPage={currentPage} setCurrentPage={setCurrentPage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><Viagens /><Footer setCurrentPage={setCurrentPage} /></>;
  if (currentPage === "lugares") return <><Header currentPage={currentPage} setCurrentPage={setCurrentPage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><Lugares /><Footer setCurrentPage={setCurrentPage} /></>;
  if (currentPage === "eventos") return <><Header currentPage={currentPage} setCurrentPage={setCurrentPage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><Eventos /><Footer setCurrentPage={setCurrentPage} /></>;
  if (currentPage === "blog") return <><Header currentPage={currentPage} setCurrentPage={setCurrentPage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><Blog /><Footer setCurrentPage={setCurrentPage} /></>;

  return (
    <div className="relative min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Modal de App Indisponível */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="App em Desenvolvimento">
        <div className="space-y-4">
          <p className="text-gray-700">
            Nosso aplicativo mobile ainda está em desenvolvimento e não está disponível para download no momento.
          </p>
          <p className="text-gray-700">
            Estamos trabalhando para trazer a melhor experiência para você! Em breve, você poderá explorar Angola diretamente do seu dispositivo móvel.
          </p>
          <div className="pt-4 flex justify-end">
            <button 
              onClick={() => setModalOpen(false)}
              className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
            >
              Entendi
            </button>
          </div>
        </div>
      </Modal>

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-cover bg-center mt-16" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://i.ibb.co/Z1NXpbSX/Rectangle-4.png')` }}>
        <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 px-4">
            Explorar Angola nunca<br />foi tão fácil
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-8 px-4">Descubra experiências incríveis em cada canto do país</p>
          <div className="flex flex-col sm:flex-row gap-4 px-4">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-[5px] hover:bg-orange-600 font-medium">Começar</button>
            <button 
              onClick={() => setModalOpen(true)}
              className="px-8 py-3 rounded-[5px] border border-white bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors"
            >
              Baixar o App
            </button>
          </div>
        </div>
      </section>

      {/* Para cada momento */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Para cada momento, um Wizenda diferente</h2>
          <p className="text-center text-gray-500 mb-12">Quero a melhor experiência para Tour</p>
          <Carousel images={carouselImages} />
        </div>
      </section>
{/* Seção de Parceiros Normalizada */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">
      Nossos Parceiros
    </h2>

    <div
      className="grid justify-center gap-6"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, max-content))"
      }}
    >
      {[
        
        "https://i.ibb.co/05R3Jqx/domestic.png",
        "https://i.ibb.co/jZfB2y48/ruby.png",
        
      ].map((logo, index) => (
        <div
          key={index}
          className="flex items-center justify-center h-14 px-3"
        >
          <img
            src={logo}
            alt={`Parceiro ${index + 1}`}
            className="
              h-15
              w-auto
              object-contain
              grayscale
              opacity-40
              hover:opacity-80
              transition
            "
          />
        </div>
      ))}
    </div>
  </div>
</section>






{/* Negócios e sociedade */}
<section className="py-16">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
      Negócios e sociedade
    </h2>
    <p className="text-center text-gray-600 mb-12 text-sm sm:text-base px-4">
      Conecte-se com oportunidades e eventos em Angola
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { title: "Investir em Angola", desc: "Oportunidades de negócio" },
        { title: "Guia de Negócios", desc: "Informações essenciais" },
        { title: "Eventos", desc: "Calendário completo" },
        { title: "Networking", desc: "Conecte-se com profissionais" }
      ].map((item, index) => (
        <div
          key={index}
          className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
        >
          {/* Número */}
          <div className="w-12 h-12 bg-orange-500 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-lg">
              {index + 1}
            </span>
          </div>

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
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Acomodações em Ondjiva</h2>
            <button className="text-orange-500 hover:text-orange-600 font-medium text-sm sm:text-base">
              Ver tudo →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Experiências Populares</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
{/* Sobre a Empresa */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center gap-12">
      
      {/* Texto */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre a Nossa Empresa</h2>
        <p className="text-gray-600 mb-6">
          A Wizenda é uma plataforma inovadora dedicada a conectar pessoas a experiências incríveis em Angola. Nosso objetivo é tornar cada viagem inesquecível, oferecendo guias completos, dicas locais e ferramentas digitais para explorar o país de forma prática e segura.
        </p>
        <p className="text-gray-600 mb-6">
          Com uma equipe apaixonada por tecnologia e turismo, combinamos inovação, design e conhecimento local para criar experiências únicas para nossos usuários. Desde viagens culturais a aventuras radicais, a Wizenda garante que cada momento seja especial.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-2xl hover:bg-orange-600 transition-colors shadow-lg">
          Saiba Mais
        </button>
      </div>

      {/* Imagem */}
<div className="flex-1 flex justify-center md:justify-end">
  <img 
    src="https://i.ibb.co/FbQQGFXD/woman-traveling-with-suitcase.png" 
    alt="Sobre a Empresa" 
    className="w-full h-auto md:h-[500px] object-cover rounded-2xl"
  />
</div>


    </div>
  </div>
</section>


       {/* Nossa História Começa Aqui */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Nossa História Começa Aqui</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Tusevo Manuel João", price: "Fundador & CEO — Desenvolvedor e Designer UI/UX", image: "https://i.ibb.co/jPv8Pgg4/Whats-App-Image-2026-01-12-at-11-04-47.jpg" },
              { title: "Dumildes Paulo", price: "Co-fundador & Desenvolvedor Backend", image: "" },
              { title: "Alexandre Landa", price: "Full Stack Developer (Flutter)", image: "" },
              { title: "Augusto Baptista", price: "Web Developer", image: "https://i.ibb.co/xtzxpGC6/Whats-App-Image-2026-01-12-at-14-58-03.jpg" }
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">93.000+</div>
              <div className="text-gray-300 text-sm sm:text-base">Viajantes satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">9000+</div>
              <div className="text-gray-300 text-sm sm:text-base">Acomodações</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">800+</div>
              <div className="text-gray-300 text-sm sm:text-base">Experiências únicas</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">180.000+</div>
              <div className="text-gray-300 text-sm sm:text-base">Avaliações</div>
            </div>
          </div>
        </div>
      </section>
      {/* Depoimentos */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">O que dizem Nossos Viajantes</h2>
    
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { name: "Maria Silva", location: "Lisboa", text: "Uma experiência incrível! Angola surpreendeu em cada momento.", img: "https://randomuser.me/api/portraits/women/65.jpg" },
        { name: "João Santos", location: "Luanda", text: "O melhor guia para explorar Angola. Recomendo muito!", img: "https://randomuser.me/api/portraits/men/54.jpg" },
        { name: "Ana Costa", location: "Porto", text: "Descobri lugares incríveis que nunca imaginei existir.", img: "https://randomuser.me/api/portraits/women/68.jpg" }
      ].map((testimonial, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative flex flex-col">
          {/* Barra decorativa */}
          <div className="absolute top-0 left-6 right-6 h-1 rounded-t-xl bg-gradient-to-r from-orange-400 to-orange-600"></div>
          
          {/* Avaliação em estrelas */}
          <div className="flex gap-1 mb-4 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
            ))}
          </div>

          {/* Texto do depoimento */}
          <p className="text-gray-700 mb-6 text-sm sm:text-base">"{testimonial.text}"</p>

          {/* Avatar e info */}
          <div className="flex items-center gap-3 mt-auto">
            <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-orange-500" />
            <div>
              <div className="font-semibold text-gray-800">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.location}</div>
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
    <div className="flex flex-col-reverse md:flex-row items-center gap-12">
      
      {/* Texto, botões e QR */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 flex-1">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Leve Angola no Seu Bolso</h2>
        <p className="text-gray-600">
          Baixe nosso aplicativo e tenha acesso a guias, mapas offline e ofertas exclusivas onde quer que esteja.
        </p>

        {/* Botões App Store / Google Play */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
          <button 
            onClick={() => setModalOpen(true)}
            className="bg-black text-white px-6 py-3 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-900 transition-colors shadow-lg hover:scale-105 transform"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="App Store" className="w-6 h-6" />
            <div className="flex flex-col text-left">
              <span className="text-xs">Baixe na</span>
              <span className="font-semibold">App Store</span>
            </div>
          </button>

          <button 
            onClick={() => setModalOpen(true)}
            className="bg-black text-white px-6 py-3 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-900 transition-colors shadow-lg hover:scale-105 transform"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-10 h-10" />
            <div className="flex flex-col text-left">
              <span className="text-xs">Disponível no</span>
              <span className="font-semibold">Google Play</span>
            </div>
          </button>
        </div>

        {/* Card do QR code */}
        <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center gap-4 mt-6">
          <img src="https://i.ibb.co/2y0t8r7/qr-code.png" alt="QR Code App" className="w-32 h-32 object-cover" />
          <span className="text-gray-600 text-center text-sm">
            Escaneie o QR code e baixe o app agora!
          </span>
        </div>
      </div>
{/* Imagem do app */}
<div className="flex-1 flex justify-center md:justify-center lg:justify-end mt-8 md:mt-0 lg:mr-8">
  <div className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-72 min-h-[480px] md:min-h-[600px] lg:min-h-[640px] bg-gray-200 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center">
    <img
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Receba Ofertas Exclusivas</h2>
          <p className="text-base sm:text-lg mb-8">Inscreva-se na nossa newsletter e fique por dentro das melhores ofertas</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail"
              className="flex-1 px-6 py-4 rounded-full text-gray-800 outline-none"
            />
            <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold hover:bg-gray-100 whitespace-nowrap">
              Inscrever
            </button>
          </div>
        </div>
      </section>
      
      {/* Restante conteúdo: Negócios, Hotéis, Experiências, História, Estatísticas, Depoimentos, App, Newsletter, Footer */}
      {/* Você pode colar aqui as seções que já tinha do seu código original */}

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

// Header com menu hamburguer animado
function Header({ currentPage, setCurrentPage, menuOpen, setMenuOpen }: { currentPage: string, setCurrentPage: (page: string) => void, menuOpen: boolean, setMenuOpen: (state: boolean) => void }) {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-orange-500">Wizenda</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {["Home", "Viagens", "Lugares", "Eventos", "Blog"].map((item) => (
            <button key={item} onClick={() => setCurrentPage(item.toLowerCase())} className={clsx("hover:text-orange-500 transition-colors font-medium", currentPage === item.toLowerCase() && "text-orange-500")}>{item}</button>
          ))}
        </nav>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-1 w-6 h-6 justify-center items-center relative z-50" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={clsx("block h-0.5 w-full bg-black transition-transform duration-300", menuOpen ? "rotate-45 translate-y-2" : "")} />
          <span className={clsx("block h-0.5 w-full bg-black transition-opacity duration-300", menuOpen ? "opacity-0" : "")} />
          <span className={clsx("block h-0.5 w-full bg-black transition-transform duration-300", menuOpen ? "-rotate-45 -translate-y-2" : "")} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={clsx("fixed top-0 right-0 h-full w-64 bg-white shadow-xl transition-transform duration-300 z-40", menuOpen ? "translate-x-0" : "translate-x-full")}>
        <nav className="flex flex-col mt-20">
          {["Home", "Viagens", "Lugares", "Eventos", "Blog"].map((item) => (
            <button key={item} onClick={() => { setCurrentPage(item.toLowerCase()); setMenuOpen(false); }} className="px-6 py-4 text-left text-lg hover:bg-gray-100 transition-colors">{item}</button>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      <div onClick={() => setMenuOpen(false)} className={clsx("fixed top-0 left-0 h-full w-full bg-black/50 backdrop-blur-sm transition-opacity duration-300", menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")} />
    </header>
  );
  
}

  

// Footer (igual ao seu original)
function Footer({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <footer className="bg-[#1E3A5F] text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Wizenda</h3>
            <p className="text-gray-400 text-sm">Sua plataforma completa para explorar Angola</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><button onClick={() => setCurrentPage("home")} className="hover:text-white">Sobre Nós</button></li>
              <li><button onClick={() => setCurrentPage("lugares")} className="hover:text-white">Destinos</button></li>
              <li><button onClick={() => setCurrentPage("blog")} className="hover:text-white">Blog</button></li>
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
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /><span>+244 957 184 813</span></li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /><span>wizenda0@gmail.com</span></li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>Luanda, Angola</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <span>© 2026 Wizenda Angola. Todos os direitos reservados.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-500"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-orange-500"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-orange-500"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}