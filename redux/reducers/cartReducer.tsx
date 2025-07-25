type CartItem = {
  id?: string;
  name?: string;
  price?: number;
  restaurantName: string;
  [key: string]: any;
};

type CartState = {
  selectedItems: {
    items: CartItem[];
    restaurantName: string;
  };
};

type CartAction = {
  type: string;
  payload: CartItem;
};

const defaultState: CartState = {
  selectedItems: { items: [], restaurantName: '' },
};

const cartReducer = (state: CartState = defaultState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      let newState = { ...state };
      if(action.payload.checkboxValue) {
        console.log("Adding item to cart");
        
      newState.selectedItems = {
        items: [...state.selectedItems.items, action.payload],
        restaurantName: action.payload.restaurantName,
      };
      
      } else {
        console.log("Removing item from cart");
        newState.selectedItems = {
          items: newState.selectedItems.items.filter((item) => item.title !== action.payload.title),
          restaurantName: action.payload.restaurantName,
        };
      }
      console.log("Updated cart state:", newState);
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducer;