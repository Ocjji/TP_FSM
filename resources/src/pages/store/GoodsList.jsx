import React, { useEffect, useState } from 'react';
import GoodsItem from "./GoodsItem";
import { CategoryInfoStyle, GoodsListStyle } from "../../styled/GoodsStyle";
import { useDispatch, useSelector } from "react-redux";
import Paging from "./Paging";
import { listSort, setGoodsListView } from "../../store/modules/goodsSlice";

const GoodsList = () => {
    // const { goodsData, currentPage } = useSelector(state => state.goodsR);
    const { goodsData, currentPage, goodsListView, currentCategory } = useSelector(state => state.goodsR);
    const itemPerPage = 12;
    // const totalItemCount = goodsData.length;
    const totalItemCount = goodsListView.length;
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(listSort('recent'));
    }, [currentCategory]);
    return (
        <div>
            <CategoryInfoStyle className="categoryInfo">
                <span>{totalItemCount}<b> 개의 상품</b></span>
                <select name="" id="" onChange={(e) => { dispatch(listSort(e.target.value)) }} >
                    <option value="recent">최근 등록순</option>
                    <option value="lowPrice">낮은 가격순</option>
                    <option value="highPrice">높은 가격순</option>
                </select>
            </CategoryInfoStyle>
            <GoodsListStyle className="goodslist">
                {
                    // goodsData.slice(itemPerPage * (currentPage - 1), itemPerPage * currentPage).map(item => <GoodsItem key={item.id} item={item} />)
                    goodsListView.slice(itemPerPage * (currentPage - 1), itemPerPage * currentPage).map(item => <GoodsItem key={item.id} item={item} />)
                }
            </GoodsListStyle>
            <Paging goodsListView={goodsListView} currentPage={currentPage} totalItemCount={totalItemCount} itemPerPage={itemPerPage} />
        </div>
    );
};

export default GoodsList;