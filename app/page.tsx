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
      bookBtn: "BOOK CONSULTATION", aboutTitle: "PROFESSIONAL PROFILE", 
      aboutBio: "Consultant of Orthopedic Surgery & Traumatology with 17 years of experience at Cairo University Hospitals and Kasr Al Ainy. I specialize in Pelvis & Geriatric Trauma Surgeries and Arthroplasty, committed to evidence-based medical excellence and clinical mentorship.",
      clinicalExp: "Clinical Leadership",
      clinicalDetail: "Over 17 years of dedicated practice at Cairo University Hospitals and Kasr Al Ainy, specializing in Pelvis & Geriatric Trauma Surgeries and Arthroplasty.",
      fellowshipsTitle: "International Fellowships",
      fellowships: ["Total Knee Replacement, Stolzalpe, Austria (2019)", "Hip & Knee Arthroplasty, Paderborn, Germany (2016)"],
      teachingTitle: "Academic Appointments",
      teaching: ["Lecturer, Orthopedic Surgery, Cairo University", "Lecturer, Faculty of Physical Therapy, Cairo University", "Moderator, Orthogeriatric Unit, CU"],
      servicesHead: "PROCEDURES & TREATMENTS",
      services: ['Joint Replacement', 'Sports Injuries', 'Trauma Management'],
      adviceHead: "PATIENT RESOURCES",
      advice: ['Stay hydrated for joint lubrication.', 'Maintain good posture during long shifts.', 'Warm up before any exercise or sport.', 'Regularly shift position or posture every 30 minutes.'],
      faqHead: "FREQUENTLY ASKED QUESTIONS",
      faq1Q: "Do you accept insurance?",
      faq1A: "Please contact our office on WhatsApp to confirm your specific provider.",
      faq2Q: "What should I bring to my first appointment?",
      faq2A: "Please bring any previous X-rays, MRI scans, and relevant medical records.",
      address: "40 Mosaddak St., Dokki, Giza | +20 1020001914",
      waBtn: "CHAT ON WHATSAPP"
    },
    ar: {
      menu: "القائمة", close: "إغلاق", about: "عن العيادة", servicesMenu: "خدماتنا", results: "نتائجنا",
      toggleBtn: "ENGLISH", name: "د. أحمد حمدي عزام", title: "استشاري جراحة العظام",
      bookBtn: "احجز استشارتك", aboutTitle: "السيرة المهنية", 
      aboutBio: "استشاري جراحة العظام والكسور بخبرة تمتد لـ 17 عاماً في مستشفيات جامعة القاهرة وقصر العيني. تخصص دقيق في جراحات الحوض، إصابات كبار السن، وتغيير المفاصل، مع التزام راسخ بالتميز الطبي وتدريب الجيل القادم.",
      clinicalExp: "الخبرة السريرية",
      clinicalDetail: "أكثر من 17 عاماً من الممارسة في مستشفيات جامعة القاهرة وقصر العيني، مع تخصص دقيق في جراحات الحوض، إصابات كبار السن، وتغيير المفاصل.",
      fellowshipsTitle: "الزمالات الدولية",
      fellowships: ["زمالة تغيير مفصل الركبة، ستولزالبي، النمسا (2019)", "زمالة تغيير مفصل الورك والركبة، بادربورن، ألمانيا (2016)"],
      teachingTitle: "المناصب الأكاديمية",
      teaching: ["مدرس جراحة العظام، جامعة القاهرة", "مدرس جراحة العظام، كلية العلاج الطبيعي، جامعة القاهرة", "منسق وحدة جراحة عظام المسنين، جامعة القاهرة"],
      servicesHead: "الإجراءات والعلاجات",
      services: ['تغيير المفاصل', 'إصابات الملاعب', 'علاج الكسور'],
      adviceHead: "موارد المرضى",
      advice: ['حافظ على شرب الماء لترطيب المفاصل.', 'حافظ على وضعية جيدة أثناء فترات العمل الطويلة.', 'قم بالإحماء قبل أي تمرين أو رياضة.', 'قم بتغيير وضعيتك بانتظام كل 30 دقيقة.'],
      faqHead: "الأسئلة الشائعة",
      faq1Q: "هل تقبلون التأمين الطبي؟",
      faq1A: "يرجى التواصل مع عيادتنا عبر الواتساب لتأكيد شركة التأمين الخاصة بك.",
      faq2Q: "ماذا يجب أن أحضر في موعدي الأول؟",
      faq2A: "يرجى إحضار أي أشعة سينية، رنين مغناطيسي، وسجلات طبية سابقة.",
      address: "٤٠ شارع مصدق، الدقي، الجيزة | +20 1020001914",
      waBtn: "تواصل عبر الواتساب"
    }
  };

  const t = content[lang];

  return (
    <main dir={lang === 'ar' ? 'rtl' : 'ltr'} style={{ fontFamily: 'Arial, sans-serif', color: '#111', backgroundColor: '#fff', position: 'relative' }}>
      
      {/* HEADER */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #eaeaea' }}>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', fontSize: '14px', cursor: 'pointer', fontWeight: 'bold' }}>≡ {t.menu}</button>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: 'bold' }}>AZZAM ORTHOPEDICS</div>
        <button onClick={() => setLang(lang === "en" ? "ar" : "en")} style={{ background: 'none', border: 'none', fontSize: '12px', cursor: 'pointer' }}>{t.toggleBtn}</button>
      </header>

      {/* FLOATING MENU */}
      {menuOpen && (
        <div style={{ position: 'absolute', top: '70px', left: lang === 'en' ? '40px' : 'auto', right: lang === 'ar' ? '40px' : 'auto', width: '280px', backgroundColor: '#fff', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', zIndex: 100, padding: '20px', border: '1px solid #eaeaea' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontFamily: 'Georgia, serif' }}>
            <a href="#about" onClick={() => setMenuOpen(false)} style={{ color: '#111', textDecoration: 'none' }}>{t.about}</a>
            <a href="#services" onClick={() => setMenuOpen(false)} style={{ color: '#111', textDecoration: 'none' }}>{t.servicesMenu}</a>
            <a href="#results" onClick={() => setMenuOpen(false)} style={{ color: '#111', textDecoration: 'none' }}>{t.results}</a>
            <hr style={{ width: '100%' }} />
            <a href="https://wa.me/201020001914" style={{ color: '#25D366', textDecoration: 'none', fontSize: '14px' }}>{t.waBtn}</a>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="https://facebook.com/YOUR_PAGE"><svg width="24" height="24" viewBox="0 0 24 24" fill="#3b5998"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg></a>
              <a href="https://tiktok.com/@YOUR_HANDLE"><svg width="24" height="24" viewBox="0 0 24 24" fill="#000"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.22-1.15 4.39-2.97 5.74-1.8 1.33-4.14 1.83-6.32 1.34-2.09-.48-3.92-1.89-4.88-3.79-.96-1.89-1.07-4.14-.28-6.07.78-1.92 2.37-3.48 4.36-4.17 2.03-.7 4.31-.7 6.28.1v4.25c-1.02-.32-2.14-.38-3.17-.07-1.1.33-2.05 1.1-2.58 2.08-.53.98-.6 2.16-.16 3.19.43 1.02 1.25 1.84 2.29 2.2.98.34 2.1.32 3.06-.08.97-.4 1.77-1.16 2.21-2.1.35-.74.45-1.58.42-2.4V.02z"/></svg></a>
              <a href="https://www.instagram.com/dr.ahmad.azzam.orthopro.clinic/"><svg width="24" height="24" viewBox="0 0 24 24" fill="#E1306C"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
            </div>
          </nav>
        </div>
      )}

      {/* HERO SECTION */}
      <section style={{ backgroundColor: '#111827', color: '#fff', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '42px', fontWeight: 'normal', marginBottom: '10px' }}>{t.name}</h1>
        <p style={{ color: '#d4af37', marginBottom: '40px' }}>{t.title}</p>
        <a href="https://calendly.com/azzam-ortho-pro" style={{ padding: '16px 32px', border: '1px solid #d4af37', color: '#d4af37', textDecoration: 'none' }}>{t.bookBtn}</a>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '80px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', textAlign: 'center', marginBottom: '30px' }}>{t.aboutTitle}</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.8', textAlign: 'center', marginBottom: '40px' }}>{t.aboutBio}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div style={{ borderTop: '2px solid #d4af37', paddingTop: '20px' }}>
            <h3 style={{ fontFamily: 'Georgia, serif' }}>{t.clinicalExp}</h3>
            <p>{t.clinicalDetail}</p>
          </div>
          <div style={{ borderTop: '2px solid #d4af37', paddingTop: '20px' }}>
            <h3 style={{ fontFamily: 'Georgia, serif' }}>{t.fellowshipsTitle}</h3>
            <ul style={{ paddingLeft: '20px' }}>{t.fellowships.map((f, i) => <li key={i}>{f}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ backgroundColor: '#f9f9f9', padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', marginBottom: '40px' }}>{t.servicesHead}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
          {t.services.map((s, i) => <div key={i} style={{ padding: '40px', backgroundColor: '#fff', border: '1px solid #eaeaea' }}>{s}</div>)}
        </div>
      </section>

      {/* ADVICE & FAQs */}
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
          <a href="https://facebook.com/YOUR_PAGE" style={{ color: '#d4af37' }}>FB</a>
          <a href="https://tiktok.com/@YOUR_HANDLE" style={{ color: '#d4af37' }}>TT</a>
          <a href="https://www.instagram.com/dr.ahmad.azzam.orthopro.clinic/" style={{ color: '#d4af37' }}>IG</a>
          <a href="https://www.google.com/search?q=%D8%AF%D9%83%D8%AA%D9%88%D8%B1+%D8%A3%D8%AD%D9%85%D8%AF+%D8%AD%D9%85%D8%AF%D9%89+%D8%B9%D8%B2%D8%A7%D9%85+Dr+Ahmad+Hamdi+Azzam-OrthoPro+Clinic&oq=%D8%AF%D9%83&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg5MgYIBBBFGD0yBggFEEUYPTIGCAYQRRg90gEIMTk4M2owajSoAgCwAgE&sourceid=chrome&ie=UTF-8" style={{ color: '#d4af37' }}>GOOGLE</a>
        </div>
      </footer>
    </main>
  );
}