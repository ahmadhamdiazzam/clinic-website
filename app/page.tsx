"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [menuOpen, setMenuOpen] = useState(false);

  const content: any = {
    en: {
      toggleBtn: "العربية",
      menu: "MENU",
      direction: "ltr",
      name: "DR. AHMAD HAMDI AZZAM",
      title: "Consultant of Orthopedic Surgery",
      bookBtn: "BOOK CONSULTATION",
      aboutTitle: "MEET DR. AZZAM",
      aboutText: "Providing advanced orthopedic care, comprehensive trauma management, and restorative joint surgery with a strict commitment to evidence-based medical excellence.",
      address: "40 Mosaddak St., Dokki, Giza | +20 1020001914",
      servicesHead: "PROCEDURES & TREATMENTS",
      services: ['Joint Replacement', 'Sports Injuries', 'Trauma Management'],
      adviceHead: "PATIENT RESOURCES",
      advice: [
        'Stay hydrated for joint lubrication.', 
        'Maintain good posture during long shifts.', 
        'Warm up before any exercise or sport.', 
        'Regularly shift position or posture every 30 minutes.'
      ],
      faqHead: "FREQUENTLY ASKED QUESTIONS",
      faq1Q: "Do you accept insurance?",
      faq1A: "Please contact our office on WhatsApp to confirm your specific provider.",
      faq2Q: "What should I bring to my first appointment?",
      faq2A: "Please bring any previous X-rays, MRI scans, and relevant medical records.",
      contactHead: "CONTACT THE CLINIC",
      waBtn: "CHAT ON WHATSAPP",
      fbBtn: "FACEBOOK",
      tiktokBtn: "TIKTOK",
      igBtn: "INSTAGRAM",
      googleBtn: "GOOGLE BUSINESS"
    },
    ar: {
      toggleBtn: "ENGLISH",
      menu: "القائمة",
      direction: "rtl",
      name: "د. أحمد حمدي عزام",
      title: "استشاري جراحة العظام",
      bookBtn: "احجز استشارتك",
      aboutTitle: "تعرف على د. عزام",
      aboutText: "نقدم رعاية متقدمة في جراحة العظام، وإدارة شاملة للإصابات، وجراحات ترميم المفاصل مع التزام صارم بالتميز الطبي القائم على الأدلة.",
      address: "٤٠ شارع مصدق، الدقي، الجيزة | +20 1020001914",
      servicesHead: "الإجراءات والعلاجات",
      services: ['تغيير المفاصل', 'إصابات الملاعب', 'علاج الكسور'],
      adviceHead: "موارد المرضى",
      advice: [
        'حافظ على شرب الماء لترطيب المفاصل.', 
        'حافظ على وضعية جيدة أثناء فترات العمل الطويلة.', 
        'قم بالإحماء قبل أي تمرين أو رياضة.', 
        'قم بتغيير وضعيتك بانتظام كل 30 دقيقة.'
      ],
      faqHead: "الأسئلة الشائعة",
      faq1Q: "هل تقبلون التأمين الطبي؟",
      faq1A: "يرجى التواصل مع عيادتنا عبر الواتساب لتأكيد شركة التأمين الخاصة بك.",
      faq2Q: "ماذا يجب أن أحضر في موعدي الأول؟",
      faq2A: "يرجى إحضار أي أشعة سينية، رنين مغناطيسي، وسجلات طبية سابقة.",
      contactHead: "تواصل مع العيادة",
      waBtn: "تواصل عبر الواتساب",
      fbBtn: "فيسبوك",
      tiktokBtn: "تيك توك",
      igBtn: "إنستجرام",
      googleBtn: "جوجل بيزنس"
    }
  };

  const t = content[lang];

  return (
    <main dir={t.direction} style={{ fontFamily: 'Arial, sans-serif', color: '#111', backgroundColor: '#fff' }}>
      
      {/* HEADER / NAVBAR */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #eaeaea' }}>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', fontSize: '14px', cursor: 'pointer', fontWeight: 'bold' }}>
          ≡ {t.menu}
        </button>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: 'bold' }}>
          AZZAM ORTHOPEDICS
        </div>
        <button 
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: 'transparent', border: '1px solid #111', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}
        >
          {t.toggleBtn}
        </button>
      </header>

      {/* DROPDOWN MENU */}
      {menuOpen && (
        <div style={{ position: 'absolute', top: '80px', left: lang === 'en' ? '40px' : 'auto', right: lang === 'ar' ? '40px' : 'auto', width: '250px', backgroundColor: '#fff', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', zIndex: 1000, padding: '20px', border: '1px solid #eaeaea' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontFamily: 'Georgia, serif' }}>
            <a href="#about" onClick={() => setMenuOpen(false)} style={{ color: '#111', textDecoration: 'none', fontSize: '16px' }}>{t.aboutTitle}</a>
            <a href="#services" onClick={() => setMenuOpen(false)} style={{ color: '#111', textDecoration: 'none', fontSize: '16px' }}>{t.servicesHead}</a>
            <hr style={{ width: '100%', border: '0', borderTop: '1px solid #eee' }} />
            <a href="https://wa.me/201020001914" style={{ color: '#25D366', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold' }}>{t.waBtn}</a>
          </nav>
        </div>
      )}

      {/* HERO SECTION */}
      <section style={{ backgroundColor: '#111827', color: '#fff', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '42px', fontWeight: 'normal', letterSpacing: '2px', marginBottom: '10px' }}>
          {t.name}
        </h1>
        <p style={{ fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase', color: '#d4af37', marginBottom: '40px' }}>
          {t.title}
        </p>
        <a 
          href="https://calendly.com/azzam-ortho-pro" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            padding: '16px 32px', 
            border: '1px solid #d4af37', 
            color: '#d4af37', 
            textDecoration: 'none',
            fontSize: '14px',
            letterSpacing: '2px',
            transition: 'all 0.3s ease',
            display: 'inline-block'
          }}
        >
          {t.bookBtn}
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', letterSpacing: '1px', marginBottom: '30px' }}>{t.aboutTitle}</h2>
        <Image 
          src="/profile.webp" 
          alt={t.name} 
          width={180} 
          height={180} 
          sizes="180px" 
          priority
          style={{ borderRadius: '50%', margin: '0 auto 30px auto', objectFit: 'cover', border: '4px solid #f9f9f9' }} 
        />
        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
          {t.aboutText}
        </p>
      </section>

      {/* PROCEDURES / SERVICES */}
      <section id="services" style={{ backgroundColor: '#f9f9f9', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', letterSpacing: '1px', marginBottom: '40px' }}>{t.servicesHead}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {t.services.map((service: string, i: number) => (
              <div key={i} style={{ padding: '40px 20px', backgroundColor: '#fff', border: '1px solid #eaeaea' }}>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '20px', fontWeight: 'normal' }}>{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVICE & FAQs */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 20px' }}>
        
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', letterSpacing: '1px', marginBottom: '30px', textAlign: 'center' }}>{t.adviceHead}</h2>
        <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '60px' }}>
          {t.advice.map((tip: string, i: number) => (
            <li key={i} style={{ padding: '20px 0', borderBottom: '1px solid #eaeaea', color: '#555', fontSize: '16px', textAlign: 'center' }}>
              {tip}
            </li>
          ))}
        </ul>

        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', letterSpacing: '1px', marginBottom: '30px', textAlign: 'center' }}>{t.faqHead}</h2>
        <details style={{ padding: '20px 0', borderBottom: '1px solid #eaeaea' }}>
          <summary style={{ fontFamily: 'Georgia, serif', fontSize: '18px', cursor: 'pointer', outline: 'none' }}>{t.faq1Q}</summary>
          <p style={{ marginTop: '15px', color: '#555', lineHeight: '1.6' }}>{t.faq1A}</p>
        </details>
        <details style={{ padding: '20px 0', borderBottom: '1px solid #eaeaea' }}>
          <summary style={{ fontFamily: 'Georgia, serif', fontSize: '18px', cursor: 'pointer', outline: 'none' }}>{t.faq2Q}</summary>
          <p style={{ marginTop: '15px', color: '#555', lineHeight: '1.6' }}>{t.faq2A}</p>
        </details>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#111827', color: '#fff', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', letterSpacing: '1px', marginBottom: '20px' }}>{t.contactHead}</h2>
        <p style={{ fontSize: '14px', letterSpacing: '1px', marginBottom: '30px', color: '#aaa' }}>{t.address}</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
          <a 
            href="https://wa.me/201020001914" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ padding: '12px 24px', backgroundColor: '#fff', color: '#111', textDecoration: 'none', fontSize: '12px', letterSpacing: '1px', fontWeight: 'bold' }}
          >
            {t.waBtn}
          </a>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
            <a href="https://www.facebook.com/dr.ahmad.azzam.orthopro.clinic" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d4af37', textDecoration: 'none', fontSize: '12px', letterSpacing: '1px' }}>
              {t.fbBtn}
            </a>
            <a href="https://www.tiktok.com/@dr.ahmad.azzam.orthopro" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d4af37', textDecoration: 'none', fontSize: '12px', letterSpacing: '1px' }}>
              {t.tiktokBtn}
            </a>
            <a href="https://www.instagram.com/dr.ahmad.azzam.orthopro.clinic/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d4af37', textDecoration: 'none', fontSize: '12px', letterSpacing: '1px' }}>
              {t.igBtn}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}