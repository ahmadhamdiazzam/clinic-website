"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      toggleBtn: "العربية",
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
      igBtn: "INSTAGRAM",
      googleBtn: "GOOGLE BUSINESS"
    },
    ar: {
      toggleBtn: "ENGLISH",
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
      igBtn: "إنستجرام",
      googleBtn: "جوجل بيزنس"
    }
  };

  const t = content[lang];

  return (
    <main dir={t.direction} style={{ fontFamily: 'Arial, sans-serif', color: '#111', backgroundColor: '#fff' }}>
      
      {/* HEADER / NAVBAR */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #eaeaea' }}>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: '18px', letterSpacing: '1px', fontWeight: 'bold' }}>
          AZZAM ORTHOPEDICS
        </div>
        <button 
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: 'transparent', border: '1px solid #111', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}
        >
          {t.toggleBtn}
        </button>
      </header>

      {/* HERO SECTION (Dark luxury aesthetic) */}
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

      {/* PROCEDURES / SERVICES (Clean Minimalist Grid) */}
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
        
        {/* Advice section */}
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', letterSpacing: '1px', marginBottom: '30px', textAlign: 'center' }}>{t.adviceHead}</h2>
        <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '60px' }}>
          {t.advice.map((tip, i) => (
            <li key={i} style={{ padding: '20px 0', borderBottom: '1px solid #eaeaea', color: '#555', fontSize: '16px', textAlign: 'center' }}>
              {tip}
            </li>
          ))}
        </ul>

        {/* FAQ section */}
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
          
          <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
            <a href="https://www.instagram.com/dr.ahmad.azzam.orthopro.clinic/" target="_blank" rel="noopener noreferrer" style={{ color: '#d4af37', textDecoration: 'none', fontSize: '12px', letterSpacing: '1px' }}>{t.igBtn}</a>
            <a href="https://www.google.com/search?q=%D8%AF%D9%83%D8%AA%D9%88%D8%B1+%D8%A3%D8%AD%D9%85%D8%AF+%D8%AD%D9%85%D8%AF%D9%89+%D8%B9%D8%B2%D8%A7%D9%85+Dr+Ahmad+Hamdi+Azzam-OrthoPro+Clinic&oq=%D8%AF%D9%83&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg5MgYIBBBFGD0yBggFEEUYPTIGCAYQRRg90gEIMTk4M2owajSoAgCwAgE&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer" style={{ color: '#d4af37', textDecoration: 'none', fontSize: '12px', letterSpacing: '1px' }}>{t.googleBtn}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}