import React from 'react'
import { useNavigate } from 'react-router-dom'

const rooms = [
    { name: 'Standard', img: '/standard-room.png', key: 'standard', desc: 'Bekvämt dubbelrum med allt du behöver för en fin vistelse.' },
    { name: 'Deluxe', img: '/deluxe-room.png', key: 'deluxe', desc: 'Rymligare rum med extra komfort och moderna bekvämligheter.' },
    { name: 'Suite', img: '/suite-room.png', key: 'suite', desc: 'Lyxig svit med gott om utrymme, premiumkomfort och stilren design.' }
]

export default function Home() {
    const navigate = useNavigate()

    const handleBook = (roomKey) => {
        navigate(`/booking?room=${roomKey}`)
    }

    return (
        <div className="home">
            <p className="intro-text">
                Varje rum erbjuder en balanserad kombination av lyx, komfort och modern design.
            </p>

            <div id="roomCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {rooms.map((room, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={room.key}>
                            <div className="hex-grid">
                                <div className="hex hex-image">
                                    <img src={room.img} alt={room.name} />
                                </div>
                                <div className="hex hex-book" onClick={() => handleBook(room.key)}>
                                    Boka nu
                                </div>
                                <div className="hex hex-info">
                                    <h2>{room.name}</h2>
                                    <p>{room.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#roomCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#roomCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    )
}