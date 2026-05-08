# Prompts.md — Registration Wizard


## 📌 Project Goal

To build a **multi-step registration form** that mimics real-world onboarding systems used in platforms like banking apps or SaaS tools.

---

## 💡 Initial Thought Process

I started by asking myself:

- How do real apps avoid long forms?
- How can I break a large form into smaller steps?
- How do I retain user data when switching between steps?

This led me to the concept of a **Form Wizard**.

---

## ⚙️ Key Design Decisions

### 1. Why use a Parent State?
I decided to store all form data in a **single parent component** because:
- It avoids losing data when navigating between steps
- Makes the flow predictable and easier to debug

---

### 2. Why Split into Components?
Each step was separated into its own component:
- Improves readability
- Makes the code modular
- Easier to maintain and scale

---

### 3. Handling Navigation
I used a `step` state variable:

```js
const [step, setStep] = useState(1);
