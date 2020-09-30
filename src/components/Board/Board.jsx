import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
    addCard,
    turn,
    setTurnedCards,
    clearTurnedCards,
    getTurnedCards,
    setVisible
} from '../Card/cardSlice'
import Card from '../Card/Card'
import './Board.css'

const Board = () => {
    const dispatch = useDispatch();
    const turnedCards = useSelector(getTurnedCards)
    const cardArray = count => Array.from(Array(count).keys()).copyWithin(count/2,0,count/2).sort(() => Math.random() - 0.5)
    
    const handleTurn = (id, value) => {
            dispatch(turn(id))
            dispatch(setTurnedCards({id,value}))
    }

    const createCards = cardArray(10).map((card, index) => {
        dispatch(addCard({
            id:index,
            value: card
        }))
        return <Card key={index} id={index} handleTurn={handleTurn}/>
    })
    
    if(turnedCards.length === 2){
        if(turnedCards[0].value === turnedCards[1].value){
            turnedCards.map(card=> dispatch(setVisible(card.id)))
        }
        setTimeout(()=>{
            turnedCards.forEach(card => dispatch(turn(card.id)))
            dispatch(clearTurnedCards())
        },1000)
    }
    
    return (
        <div className='game_board'>
            {createCards}
        </div>
    )
}

export default Board