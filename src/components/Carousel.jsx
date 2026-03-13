import { useState } from "react";

function Carousel({ cards }) {
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    const next = () => setIndex((prevIndex) => (prevIndex + 1) % cards.length);

    return (
        <div className="carousel-container">
            {cards.map((card, i) => (
                <div
                    key={i}
                    className={`carousel-card ${i === index ? "active" : i === (index - 1 + cards.length) % cards.length ? "prev" : i === (index + 1) % cards.length ? "next" : ""
                        }`}
                >
                    {card}
                </div>
            ))}

            <button id="prev" className="carousel-control-prev" onClick={prev}>
                &lt;
            </button>
            <button id="next" className="carousel-control-next" onClick={next}>
                &gt;
            </button>
        </div>
    );
}

export default Carousel;