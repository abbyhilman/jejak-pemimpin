import { Target, Users, TrendingUp, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Fokus pada Hasil",
    description:
      "Setiap program dirancang untuk menghasilkan perubahan nyata yang dapat diukur dalam kepemimpinan Anda.",
  },
  {
    icon: Users,
    title: "Pendekatan Humanis",
    description:
      "Memahami bahwa kepemimpinan yang baik dimulai dari memahami dan menghargai setiap individu.",
  },
  {
    icon: TrendingUp,
    title: "Pertumbuhan Berkelanjutan",
    description:
      "Mendorong pengembangan diri yang terus-menerus dengan dukungan dan resources yang komprehensif.",
  },
  {
    icon: Award,
    title: "Standar Profesional",
    description:
      "Kurikulum dan metodologi yang telah teruji dan sesuai dengan standar internasional.",
  },
];

export function ValueProposition() {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Mengapa Jejak Pemimpin?
          </span>
          <h2 className="text-foreground mb-6">
            Pendekatan Berbeda untuk Hasil yang Berbeda
          </h2>
          <p className="text-muted-foreground text-lg">
            Kami percaya bahwa setiap individu memiliki potensi untuk menjadi pemimpin.
            Tugas kami adalah membantu Anda menemukan dan mengembangkan potensi tersebut.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <value.icon
                  className="text-accent group-hover:text-accent-foreground transition-colors"
                  size={28}
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
