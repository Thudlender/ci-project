import React from "react";

export default function LandingPage() {
  return (
    <div className="container">
      <header className="navbar">
        <div className="logo">โรงเรียนบางแพปฐมพิทยา</div>
        <nav>
          <a href="#about">เกี่ยวกับระบบ</a>
          <a href="#features">ฟีเจอร์</a>
          <a href="#contact">ติดต่อ</a>
        </nav>
      </header>

      <section className="hero">
        <h1>ระบบบันทึกการเยี่ยมบ้าน</h1>
        <p>สำหรับครูและบุคลากร เพื่อบันทึกข้อมูลการเยี่ยมบ้านของนักเรียนได้อย่างสะดวกรวดเร็ว</p>
        <a className="cta-button" href="#start">เริ่มต้นใช้งาน</a>
      </section>

      <section id="features" className="features">
        <h2>ฟีเจอร์เด่นของระบบ</h2>
        <ul>
          <li>บันทึกข้อมูลการเยี่ยมบ้านแบบออนไลน์</li>
          <li>แนบรูปภาพและตำแหน่งพิกัด</li>
          <li>สรุปรายงานและสถิติการเยี่ยมบ้าน</li>
        </ul>
      </section>

      <section id="contact" className="contact">
        <h2>ติดต่อเรา</h2>
        <p>โรงเรียนบางแพปฐมพิทยา<br/>โทร. 034-xxxxxxx</p>
      </section>

      <footer className="footer">
        &copy; 2025 โรงเรียนบางแพปฐมพิทยา
      </footer>

      <style>{`
        .container {
          font-family: sans-serif;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #003366;
          color: white;
          padding: 1rem 2rem;
        }
        .navbar a {
          color: white;
          margin-left: 1rem;
          text-decoration: none;
        }
        .hero {
          text-align: center;
          padding: 4rem 2rem;
          background: #e0f0ff;
        }
        .hero h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .cta-button {
          display: inline-block;
          margin-top: 1.5rem;
          padding: 0.75rem 1.5rem;
          background: #0066cc;
          color: white;
          text-decoration: none;
          border-radius: 4px;
        }
        .features {
          padding: 2rem;
          background: #f9f9f9;
        }
        .features ul {
          list-style: disc;
          padding-left: 2rem;
        }
        .contact {
          padding: 2rem;
          background: #e0f0ff;
        }
        .footer {
          text-align: center;
          padding: 1rem;
          background: #003366;
          color: white;
        }
      `}</style>
    </div>
  );
} 
