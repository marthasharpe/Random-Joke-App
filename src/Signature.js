import React from 'react';
import './Signature.css';

const Signature = () => {
    return (
        <div className="footer">
            <p className="signature">Coded by Martha Sharpe</p>
            <div className="links">
                <a
                    className="link"
                    href="https://www.linkedin.com/in/marthasharpe2020/"
                    target="blank"
                >
                    <img
                        alt="LinkedIn icon"
                        className="icon"
                        src="http://www.vectorico.com/download/social_media/LinkedIn-Icon.png"
                    />
                </a>
                <a
                    className="link"
                    href="https://github.com/marthasharpe/card-carousel-app"
                    target="blank"
                >
                    <img
                        alt="GitHub icon"
                        className="icon"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Gq6XProhzLMM4YE7gYwI3OW5JXoXN3A58lelj5iPS6zsgRP5&s"
                    />
                </a>
            </div>
        </div>
    )
}

export default Signature;