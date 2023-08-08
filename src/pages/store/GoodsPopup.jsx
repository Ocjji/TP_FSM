import React, { useEffect, useState } from 'react';
import { GoodsPopupStyle } from "../../styled/GoodsStyle";
import { useDispatch, useSelector } from "react-redux";
import { offPopup, onAddCart, onAddGoCart } from "../../store/modules/goodsSlice";
import { useNavigate } from 'react-router-dom';

const GoodsPopup = () => {
    const { popupData } = useSelector(state => state.goodsR);
    const { id, img, brand, name, price, extension, discount, category1, soldout } = popupData;
    const [amount, setAmount] = useState(1);
    const [size, setSize] = useState("");
    const [readyToCart, setReadyToCart] = useState(popupData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
    const onAdd = () => {
        if (category1 === "wears") {
            if (!size) { alert("사이즈를 선택해주세요"); return }
        }

        dispatch(onAddCart(readyToCart));
        // addSuccessPopup();
    }
    const onAddLinkCart = () => {
        if (category1 === "wears") {
            if (!size) { alert("사이즈를 선택해주세요"); return }
        }
        dispatch(onAddGoCart(readyToCart));
        navigate("/cart");
    }
    return (
        <GoodsPopupStyle className="goodsPopup">
            <div className="popupBG" onClick={() => dispatch(offPopup())}></div>
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
                            {
                                soldout && <p>
                                    <span>품절 상품입니다</span>
                                </p>
                            }
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
                                <dt>사이즈</dt>
                                {
                                    category1 === "wears" ?
                                        (
                                            <dd>
                                                <select name="" id="" onChange={(e) => sizeChange(e)} disabled={soldout}>
                                                    <option value="">사이즈선택</option>
                                                    <option value="S(95)">S(95)</option>
                                                    <option value="M(100)">M(100)</option>
                                                    <option value="L(105)">L(105)</option>
                                                    <option value="XL(110)">XL(110)</option>
                                                </select>
                                            </dd>
                                        ) : "사이즈를 선택할 수 없는 상품입니다."
                                }
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
                                {!soldout ? <dd>{((price * (1 - (discount / 100))) * amount).toLocaleString("kr-KR")}원</dd> : <dd> 품 절 </dd>}
                            </dl>
                        </div>

                        <div className="btn-addBasket-addGoBasket">
                            <button className="addBasket" onClick={() => onAdd()} disabled={soldout} style={soldout ? { width: "100%" } : {}}>
                                <span style={soldout ? { fontSize: "24px" } : {}}>{soldout ? "품 절" : "장바구니 담기"}</span>
                            </button>
                            {!soldout &&
                                <button className="addGoBasket" onClick={() => onAddLinkCart()}>
                                    <span>바로구매</span>
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </GoodsPopupStyle >
    );
};

export default GoodsPopup;