# Prompts.md — Registration Wizard

This file documents the AI prompts used while building this project, as required by the submission guidelines.

---

## Prompt 1 — Project Scaffold
**Prompt:** "Build a Level 3 multi-step registration wizard in React using react-hook-form and Zod. Include 3 steps: Personal Info (firstName, lastName, dateOfBirth), Account Details (email, password, confirmPassword), and a Review & Submit step."

**What it produced:** Full project scaffold including Vite config, component structure, and Zod schemas.

---

## Prompt 2 — Zod Schema Validation
**Prompt:** "Write Zod schemas for: Step 1 validating firstName/lastName (letters only, min 2 chars) and dateOfBirth (must be 18+ years old). Step 2 validating email with regex, password (min 8 chars, 1 uppercase, 1 number, 1 special char), and confirmPassword matching password."

**What it produced:** `formSchema.js` with `step1Schema` and `step2Schema` using `.refine()` for cross-field validation.

---

## Prompt 3 — Show/Hide Password Toggle
**Prompt:** "Add a show/hide password toggle using useState. When showPassword is true, set input type='text', otherwise 'password'. Show an eye SVG icon inside the input field."

**What it produced:** The EyeIcon SVG component and toggle logic in StepTwo.jsx.

---

## Prompt 4 — Password Strength Meter
**Prompt:** "Create a password strength component that checks 4 criteria: length >= 8, has uppercase, has number, has special character. Show 4 colored bar segments and a label (Weak/Fair/Good/Strong)."

**What it produced:** The PasswordStrength component with dynamic color bars.

---

## Prompt 5 — Progress Bar
**Prompt:** "Build a visual progress bar showing the 3 wizard steps as numbered circles with labels below. Fill a horizontal bar proportionally. Completed steps show a checkmark."

**What it produced:** ProgressBar.jsx with animated fill and step indicators.

---

## Prompt 6 — UI Styling
**Prompt:** "Style the entire form using Times New Roman font, a parchment/cream color scheme with gold accents. Use CSS variables. Make it look elegant and editorial."

**What it produced:** The CSS variable system in index.css and inline styles throughout components.
