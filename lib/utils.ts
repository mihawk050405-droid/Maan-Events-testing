import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const WHATSAPP_NUMBER = "917702302102";
export const PHONE_TEL = "+917702302102";
export const EMAIL = "info@maanevents.com";

export const whatsappLink = (msg = "Hello Maan Events, I'd like to enquire about your services.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
