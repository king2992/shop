import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: 'lee',
    reducers: {
        changeName(state) {
            return 'jinwoo ' + state
        }
    }
})

let cart = createSlice({
    name: 'cart',
    //redux state의 초기값
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        increaseCount: (state, action) => {
            console.log(action)
            let id = action.payload;  // payload에는 증가시킬 아이템의 id가 있어야 합니다.
            let item = state.find(item => item.id === id);
            if (item) {
                item.count += 1;
            }
        },
        deleteItem: (state, action) =>{
            console.log(action)
            let id = action.payload;
            return state.filter(item => item.id !== id);
        }
    }
})

export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer
    }
})

export let { changeName } = user.actions;
export let { increaseCount, deleteItem } = cart.actions;