import React, { useState } from 'react';
import { GoodsPopupStyle } from "../../styled/GoodsStyle";
import { useDispatch, useSelector } from "react-redux";
import { offPopup } from "../../store/modules/goodsSlice";

const GoodsPopup = () => {
    const { popupData } = useSelector(state => state.goodsR);
    const { id, img, brand, name, price, extension, discount } = popupData;
    const [amount, setAmount] = useState(1);
    const dispatch = useDispatch();

    const onPlusAmount = () => {
        if (amount < 10) {
            setAmount(amount += 1);
        }
    }
    const onMinusAmount = () => {
        if (amount > 0) {
            setAmount(amount -= 1);
        }
    }
    return (
        <GoodsPopupStyle className="goodsPopup" >
            <div className="inner">
                <div className="goodsDetail">
                    <button className="btnPopupClose" onClick={() => dispatch(offPopup())}>X</button>
                    <div className="goodsLeftImg">
                        <img src={`./images/goods/${img}.${extension}`} alt={name} />
                    </div>
                    <div className="goodsRightInfo">
                        <div className="brand-title-price">
                            <em>{brand}</em>
                            <strong>{name}</strong>
                            <p>
                                {
                                    discount && <strong style={{ color: "gray", textDecoration: "line-through", fontStyle: "italic" }}>{price.toLocaleString("kr-KR")}원</strong>
                                }
                                <span>
                                    {
                                        discount && <b style={{ color: "red", marginRight: 5 }}>{discount}%</b>
                                    }
                                    {(price * (1 - (discount / 100))).toLocaleString("kr-KR")}<b>원</b></span>
                            </p>
                        </div>
                        <div className="delivery-option-etc">
                            <dl className="delivery">
                                <dt>배송비</dt>
                                <dd>
                                    <ul>
                                        <li>유료</li>
                                        <li>제주도 : 6,000원</li>
                                        <li>도서산간 : 6,000원</li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div className="totalPrice-amount">
                            <dl className="amount">
                                <dt>size</dt>
                                <dd>
                                    <button onClick={onMinusAmount}> - </button>
                                    <span>{amount}</span>
                                    <button onClick={onPlusAmount}> + </button>
                                </dd>
                            </dl>
                            <dl className="totalPrice">
                                <dt>총 상품 금액</dt>
                                <dd>{(price * amount).toLocaleString("kr-KR")}원</dd>
                            </dl>
                        </div>
                        <div className="btn-addBasket-addGoBasket">
                            <button className="addBasket">
                                <span>장바구니 담기</span>
                            </button>
                            <button className="addGoBasket">
                                <span>바로구매</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </GoodsPopupStyle>
    );
};

export default GoodsPopup;