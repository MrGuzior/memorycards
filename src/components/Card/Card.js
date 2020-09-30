import React from 'react'
import {useSelector} from 'react-redux'
import {getTurned, getValue, getTurnedCards, getVisible} from './cardSlice'
import './Card.css'

const Card = ({id, handleTurn}) => {
    const cardValue = useSelector(getValue(id))
    const turned = useSelector(getTurned(id))
    const turnedCards = useSelector(getTurnedCards)
    const visible = useSelector(getVisible(id))
    
    const handleClick = (id, value) => turnedCards.length < 2 ? handleTurn(id, value) : null

    const card = turned ? 
        <div className={`card face ${visible ?  null : ' hide '}`} >{cardValue + 1}</div> :
        <div onClick={()=>handleClick(id, cardValue)} className={`card back ${visible ?  null : ' hide '}`} >Card</div>

    return (
        <div>
            {card}
        </div>
    )
}

export default Card