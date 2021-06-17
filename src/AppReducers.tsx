import React, { useReducer } from 'react';

interface ICart {
  products: string[],
  shipping_value?: number
} 

type CartActionType = {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT',
}

const AppReducers: React.FC = () => {
  
  const cart = useReducer((state: ICart, action: CartActionType) => {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return {
          ...state,
          products: [...state.products, 'New Product']
        }
      default:
        return state;
    }
  }, {
    products: [],
    shipping_value: 0
  })


  return <div />;
}

export default AppReducers;