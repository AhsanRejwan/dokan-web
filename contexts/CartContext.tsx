import React, {Dispatch, useContext, useReducer} from "react";

const EMPTY: CartContext = {
    products: [],
    dispatch: () => console.error("Dispatch was uninitialized")
}

type CarProviderProps = {
    children: React.ReactNode
}

type Product = {
    id: string
    name: string
    price: string
    description: string
    quantity: string
}

type CartActions = {
    type: 'add' | 'remove',
    product: Product
}

type CartContext = {
    products: Product[]
    dispatch: Dispatch<CartActions>
}

const CartContext = React.createContext(EMPTY);

export const useCartContext = () => {
    return useContext(CartContext);
}

const cartReducer = (state: Product[], action: CartActions) : Product[] => {
    switch (action.type) {
        case "add":
            let newState = state.filter(item => item.id !== action.product.id)
            return [...newState, action.product];
        case "remove":
            return state.filter(item => item.id !== action.product.id)
    }
}

export const CartContextProvider = (props: CarProviderProps) => {
    const [state, dispatch] = useReducer(cartReducer, EMPTY.products)

    return (
        <CartContext.Provider value={{products: state, dispatch: dispatch}}>
            {props.children}
        </CartContext.Provider>
    )
}
