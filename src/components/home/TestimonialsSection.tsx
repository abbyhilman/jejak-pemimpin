import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Program Leadership Fundamentals benar-benar mengubah cara saya memimpin tim. Saya sekarang lebih percaya diri dan efektif dalam mengambil keputusan.",
    author: "Rina Wijaya",
    role: "Manager, PT. Teknologi Nusantara",
    avatar: "RW",
  },
  {
    id: 2,
    quote:
      "Executive Coaching dari Jejak Pemimpin membantu saya melihat blind spots dalam kepemimpinan saya. ROI-nya sangat terasa dalam 6 bulan pertama.",
    author: "Budi Santoso",
    role: "Director, Bank Mandiri",
    avatar: "BS",
  },
  {
    id: 3,
    quote:
      "Team building workshop yang kami ikuti berhasil menyatukan divisi yang sebelumnya silo. Kolaborasi tim meningkat 40% setelah program.",
    author: "Siti Nurhaliza",
    role: "HR Director, Telkomsel",
    avatar: "SN",
  },
  {
    id: 4,
    quote:
      "Kurikulum yang praktis dan trainer yang sangat kompeten. Ini adalah investasi terbaik yang pernah perusahaan kami lakukan untuk pengembangan SDM.",
    author: "Ahmad Fauzi",
    role: "CEO, Startup Edutech",
    avatar: "AF",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimoni
          </span>
          <h2 className="text-primary-foreground mb-6">
            Apa Kata Mereka yang Sudah Bergabung?
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Dengarkan langsung dari para pemimpin yang telah mengikuti program kami.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <Quote className="absolute top-8 left-8 text-accent/30" size={48} />
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                "{testimonials[activeIndex].quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-lg">
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <div className="font-semibold text-lg">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-primary-foreground/70 text-sm">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-accent w-8"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
