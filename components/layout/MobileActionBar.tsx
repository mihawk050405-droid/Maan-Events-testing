"use client";

import { whatsappLink, PHONE_TEL, EMAIL } from "@/lib/utils";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden border-t border-line bg-bone/95 backdrop-blur-md">
      <div className="grid grid-cols-3 text-xs">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex flex-col items-center gap-1 py-3 active:bg-ink/5"
        >
          <PhoneIcon />
          <span>Call</span>
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 border-x border-line bg-ink text-bone active:bg-accent transition-colors"
        >
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="flex flex-col items-center gap-1 py-3 active:bg-ink/5"
        >
          <MailIcon />
          <span>Email</span>
        </a>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 3.36L3 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 10s.5 2 2 3.5S14 16 14 16l1.5-1 2 1 0-2-1-1.5s-1-.2-2-1-1.5-2-1.5-2l-1 1-2-.5L9 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
