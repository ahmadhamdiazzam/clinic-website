"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [menuOpen, setMenuOpen] = useState(false); // Menu toggle state

  const content = {
    en: {
      menu: "MENU", close: "CLOSE", about: "About", services: "Services", results: "Our Results",
      toggleBtn: "العربية", name: "DR. AHMAD HAMDI AZZAM", title: "Consultant of Orthopedic Surgery",
      bookBtn: "BOOK CONSULTATION", aboutTitle: "MEET DR. AZZAM", address: "40 Mosaddak St., Dokki, Giza",
      waBtn: "CHAT ON WHATSAPP", fbBtn: "FACEBOOK", tiktokBtn: "TIKTOK", igBtn: "INSTAGRAM", googleBtn: "GOOGLE"
    },
    ar: {
      menu: "القائمة", close: "إغلاق", about: "عن العيادة", services: "خدماتنا", results: "نتائجنا",
      toggleBtn: "ENGLISH", name: "د. أحمد حمدي عزام", title: "استشاري جراحة العظام",
      bookBtn: "احجز استشارتك", aboutTitle: "تعرف على د. عزام", address: "٤٠ شارع مصدق، الدقي، الجيزة",
      waBtn: "تواصل عبر الواتساب", fbBtn: "فيسبوك", tiktokBtn: "تيك توك", igBtn: "إنستجرام", googleBtn: "جوجل"
    }
  };

  const t = content[lang];

  return (
    <main dir={lang === 'ar' ? 'rtl' : 'ltr'} style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
      
      {/* NAVIGATION BAR */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #eaeaea' }}>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: 'bold' }}>AZZAM ORTHOPEDICS</div>
        <button onClick={() => setMenuOpen(true)} style={{ background: 'none', border: 'none', fontSize: '14px', cursor: 'pointer', letterSpacing: '1px' }}>
          {t.menu} ≡
        </button>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#f9f9f9', zIndex: 100, padding: '40px' }}>
          <button onClick={() => setMenuOpen(false)} style={{ background: 'none', border: 'none', fontSize: '16px', marginBottom: '40px', cursor: 'pointer' }}>{t.close} ✕</button>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '24px', fontFamily: 'Georgia, serif' }}>
            <a href="#about" onClick={() => setMenuOpen(false)}>{t.about}</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>{t.services}</a>
            <a href="#results" onClick={() => setMenuOpen(false)}>{t.results}</a>
            <button onClick={() => setLang(lang === "en" ? "ar" : "en")} style={{ background: 'none', border: 'none', textAlign: 'start', fontSize: '24px', color: '#2563eb' }}>{t.toggleBtn}</button>
          </nav>
        </div>
      )}

      {/* HERO SECTION */}
      <section style={{ backgroundColor: '#111827', color: '#fff', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '42px', marginBottom: '10px' }}>{t.name}</h1>
        <p style={{ color: '#d4af37', marginBottom: '40px' }}>{t.title}</p>
        <a href="https://calendly.com/azzam-ortho-pro" style={{ padding: '16px 32px', border: '1px solid #d4af37', color: '#d4af37', textDecoration: 'none' }}>{t.bookBtn}</a>
      </section>

      {/* FOOTER (Same icons as before) */}
      <footer style={{ backgroundColor: '#111827', color: '#fff', padding: '40px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a href="https://wa.me/201020001914" style={{ color: '#fff' }}>WhatsApp</a>
          <a href="#" style={{ color: '#fff' }}>FB</a>
          <a href="#" style={{ color: '#fff' }}>TikTok</a>
          <a href="#" style={{ color: '#fff' }}>IG</a>
        </div>
      </footer>
    </main>
  );
}