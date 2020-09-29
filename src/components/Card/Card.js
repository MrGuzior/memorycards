import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
    getTurned,
    getValue,
    getTurnedCards
} from './cardSlice'

import './Card.css'



const Card = ({id, handleTurn}) => {
    const cardValue = useSelector(getValue(id))
    const dispatch = useDispatch();
    const turned = useSelector(getTurned(id))
    const turnedCards = useSelector(getTurnedCards)

    let card;
    const face = <div onClick={()=>handleClick(id)} className='card face' >{cardValue + 1}</div>;
    const back = <div onClick={()=>handleClick(id)} className='card back' >Card</div>;
    card = turned ? face : back;

    const handleClick = id => turnedCards.length < 2 ? handleTurn(id) : null

    return (
        <div>
            {card}
        </div>
    )
}

export default Card