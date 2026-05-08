import React, { useState } from 'react'
import ProgressBar from './components/ProgressBar'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'
import SuccessScreen from './components/SuccessScreen'

const INITIAL_DATA = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export default function App() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState(INITIAL_DATA)
  const [submitted, setSubmitted] = useState(false)

  const updateData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }))
  }

  const handleNext = (data) => {
    updateData(data)
    setStep(s => s + 1)
  }

  const handleBack = () => setStep(s => s - 1)

  const handleSubmit = () => {
    console.log('📋 Registration Form Data:', {
      firstName: formData.firstName,
      lastName: formData.lastName,
      dateOfBirth: formData.dateOfBirth,
      email: formData.email,
      password: '[REDACTED FOR SECURITY]',
    })
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData(INITIAL_DATA)
    setStep(1)
    setSubmitted(false)
  }

  const stepTitles = {
    1: 'Personal Information',
    2: 'Account Details',
    3: 'Review & Submit',
  }

  return (
    <div style={containerStyle}>
      {/* Header ornament */}
      <div style={headerStyle}>
        <div style={ornamentLine} />
        <h1 style={titleStyle}>
          {submitted ? 'Account Created' : 'New Account Registration'}
        </h1>
        <p style={subtitleStyle}>
          {submitted ? 'Your journey begins.' : 'Kindly complete all fields to proceed.'}
        </p>
        <div style={ornamentLine} />
      </div>

      {!submitted && <ProgressBar currentStep={step} />}

      {!submitted && (
        <h2 style={stepTitleStyle}>
          {stepTitles[step]}
        </h2>
      )}

      <div style={formAreaStyle}>
        {submitted ? (
          <SuccessScreen formData={formData} onReset={handleReset} />
        ) : (
          <>
            {step === 1 && (
              <StepOne formData={formData} onNext={handleNext} />
            )}
            {step === 2 && (
              <StepTwo formData={formData} onNext={handleNext} onBack={handleBack} />
            )}
            {step === 3 && (
              <StepThree formData={formData} onBack={handleBack} onSubmit={handleSubmit} />
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <p style={footerStyle}>
        All information is kept strictly confidential.
      </p>
    </div>
  )
}

/* ── Styles ───────────────────────────────────────────────── */

const containerStyle = {
  width: '100%',
  maxWidth: 560,
  background: 'var(--parchment)',
  border: '1px solid var(--border)',
  borderRadius: 4,
  padding: '2.5rem 2.5rem 1.5rem',
  boxShadow:
    '0 2px 8px var(--shadow), 0 20px 60px rgba(26,18,9,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
  position: 'relative',
}

const headerStyle = {
  textAlign: 'center',
  marginBottom: '2rem',
}

const ornamentLine = {
  height: 1,
  background: 'linear-gradient(90deg, transparent, var(--border), var(--gold), var(--border), transparent)',
  margin: '0.6rem 0',
}

const titleStyle = {
  fontFamily: 'var(--font)',
  fontSize: '1.6rem',
  fontStyle: 'italic',
  letterSpacing: '0.04em',
  color: 'var(--ink)',
  marginBottom: '0.25rem',
}

const subtitleStyle = {
  fontFamily: 'var(--font)',
  fontSize: '0.82rem',
  color: 'var(--ink-light)',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
}

const stepTitleStyle = {
  fontFamily: 'var(--font)',
  fontSize: '1rem',
  fontWeight: 'bold',
  letterSpacing: '0.04em',
  color: 'var(--gold)',
  marginBottom: '1.2rem',
  paddingBottom: '0.6rem',
  borderBottom: '1px solid var(--parchment-dark)',
}

const formAreaStyle = {
  minHeight: 280,
}

const footerStyle = {
  fontFamily: 'var(--font)',
  fontSize: '0.7rem',
  fontStyle: 'italic',
  color: 'var(--ink-light)',
  textAlign: 'center',
  marginTop: '1.5rem',
  letterSpacing: '0.04em',
  opacity: 0.7,
}
