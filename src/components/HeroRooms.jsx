import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const rooms = [
    { name: 'Standard', img: 'standard-room.png', key: 'standard', desc: 'Bekvämt dubbelrum med allt du behöver för en fin vistelse.' },
    { name: 'Deluxe', img: 'deluxe-room.png', key: 'deluxe', desc: 'Rymligare rum med extra komfort och moderna bekvämligheter.' },
    { name: 'Suite', img: 'suite-room.png', key: 'suite', desc: 'Lyxig svit med gott om utrymme, premiumkomfort och stilren design.' }
]

export default function Home() {
    const navigate = useNavigate()

    const handleBook = (room) => {
        navigate(`/booking?room=${room}`)
    }

    return (
        <div className="home">
            <p className="intro-text">
                Varje rum erbjuder en balanserad kombination av lyx, komfort och modern design.
            </p>

            <div className="hex-grid">
                {rooms.map((room, index) => (
                    <div className="hex-grid" key={index}>
                        <div className="hex hex-image">
                            <img src={room.img} alt={room.name} />
                        </div>
                        <div className="hex hex-book" onClick={() => handleBook(room.key)}>
                            Boka nu
                        </div>
                        <div className="he hex-info">
                            <h2>{room.name}</h2>
                            <p>{room.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}