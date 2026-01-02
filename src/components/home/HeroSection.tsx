import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "./HeroBackground";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <HeroBackground />
      
      {/* Content */}
      <div className="relative z-10 section-container text-center text-primary-foreground py-32">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Platform Pelatihan Leadership #1 di Indonesia
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight mb-6 animate-fade-in animation-delay-100">
            Bangun Pemimpin
            <br />
            <span className="text-accent">Masa Depan</span> Indonesia
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in animation-delay-200">
            Program pelatihan kepemimpinan yang transformatif, praktis, dan berdampak nyata 
            untuk profesional, manajer, dan eksekutif.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-300">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6 rounded-xl shadow-lg shadow-accent/25 group"
            >
              <Link to="/programs">
                Lihat Program
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white/30 text-primary-foreground hover:bg-white/10 font-semibold text-lg px-8 py-6 rounded-xl group"
            >
              <Link to="/about">
                <Play className="mr-2" size={20} />
                Tentang Kami
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in animation-delay-400">
            {[
              { value: "500+", label: "Perusahaan" },
              { value: "15K+", label: "Alumni" },
              { value: "10+", label: "Tahun Pengalaman" },
              { value: "98%", label: "Tingkat Kepuasan" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
