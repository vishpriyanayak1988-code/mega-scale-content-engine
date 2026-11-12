import React from 'react';

export default function HomePage() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '24px', fontFamily: 'system-ui, sans-serif', color: '#1a202c' }}>
      {/* Header Banner */}
      <header style={{ backgroundColor: '#1e293b', color: '#ffffff', padding: '32px 24px', borderRadius: '12px', textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '10px' }}>
          Mobiapp Systems - Global Remote Careers & Financial Tools
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '650px', margin: '0 auto' }}>
          Verified global remote tech opportunities and free financial calculators for independent contractors and software professionals.
        </p>
      </header>

      {/* Featured High-RPM Tool Card */}
      <section style={{ backgroundColor: '#eff6ff', border: '2px solid #3b82f6', borderRadius: '12px', padding: '24px', marginBottom: '36px' }}>
        <div style={{ display: 'inline-block', backgroundColor: '#2563eb', color: '#ffffff', fontSize: '0.8rem', fontWeight: 'bold', padding: '4px 10px', borderRadius: '20px', marginBottom: '12px' }}>
          NEW 2026 FINANCIAL TOOL
        </div>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '10px' }}>
          US Freelance Tax & Hourly Salary Calculator
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#1e40af', marginBottom: '20px', lineHeight: '1.6' }}>
          Calculate your annual gross income, 15.3% IRS self-employment tax, quarterly estimated payments, and net take-home pay in seconds.
        </p>
        <a 
          href="/us-freelance-tax-calculator" 
          style={{ display: 'inline-block', backgroundColor: '#2563eb', color: '#ffffff', fontWeight: 'bold', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.05rem' }}
        >
          Open Tax Calculator →
        </a>
      </section>

      {/* Remote Tech Jobs Section */}
      <section>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '16px' }}>
          Featured Remote Tech Opportunities
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px', backgroundColor: '#ffffff' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#111827', marginBottom: '6px' }}>Senior React Developer (Remote)</h3>
            <p style={{ color: '#4b5563', fontSize: '0.95rem', marginBottom: '10px' }}>Full-Time • Worldwide • $95,000 - $120,000 / year</p>
          </div>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px', backgroundColor: '#ffffff' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#111827', marginBottom: '6px' }}>Python Backend Engineer (AI Systems)</h3>
            <p style={{ color: '#4b5563', fontSize: '0.95rem', marginBottom: '10px' }}>Full-Time • US / Europe Friendly • $110,000 - $140,000 / year</p>
          </div>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px', backgroundColor: '#ffffff' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#111827', marginBottom: '6px' }}>Mobile App UI/UX Designer</h3>
            <p style={{ color: '#4b5563', fontSize: '0.95rem', marginBottom: '10px' }}>Contract • Worldwide • $60 - $85 / hour</p>
          </div>
        </div>
      </section>
    </div>
  );
}
