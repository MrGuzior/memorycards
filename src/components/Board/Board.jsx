import React, {useState} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {
    addCard,
    clearCards,
    turn,
    setTurnedCards,
    clearTurnedCards,
    getTurnedCards
} from '../Card/cardSlice'

import Card from '../Card/Card'
import './Board.css'


const Board = () => {
    const dispatch = useDispatch();
    const turnedCards = useSelector(getTurnedCards)
    const cardArray = count => Array.from(Array(count).keys())

    const handleTurn = (id) => {
        if(turnedCards[0] !== id){
            dispatch(turn(id))
            dispatch(setTurnedCards(id))
        }
    }
    
    if(turnedCards.length === 2){
        setTimeout(()=>{
            turnedCards.forEach(card => dispatch(turn(card)))
            dispatch(clearTurnedCards())
        },1500)
    }
    
    const createCards = cardArray(10).map((card, index) => {
        dispatch(addCard({
            id:index,
            value: index
        }))
        return <Card key={index} id={index} handleTurn={handleTurn}/>
    })
    
    return (
        <div className='game_board'>
            {createCards}
        </div>
    )
}


export default Board