import React from 'react';
import './Card.css';


const Card = (props) => {
        return (
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                {/* because of tachyon, ^ abbreviations can be used:
                tc: text center
                bg: background
                dib: the div (what does the b stand for?)
                br3: the border, likely 3 pixels?
                pa3: padding of 3
                ma2: margin of 2
                grow: an animation
                bw2: something related to the shadow
                shadow 5: also related to shadow
                */}
            {/* <h1>RoboFriends</h1> */}
                <img alt='Jane Doe' src={`https://robohash.org/rando${props.id}?200x200`} />
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.email}</p>
                </div>
            </div>
        )
    }

// alternatively to having props.id, props.name and props.email, I can insert a line above the return statement like this: **** const {id, name, email}=props; **** then I dont have to write {props.name} etc. where I need it but can instead write {name} --- that's called destructuring. 
export default Card; 
