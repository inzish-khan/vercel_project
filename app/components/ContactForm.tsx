'use client'

import { FormEvent, useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setName('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className={styles.container}>
      {submitted ? (
        <div className={styles.confirmation}>
          <h2>Thank you!</h2>
          <p>Your form has been submitted successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1>Contact Form</h1>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
            />
          </div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      )}
    </div>
  )
}
