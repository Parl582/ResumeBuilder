import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
  
//     {
//       name : '정성욱',
//       contact : '010-1234-5678',
//     }
//   ],

// }

const ContactSlice = createSlice({
  name: 'user',
  initialState : {  
      name : '',
      contact : '010-1234-5678',
      address : 'I am address',
  },

  reducers: {

    addContact: (state, action) => {
      
      state.name= action.payload.name
      state.contact = action.payload.contact
      state.address = action.payload.address
      
    }
  }
});

export const { addContact } = ContactSlice.actions


export default ContactSlice.reducer