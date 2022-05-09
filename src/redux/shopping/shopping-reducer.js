import * as actionTypes from "./shopping-types"


const INITAL_STATE ={
    products:[
        {
            id: 1,
            title: "The AweSummer May Fab Bag",
            description:
              "Phew, it's getting hot in here! Unveil the midsummer madness with the hottest beauty staples inside the...",
            price: 599.00,
            image:
            "https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Skincare-2.gif?v=1652066342",
          },
        
       
    ],//{id, title, description, price, img}
    cart:[],
    Checkout:[],
    //{id, title, description, price, img, qty}
    current:null,
}

const shopReducer =(state=INITAL_STATE, action)=>{
    switch(action.type){
        case actionTypes.ADD_To_CART:
            // get the products data from the array
          const item =state.products.find((prod)=>prod.id ===action.payload.id)
            // check if the item is in cart already
          const inCart =state.cart.find((item)=> item.id ===action.payload.id ?true:false
          );   
            return{
                ...state,
                cart:inCart ? state.cart.map(item=>item.id === action.payload.id ?{...item, qty:item.qty +1} :item
                    ) 
                    :[...state.cart, {...item, qty:1 }],
            };
        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cart: state.cart.filter(item => item.id !==action.payload.id)
            }
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart:state.cart.map(item=> item.id ===action.payload.id ?{...item, qty:action.payload.qty} 
                    :item
                    ),
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                current:action.payload,
            }
           
         
            default:
                return state;
    }

}

export default shopReducer