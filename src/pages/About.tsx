import { useState, useEffect } from "react";
import { Layout } from "@/components/layout";
import { Target, Eye, Heart, Users, Award, Briefcase, GraduationCap, TrendingUp } from "lucide-react";
import { AboutSkeleton } from "@/components/skeletons/AboutSkeleton";

const timeline = [
  {
    year: "2014",
    title: "Awal Perjalanan",
    description: "Dimulai dari passion untuk mengembangkan pemimpin Indonesia, Jejak Pemimpin didirikan dengan misi sederhana: menciptakan dampak nyata.",
  },
  {
    year: "2016",
    title: "Ekspansi Program",
    description: "Meluncurkan program Executive Coaching dan Corporate Training, menjangkau lebih banyak profesional dan perusahaan.",
  },
  {
    year: "2018",
    title: "Pengakuan Nasional",
    description: "Diakui sebagai salah satu provider pelatihan kepemimpinan terbaik di Indonesia oleh berbagai institusi.",
  },
  {
    year: "2020",
    title: "Transformasi Digital",
    description: "Mengadaptasi program ke format hybrid dan online, menjangkau peserta di seluruh Indonesia.",
  },
  {
    year: "2023",
    title: "15.000+ Alumni",
    description: "Milestone penting: lebih dari 15.000 pemimpin telah melalui program kami dan menciptakan dampak di organisasi masing-masing.",
  },
  {
    year: "2024",
    title: "Inovasi Berkelanjutan",
    description: "Meluncurkan program baru berbasis AI-assisted learning dan metodologi terkini dalam pengembangan kepemimpinan.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Integritas",
    description: "Menjunjung tinggi kejujuran dan etika dalam setiap interaksi.",
  },
  {
    icon: Users,
    title: "Kolaborasi",
    description: "Percaya pada kekuatan kerja sama untuk mencapai hasil terbaik.",
  },
  {
    icon: TrendingUp,
    title: "Pertumbuhan",
    description: "Berkomitmen pada pembelajaran dan pengembangan berkelanjutan.",
  },
  {
    icon: Award,
    title: "Keunggulan",
    description: "Selalu berusaha memberikan yang terbaik dalam setiap program.",
  },
];

const team = [
  {
    name: "Dr. Ahmad Wijaya",
    role: "Founder & CEO",
    bio: "20+ tahun pengalaman dalam pengembangan kepemimpinan dan organisasi.",
    avatar: "AW",
  },
  {
    name: "Siti Rahayu, M.Psi",
    role: "Head of Programs",
    bio: "Psikolog organisasi dengan spesialisasi dalam executive coaching.",
    avatar: "SR",
  },
  {
    name: "Budi Santoso, MBA",
    role: "Lead Facilitator",
    bio: "Mantan eksekutif Fortune 500 dengan passion untuk mentoring.",
    avatar: "BS",
  },
  {
    name: "Maya Putri, Ph.D",
    role: "Research Director",
    bio: "Akademisi dan praktisi dalam bidang leadership development.",
    avatar: "MP",
  },
];

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <AboutSkeleton />;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Tentang Kami
            </span>
            <h1 className="text-foreground mb-6">
              Membangun Pemimpin, <br />
              <span className="text-accent">Menciptakan Dampak</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Sejak 2014, kami telah mendedikasikan diri untuk mengembangkan pemimpin-pemimpin
              Indonesia yang tidak hanya kompeten, tetapi juga berkarakter dan berdampak positif.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Cerita Kami
              </span>
              <h2 className="text-foreground mb-6">
                Dari Passion Menjadi Misi
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Jejak Pemimpin lahir dari keyakinan bahwa Indonesia membutuhkan lebih banyak
                  pemimpin yang tidak hanya cerdas, tetapi juga memiliki integritas dan empati.
                </p>
                <p>
                  Kami percaya bahwa kepemimpinan bukan tentang posisi atau jabatan, melainkan
                  tentang pengaruh positif yang kita berikan kepada orang-orang di sekitar kita.
                </p>
                <p>
                  Dengan pendekatan yang human-centered dan metodologi yang teruji, kami telah
                  membantu ribuan profesional menemukan dan mengembangkan potensi kepemimpinan mereka.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <Briefcase className="text-accent mb-4" size={32} />
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-primary-foreground/80">Perusahaan Partner</div>
              </div>
              <div className="bg-accent rounded-2xl p-8 text-accent-foreground">
                <GraduationCap className="mb-4" size={32} />
                <div className="text-4xl font-bold mb-2">15K+</div>
                <div className="text-accent-foreground/80">Alumni</div>
              </div>
              <div className="bg-secondary rounded-2xl p-8">
                <Award className="text-accent mb-4" size={32} />
                <div className="text-4xl font-bold mb-2 text-foreground">10+</div>
                <div className="text-muted-foreground">Tahun Pengalaman</div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <TrendingUp className="text-accent mb-4" size={32} />
                <div className="text-4xl font-bold mb-2 text-foreground">98%</div>
                <div className="text-muted-foreground">Tingkat Kepuasan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Eye className="text-accent-foreground" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Menjadi partner terpercaya dalam pengembangan kepemimpinan di Indonesia,
                menciptakan generasi pemimpin yang transformatif dan berdampak global.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Target className="text-accent-foreground" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Misi Kami</h3>
              <ul className="text-primary-foreground/80 text-lg leading-relaxed space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  Menyediakan program pelatihan berkualitas tinggi
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  Mengembangkan metodologi berbasis riset
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  Membangun komunitas pemimpin yang saling mendukung
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  Menciptakan dampak nyata di organisasi dan masyarakat
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Perjalanan Kami
            </span>
            <h2 className="text-foreground mb-6">
              Milestone yang Membanggakan
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background md:-translate-x-2 z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className="bg-card border border-border rounded-2xl p-6 card-hover">
                      <span className="text-accent font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Nilai-Nilai Kami
            </span>
            <h2 className="text-foreground mb-6">
              Prinsip yang Mendasari Setiap Langkah
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-card rounded-2xl border border-border card-hover"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Tim Kami
            </span>
            <h2 className="text-foreground mb-6">
              Para Ahli di Balik Program Kami
            </h2>
            <p className="text-muted-foreground text-lg">
              Tim fasilitator dan coach kami adalah para profesional berpengalaman yang
              telah membuktikan kompetensi mereka di dunia nyata.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center p-8 bg-card rounded-2xl border border-border card-hover group"
              >
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 text-primary-foreground text-2xl font-bold group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
