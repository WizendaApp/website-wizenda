import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Blog() {
  const posts = [
    {
      title: "10 Lugares Imperdíveis em Angola",
      excerpt: "Descubra os destinos mais incríveis que você precisa visitar em Angola, desde as praias paradisíacas até as montanhas majestosas.",
      author: "Maria Santos",
      date: "10 Jan 2026",
      category: "Guias",
      image: "https://images.unsplash.com/photo-1613908853317-8606178b3e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzY4MDYwNzU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "5 min"
    },
    {
      title: "Gastronomia Angolana: Um Guia Completo",
      excerpt: "Explore os sabores únicos da culinária angolana, desde o tradicional muamba até os pratos mais contemporâneos.",
      author: "João Silva",
      date: "08 Jan 2026",
      category: "Gastronomia",
      image: "https://images.unsplash.com/photo-1647632250951-931b4c6f3b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbG9jYWwlMjBmb29kJTIwY3Vpc2luZXxlbnwxfHx8fDE3NjgwNjExOTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "7 min"
    },
    {
      title: "Safari na Kissama: Dicas e Recomendações",
      excerpt: "Tudo o que você precisa saber antes de fazer um safari no Parque Nacional da Kissama.",
      author: "Ana Costa",
      date: "05 Jan 2026",
      category: "Aventura",
      image: "https://images.unsplash.com/photo-1602410125631-7e736e36797c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjBhZHZlbnR1cmUlMjBhZnJpY2F8ZW58MXx8fHwxNzY4MDYwNzU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "6 min"
    },
    {
      title: "As Melhores Praias de Angola",
      excerpt: "Um guia completo das praias mais bonitas e paradisíacas do país.",
      author: "Pedro Oliveira",
      date: "03 Jan 2026",
      category: "Praias",
      image: "https://images.unsplash.com/photo-1711802536751-59c868b37108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYmVhY2glMjBzdW5zZXR8ZW58MXx8fHwxNzY4MDYwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "8 min"
    },
    {
      title: "Cultura e Tradições Angolanas",
      excerpt: "Conheça as ricas tradições culturais de Angola e suas diferentes províncias.",
      author: "Luísa Fernandes",
      date: "01 Jan 2026",
      category: "Cultura",
      image: "https://images.unsplash.com/photo-1761342612154-57377cda7a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY3VsdHVyZSUyMHZpbGxhZ2V8ZW58MXx8fHwxNzY4MDYwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "10 min"
    },
    {
      title: "Aventura no Deserto do Namibe",
      excerpt: "Uma experiência única explorando as dunas e a flora endêmica do Namibe.",
      author: "Carlos Mendes",
      date: "28 Dez 2025",
      category: "Aventura",
      image: "https://images.unsplash.com/photo-1647199066877-846462218404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBkZXNlcnQlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY4MDYxMTkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "9 min"
    }
  ];

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  const categories = ["Todos", "Guias", "Gastronomia", "Aventura", "Praias", "Cultura"];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Blog Wizenda</h1>
          <p className="text-xl">Histórias, dicas e inspirações sobre Angola</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Post */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Destaque</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl grid md:grid-cols-2">
            <div className="relative h-80 md:h-auto">
              <ImageWithFallback
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-orange-500 text-white px-4 py-2 rounded-full font-medium">
                {featuredPost.category}
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
              <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <span>{featuredPost.readTime} de leitura</span>
              </div>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 font-medium inline-flex items-center gap-2 w-fit">
                Ler artigo
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-white border-2 border-gray-200 hover:border-green-600 hover:text-green-600 transition-colors whitespace-nowrap font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group">
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime} de leitura</span>
                  <button className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1 text-sm">
                    Ler mais
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 font-medium">
            Carregar mais artigos
          </button>
        </div>
      </div>
    </div>
  );
}
