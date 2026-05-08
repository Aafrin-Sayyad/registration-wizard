import React from 'react'

export default function SuccessScreen({ formData, onReset }) {
  return (
    <div style={{
      textAlign: 'center',
      padding: '2rem 1rem',
      animation: 'fadeIn 0.6s ease',
    }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes checkPop { 0% { transform: scale(0); } 60% { transform: scale(1.2); } 100% { transform: scale(1); } }
      `}</style>

      {/* Seal */}
      <div style={{
        width: 80,
        height: 80,
        margin: '0 auto 1.5rem',
        borderRadius: '50%',
        background: 'var(--green)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'checkPop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s both',
        boxShadow: '0 4px 20px rgba(26,74,46,0.3)',
      }}>
        <span style={{ fontSize: '2.2rem', color: '#fff' }}>✓</span>
      </div>

      <h2 style={{
        fontFamily: 'var(--font)',
        fontSize: '1.8rem',
        fontStyle: 'italic',
        color: 'var(--ink)',
        marginBottom: '0.5rem',
        letterSpacing: '0.02em',
      }}>
        Registration Complete
      </h2>

      <div style={{
        width: 60,
        height: 2,
        background: 'var(--gold)',
        margin: '0.8rem auto 1.2rem',
      }} />

      <p style={{
        fontFamily: 'var(--font)',
        fontSize: '1rem',
        color: 'var(--ink-light)',
        fontStyle: 'italic',
        marginBottom: '0.5rem',
      }}>
        Welcome, <strong style={{ fontStyle: 'normal', color: 'var(--ink)' }}>
          {formData.firstName} {formData.lastName}
        </strong>.
      </p>
      <p style={{
        fontFamily: 'var(--font)',
        fontSize: '0.9rem',
        color: 'var(--ink-light)',
        fontStyle: 'italic',
        marginBottom: '2rem',
      }}>
        A confirmation has been sent to <strong style={{ color: 'var(--ink)', fontStyle: 'normal' }}>{formData.email}</strong>.
      </p>

      <div style={{
        background: 'var(--parchment-dark)',
        border: '1px solid var(--border)',
        borderRadius: 2,
        padding: '1rem',
        marginBottom: '2rem',
        textAlign: 'left',
      }}>
        <p style={{
          fontFamily: 'var(--font)',
          fontSize: '0.72rem',
          fontWeight: 'bold',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--ink-light)',
          marginBottom: '0.5rem',
        }}>
          Console Output (formData):
        </p>
        <pre style={{
          fontFamily: 'Courier New, monospace',
          fontSize: '0.78rem',
          color: 'var(--green)',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-all',
        }}>
          {JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            dateOfBirth: formData.dateOfBirth,
            email: formData.email,
            password: '[REDACTED]',
          }, null, 2)}
        </pre>
      </div>

      <button
        onClick={onReset}
        style={{
          padding: '0.7rem 2rem',
          fontFamily: 'var(--font)',
          fontSize: '0.9rem',
          fontStyle: 'italic',
          letterSpacing: '0.06em',
          background: 'transparent',
          color: 'var(--ink-light)',
          border: '1.5px solid var(--border)',
          borderRadius: 2,
          cursor: 'pointer',
        }}
      >
        Start Over
      </button>
    </div>
  )
}
