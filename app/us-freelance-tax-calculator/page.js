'use client';
import React, { useState } from 'react';

export default function USFreelanceTaxCalculator() {
  const [hourlyRate, setHourlyRate] = useState(50);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [weeksPerYear, setWeeksPerYear] = useState(50);
  const [expenses, setExpenses] = useState(5000);

  const grossIncome = hourlyRate * hoursPerWeek * weeksPerYear;
  const netProfit = Math.max(0, grossIncome - expenses);
  const selfEmploymentTax = netProfit * 0.9235 * 0.153;
  const estimatedFederalTax = Math.max(0, (netProfit - selfEmploymentTax * 0.5 - 14600) * 0.12);
  const totalTax = selfEmploymentTax + estimatedFederalTax;
  const takeHomePay = grossIncome - totalTax;
  const quarterlyPayment = totalTax / 4;

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', padding: '24px', fontFamily: 'system-ui, sans-serif', color: '#1a202c' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px', color: '#111827' }}>
        US Freelance Tax & Hourly Salary Calculator (2026)
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#4b5563', marginBottom: '24px' }}>
        Calculate your annual gross income, IRS self-employment tax, quarterly estimated tax payments, and net take-home pay in seconds.
      </p>

      <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', marginBottom: '32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}>Hourly Rate ($ USD)</label>
            <input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}>Hours Per Week</label>
            <input type="number" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(Number(e.target.value))} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}>Working Weeks / Year</label>
            <input type="number" value={weeksPerYear} onChange={(e) => setWeeksPerYear(Number(e.target.value))} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}>Business Expenses ($)</label>
            <input type="number" value={expenses} onChange={(e) => setExpenses(Number(e.target.value))} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
          </div>
        </div>

        <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', padding: '20px', border: '1px solid #cbd5e1' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px', color: '#0f172a' }}>Your Estimated 2026 Financial Breakdown</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '12px', backgroundColor: '#eff6ff', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.875rem', color: '#1e40af' }}>Annual Gross Income</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3a8a' }}>${grossIncome.toLocaleString()}</div>
            </div>
            <div style={{ padding: '12px', backgroundColor: '#fef2f2', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.875rem', color: '#991b1b' }}>Estimated Total Tax</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#7f1d1d' }}>${Math.round(totalTax).toLocaleString()}</div>
            </div>
            <div style={{ padding: '12px', backgroundColor: '#f0fdf4', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.875rem', color: '#166534' }}>Net Take-Home Pay</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#14532d' }}>${Math.round(takeHomePay).toLocaleString()}</div>
            </div>
            <div style={{ padding: '12px', backgroundColor: '#fffbeb', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.875rem', color: '#92400e' }}>Quarterly IRS Payment</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#78350f' }}>${Math.round(quarterlyPayment).toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>

      <article style={{ lineHeight: '1.75', fontSize: '1.05rem', color: '#374151' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginTop: '24px', marginBottom: '12px' }}>
          How US Freelance and Self-Employment Taxes Work in 2026
        </h2>
        <p style={{ marginBottom: '16px' }}>
          Working as an independent contractor, gig worker, or freelancer in the United States offers tremendous flexibility, but it also requires careful financial planning. Unlike traditional W-2 employees whose employers automatically withhold Social Security and Medicare taxes, self-employed professionals are responsible for calculating and paying their own taxes directly to the Internal Revenue Service (IRS).
        </p>

        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginTop: '20px', marginBottom: '10px' }}>
          1. Understanding the 15.3% Self-Employment Tax
        </h3>
        <p style={{ marginBottom: '16px' }}>
          The US self-employment tax rate is 15.3% on 92.35% of your net business earnings. This consists of two parts: 12.4% for Social Security (up to the annual wage base limit) and 2.9% for Medicare. Because you act as both the employer and employee, the IRS allows you to deduct half of your self-employment tax when calculating your adjusted gross income.
        </p>

        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginTop: '20px', marginBottom: '10px' }}>
          2. Maximizing Business Tax Deductions
        </h3>
        <p style={{ marginBottom: '16px' }}>
          Tracking deductible business expenses is the most effective way to legally lower your taxable income. Common deductions for remote workers and freelancers include home office expenses, high-speed internet bills, software subscriptions, computer hardware, professional liability insurance, and health insurance premiums.
        </p>

        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginTop: '20px', marginBottom: '10px' }}>
          3. Quarterly Estimated Tax Deadlines
        </h3>
        <p style={{ marginBottom: '16px' }}>
          If you expect to owe $1,000 or more in federal taxes for the year, the IRS requires you to make quarterly estimated payments in April, June, September, and January. Setting aside 25% to 30% of every client invoice into a dedicated high-yield business savings account ensures you never face underpayment penalties.
        </p>
      </article>
    </div>
  );
}
