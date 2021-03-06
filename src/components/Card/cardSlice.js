import {createSlice} from '@reduxjs/toolkit'

export const cardSlice = createSlice({
    name: 'card',
    initialState: {
        cards: [],
        turnedCards: []
    },
    reducers: {
        addCard: (state, action) => {
            const {id, value} = action.payload
            state.cards.push({id,value,visible:true,turned: false})
        },
        turn: (state, action) => {
                const id = action.payload
                state.cards[id].turned = !state.cards[id].turned
        },
        setTurnedCards: (state, action) => {
            state.turnedCards = [...state.turnedCards, {id:action.payload.id, value:action.payload.value}]
        },
        clearTurnedCards: (state) => {
            state.turnedCards = []
        },
        setValue: (state, action) => {
            state.value = action.payload
        },
        setVisible: (state, action) => {
            const id = action.payload
            state.cards[id].visible = false
        },
        clearCards: (state) => {
            state.cards = []
        }
    }
})

export const {addCard,clearCards,turn, setValue, setTurnedCards, clearTurnedCards, setVisible} = cardSlice.actions

export const getValue = id => state => {
    return state.card.cards.filter(card => card.id === id)[0].value
}

export const getTurned = id => state => {
    return state.card.cards.filter(card => card.id === id)[0].turned
}

export const getVisible = id => state => {
    return state.card.cards.filter(card=> card.id === id)[0].visible
}

export const getTurnedCards = state => state.card.turnedCards

export default cardSlice.reducer