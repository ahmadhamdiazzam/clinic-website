"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [menuOpen, setMenuOpen] = useState(false);

  const content = {
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

  const t: any = content[lang];

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
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 20px', textAlign: 'center' }}>
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
      <section style={{ backgroundColor: '#f9f9f9', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', letterSpacing: '1px', marginBottom: '40px' }}>{t.servicesHead}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {t.services.map((service, i) => (
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
          {t.advice.map((tip, i) => (
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
          
          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/201020001914" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ padding: '12px 24px', backgroundColor: '#fff', color: '#111', textDecoration: 'none', fontSize: '12px', letterSpacing: '1px', fontWeight: 'bold' }}
          >
            {t.waBtn}
          </a>
          
          {/* Social Media Row with Icons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
            
            {/* Facebook */}
            <a href="https://www.facebook.com/dr.ahmad.azzam.orthopro.clinic" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d4af37', textDecoration: 'none', fontSize: '12px', letterSpacing: '1px' }}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
              {t.fbBtn}
            </a>

            {/* TikTok */}
            <a href="https://www.tiktok.com/@dr.ahmad.azzam.orthopro" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d4af37', textDecoration: 'none', fontSize: '12px', letterSpacing: '1px' }}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.22-1.15 4.39-2.97 5.74-1.8 1.33-4.14 1.83-6.32 1.34-2.09-.48-3.92-1.89-4.88-3.79-.96-1.89-1.07-4.14-.28-6.07.78-1.92 2.37-3.48 4.36-4.17 2.03-.7 4.31-.7 6.28.1v4.25c-1.02-.32-2.14-.38-3.17-.07-1.1.33-2.05 1.1-2.58 2.08-.53.98-.6 2.16-.16 3.19.43 1.02 1.25 1.84 2.29 2.2.98.34 2.1.32 3.06-.08.97-.4 1.77-1.16 2.21-2.1.35-.74.45-1.58.42-2.4V.02z"/>
              </svg>
              {t.tiktokBtn}
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/dr.ahmad.azzam.orthopro.clinic/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d4af37', textDecoration: 'none', fontSize: '12px', letterSpacing: '1px' }}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              {t.igBtn}
            </a>

            {/* Google Business */}
            <a href="https://www.google.com/search?q=%D8%AF%D9%83%D8%AA%D9%88%D8%B1+%D8%A3%D8%AD%D9%85%D8%AF+%D8%AD%D9%85%D8%AF%D9%89+%D8%B9%D8%B2%D8%A7%D9%85+Dr+Ahmad+Hamdi+Azzam-OrthoPro+Clinic&oq=%D8%AF%D9%83&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg5MgYIBBBFGD0yBggFEEUYPTIGCAYQRRg90gEIMTk4M2owajSoAgCwAgE&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d4af37', textDecoration: 'none', fontSize: '12px', letterSpacing: '1px' }}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
              </svg>
              {t.googleBtn}
            </a>

          </div>
        </div>
      </footer>
    </main>
  );
}

