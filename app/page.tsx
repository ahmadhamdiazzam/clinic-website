"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [menuOpen, setMenuOpen] = useState(false);

  const content = {
    en: {
      menu: "MENU", close: "CLOSE", about: "About", servicesMenu: "Services", results: "Our Results",
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
      waBtn: "WHATSAPP", fbBtn: "FACEBOOK", tiktokBtn: "TIKTOK", igBtn: "INSTAGRAM", googleBtn: "GOOGLE"
    },
    ar: {
      menu: "القائمة", close: "إغلاق", about: "عن العيادة", servicesMenu: "خدماتنا", results: "نتائجنا",
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
      waBtn: "واتساب", fbBtn: "فيسبوك", tiktokBtn: "تيك توك", igBtn: "إنستجرام", googleBtn: "جوجل"
    }
  };

  const t = content[lang];

  return (
    <main dir={lang === 'ar' ? 'rtl' : 'ltr'} style={{ fontFamily: 'Arial, sans-serif', color: '#111', backgroundColor: '#fff', position: 'relative' }}>
      
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #eaeaea' }}>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', fontSize: '14px', cursor: 'pointer', letterSpacing: '1px', fontWeight: 'bold' }}>
           ≡ {t.menu}
        </button>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: 'bold' }}>AZZAM ORTHOPEDICS</div>
        <button onClick={() => setLang(lang === "en" ? "ar" : "en")} style={{ background: 'none', border: 'none', fontSize: '12px', cursor: 'pointer', textTransform: 'uppercase' }}>
          {t.toggleBtn}
        </button>
      </header>

      {/* FLOATING DROPDOWN WITH SOCIAL ICONS */}
      {menuOpen && (
        <div style={{ 
          position: 'absolute', top: '70px', left: lang === 'en' ? '40px' : 'auto', right: lang === 'ar' ? '40px' : 'auto',
          width: '280px', backgroundColor: '#fff', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', zIndex: 100, padding: '20px', border: '1px solid #eaeaea'
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '18px', fontFamily: 'Georgia, serif' }}>
            <a href="#about" onClick={() => setMenuOpen(false)} style={{ color: '#111', textDecoration: 'none' }}>{t.about}</a>
            <a href="#services" onClick={() => setMenuOpen(false)} style={{ color: '#111', textDecoration: 'none' }}>{t.servicesMenu}</a>
            <a href="#results" onClick={() => setMenuOpen(false)} style={{ color: '#111', textDecoration: 'none' }}>{t.results}</a>
            <hr style={{ width: '100%', borderColor: '#eaeaea' }} />
            
            {/* Social Icons inside Menu */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="https://wa.me/201020001914" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#25D366', textDecoration: 'none', fontSize: '14px' }}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.888 4.44-9.89 9.896-.001 2.237.692 4.167 1.8 5.867l-.768 2.808 2.858-.746z"/></svg>
                {t.waBtn}
              </a>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a href="https://facebook.com/YOUR_PAGE" style={{ color: '#111' }}>FB</a>
                <a href="https://tiktok.com/@YOUR_HANDLE" style={{ color: '#111' }}>TT</a>
                <a href="https://www.instagram.com/dr.ahmad.azzam.orthopro.clinic/" style={{ color: '#111' }}>IG</a>
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* HERO SECTION */}
      <section style={{ backgroundColor: '#111827', color: '#fff', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '42px', fontWeight: 'normal', letterSpacing: '2px', marginBottom: '10px' }}>{t.name}</h1>
        <p style={{ fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase', color: '#d4af37', marginBottom: '40px' }}>{t.title}</p>
        <a href="https://calendly.com/azzam-ortho-pro" style={{ padding: '16px 32px', border: '1px solid #d4af37', color: '#d4af37', textDecoration: 'none' }}>{t.bookBtn}</a>
      </section>

      {/* ... [Rest of your layout remains unchanged] ... */}
      <section id="about" style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', marginBottom: '30px' }}>{t.aboutTitle}</h2>
        <Image src="/profile.webp" alt={t.name} width={180} height={180} style={{ borderRadius: '50%', margin: '0 auto 30px auto' }} />
        <p style={{ fontSize: '18px', lineHeight: '1.8' }}>{t.aboutText}</p>
      </section>

      <section id="services" style={{ backgroundColor: '#f9f9f9', padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', marginBottom: '40px' }}>{t.servicesHead}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
          {t.services.map((s, i) => <div key={i} style={{ padding: '40px', backgroundColor: '#fff', border: '1px solid #eaeaea' }}>{s}</div>)}
        </div>
      </section>

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