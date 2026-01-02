import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft, ArrowRight, Building2, Users, Target,
  Clock, FileText, CheckCircle2, Download, Mail, Share2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const programs = [
  { id: "leadership-fundamentals", name: "Leadership Fundamentals" },
  { id: "executive-coaching", name: "Executive Coaching" },
  { id: "team-building", name: "Strategic Team Building" },
  { id: "corporate-training", name: "Corporate Leadership Training" },
  { id: "women-leadership", name: "Women in Leadership" },
  { id: "change-leadership", name: "Change Leadership" },
];

const participantLevels = [
  { id: "staff", label: "Staff / Entry Level" },
  { id: "supervisor", label: "Supervisor / Team Lead" },
  { id: "manager", label: "Manager" },
  { id: "senior-manager", label: "Senior Manager / Director" },
  { id: "executive", label: "Executive / C-Level" },
];

const durations = [
  { id: "1-day", label: "1 Hari" },
  { id: "2-days", label: "2 Hari" },
  { id: "3-days", label: "3 Hari" },
  { id: "1-week", label: "1 Minggu" },
  { id: "custom", label: "Custom" },
];

const steps = [
  { id: 1, title: "Info Perusahaan", icon: Building2 },
  { id: 2, title: "Detail Kebutuhan", icon: Target },
  { id: 3, title: "Preferensi", icon: Clock },
  { id: 4, title: "Review", icon: FileText },
];

export default function GenerateProposal() {
  const [searchParams] = useSearchParams();
  const preselectedProgram = searchParams.get("program") || "";

  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    program: preselectedProgram,
    participantCount: "",
    participantLevel: "",
    trainingGoals: "",
    duration: "",
    preferredDates: "",
    customNotes: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate proposal generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
    setIsGenerated(true);
  };

  const handleDownloadPDF = async () => {
    const element = document.getElementById('proposal-content');
    if (!element) return;

    setIsDownloading(true);

    try {
      const canvas = await html2canvas(element, {
        scale: 2, // Higher scale for better quality
        useCORS: true, // Handle cross-origin images
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Handle multi-page content if necessary (though current design fits one page usually)
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`Proposal_Pelatihan_${formData.companyName.replace(/\s+/g, '_')}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  const selectedProgram = programs.find(p => p.id === formData.program);
  const selectedLevel = participantLevels.find(l => l.id === formData.participantLevel);
  const selectedDuration = durations.find(d => d.id === formData.duration);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-subtle">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-6"
            >
              <ArrowLeft size={18} />
              Kembali ke Program
            </Link>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Proposal Generator
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Generate Proposal Pelatihan
            </h1>
            <p className="text-lg text-muted-foreground">
              Buat proposal pelatihan yang disesuaikan dengan kebutuhan organisasi Anda
              dalam hitungan menit.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 border-b border-border">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center transition-all",
                        currentStep >= step.id
                          ? "bg-accent text-accent-foreground"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {isGenerated && step.id === 4 ? (
                        <CheckCircle2 size={24} />
                      ) : (
                        <step.icon size={20} />
                      )}
                    </div>
                    <span className={cn(
                      "text-xs mt-2 font-medium hidden sm:block",
                      currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={cn(
                        "w-12 sm:w-24 h-1 mx-2 rounded-full transition-all",
                        currentStep > step.id ? "bg-accent" : "bg-muted"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            {!isGenerated ? (
              <div className="bg-card border border-border rounded-2xl p-8">
                {/* Step 1: Company Info */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        Informasi Perusahaan
                      </h2>
                      <p className="text-muted-foreground">
                        Beritahu kami tentang perusahaan Anda.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Nama Perusahaan *</Label>
                        <Input
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="PT. Example Indonesia"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contactName">Nama Kontak *</Label>
                        <Input
                          id="contactName"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleChange}
                          placeholder="Nama lengkap"
                          required
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="contactEmail">Email *</Label>
                          <Input
                            id="contactEmail"
                            name="contactEmail"
                            type="email"
                            value={formData.contactEmail}
                            onChange={handleChange}
                            placeholder="email@company.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contactPhone">Telepon</Label>
                          <Input
                            id="contactPhone"
                            name="contactPhone"
                            value={formData.contactPhone}
                            onChange={handleChange}
                            placeholder="+62 812 xxx xxxx"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Training Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        Detail Kebutuhan Pelatihan
                      </h2>
                      <p className="text-muted-foreground">
                        Jelaskan kebutuhan pelatihan Anda.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="program">Program yang Diminati *</Label>
                        <select
                          id="program"
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                          required
                        >
                          <option value="">Pilih program</option>
                          {programs.map(program => (
                            <option key={program.id} value={program.id}>
                              {program.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="participantCount">Jumlah Peserta *</Label>
                          <Input
                            id="participantCount"
                            name="participantCount"
                            type="number"
                            value={formData.participantCount}
                            onChange={handleChange}
                            placeholder="25"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="participantLevel">Level Peserta *</Label>
                          <select
                            id="participantLevel"
                            name="participantLevel"
                            value={formData.participantLevel}
                            onChange={handleChange}
                            className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                            required
                          >
                            <option value="">Pilih level</option>
                            {participantLevels.map(level => (
                              <option key={level.id} value={level.id}>
                                {level.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="trainingGoals">Tujuan Pelatihan *</Label>
                        <Textarea
                          id="trainingGoals"
                          name="trainingGoals"
                          value={formData.trainingGoals}
                          onChange={handleChange}
                          placeholder="Contoh: Meningkatkan kemampuan leadership tim supervisor untuk mengelola tim dengan lebih efektif..."
                          rows={4}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Preferences */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        Preferensi Pelatihan
                      </h2>
                      <p className="text-muted-foreground">
                        Tentukan preferensi durasi dan waktu pelatihan.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="duration">Durasi yang Diinginkan</Label>
                        <select
                          id="duration"
                          name="duration"
                          value={formData.duration}
                          onChange={handleChange}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                        >
                          <option value="">Pilih durasi</option>
                          {durations.map(duration => (
                            <option key={duration.id} value={duration.id}>
                              {duration.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredDates">Tanggal yang Diharapkan</Label>
                        <Input
                          id="preferredDates"
                          name="preferredDates"
                          value={formData.preferredDates}
                          onChange={handleChange}
                          placeholder="Contoh: Minggu pertama Februari 2026"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="customNotes">Catatan Tambahan</Label>
                        <Textarea
                          id="customNotes"
                          name="customNotes"
                          value={formData.customNotes}
                          onChange={handleChange}
                          placeholder="Informasi tambahan yang perlu kami ketahui..."
                          rows={4}
                        />
                      </div>
                      <div className="flex items-start space-x-3 pt-4">
                        <Checkbox
                          id="consent"
                          checked={formData.consent}
                          onCheckedChange={(checked) =>
                            setFormData(prev => ({ ...prev, consent: checked as boolean }))
                          }
                        />
                        <label
                          htmlFor="consent"
                          className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                        >
                          Saya bersedia dihubungi oleh tim Jejak Pemimpin untuk
                          mendiskusikan kebutuhan pelatihan lebih lanjut. (Opsional)
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Review */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        Review Informasi
                      </h2>
                      <p className="text-muted-foreground">
                        Pastikan semua informasi sudah benar sebelum generate proposal.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-secondary/50 rounded-xl p-6 space-y-4">
                        <h3 className="font-semibold text-foreground">Informasi Perusahaan</h3>
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Perusahaan:</span>
                            <p className="font-medium text-foreground">{formData.companyName || "-"}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Kontak:</span>
                            <p className="font-medium text-foreground">{formData.contactName || "-"}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Email:</span>
                            <p className="font-medium text-foreground">{formData.contactEmail || "-"}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Telepon:</span>
                            <p className="font-medium text-foreground">{formData.contactPhone || "-"}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-secondary/50 rounded-xl p-6 space-y-4">
                        <h3 className="font-semibold text-foreground">Detail Pelatihan</h3>
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Program:</span>
                            <p className="font-medium text-foreground">{selectedProgram?.name || "-"}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Jumlah Peserta:</span>
                            <p className="font-medium text-foreground">{formData.participantCount || "-"} orang</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Level Peserta:</span>
                            <p className="font-medium text-foreground">{selectedLevel?.label || "-"}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Durasi:</span>
                            <p className="font-medium text-foreground">{selectedDuration?.label || "-"}</p>
                          </div>
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Tujuan:</span>
                          <p className="font-medium text-foreground mt-1">{formData.trainingGoals || "-"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-border">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                  >
                    <ArrowLeft className="mr-2" size={18} />
                    Sebelumnya
                  </Button>

                  {currentStep < 4 ? (
                    <Button type="button" onClick={handleNext}>
                      Selanjutnya
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={handleGenerate}
                      disabled={isGenerating}
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      {isGenerating ? (
                        "Generating..."
                      ) : (
                        <>
                          Generate Proposal
                          <FileText className="ml-2" size={18} />
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              /* Generated Proposal */
              <div className="space-y-8">
                <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
                  <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Proposal Berhasil Dibuat!
                  </h2>
                  <p className="text-muted-foreground">
                    Proposal pelatihan Anda sudah siap. Download atau kirim ke email.
                  </p>
                </div>

                {/* Proposal Preview */}
                <div id="proposal-content" className="bg-card border border-border rounded-2xl p-8">
                  <div className="border-b border-border pb-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-sm text-muted-foreground">PROPOSAL PELATIHAN</h3>
                        <h2 className="text-2xl font-bold text-foreground">
                          {selectedProgram?.name}
                        </h2>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Untuk:</p>
                        <p className="font-semibold text-foreground">{formData.companyName}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Ringkasan Program</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Program {selectedProgram?.name} dirancang khusus untuk {formData.participantCount} peserta
                        di level {selectedLevel?.label} dengan fokus pada pengembangan kompetensi kepemimpinan
                        yang relevan dengan kebutuhan {formData.companyName}.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Tujuan Pelatihan</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {formData.trainingGoals}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Outline Materi</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-accent" />
                          Modul 1: Self-Leadership & Personal Effectiveness
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-accent" />
                          Modul 2: Communication & Influence Skills
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-accent" />
                          Modul 3: Team Dynamics & Collaboration
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-accent" />
                          Modul 4: Goal Setting & Execution
                        </li>
                      </ul>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4 pt-4">
                      <div className="bg-secondary/50 rounded-lg p-4 text-center">
                        <Users className="text-accent mx-auto mb-2" size={24} />
                        <p className="text-sm text-muted-foreground">Peserta</p>
                        <p className="font-bold text-foreground">{formData.participantCount} orang</p>
                      </div>
                      <div className="bg-secondary/50 rounded-lg p-4 text-center">
                        <Clock className="text-accent mx-auto mb-2" size={24} />
                        <p className="text-sm text-muted-foreground">Durasi</p>
                        <p className="font-bold text-foreground">{selectedDuration?.label || "TBD"}</p>
                      </div>
                      <div className="bg-secondary/50 rounded-lg p-4 text-center">
                        <Target className="text-accent mx-auto mb-2" size={24} />
                        <p className="text-sm text-muted-foreground">Investasi</p>
                        <p className="font-bold text-foreground">Hubungi Kami</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                    onClick={handleDownloadPDF}
                    disabled={isDownloading}
                  >
                    {isDownloading ? (
                      "Downloading..."
                    ) : (
                      <>
                        <Download className="mr-2" size={18} />
                        Download PDF
                      </>
                    )}
                  </Button>
                  <Button size="lg" variant="outline">
                    <Mail className="mr-2" size={18} />
                    Kirim ke Email
                  </Button>
                  <Button size="lg" variant="outline">
                    <Share2 className="mr-2" size={18} />
                    Share Link
                  </Button>
                </div>

                <div className="text-center">
                  <Button variant="link" onClick={() => { setIsGenerated(false); setCurrentStep(1); }}>
                    Buat Proposal Baru
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
