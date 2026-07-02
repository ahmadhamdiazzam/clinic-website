"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      
      {/* 1. Name and Profile */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>Dr. Ahmad Hamdi Azzam</h1>
        <p style={{ color: '#2563eb', fontSize: '18px' }}>Consultant of Orthopedic Surgery</p>
        <div style={{ marginTop: '20px' }}>
          <Image src="/profile.webp" alt="Dr. Ahmad Hamdi Azzam" width={200} height={200} sizes="200px" priority style={{ borderRadius: '50%', margin: '0 auto' }} />
        </div>
      </section>

      {/* 2. Address & Book Now */}
      <section style={{ marginBottom: '40px', textAlign: 'center' }}>
        <p>40 Mosaddak St., Dokki, Giza | +20 1020001914</p>
        <br />
        https://calendly.com/azzam-ortho-pro
      </section>

      {/* 3. Horizontal Services Slider */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Our Services</h2>
        <div style={{ display: 'flex', gap: '15px', overflowX: 'scroll', paddingBottom: '10px' }}>
          {['Joint Replacement', 'Sports Injuries', 'Trauma Management'].map((service, i) => (
            <div key={i} style={{ minWidth: '200px', padding: '20px', backgroundColor: '#1e3a8a', color: 'white', borderRadius: '10px' }}>
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Horizontal Advice Slider */}
      <section style={{ marginBottom: '40px' }}>
        <h2>General Advice</h2>
        <div style={{ display: 'flex', gap: '15px', overflowX: 'scroll', paddingBottom: '10px' }}>
          {['Stay hydrated.', 'Maintain posture.', 'Warm up joints.'].map((tip, i) => (
            <div key={i} style={{ minWidth: '200px', padding: '20px', backgroundColor: '#f3f4f6', borderRadius: '10px', border: '1px solid #ddd' }}>
              {tip}
            </div>
          ))}
        </div>
      </section>

      {/* 5. FAQs */}
      <section style={{ marginBottom: '40px' }}>
        <h2>FAQs</h2>
        <details style={{ padding: '10px', backgroundColor: '#f9fafb', marginBottom: '10px' }}>
          <summary style={{ fontWeight: 'bold' }}>Do you accept insurance?</summary>
          <p>Please contact our office to confirm your provider.</p>
        </details>
      </section>

      {/* 6. Contact & Footer */}
      <footer style={{ borderTop: '1px solid #ccc', paddingTop: '20px', textAlign: 'center' }}>
        <a href="https://wa.me/201020001914" style={{ display: 'block', marginBottom: '20px', color: 'green', fontWeight: 'bold' }}>Chat on WhatsApp</a>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <a href="https://www.google.com/search?q=%D8%AF%D9%83%D8%AA%D9%88%D8%B1+%D8%A3%D8%AD%D9%85%D8%AF+%D8%AD%D9%85%D8%AF%D9%89+%D8%B9%D8%B2%D8%A7%D9%85+Dr+Ahmad+Hamdi+Azzam-OrthoPro+Clinic&oq=%D8%AF%D9%83%D8%AA&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg5MgYIBBBFGD0yBggFEEUYPTIGCAYQRRg90gEIMjYwOGowajSoAgCwAgE&sourceid=chrome&ie=UTF-8">Google Business</a>
          <a href="https://www.instagram.com/dr.ahmad.azzam.orthopro.clinic?igsh=MWx2ZmFhbGEwOGUwcA==">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}