import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contacts, contactLinks } from "@/data/contacts";

export function QuickContactButtons() {
  return (
    <div className="space-y-3">
      <Button
        href={contactLinks.phone}
        size="lg"
        className="w-full min-h-[52px]"
      >
        <Phone size={20} className="shrink-0" />
        <span>
          Зателефонувати —{" "}
          <span className="whitespace-nowrap">{contacts.phoneDisplay}</span>
        </span>
      </Button>

      <Button
        href={contactLinks.viber}
        variant="secondary"
        size="lg"
        className="w-full min-h-[52px] border-[#7360f2]/30 bg-[#7360f2]/10 text-[#a89bf5] hover:bg-[#7360f2]/20"
      >
        <MessageCircle size={20} className="shrink-0" />
        <span>
          Viber —{" "}
          <span className="whitespace-nowrap">{contacts.phoneDisplay}</span>
        </span>
      </Button>

      <Button
        href={contactLinks.whatsapp}
        variant="secondary"
        size="lg"
        className="w-full min-h-[52px] border-[#25D366]/30 bg-[#25D366]/10 text-[#4ade80] hover:bg-[#25D366]/20"
      >
        <MessageCircle size={20} className="shrink-0" />
        <span>
          WhatsApp —{" "}
          <span className="whitespace-nowrap">{contacts.phoneDisplay}</span>
        </span>
      </Button>
    </div>
  );
}
