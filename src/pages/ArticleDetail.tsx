import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

// This would typically come from an API or CMS
const articles = [
  {
    id: 1,
    slug: "5-kesalahan-umum-pemimpin-baru",
    title: "5 Kesalahan Umum yang Dilakukan Pemimpin Baru dan Cara Menghindarinya",
    excerpt:
      "Transisi menjadi pemimpin tidak selalu mulus. Dari micromanaging hingga gagal mendelegasikan, berikut adalah kesalahan yang sering dilakukan dan strategi untuk menghindarinya.",
    date: "15 Des 2025",
    readTime: "5 min read",
    category: "Leadership Tips",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    author: {
      name: "Dr. Ahmad Wijaya",
      role: "Founder & CEO",
      avatar: "AW",
    },
  },
];

const relatedArticles = [
  {
    slug: "membangun-budaya-feedback",
    title: "Membangun Budaya Feedback yang Konstruktif di Tim Anda",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
    category: "Team Management",
  },
  {
    slug: "seni-delegation",
    title: "Seni Delegasi: Bagaimana Melepaskan Kontrol dan Memberdayakan Tim",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
    category: "Leadership Tips",
  },
  {
    slug: "emotional-intelligence-leaders",
    title: "Mengapa Emotional Intelligence Lebih Penting dari IQ untuk Leaders?",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
    category: "Personal Development",
  },
];

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug) || articles[0];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link 
              to="/articles" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Kembali ke Artikel
            </Link>

            {/* Category */}
            <span className="inline-block px-4 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full mb-4">
              {article.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {article.author.avatar}
                </div>
                <div>
                  <div className="font-medium text-foreground">{article.author.name}</div>
                  <div className="text-sm text-muted-foreground">{article.author.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground mb-8">
                {article.excerpt}
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">1. Micromanaging</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Kesalahan paling umum adalah mencoba mengontrol setiap detail pekerjaan tim. 
                Ini tidak hanya melelahkan bagi Anda sebagai pemimpin, tetapi juga merusak 
                kepercayaan dan motivasi tim. Anggota tim yang merasa tidak dipercaya akan 
                kehilangan inisiatif dan kreativitas mereka.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Solusi:</strong> Fokus pada hasil, bukan proses. 
                Tetapkan ekspektasi yang jelas, berikan resources yang dibutuhkan, dan percaya 
                tim Anda untuk menyelesaikan tugas dengan cara mereka sendiri.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">2. Gagal Mendelegasikan</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Banyak pemimpin baru merasa bahwa mereka harus melakukan semuanya sendiri. 
                Mereka takut bahwa mendelegasikan tugas akan membuat mereka terlihat lemah 
                atau tidak kompeten. Padahal, delegasi yang efektif adalah skill kepemimpinan 
                yang krusial.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Solusi:</strong> Mulai dengan tugas-tugas kecil. 
                Identifikasi kekuatan unik setiap anggota tim dan delegasikan sesuai dengan 
                kemampuan mereka. Ingat, delegasi juga merupakan kesempatan pengembangan untuk tim.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">3. Menghindari Feedback</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Feedback adalah gift. Namun banyak pemimpin baru yang menghindari memberikan 
                feedback negatif karena takut merusak hubungan, atau menghindari menerima 
                feedback karena ego.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Solusi:</strong> Gunakan framework SBI 
                (Situation-Behavior-Impact) untuk memberikan feedback yang konstruktif. 
                Dan aktif minta feedback dari tim tentang kepemimpinan Anda.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">4. Tidak Membangun Hubungan</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Leadership bukan hanya tentang task dan target. Pemimpin yang efektif 
                membangun hubungan yang genuine dengan tim mereka. Mereka mengenal anggota 
                tim sebagai manusia, bukan hanya sebagai pekerja.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Solusi:</strong> Luangkan waktu untuk 
                one-on-one regular. Tanyakan tentang aspirasi karir mereka. Tunjukkan bahwa 
                Anda peduli dengan wellbeing mereka secara holistik.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">5. Tidak Mau Mengakui Kesalahan</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Mengakui kesalahan bukan tanda kelemahan, melainkan tanda kekuatan dan 
                integritas. Pemimpin yang tidak pernah mengakui kesalahan akan kehilangan 
                respek dari tim.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Solusi:</strong> Jadilah role model dalam 
                vulnerability. Ketika Anda membuat kesalahan, akui dengan jujur, minta maaf 
                jika perlu, dan fokus pada pembelajaran dan perbaikan.
              </p>

              <div className="bg-accent/10 border border-accent/20 rounded-xl p-8 mt-12">
                <h3 className="text-xl font-bold text-foreground mb-4">Kesimpulan</h3>
                <p className="text-muted-foreground">
                  Menjadi pemimpin yang efektif adalah perjalanan, bukan tujuan. Dengan 
                  menyadari kesalahan-kesalahan umum ini dan secara aktif berusaha 
                  menghindarinya, Anda sudah selangkah lebih maju dalam perjalanan 
                  kepemimpinan Anda.
                </p>
              </div>
            </div>

            {/* Share */}
            <div className="flex items-center gap-4 mt-12 pt-8 border-t border-border">
              <span className="text-foreground font-medium">Share:</span>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin size={18} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter size={18} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Share2 size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-padding bg-secondary/30">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-foreground mb-8">Artikel Terkait</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                to={`/articles/${related.slug}`}
                className="group bg-card rounded-2xl overflow-hidden border border-border card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                      {related.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
