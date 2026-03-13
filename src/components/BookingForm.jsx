import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function BookingForm() {
    const [searchParams] = useSearchParams()
    const [room, setRoom] = useState('')
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [confirmed, setConfirmed] = useState(false)

    useEffect(() => {
        const roomParam = searchParams.get('room')
        if (roomParam) setRoom(roomParam)
    }, [searchParams])

    const handleSubmit = (e) => {
        e.preventDefault()
        const booking = { name, room, date }
        localStorage.setItem('currentBooking', JSON.stringify(booking))
        setConfirmed(true)
    }

    if (confirmed) {
        return (
            <div>
                <h3>Bokningen är bekräftad.</h3>
                <p>Tack {name}! Din bokning är registrerad.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Namn</label>
            <input value={name} onChange={e => setName(e.target.value)} required />

            <label>Välj rum</label>
            <select value={room} onChange={e => setRoom(e.target.value)}>
                <option value="standard">Standard</option>
                <option value="deluxe">Deluxe</option>
                <option value="suite">Suite</option>
            </select>

            <label>Datum</label>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} required />

            <button type="submit">Boka</button>
        </form>
    )
}