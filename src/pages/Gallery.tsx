import { useState, useEffect } from "react";
import { Layout } from "@/components/layout";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { GallerySkeleton } from "@/components/skeletons/GallerySkeleton";

const categories = [
  { id: "all", label: "Semua" },
  { id: "training", label: "Training" },
  { id: "workshop", label: "Workshop" },
  { id: "event", label: "Event" },
  { id: "graduation", label: "Wisuda" },
];

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    category: "training",
    title: "Leadership Fundamentals Batch 45",
    description: "Sesi interaktif dengan peserta dari berbagai industri",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    category: "workshop",
    title: "Team Building Workshop",
    description: "Aktivitas kolaborasi tim di outdoor setting",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
    category: "event",
    title: "Leadership Summit 2024",
    description: "Annual gathering dengan keynote speakers internasional",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    category: "training",
    title: "Executive Coaching Session",
    description: "One-on-one coaching dengan senior executives",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
    category: "workshop",
    title: "Strategic Planning Workshop",
    description: "Fasilitasi strategic planning untuk corporate client",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&h=600&fit=crop",
    category: "graduation",
    title: "Wisuda Batch 40-44",
    description: "Perayaan kelulusan program Leadership Fundamentals",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
    category: "event",
    title: "Women in Leadership Forum",
    description: "Forum diskusi dan networking untuk pemimpin perempuan",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
    category: "training",
    title: "Corporate Training - Bank XYZ",
    description: "In-house training untuk leadership team",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1558403194-611308249627?w=800&h=600&fit=crop",
    category: "workshop",
    title: "Design Thinking Workshop",
    description: "Innovation workshop dengan metode design thinking",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    category: "event",
    title: "Alumni Gathering 2024",
    description: "Reuni dan networking alumni Jejak Pemimpin",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
    category: "graduation",
    title: "Executive Program Completion",
    description: "Sertifikasi peserta Executive Coaching Program",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
    category: "training",
    title: "Change Leadership Program",
    description: "Training untuk leaders yang memimpin transformasi",
  },
];

export default function Gallery() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const currentIndex = selectedImage !== null
    ? filteredItems.findIndex(item => item.id === selectedImage)
    : -1;

  const navigateImage = (direction: "prev" | "next") => {
    if (currentIndex === -1) return;
    const newIndex = direction === "prev"
      ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
      : (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[newIndex].id);
  };

  const selectedItem = galleryItems.find(item => item.id === selectedImage);

  if (isLoading) return <GallerySkeleton />;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Galeri
            </span>
            <h1 className="text-foreground mb-6">
              Momen-Momen
              <br />
              <span className="text-accent">Perjalanan Bersama</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Lihat dokumentasi kegiatan pelatihan, workshop, dan event
              yang telah kami selenggarakan bersama ribuan peserta.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="section-container">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
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

          {/* Gallery Grid - Masonry-like */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-muted">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <X size={24} />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage("prev"); }}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage("next"); }}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.src}
              alt={selectedItem.title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold">{selectedItem.title}</h3>
              <p className="text-white/70 mt-1">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
