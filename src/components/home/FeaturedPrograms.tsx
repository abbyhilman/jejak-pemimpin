import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    id: "leadership-fundamentals",
    title: "Leadership Fundamentals",
    description:
      "Fondasi kepemimpinan yang kuat untuk profesional muda yang ingin memulai perjalanan leadership.",
    duration: "3 Hari",
    participants: "15-25 orang",
    level: "Entry Level",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "executive-coaching",
    title: "Executive Coaching",
    description:
      "Program coaching intensif untuk eksekutif yang ingin meningkatkan efektivitas kepemimpinan.",
    duration: "6 Bulan",
    participants: "1-on-1",
    level: "Executive",
    color: "from-accent to-amber-600",
  },
  {
    id: "team-building",
    title: "Strategic Team Building",
    description:
      "Membangun tim yang solid, kolaboratif, dan high-performing untuk mencapai tujuan bersama.",
    duration: "2 Hari",
    participants: "20-50 orang",
    level: "All Levels",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    id: "corporate-training",
    title: "Corporate Leadership Training",
    description:
      "Program pelatihan komprehensif yang disesuaikan dengan kebutuhan dan budaya perusahaan Anda.",
    duration: "Custom",
    participants: "Custom",
    level: "Custom",
    color: "from-primary to-blue-700",
  },
];

export function FeaturedPrograms() {
  return (
    <section className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Program Unggulan
            </span>
            <h2 className="text-foreground mb-4">
              Transformasi Dimulai dari Sini
            </h2>
            <p className="text-muted-foreground text-lg">
              Program pelatihan yang dirancang untuk menghasilkan perubahan nyata 
              dalam cara Anda memimpin.
            </p>
          </div>
          <Button asChild variant="outline" className="group self-start md:self-auto">
            <Link to="/programs">
              Lihat Semua Program
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </Button>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card card-hover"
            >
              {/* Gradient Banner */}
              <div className={`h-2 bg-gradient-to-r ${program.color}`} />
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={16} className="text-accent" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users size={16} className="text-accent" />
                    {program.participants}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen size={16} className="text-accent" />
                    {program.level}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-3">
                  <Button asChild className="flex-1">
                    <Link to={`/programs#${program.id}`}>Detail Program</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to={`/generate-proposal?program=${program.id}`}>
                      Generate Proposal
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
