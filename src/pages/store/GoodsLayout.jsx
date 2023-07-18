import React from 'react';
import GoodsList from "./GoodsList";
import GoodsNav from "./GoodsNav";
import GoodsPopup from "./GoodsPopup";
import { useSelector } from "react-redux";
import { GoodsWrap } from "../../styled/GoodsStyle";

const GoodsLayout = () => {
    const { isGoodsPopup } = useSelector(state => state.goodsR);
    return (
        <GoodsWrap>
            {isGoodsPopup && <GoodsPopup />}
            <div className="inner">
                <div className="goodslayout" style={{ display: "flex" }}>
                    <GoodsNav />
                    <GoodsList />
                </div>
            </div>
        </GoodsWrap>
    );
};

export default GoodsLayout;