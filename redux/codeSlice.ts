import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface CodeState {
  code : string
}

const initialCodeState : CodeState ={
    code : ""
  }


export const CodeSlice = createSlice({
    name: "code",
    initialState: initialCodeState,
    reducers: {
      setCode : (state : CodeState, action: PayloadAction<CodeState>)=>{
        const {code} = action.payload
        state.code = code;
      }
    }
  })

export const {setCode} = CodeSlice.actions
export default CodeSlice.reducer
  