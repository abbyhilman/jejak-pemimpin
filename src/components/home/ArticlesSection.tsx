import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: 1,
    slug: "5-kesalahan-umum-pemimpin-baru",
    title: "5 Kesalahan Umum yang Dilakukan Pemimpin Baru",
    excerpt:
      "Transisi menjadi pemimpin tidak selalu mulus. Berikut adalah 5 kesalahan yang sering dilakukan dan cara menghindarinya.",
    date: "15 Des 2025",
    category: "Leadership Tips",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    slug: "membangun-budaya-feedback",
    title: "Membangun Budaya Feedback yang Konstruktif",
    excerpt:
      "Feedback adalah gift, tapi hanya jika disampaikan dengan cara yang tepat. Pelajari framework yang efektif.",
    date: "10 Des 2025",
    category: "Team Management",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    slug: "emotional-intelligence-leaders",
    title: "Mengapa Emotional Intelligence Penting bagi Leaders?",
    excerpt:
      "EQ seringkali lebih penting daripada IQ dalam kepemimpinan. Simak penelitian dan praktik terbaiknya.",
    date: "5 Des 2025",
    category: "Leadership Skills",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=400&fit=crop",
  },
];

export function ArticlesSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Artikel & Insights
            </span>
            <h2 className="text-foreground mb-4">
              Wawasan untuk Perjalanan Leadership Anda
            </h2>
            <p className="text-muted-foreground text-lg">
              Temukan artikel, tips, dan insight praktis untuk mengembangkan 
              kepemimpinan Anda.
            </p>
          </div>
          <Button asChild variant="outline" className="group self-start md:self-auto">
            <Link to="/articles">
              Lihat Semua Artikel
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </Button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              to={`/articles/${article.slug}`}
              className="group bg-card rounded-2xl overflow-hidden border border-border card-hover"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar size={14} />
                  {article.date}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
