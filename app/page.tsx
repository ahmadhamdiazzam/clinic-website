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

      {/* 4. Services Slider */}
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

      {/* 5. General Advice Slider */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>General Advice</h2>
        <div style={{ display: 'flex', gap: '15px', overflowX: 'scroll', paddingBottom: '10px' }}>
          {['Stay hydrated for joint lubrication.', 'Maintain good posture during long shifts.', 'Warm up before any exercise or sport.', 'Regularly shift position or posture every 30 minutes.'].map((tip, i) => (
            <div key={i} style={{ minWidth: '200px', padding: '20px', backgroundColor: '#f3f4f6', borderRadius: '10px', border: '1px solid #ddd', textAlign: 'center', color: '#333' }}>
              {tip}
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQs */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>FAQs</h2>
        <details style={{ padding: '15px', backgroundColor: '#f9fafb', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ddd' }}>
          <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you accept insurance?</summary>
          <p style={{ marginTop: '10px', color: '#555' }}>Please contact our office on WhatsApp to confirm your specific provider.</p>
        </details>
        <details style={{ padding: '15px', backgroundColor: '#f9fafb', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ddd' }}>
          <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What should I bring to my first appointment?</summary>
          <p style={{ marginTop: '10px', color: '#555' }}>Please bring any previous X-rays, MRI scans, and relevant medical records.</p>
        </details>
      </section>

      {/* 7. Footer & Social Links */}
      <footer style={{ borderTop: '1px solid #ccc', paddingTop: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', paddingBottom: '40px' }}>
        <a 
          href="https://wa.me/201020001914" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#25D366', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Chat on WhatsApp
        </a>
        <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
          <a href="https://www.instagram.com/dr.ahmad.azzam.orthopro.clinic/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 'bold' }}>Instagram</a>
          <a href="https://www.google.com/search?q=%D8%AF%D9%83%D8%AA%D9%88%D8%B1+%D8%A3%D8%AD%D9%85%D8%AF+%D8%AD%D9%85%D8%AF%D9%89+%D8%B9%D8%B2%D8%A7%D9%85+Dr+Ahmad+Hamdi+Azzam-OrthoPro+Clinic&oq=%D8%AF%D9%83&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg5MgYIBBBFGD0yBggFEEUYPTIGCAYQRRg90gEIMTk4M2owajSoAgCwAgE&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 'bold' }}>Google Business</a>
        </div>
      </footer>
    </main>
  );
}