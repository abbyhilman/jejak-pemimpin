import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Clock, Users, BookOpen, CheckCircle2, ArrowRight,
  Target, Briefcase, Users2, Award, Lightbulb, TrendingUp
} from "lucide-react";
import { ProgramsSkeleton } from "@/components/skeletons/ProgramsSkeleton";

const programs = [
  {
    id: "leadership-fundamentals",
    title: "Leadership Fundamentals",
    subtitle: "Fondasi Kepemimpinan yang Kuat",
    description:
      "Program intensif untuk membangun fondasi kepemimpinan yang solid. Cocok untuk profesional muda yang baru memulai perjalanan leadership atau akan dipromosikan ke posisi manajerial.",
    duration: "3 Hari",
    participants: "15-25 orang",
    level: "Entry Level",
    price: "Hubungi Kami",
    color: "from-blue-500 to-blue-600",
    icon: Lightbulb,
    outcomes: [
      "Memahami core leadership competencies",
      "Mengembangkan communication skills yang efektif",
      "Belajar teknik delegation dan empowerment",
      "Membangun personal leadership brand",
    ],
    modules: [
      "Self-Leadership & Personal Effectiveness",
      "Communication & Influence",
      "Team Dynamics & Collaboration",
      "Goal Setting & Execution",
    ],
    targetAudience: [
      "Supervisor dan team lead baru",
      "High-potential employees",
      "Profesional yang akan dipromosikan",
    ],
  },
  {
    id: "executive-coaching",
    title: "Executive Coaching",
    subtitle: "Transformasi Personal untuk Eksekutif",
    description:
      "Program coaching one-on-one intensif untuk eksekutif senior. Fokus pada pengembangan kepemimpinan strategis, pengambilan keputusan, dan transformasi personal.",
    duration: "6 Bulan",
    participants: "1-on-1",
    level: "Executive",
    price: "Custom",
    color: "from-accent to-amber-600",
    icon: Target,
    outcomes: [
      "Clarity dalam visi dan arah kepemimpinan",
      "Peningkatan efektivitas decision-making",
      "Kemampuan mengelola stakeholder kompleks",
      "Work-life integration yang lebih baik",
    ],
    modules: [
      "Leadership Assessment & Feedback 360",
      "Strategic Thinking & Vision Setting",
      "Executive Presence & Influence",
      "Legacy & Succession Planning",
    ],
    targetAudience: [
      "C-Level executives",
      "Senior directors",
      "Business owners",
    ],
  },
  {
    id: "team-building",
    title: "Strategic Team Building",
    subtitle: "Membangun Tim High-Performance",
    description:
      "Program yang dirancang untuk memperkuat kohesi tim, meningkatkan kolaborasi, dan membangun budaya kerja yang positif dan produktif.",
    duration: "2 Hari",
    participants: "20-50 orang",
    level: "All Levels",
    price: "Hubungi Kami",
    color: "from-emerald-500 to-emerald-600",
    icon: Users2,
    outcomes: [
      "Tim yang lebih solid dan aligned",
      "Komunikasi internal yang lebih efektif",
      "Resolusi konflik yang konstruktif",
      "Budaya accountability yang kuat",
    ],
    modules: [
      "Understanding Team Dynamics",
      "Trust Building & Psychological Safety",
      "Collaborative Problem Solving",
      "Action Planning & Commitment",
    ],
    targetAudience: [
      "Departemen atau divisi",
      "Project teams",
      "Newly formed teams",
    ],
  },
  {
    id: "corporate-training",
    title: "Corporate Leadership Training",
    subtitle: "Program Kustomisasi untuk Perusahaan",
    description:
      "Program pelatihan komprehensif yang sepenuhnya disesuaikan dengan kebutuhan, budaya, dan tantangan spesifik perusahaan Anda.",
    duration: "Custom",
    participants: "Custom",
    level: "Custom",
    price: "Custom",
    color: "from-primary to-blue-700",
    icon: Briefcase,
    outcomes: [
      "Program yang align dengan strategi bisnis",
      "Pengembangan leadership pipeline",
      "Perubahan budaya yang terukur",
      "ROI yang jelas dan terukur",
    ],
    modules: [
      "Needs Analysis & Program Design",
      "Customized Content Development",
      "Blended Learning Implementation",
      "Impact Measurement & Follow-up",
    ],
    targetAudience: [
      "HR & Learning Development",
      "Corporate leadership teams",
      "Organizations in transformation",
    ],
  },
  {
    id: "women-leadership",
    title: "Women in Leadership",
    subtitle: "Pemberdayaan Pemimpin Perempuan",
    description:
      "Program khusus yang dirancang untuk mendukung dan mengembangkan pemimpin perempuan menghadapi tantangan unik di dunia kerja.",
    duration: "2 Hari",
    participants: "15-25 orang",
    level: "Mid to Senior",
    price: "Hubungi Kami",
    color: "from-pink-500 to-rose-600",
    icon: Award,
    outcomes: [
      "Confidence dan executive presence yang kuat",
      "Strategi navigasi bias dan barriers",
      "Network dan support system",
      "Personal brand yang authentic",
    ],
    modules: [
      "Leadership Identity & Authenticity",
      "Navigating Organizational Politics",
      "Building Strategic Networks",
      "Work-Life Integration Strategies",
    ],
    targetAudience: [
      "Female managers & directors",
      "Women in STEM",
      "Emerging women leaders",
    ],
  },
  {
    id: "change-leadership",
    title: "Change Leadership",
    subtitle: "Memimpin di Tengah Perubahan",
    description:
      "Program untuk membekali pemimpin dengan kemampuan mengelola dan memimpin perubahan organisasi secara efektif.",
    duration: "2 Hari",
    participants: "15-30 orang",
    level: "Mid to Senior",
    price: "Hubungi Kami",
    color: "from-violet-500 to-purple-600",
    icon: TrendingUp,
    outcomes: [
      "Framework change management yang proven",
      "Kemampuan mengelola resistance",
      "Communication strategy untuk change",
      "Sustainability & embedding change",
    ],
    modules: [
      "Understanding Change Dynamics",
      "Leading Through Uncertainty",
      "Stakeholder Engagement",
      "Building Change Capability",
    ],
    targetAudience: [
      "Leaders in transforming organizations",
      "Project & program managers",
      "HR & OD professionals",
    ],
  },
];

export default function Programs() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <ProgramsSkeleton />;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Program Kami
            </span>
            <h1 className="text-foreground mb-6">
              Program Pelatihan yang
              <br />
              <span className="text-accent">Menghasilkan Perubahan Nyata</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Setiap program kami dirancang berdasarkan riset, best practices, dan pengalaman
              nyata untuk memastikan dampak yang terukur dan berkelanjutan.
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="section-padding">
        <div className="section-container">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div
                key={program.id}
                id={program.id}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}>
                  {/* Info Card */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="bg-card border border-border rounded-2xl overflow-hidden card-hover">
                      {/* Header */}
                      <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                      <div className="p-8">
                        <div className="flex items-start gap-4 mb-6">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${program.color} flex items-center justify-center flex-shrink-0`}>
                            <program.icon className="text-white" size={28} />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-foreground">
                              {program.title}
                            </h2>
                            <p className="text-accent font-medium">
                              {program.subtitle}
                            </p>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {program.description}
                        </p>

                        {/* Meta Info */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                            <Clock size={18} className="text-accent" />
                            <div>
                              <div className="text-xs text-muted-foreground">Durasi</div>
                              <div className="font-medium text-foreground">{program.duration}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                            <Users size={18} className="text-accent" />
                            <div>
                              <div className="text-xs text-muted-foreground">Peserta</div>
                              <div className="font-medium text-foreground">{program.participants}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                            <BookOpen size={18} className="text-accent" />
                            <div>
                              <div className="text-xs text-muted-foreground">Level</div>
                              <div className="font-medium text-foreground">{program.level}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                            <Target size={18} className="text-accent" />
                            <div>
                              <div className="text-xs text-muted-foreground">Investasi</div>
                              <div className="font-medium text-foreground">{program.price}</div>
                            </div>
                          </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex gap-3">
                          <Button asChild className="flex-1 group">
                            <Link to="/contact">
                              Konsultasi Gratis
                              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                            </Link>
                          </Button>
                          <Button asChild variant="outline">
                            <Link to={`/generate-proposal?program=${program.id}`}>
                              Generate Proposal
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className={`space-y-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    {/* Target Audience */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Users size={20} className="text-accent" />
                        Target Peserta
                      </h3>
                      <ul className="space-y-2">
                        {program.targetAudience.map((audience, i) => (
                          <li key={i} className="flex items-center gap-3 text-muted-foreground">
                            <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                            {audience}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Target size={20} className="text-accent" />
                        Yang Akan Anda Dapatkan
                      </h3>
                      <ul className="space-y-2">
                        {program.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-center gap-3 text-muted-foreground">
                            <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Modules */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <BookOpen size={20} className="text-accent" />
                        Modul Pembelajaran
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {program.modules.map((module, i) => (
                          <div
                            key={i}
                            className="p-4 bg-secondary/50 rounded-lg text-sm text-foreground"
                          >
                            {module}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < programs.length - 1 && (
                  <div className="border-b border-border mt-16" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tidak Menemukan Program yang Tepat?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Kami dapat merancang program khusus yang sesuai dengan kebutuhan
            dan tantangan spesifik organisasi Anda.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
          >
            <Link to="/contact">
              Diskusikan Kebutuhan Anda
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
