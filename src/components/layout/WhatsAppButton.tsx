import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "6281234567890"; // Replace with actual WhatsApp number
  const message = encodeURIComponent(
    "Halo, saya tertarik untuk mengetahui lebih lanjut tentang program pelatihan Jejak Pemimpin."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
      <span className="absolute right-full mr-3 px-3 py-2 bg-white rounded-lg shadow-md text-sm font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat dengan kami
      </span>
    </a>
  );
}
