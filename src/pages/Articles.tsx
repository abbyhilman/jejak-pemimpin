import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "Semua" },
  { id: "leadership-tips", label: "Leadership Tips" },
  { id: "team-management", label: "Team Management" },
  { id: "personal-development", label: "Personal Development" },
  { id: "case-studies", label: "Case Studies" },
];

const articles = [
  {
    id: 1,
    slug: "5-kesalahan-umum-pemimpin-baru",
    title: "5 Kesalahan Umum yang Dilakukan Pemimpin Baru dan Cara Menghindarinya",
    excerpt:
      "Transisi menjadi pemimpin tidak selalu mulus. Dari micromanaging hingga gagal mendelegasikan, berikut adalah kesalahan yang sering dilakukan dan strategi untuk menghindarinya.",
    content: `
      <p>Menjadi pemimpin untuk pertama kalinya adalah pengalaman yang menantang sekaligus exciting. Namun, banyak pemimpin baru yang terjebak dalam kesalahan-kesalahan umum yang sebenarnya bisa dihindari.</p>
      
      <h2>1. Micromanaging</h2>
      <p>Kesalahan paling umum adalah mencoba mengontrol setiap detail pekerjaan tim. Ini tidak hanya melelahkan, tetapi juga merusak kepercayaan dan motivation tim.</p>
      
      <h2>2. Gagal Mendelegasikan</h2>
      <p>Banyak pemimpin baru merasa bahwa mereka harus melakukan semuanya sendiri. Padahal, delegasi yang efektif adalah skill kepemimpinan yang krusial.</p>
      
      <h2>3. Menghindari Feedback</h2>
      <p>Feedback adalah gift. Pemimpin yang baik aktif mencari feedback dan menggunakannya untuk berkembang.</p>
      
      <h2>4. Tidak Membangun Hubungan</h2>
      <p>Leadership bukan hanya tentang task dan target. Membangun hubungan yang genuine dengan tim adalah fondasi kepemimpinan yang efektif.</p>
      
      <h2>5. Tidak Mau Mengakui Kesalahan</h2>
      <p>Mengakui kesalahan bukan tanda kelemahan, melainkan tanda kekuatan dan integritas.</p>
    `,
    date: "15 Des 2025",
    readTime: "5 min read",
    category: "leadership-tips",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    featured: true,
  },
  {
    id: 2,
    slug: "membangun-budaya-feedback",
    title: "Membangun Budaya Feedback yang Konstruktif di Tim Anda",
    excerpt:
      "Feedback adalah gift, tapi hanya jika disampaikan dengan cara yang tepat. Pelajari framework SBI dan teknik lainnya untuk membangun budaya feedback yang positif.",
    content: "",
    date: "10 Des 2025",
    readTime: "7 min read",
    category: "team-management",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop",
    featured: false,
  },
  {
    id: 3,
    slug: "emotional-intelligence-leaders",
    title: "Mengapa Emotional Intelligence Lebih Penting dari IQ untuk Leaders?",
    excerpt:
      "Penelitian menunjukkan bahwa EQ seringkali lebih menentukan kesuksesan kepemimpinan daripada IQ. Simak bagaimana mengembangkan EQ Anda.",
    content: "",
    date: "5 Des 2025",
    readTime: "6 min read",
    category: "personal-development",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=400&fit=crop",
    featured: true,
  },
  {
    id: 4,
    slug: "transformasi-budaya-perusahaan-xyz",
    title: "Case Study: Transformasi Budaya di Perusahaan XYZ dalam 12 Bulan",
    excerpt:
      "Bagaimana sebuah perusahaan tradisional berhasil mentransformasi budaya kerja dan meningkatkan engagement karyawan secara signifikan.",
    content: "",
    date: "28 Nov 2025",
    readTime: "10 min read",
    category: "case-studies",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop",
    featured: false,
  },
  {
    id: 5,
    slug: "seni-delegation",
    title: "Seni Delegasi: Bagaimana Melepaskan Kontrol dan Memberdayakan Tim",
    excerpt:
      "Delegasi yang efektif bukan sekadar memberikan tugas. Pelajari framework RACI dan teknik delegation yang memberdayakan.",
    content: "",
    date: "20 Nov 2025",
    readTime: "6 min read",
    category: "leadership-tips",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop",
    featured: false,
  },
  {
    id: 6,
    slug: "remote-team-management",
    title: "Memimpin Tim Remote: Tantangan dan Strategi yang Berhasil",
    excerpt:
      "Era kerja hybrid membutuhkan pendekatan kepemimpinan yang berbeda. Temukan strategi yang telah terbukti efektif.",
    content: "",
    date: "15 Nov 2025",
    readTime: "8 min read",
    category: "team-management",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop",
    featured: false,
  },
  {
    id: 7,
    slug: "growth-mindset",
    title: "Growth Mindset: Kunci Pengembangan Diri yang Berkelanjutan",
    excerpt:
      "Carol Dweck's research tentang growth mindset dan bagaimana menerapkannya dalam kepemimpinan sehari-hari.",
    content: "",
    date: "10 Nov 2025",
    readTime: "5 min read",
    category: "personal-development",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=400&fit=crop",
    featured: false,
  },
  {
    id: 8,
    slug: "conflict-resolution",
    title: "Mengelola Konflik Tim: Dari Masalah Menjadi Peluang Pertumbuhan",
    excerpt:
      "Konflik tidak selalu negatif. Pelajari bagaimana mengubah konflik menjadi katalis untuk inovasi dan pertumbuhan tim.",
    content: "",
    date: "5 Nov 2025",
    readTime: "7 min read",
    category: "team-management",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
    featured: false,
  },
];

export default function Articles() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = articles.filter(a => a.featured);
  const regularArticles = filteredArticles.filter(a => !a.featured || activeCategory !== "all" || searchQuery);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Artikel & Insights
            </span>
            <h1 className="text-foreground mb-6">
              Wawasan untuk
              <br />
              <span className="text-accent">Perjalanan Leadership Anda</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Temukan artikel, tips, dan insight praktis untuk mengembangkan 
              kepemimpinan Anda dari para ahli dan praktisi.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {activeCategory === "all" && !searchQuery && (
        <section className="section-padding pb-0">
          <div className="section-container">
            <h2 className="text-2xl font-bold text-foreground mb-8">Artikel Pilihan</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/articles/${article.slug}`}
                  className="group bg-card rounded-2xl overflow-hidden border border-border card-hover"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 mb-4">
                      {article.excerpt}
                    </p>
                    <span className="text-accent font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Baca Selengkapnya
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="section-padding">
        <div className="section-container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          {regularArticles.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/articles/${article.slug}`}
                  className="group bg-card rounded-2xl overflow-hidden border border-border card-hover"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full capitalize">
                        {article.category.replace("-", " ")}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {article.readTime}
                      </span>
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
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Tidak ada artikel yang ditemukan untuk pencarian "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
