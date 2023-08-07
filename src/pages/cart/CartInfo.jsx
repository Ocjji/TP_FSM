import React, { memo } from 'react';
import CartItem from './CartItem';
import { BtnWrap } from '../../styled/CartStyled';
import { AiOutlineDelete } from 'react-icons/ai';
import { changeOrderList, onDelCartAllItem } from '../../store/modules/goodsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const CartInfo = memo(({ onMenuClick }) => {
    const { cart } = useSelector(state => state.goodsR);
    const dispatch = useDispatch()
    const deliveryCost = 3000;
    const orderCost = cart.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.price * currentItem.amount) - (currentItem.price * currentItem.amount) * currentItem.discount * 0.01;
    }, 0);
    
    const totalPrice = cart.length * deliveryCost + orderCost
    const navigate = useNavigate()
    const goto = () => {
        navigate('/store')
    }
    const isOrder = () => {
        const orderConfirm = confirm('장바구니 내역으로 주문을 완료하시겠습니까?')
        if (cart.length !== 0 && orderConfirm) {
            alert('해당 상품의 주문이 완료되었습니다.')
            onMenuClick(2)
            dispatch(changeOrderList(cart))
        }
        else alert('취소되었습니다.')
    }
    console.log(cart)
    return (
        <>
            <div className='cartInfo'>
                <div className="cartTop">
                    <span>장바구니 목록 {cart.length}개</span>
                    <span>전체 삭제<i onClick={() => dispatch(onDelCartAllItem())}><AiOutlineDelete /></i></span>
                </div>
                {
                    cart.length === 0 &&
                    <div style={{ height: "100px", padding: "20px", lineHeight: '100px', fontSize: "20px" }}>
                        <span>장바구니에 물품이 존재하지 않습니다.</span>
                    </div>
                }
                {
                    cart.map((item, index) => (
                        <CartItem item={item} key={index} index={index} />)
                    )
                }
            </div>
            <div className='cost'>
                <div>
                    <span>총 주문금액</span>
                    <span>{orderCost.toLocaleString("kr-KR")}원</span>
                </div>
                <div>
                    <span>배송비</span>
                    <span>{(deliveryCost * cart.length).toLocaleString("kr-KR")}원</span>
                </div>
                <div>
                    <span>총 결제금액</span>
                    <span>{totalPrice.toLocaleString("kr-KR")}원</span>
                </div>
            </div>
            <BtnWrap>
                <button onClick={isOrder}>주문하기</button>
                <button onClick={goto}>쇼핑 계속하기</button>
            </BtnWrap>
        </>
    );
});

export default CartInfo;