import React from 'react';
import { GoodsItemStyle } from "../../styled/GoodsStyle";
import { useDispatch } from "react-redux";
import { onGoodsPopup } from "../../store/modules/goodsSlice";

const GoodsItem = ({ item }) => {
    const { id, img, brand, name, price, extension, discount, soldout } = item
    const dispatch = useDispatch();
    return (
        <GoodsItemStyle className="goodsitem" onClick={() => dispatch(onGoodsPopup(id))}>
            <div>
                <img src={`./images/goods/${img}.${extension}`} alt={name} style={soldout && { filter: "contrast(0.7) grayscale(1)" }} />
            </div>
            <p>
                <em className="goodsbrand">{brand}</em><br />
                <strong className="goodsName">{name}</strong><br />
                {!soldout && <>
                    <span className="goodsPrice">
                        {
                            discount && <b style={{ color: "red", marginRight: 5 }}>{discount}%</b>
                        }
                        <b>{(price * (1 - (discount / 100))).toLocaleString("kr-KR")}</b>
                        원</span>
                    {
                        discount && <b style={{ color: "gray", marginLeft: 5, textDecoration: "line-through" }}>{price.toLocaleString("kr-KR")}원</b>
                    }
                </>
                }
                {
                    soldout && <span className="goodsPrice">
                        <b style={{ color: "#555" }}>품 절</b>
                    </span>
                }
            </p>
        </GoodsItemStyle>
    );
};

export default GoodsItem;