import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { BtnWrap, CartList } from '../../styled/CartStyled';
import { AiOutlineDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const Cart = memo(() => {
    const { cart } = useSelector(state => state.goodsR);
    const navigate = useNavigate()
    const deliveryCost = 3000;
    const orderCost = cart.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.price * currentItem.amount) - (currentItem.price * currentItem.amount) * currentItem.discount * 0.01;
    }, 0);
    const totalPrice = cart.length * deliveryCost + orderCost
    const goto = () => {
        navigate('/store')
    }
    return (
        <CartList>
            <div className="inner">
                <ul>
                    <li>장바구니</li>
                    <li>주문내역</li>
                </ul>
                <div className='cartInfo'>
                    <div className="cartTop">
                        <span>배송 전체 {cart.length}</span>
                        <span>1개 선택<i><AiOutlineDelete /></i></span>
                    </div>
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
                    <button>주문하기</button>
                    <button onClick={goto}>쇼핑 계속하기</button>
                </BtnWrap>
            </div>
        </CartList>
    );
});

export default Cart;