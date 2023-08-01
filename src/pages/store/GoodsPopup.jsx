import React, { useEffect, useState } from 'react';
import { GoodsPopupStyle } from "../../styled/GoodsStyle";
import { useDispatch, useSelector } from "react-redux";
import { offPopup, onAddCart } from "../../store/modules/goodsSlice";

const GoodsPopup = () => {
    const { popupData } = useSelector(state => state.goodsR);
    const { id, img, brand, name, price, extension, discount } = popupData;
    const [amount, setAmount] = useState(1);
    const [size, setSize] = useState("");
    const [readyToCart, setReadyToCart] = useState(popupData);
    // const [isAddPopup, setIsAddPopup] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setReadyToCart({
            ...readyToCart,
            size: size,
            amount: amount
        })
    }, [amount, size])

    const onPlusAmount = () => {
        if (amount < 10) {
            setAmount(amount + 1);
        }
    }
    const onMinusAmount = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        }
    }
    const sizeChange = (e) => {
        setSize(e.target.value);
    }
    const addSuccessPopup = () => {
        // setIsAddPopup(true);
        // setTimeout(() => {
        //     setIsAddPopup(false);
        // }, 1000);
    }
    const onAdd = () => {
        if (!size) { alert("사이즈를 선택해주세요"); return }
        dispatch(onAddCart(readyToCart));
        // addSuccessPopup();
    }
    return (
        <GoodsPopupStyle className="goodsPopup" >
            <div className="inner">
                <div className="goodsDetail">
                    <button className="btnPopupClose" onClick={() => dispatch(offPopup())}>x</button>
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
                        <div className="select-size">
                            <dl className="size">
                                <dt>옵션</dt>
                                <dd>
                                    <select name="" id="" onChange={(e) => sizeChange(e)}>
                                        <option value="">옵션선택</option>
                                        <option value="S(95)">S(95)</option>
                                        <option value="M(100)">M(100)</option>
                                        <option value="L(105)">L(105)</option>
                                        <option value="XL(110)">XL(110)</option>
                                    </select>
                                </dd>
                            </dl>
                        </div>
                        <div className="totalPrice-amount">
                            <dl className="amount">
                                <dt>{size ? `${size}` : ""}</dt>
                                <dd >
                                    {size && <button onClick={onMinusAmount}> - </button>}
                                    {size && <span>{amount}</span>}
                                    {size && <button onClick={onPlusAmount}> + </button>}
                                </dd>
                            </dl>
                            <dl className="totalPrice">
                                <dt>총 상품 금액</dt>
                                <dd>{((price * (1 - (discount / 100))) * amount).toLocaleString("kr-KR")}원</dd>
                            </dl>
                        </div>

                        <div className="btn-addBasket-addGoBasket">
                            <button className="addBasket" onClick={() => onAdd()}>
                                <span>장바구니 담기</span>
                            </button>
                            <button className="addGoBasket">
                                <span>바로구매</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* {isAddPopup &&
                    <div className="addPopup">
                        <h3>장바구니에 담겼습니다</h3>
                    </div>
                } */}

            </div>
        </GoodsPopupStyle >
    );
};

export default GoodsPopup;