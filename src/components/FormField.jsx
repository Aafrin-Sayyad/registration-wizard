import React from 'react'

export default function FormField({ label, error, required, children, hint }) {
  return (
    <div style={{ marginBottom: '1.4rem' }}>
      <label style={{
        display: 'block',
        fontFamily: 'var(--font)',
        fontSize: '0.82rem',
        fontWeight: 'bold',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--ink-light)',
        marginBottom: '0.4rem',
      }}>
        {label}
        {required && <span style={{ color: 'var(--red)', marginLeft: 3 }}>*</span>}
      </label>
      {children}
      {hint && !error && (
        <p style={{
          fontSize: '0.72rem',
          color: 'var(--ink-light)',
          marginTop: '0.3rem',
          fontStyle: 'italic',
        }}>{hint}</p>
      )}
      {error && (
        <p style={{
          fontSize: '0.75rem',
          color: 'var(--red)',
          marginTop: '0.35rem',
          fontStyle: 'italic',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
        }}>
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  )
}

export const inputStyle = (hasError) => ({
  width: '100%',
  padding: '0.65rem 0.9rem',
  fontFamily: 'var(--font)',
  fontSize: '1rem',
  color: 'var(--ink)',
  background: 'var(--parchment)',
  border: `1.5px solid ${hasError ? 'var(--red)' : 'var(--border)'}`,
  borderRadius: 2,
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  boxShadow: hasError
    ? '0 0 0 3px rgba(139,26,26,0.08)'
    : 'inset 0 1px 3px rgba(0,0,0,0.04)',
})
