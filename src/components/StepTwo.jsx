import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { step2Schema } from '../schemas/formSchema'
import FormField, { inputStyle } from './FormField'

function EyeIcon({ open }) {
  return open ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  )
}

function PasswordStrength({ password }) {
  if (!password) return null
  let strength = 0
  if (password.length >= 8) strength++
  if (/[A-Z]/.test(password)) strength++
  if (/[0-9]/.test(password)) strength++
  if (/[^A-Za-z0-9]/.test(password)) strength++

  const labels = ['', 'Weak', 'Fair', 'Good', 'Strong']
  const colors = ['', 'var(--red)', '#b8860b', '#6b8e23', 'var(--green)']

  return (
    <div style={{ marginTop: '0.5rem' }}>
      <div style={{ display: 'flex', gap: 4, marginBottom: '0.25rem' }}>
        {[1,2,3,4].map(i => (
          <div key={i} style={{
            flex: 1,
            height: 3,
            borderRadius: 2,
            background: i <= strength ? colors[strength] : 'var(--parchment-dark)',
            transition: 'background 0.3s',
          }} />
        ))}
      </div>
      {strength > 0 && (
        <span style={{
          fontSize: '0.7rem',
          color: colors[strength],
          fontStyle: 'italic',
        }}>
          Password strength: {labels[strength]}
        </span>
      )}
    </div>
  )
}

export default function StepTwo({ formData, onNext, onBack }) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      email: formData.email || '',
      password: formData.password || '',
      confirmPassword: formData.confirmPassword || '',
    },
    mode: 'onChange',
  })

  const passwordValue = watch('password')
  const onSubmit = (data) => onNext(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormField label="Email Address" required error={errors.email?.message}>
        <input
          type="email"
          placeholder="e.g. william@example.com"
          style={inputStyle(!!errors.email)}
          {...register('email')}
          onFocus={e => e.target.style.borderColor = 'var(--gold)'}
          onBlur={e => e.target.style.borderColor = errors.email ? 'var(--red)' : 'var(--border)'}
        />
      </FormField>

      <FormField
        label="Password"
        required
        error={errors.password?.message}
        hint="Min. 8 chars · One uppercase · One number · One special character"
      >
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Create a strong password"
            style={{ ...inputStyle(!!errors.password), paddingRight: '2.8rem' }}
            {...register('password')}
            onFocus={e => e.target.style.borderColor = 'var(--gold)'}
            onBlur={e => e.target.style.borderColor = errors.password ? 'var(--red)' : 'var(--border)'}
          />
          <button
            type="button"
            onClick={() => setShowPassword(p => !p)}
            style={eyeBtnStyle}
            title={showPassword ? 'Hide password' : 'Show password'}
          >
            <EyeIcon open={showPassword} />
          </button>
        </div>
        <PasswordStrength password={passwordValue} />
      </FormField>

      <FormField label="Confirm Password" required error={errors.confirmPassword?.message}>
        <div style={{ position: 'relative' }}>
          <input
            type={showConfirm ? 'text' : 'password'}
            placeholder="Repeat your password"
            style={{ ...inputStyle(!!errors.confirmPassword), paddingRight: '2.8rem' }}
            {...register('confirmPassword')}
            onFocus={e => e.target.style.borderColor = 'var(--gold)'}
            onBlur={e => e.target.style.borderColor = errors.confirmPassword ? 'var(--red)' : 'var(--border)'}
          />
          <button
            type="button"
            onClick={() => setShowConfirm(p => !p)}
            style={eyeBtnStyle}
            title={showConfirm ? 'Hide password' : 'Show password'}
          >
            <EyeIcon open={showConfirm} />
          </button>
        </div>
      </FormField>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
        <button type="button" onClick={onBack} style={backBtnStyle}>
          ← Back
        </button>
        <button type="submit" disabled={!isValid} style={nextBtnStyle(!isValid)}>
          Continue →
        </button>
      </div>
    </form>
  )
}

const eyeBtnStyle = {
  position: 'absolute',
  right: '0.7rem',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: 'var(--ink-light)',
  padding: '0.2rem',
  display: 'flex',
  alignItems: 'center',
}

const backBtnStyle = {
  padding: '0.7rem 1.6rem',
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

const nextBtnStyle = (disabled) => ({
  padding: '0.7rem 2rem',
  fontFamily: 'var(--font)',
  fontSize: '0.95rem',
  fontStyle: 'italic',
  letterSpacing: '0.06em',
  background: disabled ? 'var(--parchment-dark)' : 'var(--gold)',
  color: disabled ? 'var(--ink-light)' : '#fff',
  border: `1.5px solid ${disabled ? 'var(--border)' : 'var(--gold)'}`,
  borderRadius: 2,
  cursor: disabled ? 'not-allowed' : 'pointer',
  transition: 'all 0.2s',
  opacity: disabled ? 0.6 : 1,
})
