"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [menuOpen, setMenuOpen] = useState(false); // Menu toggle

  const content = {
    en: {
      menu: "MENU", close: "CLOSE", about: "About", services: "Services", results: "Our Results",
      toggleBtn: "العربية", name: "DR. AHMAD HAMDI AZZAM", title: "Consultant of Orthopedic Surgery",
      bookBtn: "BOOK CONSULTATION", aboutTitle: "MEET DR. AZZAM", 
      aboutText: "Providing advanced orthopedic care, comprehensive trauma management, and restorative joint surgery with a strict commitment to evidence-based medical excellence.",
      address: "40 Mosaddak St., Dokki, Giza | +20 1020001914",
      servicesHead: "PROCEDURES & TREATMENTS",
      services: ['Joint Replacement', 'Sports Injuries', 'Trauma Management'],
      adviceHead: "PATIENT RESOURCES",
      advice: ['Stay hydrated for joint lubrication.', 'Maintain good posture during long shifts.', 'Warm up before any exercise or sport.', 'Regularly shift position or posture every 30 minutes.'],
      faqHead: "FREQUENTLY ASKED QUESTIONS",
      faq1Q: "Do you accept insurance?",
      faq1A: "Please contact our office on WhatsApp to confirm your specific provider.",
      faq2Q: "What should I bring to my first appointment?",
      faq2A: "Please bring any previous X-rays, MRI scans, and relevant medical records.",
      waBtn: "CHAT ON WHATSAPP", fbBtn: "FACEBOOK", tiktokBtn: "TIKTOK", igBtn: "INSTAGRAM", googleBtn: "GOOGLE BUSINESS"
    },
    ar: {
      menu: "القائمة", close: "إغلاق", about: "عن العيادة", services: "خدماتنا", results: "نتائجنا",
      toggleBtn: "ENGLISH", name: "د. أحمد حمدي عزام", title: "استشاري جراحة العظام",
      bookBtn: "احجز استشارتك", aboutTitle: "تعرف على د. عزام", 
      aboutText: "نقدم رعاية متقدمة في جراحة العظام، وإدارة شاملة للإصابات، وجراحات ترميم المفاصل مع التزام صارم بالتميز الطبي القائم على الأدلة.",
      address: "٤٠ شارع مصدق، الدقي، الجيزة | +20 1020001914",
      servicesHead: "الإجراءات والعلاجات",
      services: ['تغيير المفاصل', 'إصابات الملاعب', 'علاج الكسور'],
      adviceHead: "موارد المرضى",
      advice: ['حافظ على شرب الماء لترطيب المفاصل.', 'حافظ على وضعية جيدة أثناء فترات العمل الطويلة.', 'قم بالإحماء قبل أي تمرين أو رياضة.', 'قم بتغيير وضعيتك بانتظام كل 30 دقيقة.'],
      faqHead: "الأسئلة الشائعة",
      faq1Q: "هل تقبلون التأمين الطبي؟",
      faq1A: "يرجى التواصل مع عيادتنا عبر الواتساب لتأكيد شركة التأمين الخاصة بك.",
      faq2Q: "ماذا يجب أن أحضر في موعدي الأول؟",
      faq2A: "يرجى إحضار أي أشعة سينية، رنين مغناطيسي، وسجلات طبية سابقة.",
      waBtn: "تواصل عبر الواتساب", fbBtn: "فيسبوك", tiktokBtn: "تيك توك", igBtn: "إنستجرام", googleBtn: "جوجل بيزنس"
    }
  };

  const t = content[lang];

  return (
    <main dir={lang === 'ar' ? 'rtl' : 'ltr'} style={{ fontFamily: 'Arial, sans-serif', color: '#111', backgroundColor: '#fff' }}>
      
      {/* HEADER WITH MENU */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #eaeaea' }}>
        <button onClick={() => setMenuOpen(true)} style={{ background: 'none', border: 'none', fontSize: '14px', cursor: 'pointer', letterSpacing: '1px', fontWeight: 'bold' }}>
           ≡ {t.menu}
        </button>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: 'bold' }}>AZZAM ORTHOPEDICS</div>
        <button onClick={() => setLang(lang === "en" ? "ar" : "en")} style={{ background: 'none', border: 'none', fontSize: '12px', cursor: 'pointer', textTransform: 'uppercase' }}>
          {t.toggleBtn}
        </button>
      </header>

      {/* MENU OVERLAY */}
      {menuOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#fff', zIndex: 100, padding: '40px' }}>
          <button onClick={() => setMenuOpen(false)} style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer' }}>✕ {t.close}</button>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '40px', fontSize: '24px', fontFamily: 'Georgia, serif' }}>
            <a href="#about" onClick={() => setMenuOpen(false)}>{t.about}</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>{t.services}</a>
            <a href="#results" onClick={() => setMenuOpen(false)}>{t.results}</a>
            <a href="https://wa.me/201020001914" style={{ fontSize: '24px', color: '#25D366' }}>{t.waBtn}</a>
          </nav>
        </div>
      )}

      {/* HERO SECTION */}
      <section style={{ backgroundColor: '#111827', color: '#fff', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '42px', fontWeight: 'normal', letterSpacing: '2px', marginBottom: '10px' }}>{t.name}</h1>
        <p style={{ fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase', color: '#d4af37', marginBottom: '40px' }}>{t.title}</p>
        <a href="https://calendly.com/azzam-ortho-pro" style={{ padding: '16px 32px', border: '1px solid #d4af37', color: '#d4af37', textDecoration: 'none' }}>{t.bookBtn}</a>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', marginBottom: '30px' }}>{t.aboutTitle}</h2>
        <Image src="/profile.webp" alt={t.name} width={180} height={180} style={{ borderRadius: '50%', margin: '0 auto 30px auto' }} />
        <p style={{ fontSize: '18px', lineHeight: '1.8' }}>{t.aboutText}</p>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ backgroundColor: '#f9f9f9', padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', marginBottom: '40px' }}>{t.servicesHead}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
          {t.services.map((s, i) => <div key={i} style={{ padding: '40px', backgroundColor: '#fff', border: '1px solid #eaeaea' }}>{s}</div>)}
        </div>
      </section>

      {/* RESOURCES & FAQS */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 20px' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', marginBottom: '30px', textAlign: 'center' }}>{t.adviceHead}</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>{t.advice.map((a, i) => <li key={i} style={{ padding: '20px 0', borderBottom: '1px solid #eaeaea', textAlign: 'center' }}>{a}</li>)}</ul>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', marginTop: '60px', marginBottom: '30px', textAlign: 'center' }}>{t.faqHead}</h2>
        <details style={{ padding: '20px 0', borderBottom: '1px solid #eaeaea' }}><summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>{t.faq1Q}</summary><p style={{ marginTop: '10px' }}>{t.faq1A}</p></details>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#111827', color: '#fff', padding: '60px 20px', textAlign: 'center' }}>
        <p style={{ marginBottom: '30px' }}>{t.address}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          <a href="https://facebook.com/YOUR_PAGE" style={{ color: '#d4af37' }}>{t.fbBtn}</a>
          <a href="https://tiktok.com/@YOUR_HANDLE" style={{ color: '#d4af37' }}>{t.tiktokBtn}</a>
          <a href="https://www.instagram.com/dr.ahmad.azzam.orthopro.clinic/" style={{ color: '#d4af37' }}>{t.igBtn}</a>
          <a href="#" style={{ color: '#d4af37' }}>{t.googleBtn}</a>
        </div>
      </footer>
    </main>
  );
}