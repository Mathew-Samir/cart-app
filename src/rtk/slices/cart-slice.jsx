import { createSlice } from '@reduxjs/toolkit';

// Helper function to load state from localStorage
const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Could not load state from localStorage", err);
        return [];
    }
};

// Helper function to save state to localStorage
const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cart', serializedState);
    } catch (err) {
        console.error("Could not save state to localStorage", err);
    }
};

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: loadStateFromLocalStorage(), // Load initial state from localStorage
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id);
            if (findProduct) {
                findProduct.quantity += 1;
            } else {
                const productClone = { ...action.payload, quantity: 1 }
                state.push(productClone);
            }
            saveStateToLocalStorage(state); // Save updated state to localStorage
        },
        deleteFromCart: (state, action) => {
            const updatedState = state.filter(item => item.id !== action.payload);
            saveStateToLocalStorage(updatedState); // Save updated state to localStorage
            return updatedState;
        },
        clear: (state, action) => {
            saveStateToLocalStorage([]); // Clear localStorage
            return [];
        },
    }
});

export const { addToCart, deleteFromCart, clear } = cartSlice.actions;
export default cartSlice.reducer;
