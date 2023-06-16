import { useDispatch, useSelector } from "react-redux";
import { changeName, increaseCount, deleteItem } from './store';
import { Table } from 'react-bootstrap'
function Cart() {
    let state = useSelector((state)=> state);
    let dispatch = useDispatch();  // useDispatch를 사용하여 dispatch 함수를 선언합니다.

    console.log(state);

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>수량</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i) =>
                            <tr key={i}>
                                <td>{state.cart[i].id}</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count}</td>
                                <td><button onClick={() => {
                                    dispatch(increaseCount(state.cart[i].id))
                                }}>수량 증가</button></td>
                                <td><button onClick={() => {
                                    dispatch(deleteItem(state.cart[i].id))
                                }}>상품 삭제</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <button onClick={() => {
                dispatch(changeName())  // changeName 액션을 디스패치합니다.
            }}>버튼임</button>
        </>
    );
}

export default Cart;
