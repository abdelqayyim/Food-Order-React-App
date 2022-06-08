import React, {useReducer} from 'react'; 
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};
const cartReducer = (state, action) => {
    switch(action.type){
        case 'ADD':
            const updatedItems = state.items.concat(action.item);
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
            return {
                items: updatedItems, 
                totalAmount: updatedTotalAmount
            }
        default:
            return defaultCartState
    }
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCart = (item)=>{
        dispatchCartAction({type:'ADD', item: item});
    };
    const removeItemFromCart = (id)=>{
        dispatchCartAction({type:'REMOVE', id:id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart, 
        removeItem:removeItemFromCart 
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;