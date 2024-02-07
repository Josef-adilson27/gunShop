import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   Products:[],
   SearchingElements: [],
   UniqueCartProducts:localStorage.getItem("UniqueCartProducts") ? JSON.parse(localStorage.getItem("UniqueCartProducts")):[],
   CartProducts:[],
   HeaderHideBoolean: false,
   FormHideBoolean: false,
   CartHiddenBoolean: false,
   PriceState: {
    total:0,
    quantity:0
   }
 }


const MainSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
   PutData: (state,action)=>{
     state.Products = [...action.payload]
   },
   AddToCart: (state,action)=>{ 
    state.CartProducts.push(action.payload) 
    const filt = [...new Map(state.CartProducts.map((item)=>[item["id"],item])).values()]
    localStorage.setItem("UniqueCartProducts",JSON.stringify(state.UniqueCartProducts))     
    state.UniqueCartProducts = [...filt]
   },
   remove:(state,action)=>{
    state.UniqueCartProducts = state.UniqueCartProducts.filter(item=>{ return item.id!==action.payload.id})
    localStorage.setItem("UniqueCartProducts",JSON.stringify(state.UniqueCartProducts))
   },
   increment:(state,action)=>{
    const itemIndex = state.UniqueCartProducts.findIndex(item=>(
      item.id === action.payload
     ))
      state.UniqueCartProducts[itemIndex].quantity +=1
      
      localStorage.setItem("UniqueCartProducts",JSON.stringify(state.UniqueCartProducts))
   },
   clearCart:(state,)=>{
    state.UniqueCartProducts = []
    localStorage.setItem("UniqueCartProducts",JSON.stringify(state.UniqueCartProducts))
   },
   decrement:(state,action)=>{
    const itemIndex = state.UniqueCartProducts.findIndex(item=>(
      item.id === action.payload
     ))
     if(state.UniqueCartProducts[itemIndex].quantity>1){
       state.UniqueCartProducts[itemIndex].quantity -=1
       localStorage.setItem("UniqueCartProducts",JSON.stringify(state.UniqueCartProducts))
     }
   },
   isHeaderHidden:(state,action)=>{
      state.HeaderHideBoolean = action.payload
   },
   isFormHidden:(state,)=>{
    state.FormHideBoolean = !state.FormHideBoolean
   },
   isCartHidden:(state,)=>{
    state.FormHideBoolean = !state.FormHideBoolean
   },
   PriceFunction:(state,action)=>{
    let a = 0;
    let b = 0;
      state.UniqueCartProducts.map(item=>{
       a += item.quantity * item.price;
       b += item.quantity
       
      })
      state.PriceState.total = a
      state.PriceState.quantity = b
      localStorage.setItem("UniqueCartProducts",JSON.stringify(state.UniqueCartProducts))
   },
  },
})
export const {
  PutData,
  isHeaderHidden,
  isFormHidden,
  AddToCart,
  isCartHidden,
  UniqueCartProducts,
  increment,
  decrement,
  remove,
  clearCart,
  cleanSerching,
  PriceFunction,
  foo
 } = MainSlice.actions

export default MainSlice.reducer