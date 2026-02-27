import React from 'react'
import image from '../assets/eru.jpg'
import './Pcard.css'

const Pcard = (props) =>{
    return(
        <div className="product_box">
        <img src={props.image} alt=""/>
        <div className="description">
            <h2>{props.name}</h2>
            <p className='price'>{props.dis_price}<span>{props.price}</span></p>
            <p className='location'>{props.location}</p>
            <button className='btn'>Order now</button>
        </div>
        </div>

    )

}
export default Pcard