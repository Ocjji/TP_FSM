import React, { useEffect } from 'react';
import { GoodsNavStyle } from "../../styled/GoodsStyle";
import { Link } from "react-router-dom";
import { setGoodsListView } from "../../store/modules/goodsSlice";
import { useDispatch } from "react-redux";

const GoodsNav = () => {
    const dispatch = useDispatch();

    return (
        <GoodsNavStyle className="goodsnav">
            <ul>
                <li onClick={() => dispatch(setGoodsListView("all"))}>전체보기</li>
                <li onClick={() => dispatch(setGoodsListView("uniform"))}>국가대표팀</li>
                <li onClick={() => dispatch(setGoodsListView("wears"))}>의류</li>
                <li onClick={() => dispatch(setGoodsListView("ball"))}>싸인볼 & 공식사용구</li>
                <li onClick={() => dispatch(setGoodsListView("fashion"))}>패션잡화</li>
                <li onClick={() => dispatch(setGoodsListView("accessory"))}>액세서리</li>

            </ul>
        </GoodsNavStyle>
    );
};

export default GoodsNav;