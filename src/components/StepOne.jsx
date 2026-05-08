import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { step1Schema } from '../schemas/formSchema'
import FormField, { inputStyle } from './FormField'

export default function StepOne({ formData, onNext }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      firstName: formData.firstName || '',
      lastName: formData.lastName || '',
      dateOfBirth: formData.dateOfBirth || '',
    },
    mode: 'onChange',
  })

  const onSubmit = (data) => onNext(data)

  // Max date: 18 years ago
  const maxDate = (() => {
    const d = new Date()
    d.setFullYear(d.getFullYear() - 18)
    return d.toISOString().split('T')[0]
  })()

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1rem' }}>
        <FormField label="First Name" required error={errors.firstName?.message}>
          <input
            type="text"
            placeholder="e.g. William"
            style={inputStyle(!!errors.firstName)}
            {...register('firstName')}
            onFocus={e => e.target.style.borderColor = 'var(--gold)'}
            onBlur={e => e.target.style.borderColor = errors.firstName ? 'var(--red)' : 'var(--border)'}
          />
        </FormField>

        <FormField label="Last Name" required error={errors.lastName?.message}>
          <input
            type="text"
            placeholder="e.g. Shakespeare"
            style={inputStyle(!!errors.lastName)}
            {...register('lastName')}
            onFocus={e => e.target.style.borderColor = 'var(--gold)'}
            onBlur={e => e.target.style.borderColor = errors.lastName ? 'var(--red)' : 'var(--border)'}
          />
        </FormField>
      </div>

      <FormField
        label="Date of Birth"
        required
        error={errors.dateOfBirth?.message}
        hint="You must be at least 18 years of age"
      >
        <input
          type="date"
          max={maxDate}
          style={{ ...inputStyle(!!errors.dateOfBirth), colorScheme: 'light' }}
          {...register('dateOfBirth')}
          onFocus={e => e.target.style.borderColor = 'var(--gold)'}
          onBlur={e => e.target.style.borderColor = errors.dateOfBirth ? 'var(--red)' : 'var(--border)'}
        />
      </FormField>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
        <button
          type="submit"
          disabled={!isValid}
          style={btnStyle(!isValid)}
        >
          Continue →
        </button>
      </div>
    </form>
  )
}

const btnStyle = (disabled) => ({
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
