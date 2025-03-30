import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    id : string 
    email: string,
    name: string,
    picture: string,
  }
  const initialState: UserState = {
    id : '',
    email: '',
    name:   '',
    picture:    '',
  }
  
  export const UserLoginSlice = createSlice({
    name: 'UserLogin',
    initialState,
    reducers: {
      login: (state : UserState, action: PayloadAction<UserState>) => {
        const {id , email ,name , picture} = action.payload
        state.id = id;
        state.email = email;
        state.name = name;
        state.picture = picture;
      },
      logout: (state : UserState) => {
        state.id = '';
        state.email = '';
        state.name =   '';
        state.picture =    '';
      },
    },
  })
  

  export const { login , logout } = UserLoginSlice.actions
  export default UserLoginSlice.reducer