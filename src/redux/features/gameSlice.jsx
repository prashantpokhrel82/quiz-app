import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    score: 0,
    soundOn: true,
}

const gameSlice = createSlice({
    name:'game',
    initialState,
    reducers:{
        updateScore: (state)=>{
            state.score = state.score+1;
        },
        toggleSound: (state) => {
            state.soundOn = !state.soundOn;
        },
    }
});

export default gameSlice.reducer;
export const {updateScore,toggleSound} = gameSlice.actions;