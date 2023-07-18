import React from 'react';
import { GoodsPopupStyle } from "../../styled/GoodsStyle";
import { useDispatch, useSelector } from "react-redux";
import { offPopup } from "../../store/modules/goodsSlice";

const GoodsPopup = () => {
    const { popupData } = useSelector(state => state.goodsR);
    const { id, img, brand, name, price, extension, discount } = popupData;
    const dispatch = useDispatch();
    return (
        <GoodsPopupStyle className="goodsPopup" >
            <div className="inner">
                <div className="goodsDetail">
                    <button className="btnPopupClose" onClick={() => dispatch(offPopup())}>X</button>
                    <div className="goodsLeftImg">
                        <img src={`./images/goods/${img}.${extension}`} alt={name} />
                    </div>
                    <div className="goodsRightInfo">
                        {brand}
                        {name}
                        {price}
                    </div>
                </div>
            </div>
        </GoodsPopupStyle>
    );
};

export default GoodsPopup;