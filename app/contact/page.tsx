import { content } from "@/config/content";

export default function Contact() {
  const { contact } = content;

  return (
    <div className="min-h-screen bg-[#fafaf9] flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#292929] mb-4">
          {contact.title}
        </h1>
        <p className="text-[#6b6b6b] mb-8">{contact.subtext}</p>
      </div>
    </div>
  );
}
