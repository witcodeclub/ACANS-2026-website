'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { officialPaymentDetails, officialRegistrationFees } from '../lib/paymentDetails';

type OfficialPaymentDetailsProps = {
  title?: string;
  actionHref?: string;
  actionLabel?: string;
  showAction?: boolean;
};

export default function OfficialPaymentDetails({
  title = 'Complete Your Registration Payment',
  actionHref = '#payment-report',
  actionLabel = 'Submit Payment Report',
  showAction = true,
}: OfficialPaymentDetailsProps) {
  const [copyMessage, setCopyMessage] = useState('');

  const copyAccountNumber = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard access is unavailable.');
      await navigator.clipboard.writeText(officialPaymentDetails.accountNumber);
      setCopyMessage('Account number copied.');
    } catch {
      setCopyMessage('Copy is unavailable. Select the account number to copy it.');
    }
  };

  return (
    <section
      className="card"
      aria-labelledby="official-payment-details-title"
      style={{
        margin: '1rem 0',
        padding: 'clamp(1rem, 3vw, 1.5rem)',
        border: '1px solid #dbeafe',
        borderRadius: '10px',
        backgroundColor: '#f8fafc',
      }}
    >
      <h2 id="official-payment-details-title" style={{ color: '#0f294a', marginBottom: '0.4rem' }}>
        {title}
      </h2>
      <h3 style={{ color: '#334155', fontSize: '1rem', marginBottom: '1rem' }}>
        Registration Fee Payment – Important Instructions
      </h3>
      <p style={{ color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>
        Participants must follow these steps to complete registration and have their fee payment verified.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.25rem', alignItems: 'start' }}>
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
          <Image
            src="/images/payment/official-payment-qr.png"
            alt="Official ACANS 2026 registration fee payment QR code"
            width={440}
            height={440}
            unoptimized
            style={{ display: 'block', width: 'min(100%, 360px)', height: 'auto', margin: '0 auto', background: '#ffffff' }}
          />
          <p style={{ color: '#475569', fontSize: '0.85rem', margin: '0.75rem 0 0' }}>
            Scan with Google Pay, PhonePe, Paytm, BHIM, or your banking UPI app.
          </p>
        </div>

        <div>
          <h4 style={{ color: '#0f294a', marginBottom: '0.5rem' }}>Official registration fees</h4>
          <ul style={{ paddingLeft: '1.25rem', margin: '0 0 1rem', color: '#334155', lineHeight: 1.7 }}>
            {officialRegistrationFees.map(fee => (
              <li key={fee.category}>{fee.category}: <strong>₹{fee.amount.toLocaleString('en-IN')}</strong></li>
            ))}
          </ul>

          <h4 style={{ color: '#0f294a', marginBottom: '0.5rem' }}>Official bank account</h4>
          <div style={{ color: '#334155', lineHeight: 1.7, overflowWrap: 'anywhere' }}>
            <div><strong>Account Holder:</strong> {officialPaymentDetails.accountHolderName}</div>
            <div><strong>Account Number:</strong> {officialPaymentDetails.accountNumber}</div>
            <div><strong>IFSC Code:</strong> {officialPaymentDetails.ifscCode}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
            <button type="button" onClick={copyAccountNumber} className="btn btn-primary" style={{ minHeight: '44px' }}>
              Copy Account Number
            </button>
            <span role="status" aria-live="polite" style={{ color: '#475569', fontSize: '0.85rem' }}>{copyMessage}</span>
          </div>
        </div>
      </div>

      <ol style={{ paddingLeft: '1.35rem', color: '#334155', lineHeight: 1.65, margin: '1.25rem 0' }}>
        <li><strong>Create an account.</strong> Register your participant profile to generate a unique registration reference ID (for example, REG-xxxx).</li>
        <li><strong>Check your registration fee.</strong> Select the applicable registration category and confirm the official fee shown on the website.</li>
        <li><strong>Make payment.</strong> Use the QR code or bank details above and pay only the amount for your category. Keep your transaction confirmation.</li>
        <li><strong>Submit your payment details.</strong> In your Participant Dashboard, submit the payer UPI ID and 12-digit UPI UTR / Transaction ID.</li>
        <li><strong>Wait for administrative verification.</strong> The organizing committee checks the UTR against official bank records. Your status changes to Confirmed only after successful verification.</li>
      </ol>

      <p style={{ color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>
        After paying, sign in to your Participant Dashboard to report the payment and check its verification status. A QR scan or payment report does not itself confirm registration.
      </p>
      {showAction && (
        <Link href={actionHref} className="btn btn-primary" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
          {actionLabel}
        </Link>
      )}
    </section>
  );
}
