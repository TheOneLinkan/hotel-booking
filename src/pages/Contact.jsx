import React, { useState } from 'react'

export default function Contact() {
    const [submitted, setSubmitted] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Kan logga meddelandet i console om du vill
        console.log({ name, email, message })
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <div className="contact-section">
                <h3>Tack för ditt meddelande!</h3>
                <p>Vi återkommer till dig inom kort.</p>
            </div>
        )
    }

    return (
        <div className="contact-section">
            <h2>Kontakta oss</h2>
            <p className="contact-intro">
                Har du frågor om rum, bokningar eller vistelsen? Skicka ett meddelande så återkommer vi
                så snart som möjligt.
            </p>
            <form onSubmit={handleSubmit}>
                <label>Namn</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

                <label>E-post</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Meddelande</label>
                <textarea rows="4" value={message} onChange={(e) => setMessage(e.target.value)} required />

                <button type="submit" className="hex-button">
                    Skicka
                </button>
            </form>
        </div>
    )
}