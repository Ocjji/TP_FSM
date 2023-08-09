import React, { memo } from 'react';
import { AmountWrap, CartItemBox } from '../../styled/CartStyled';
import { useDispatch } from 'react-redux';
import { changeAmount, onDelCartSelectedItem } from '../../store/modules/goodsSlice';
import { AiOutlineClose } from 'react-icons/ai';

const OrderListItem = memo(({ item, index }) => {
    const { id, amount, brand, name, discount, img, extension, price, soldout, size } = item
    const dispatch = useDispatch()
    const onPlusAmount = () => {
        if (amount < 10) {
            const newValue = amount + 1
            dispatch(changeAmount({ newValue, index }))
        }
    }
    const onMinusAmount = () => {
        if (amount > 1) {
            const newValue = amount - 1
            dispatch(changeAmount({ newValue, index }))
        }
    }
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
                <AmountWrap>
                    <span style={{ border: "none", textAlign: "left", fontSize: "16px" }}>{amount}개</span>
                </AmountWrap>
            </div>
            <p style={{ color: 'red' }}>배송준비중</p>
        </CartItemBox>
    );
});

export default OrderListItem;