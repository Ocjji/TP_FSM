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
                <li>국가대표팀
                    {/* <li className="kfaSelect">국가대표팀 */}
                    {/* <ul>
                        <li>전체</li>
                        <li>유니폼</li>
                        <li>트레이닝</li>
                        <li>기타</li>
                    </ul> */}
                </li>
                <li onClick={() => dispatch(setGoodsListView("wears"))}>의류
                    {/* <li className="wearSelect">의류 */}
                    {/* <ul>
                        <li>전체</li>
                        <li>팀 유니폼</li>
                        <li>트레이닝 웨어</li>
                        <li>레프리킷</li>
                        <li>기타</li>
                    </ul> */}
                </li>
                <li onClick={() => dispatch(setGoodsListView("ball"))}>싸인볼 & 공식사용구</li>
                {/* <li>KFA x 브랜드 콜라보</li> */}
                <li onClick={() => dispatch(setGoodsListView("fashion"))}>패션잡화</li>
                <li onClick={() => dispatch(setGoodsListView("accessory"))}>액세서리</li>
                {/* <li>기념품 & 문구</li> */}
                {/* <li>기타</li> */}
            </ul>
        </GoodsNavStyle>
    );
};

export default GoodsNav;