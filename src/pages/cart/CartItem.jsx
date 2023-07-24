import React, { memo } from 'react';
import { CartItemBox } from '../../styled/CartStyled';
import { useDispatch } from 'react-redux';
import { changeAmount } from '../../store/modules/goodsSlice';

const CartItem = memo(({ item, index }) => {
    const { amount, brand, name, discount, img, extension, price, soldout, size } = item
    const dispatch = useDispatch()
    const handleAmountChange = (event) => {
        const newValue = event.target.value;
        dispatch(changeAmount({ newValue, index }))
        console.log(`갯수 : ${newValue}`);
    };
    return (
        <CartItemBox>
            <div className='cartImgBox'>
                <img src={`./images/goods/${img}.${extension}`} alt="" />
            </div>
            <div className='cartTextBox'>
                <span>{brand}</span>
                <span>{name}</span>
                <span>옵션명 : {size}</span>
                <span>배송비 3,000원 | 택배</span>
                {
                    discount &&
                    <span>
                        <em>{(price * amount).toLocaleString("kr-KR")}원</em>
                        <strong>{((price * amount) - ((price * amount) * (discount * 0.01))).toLocaleString("kr-KR")}원</strong>
                    </span>
                }
                {
                    !discount &&
                    <span>
                        <strong>{(price * amount).toLocaleString("kr-KR")}원</strong>
                    </span>
                }
                <input type="number" name="" id="" value={amount} onChange={handleAmountChange} />
            </div>
        </CartItemBox>
    );
});

export default CartItem;