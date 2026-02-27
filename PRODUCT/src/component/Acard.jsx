import React from 'react'
import Pcard from './Pcard'
import eru from '../assets/eru.jpg'
import staek from '../assets/staek.jpg'
import burger from '../assets/burger.jpg'

const Acard = () =>{

    return(
        <div className="product">
            <Pcard
            image={eru}
            name="Eru"
            dis_price="XAF1000"
            price="XAF2000"
            location="Location:Buea"
            />
            <Pcard
            image={staek}
            name="Staek"
            dis_price="XAF1500"
            price="XAF3000"
            location="Location:Buea"
            />
            <Pcard
            image={burger}
            name="Burger"
            dis_price="XAF1500"
            price="XAF2000"
            location="Location:Buea"
            />
        </div>

    )
    
}
export default Acard