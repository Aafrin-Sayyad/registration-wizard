# 🚀 Multi-Step Registration Wizard

## 📌 Project Overview

This project is a **Multi-Step Registration Form (Wizard)** built using React.  
Instead of overwhelming users with a long form, the process is broken into **three simple steps**, improving user experience and data handling.

The application demonstrates **controlled components, state management, validation, and modern UX practices** used in real-world applications like banking or SaaS onboarding.

---

## 🎯 Features

### ✅ Step-Based Form Flow
- **Step 1:** Personal Information (First Name, Last Name, Date of Birth)
- **Step 2:** Account Details (Email, Password, Confirm Password)
- **Step 3:** Review & Submit (Preview all entered data)

---

### 🔁 Navigation
- Smooth **Next** and **Back** navigation
- Data is preserved across steps using centralized state

---

### ⚡ State Management
- Implemented using React's `useState`
- All form data is managed in a **parent component (Wizard)**

---

### 🛡️ Validation (Level 2 Enhancements)
- Real-time input validation
- Email format validation using Regex
- Password minimum length (8 characters)
- Confirm password match check
- Error messages displayed dynamically

---

### 🚫 UX Improvements
- Disabled "Next" button until inputs are valid
- Show/Hide password toggle
- Progress indicator (Step X of 3)

---

### 📤 Submission
- Final data is displayed in review step
- On submit:
  - Data is logged to console
  - Success screen is shown

---

## 🧠 Key Concepts Used

- Controlled Components
- Lifting State Up
- Conditional Rendering
- Form Validation
- Regex Patterns
- Component Reusability

---

## 🏗️ Project Structure
