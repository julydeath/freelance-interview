import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Contact Us",
  description: "Contact SAP for inquiries, suggestions, or feedback.",
}

export default function Contact() {
  return (
    <div className="mx-auto">
      <ContactForm />
    </div>
  );
}
