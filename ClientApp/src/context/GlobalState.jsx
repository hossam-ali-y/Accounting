// import React, { createContext, useReducer } from 'react'
// import AppReducer from './AppReducer'


// const initialState = {
//         accounts: []
// }

// // const [state, dispatch] = useReducer(AppReducer, initialState)

// export const GlobalContext = createContext(initialState);


// export const GlobalProvider = ({ children }) => {

//         const [state, dispatch] = useReducer(AppReducer, initialState)

//         const addAccount = (account) => {
//                 dispatch({
//                         type: 'AddAccount',
//                         payload: account
//                 })
//         }

//         const editAccount = (id, account) => {
//                 dispatch({
//                         type: 'AddAccount',
//                         payload: { account, id }
//                 })
//         }

//         const deleteAccount = (id) => {
//                 dispatch({
//                         type: 'AddAccount',
//                         payload: id
//                 })
//         }

//         return (
//                 <GlobalContext.Provider value={{
//                         accounts: state.accounts
//                 }}>
//                         {children}
//                 </GlobalContext.Provider>
//         )
// }
