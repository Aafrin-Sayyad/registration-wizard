import React from 'react'

function ReviewRow({ label, value }) {
  return (
    <div style={{
      display: 'flex',
      borderBottom: '1px solid var(--parchment-dark)',
      padding: '0.7rem 0',
    }}>
      <span style={{
        width: '45%',
        fontSize: '0.78rem',
        fontWeight: 'bold',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--ink-light)',
      }}>
        {label}
      </span>
      <span style={{
        flex: 1,
        fontSize: '1rem',
        color: 'var(--ink)',
        fontStyle: value === '••••••••' ? 'normal' : 'normal',
        letterSpacing: value === '••••••••' ? '0.2em' : '0',
      }}>
        {value}
      </span>
    </div>
  )
}

export default function StepThree({ formData, onBack, onSubmit }) {
  const formatDate = (dateStr) => {
    if (!dateStr) return '—'
    const d = new Date(dateStr + 'T00:00:00')
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div>
      <p style={{
        fontSize: '0.9rem',
        color: 'var(--ink-light)',
        fontStyle: 'italic',
        marginBottom: '1.5rem',
        borderLeft: '3px solid var(--gold)',
        paddingLeft: '0.8rem',
      }}>
        Please review your information carefully before submitting.
      </p>

      {/* Section: Personal */}
      <h3 style={sectionHeading}>I. Personal Information</h3>
      <div style={sectionBox}>
        <ReviewRow label="First Name" value={formData.firstName || '—'} />
        <ReviewRow label="Last Name" value={formData.lastName || '—'} />
        <ReviewRow label="Date of Birth" value={formatDate(formData.dateOfBirth)} />
      </div>

      {/* Section: Account */}
      <h3 style={{ ...sectionHeading, marginTop: '1.5rem' }}>II. Account Details</h3>
      <div style={sectionBox}>
        <ReviewRow label="Email" value={formData.email || '—'} />
        <ReviewRow label="Password" value="••••••••" />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2.5rem', gap: '1rem' }}>
        <button type="button" onClick={onBack} style={backBtnStyle}>
          ← Revise
        </button>
        <button type="button" onClick={onSubmit} style={submitBtnStyle}>
          Submit Registration
        </button>
      </div>
    </div>
  )
}

const sectionHeading = {
  fontFamily: 'var(--font)',
  fontSize: '0.85rem',
  fontWeight: 'bold',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--gold)',
  marginBottom: '0.5rem',
}

const sectionBox = {
  border: '1px solid var(--border)',
  borderRadius: 2,
  padding: '0 1rem',
  background: 'rgba(255,255,255,0.4)',
}

const backBtnStyle = {
  padding: '0.75rem 1.6rem',
  fontFamily: 'var(--font)',
  fontSize: '0.95rem',
  fontStyle: 'italic',
  letterSpacing: '0.06em',
  background: 'transparent',
  color: 'var(--ink-light)',
  border: '1.5px solid var(--border)',
  borderRadius: 2,
  cursor: 'pointer',
}

const submitBtnStyle = {
  padding: '0.75rem 2.2rem',
  fontFamily: 'var(--font)',
  fontSize: '0.95rem',
  fontStyle: 'italic',
  letterSpacing: '0.06em',
  background: 'var(--green)',
  color: '#fff',
  border: '1.5px solid var(--green)',
  borderRadius: 2,
  cursor: 'pointer',
  transition: 'all 0.2s',
}
