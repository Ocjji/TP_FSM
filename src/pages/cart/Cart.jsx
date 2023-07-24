import React, { memo, useState } from 'react';
import { CartList } from '../../styled/CartStyled';
import CartInfo from './CartInfo';
import OrderInfo from './OrderInfo';
const Cart = memo(() => {
    const [onMenuNum, setOnMenuNum] = useState(1)
    const onMenuClick = (num) => {
        setOnMenuNum(num)
    }
    return (
        <CartList>
            <div className="inner">
                <ul>
                    <li onClick={() => onMenuClick(1)} className={onMenuNum === 1 ? "on" : ""}>장바구니</li>
                    <li onClick={() => onMenuClick(2)} className={onMenuNum === 2 ? "on" : ""}>주문내역</li>
                </ul>
                {
                    onMenuNum === 1 &&
                    <CartInfo onMenuClick={onMenuClick} />
                }
                {
                    onMenuNum === 2 &&
                    <OrderInfo />
                }
            </div>
        </CartList>
    );
});

export default Cart;