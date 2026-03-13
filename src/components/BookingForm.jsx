import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Booking() {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const initialRoom = params.get('room') || 'standard'

    const [name, setName] = useState('')
    const [room, setRoom] = useState(initialRoom)
    const [date, setDate] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const booking = { name, room, date }
        localStorage.setItem('currentBooking', JSON.stringify(booking))
        setSubmitted(true)
    }

    useEffect(() => {
        if (initialRoom) setRoom(initialRoom)
    }, [initialRoom])

    if (submitted) {
        return (
            <div className="booking-section">
                <h3>Bokningen är bekräftad 🎉</h3>
                <p>Tack {name}! Din bokning är registrerad.</p>
            </div>
        )
    }

    return (
        <div className="booking-section">
            <h2 id="booking-title">Boka ditt rum</h2>
            <p className="booking-intro">
                Fyll i dina uppgifter nedan för att boka ditt rum hos Hexaspot.
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Namn</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="room">Välj rum</label>
                <select id="room-select" value={room} onChange={(e) => setRoom(e.target.value)}>
                    <option value="standard">Standard</option>
                    <option value="deluxe">Deluxe</option>
                    <option value="suite">Suite</option>
                </select>

                <label htmlFor="date">Datum</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />

                <button type="submit" className="hex-button">
                    Boka
                </button>
            </form>
        </div>
    )
}