"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      
      {/* 1. Name and Profile */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>Dr. Ahmad Hamdi Azzam</h1>
        <p style={{ color: '#2563eb', fontSize: '18px' }}>Consultant of Orthopedic Surgery</p>
        <div style={{ marginTop: '20px', marginBottom: '30px' }}>
          <Image 
            src="/profile.webp" 
            alt="Dr. Ahmad Hamdi Azzam" 
            width={200} 
            height={200} 
            sizes="200px" 
            priority
            style={{ borderRadius: '50%', margin: '0 auto', objectFit: 'cover' }} 
          />
        </div>
      </section>

      {/* 2. Book Now Button */}
      <section style={{ marginBottom: '40px', textAlign: 'center' }}>
        <a 
          href="https://calendly.com/azzam-ortho-pro" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            padding: '12px 24px', 
            backgroundColor: '#2563eb', 
            color: 'white', 
            borderRadius: '8px', 
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          Book Now
        </a>
      </section>

      {/* 3. Address */}
      <section style={{ marginBottom: '40px', textAlign: 'center' }}>
        <p style={{ fontSize: '16px', color: '#333' }}>
          40 Mosaddak St., Dokki, Giza | +20 1020001914
        </p>
      </section>

      {/* 4. Services */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>Our Services</h2>
        <div style={{ display: 'flex', gap: '15px', overflowX: 'scroll', paddingBottom: '10px' }}>
          {['Joint Replacement', 'Sports Injuries', 'Trauma Management'].map((service, i) => (
            <div key={i} style={{ minWidth: '200px', padding: '20px', backgroundColor: '#1e3a8a', color: 'white', borderRadius: '10px', textAlign: 'center', fontWeight: 'bold' }}>
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* 5. Footer */}
      <footer style={{ borderTop: '1px solid #ccc', paddingTop: '20px', textAlign: 'center' }}>
        <a 
          href="https://wa.me/201020001914" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#25D366', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Chat on WhatsApp
        </a>
      </footer>
    </main>
  );
}