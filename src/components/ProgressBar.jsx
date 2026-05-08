import React from 'react'

const STEPS = ['Personal Info', 'Account Details', 'Review & Submit']

export default function ProgressBar({ currentStep }) {
  const pct = ((currentStep - 1) / (STEPS.length - 1)) * 100

  return (
    <div style={{ marginBottom: '2.5rem' }}>
      {/* Step labels */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '0.75rem',
      }}>
        {STEPS.map((label, i) => {
          const stepNum = i + 1
          const active = stepNum === currentStep
          const done = stepNum < currentStep
          return (
            <div key={label} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.4rem',
              flex: 1,
            }}>
              <div style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                border: `2px solid ${done ? 'var(--green)' : active ? 'var(--gold)' : 'var(--border)'}`,
                background: done ? 'var(--green)' : active ? 'var(--gold-pale)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem',
                fontFamily: 'var(--font)',
                fontWeight: done ? 'bold' : 'normal',
                color: done ? '#fff' : active ? 'var(--gold)' : 'var(--ink-light)',
                transition: 'all 0.3s ease',
              }}>
                {done ? '✓' : stepNum}
              </div>
              <span style={{
                fontSize: '0.7rem',
                fontFamily: 'var(--font)',
                fontStyle: 'italic',
                color: active ? 'var(--gold)' : 'var(--ink-light)',
                textAlign: 'center',
                whiteSpace: 'nowrap',
                letterSpacing: '0.02em',
              }}>
                {label}
              </span>
            </div>
          )
        })}
      </div>

      {/* Track */}
      <div style={{
        height: 4,
        background: 'var(--parchment-dark)',
        borderRadius: 2,
        overflow: 'hidden',
        border: '1px solid var(--border)',
      }}>
        <div style={{
          height: '100%',
          width: `${pct}%`,
          background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
          borderRadius: 2,
          transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)',
        }} />
      </div>

      <p style={{
        textAlign: 'right',
        fontSize: '0.72rem',
        color: 'var(--ink-light)',
        marginTop: '0.4rem',
        fontStyle: 'italic',
        letterSpacing: '0.04em',
      }}>
        Step {currentStep} of {STEPS.length}
      </p>
    </div>
  )
}
