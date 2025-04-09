import { createSlice } from "@reduxjs/toolkit";
import { products } from "@/utils/products";

const initialState = {
  products: products,
  cart: [],
  orders: [],
  selectedProduct: null,
  selectedOrder: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      // console.log(action.payload);

      const productId = action.payload;
      const product = state.products.find((p) => p.id === productId);
      if (product) {
        product.isFav = !product.isFav;
      }
    },
    // Get product by ID
    getProductById: (state, action) => {
      const productId = Number(action.payload);
      const product = state.products.find(
        (product) => product.id === productId
      );

      if (product) {
        state.selectedProduct = product;
      } else {
        state.selectedProduct = null;
      }
    },

    // Add product to cart
    addToCart: (state, action) => {
      const { id, selectedColor, selectedSize, quantity } = action.payload;

      const product = state.products.find((p) => p.id === id);
      if (!product) return;

      const existingProduct = state.cart.find(
        (p) =>
          p.id === id &&
          p.selectedColor === selectedColor &&
          p.selectedSize === selectedSize
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
        existingProduct.totalPrice =
          existingProduct.price * existingProduct.quantity;
      } else {
        state.cart.push({
          ...product,
          selectedColor,
          selectedSize,
          quantity,
          totalPrice: product.price * quantity,
        });
      }
    },

    // Remove product from cart
    removeFromCart: (state, action) => {
      const { id, selectedColor, selectedSize } = action.payload;
      state.cart = state.cart.filter(
        (product) =>
          !(
            product.id === id &&
            product.selectedColor === selectedColor &&
            product.selectedSize === selectedSize
          )
      );
    },

    clearCart: (state) => {
      state.cart = [];
    },

    // Increment product quantity in cart
    incrementQuantity: (state, action) => {
      const { id, selectedColor, selectedSize } = action.payload;
      const product = state.cart.find(
        (p) =>
          p.id === id &&
          p.selectedColor === selectedColor &&
          p.selectedSize === selectedSize
      );
      if (product) {
        product.quantity += 1;
        product.totalPrice = product.price * product.quantity;
      }
    },

    // Decrement product quantity in cart
    decrementQuantity: (state, action) => {
      const { id, selectedColor, selectedSize } = action.payload;
      const product = state.cart.find(
        (p) =>
          p.id === id &&
          p.selectedColor === selectedColor &&
          p.selectedSize === selectedSize
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        product.totalPrice = product.price * product.quantity;
      }
    },

    // Place an order and clear the cart
    placeOrder: (state) => {
      const totalAmount = state.cart.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      );
      const order = {
        orderId: Date.now(),
        products: state.cart,
        status: "Placed",
        totalAmount,
        createdAt: new Date(),
      };
      state.orders.push(order);
      state.cart = []; // Clear cart after placing order
    },

    // Remove an order
    removeOrder: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order.orderId !== action.payload
      );
    },
    getOrderById: (state, action) => {
      const id = action.payload;
      const order = state.orders.find((o) => o.orderId === id);
      state.selectedOrder = order || null;
    },
  },
});

// Export actions
export const {
  getProductById,
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  placeOrder,
  removeOrder,
  clearCart,
  toggleFavorite,
  getOrderById,
} = productSlice.actions;

// Export reducer
export default productSlice.reducer;
