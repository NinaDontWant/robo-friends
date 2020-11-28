import React from 'react';
import './Card.css';

class Card extends React.Component{
    render() {
        return (
            <div>
                <img alt='Jane Doe' src='https://robohash.org/rando' />
                <div>
                    <h2>Jane Doe</h2>
                    <p>email.address@gmail.com</p>
                </div>
            </div>
        )
    }
}

export default Card; 
