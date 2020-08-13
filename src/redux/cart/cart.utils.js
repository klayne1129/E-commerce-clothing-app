
// function takes 2 parameters: all existing cartItems in cartItems array and the cartItem you want to add

// 1. Create variable existingCartITems. 

// 2. Look inside existingCartItems to see if it already exists. if true it will return the first item found
//    in the array based on the condition listed.

// 3.  Check if existingCartItem exists. If yes, return cartItems.map so you can return a new array.
//    Allows you to return new versions of the state so that the components know to re-render properly.

// 4. If cartItem.id ===cartItemToAdd.id, create a new object where you have the cartItem
//    and set quantity to cartITem.quantity + 1. If cartItem.id does not match cartItemToAdd.id, 
//    just return cartItem.

// 5. if caritItem is not found inside the array, return a new array with all existing cartItems,
//    and an object which is ...cartItemToAdd and a base quantity set to 1.
//    This way whenever you add cart items in any subsequent cartItems will be able to refference
//    that subsequent value that you have added to the objects when you store them.

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };