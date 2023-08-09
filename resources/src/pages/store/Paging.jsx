import React from 'react';
import { PagingStyle } from "../../styled/GoodsStyle";
import { useDispatch } from "react-redux";
import { setGoodsPage } from "../../store/modules/goodsSlice";

const Paging = ({ goodsData, currentPage, totalItemCount, itemPerPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItemCount / itemPerPage); i++) {
        pageNumbers.push(i);
    }
    const dispatch = useDispatch();
    return (
        <>
            <PagingStyle className="paging">
                {
                    pageNumbers.map(page => (
                        <button className={page === currentPage ? "on" : ""} key={page} onClick={() => dispatch(setGoodsPage(page))}>
                            {page}
                        </button>
                    ))
                }
            </PagingStyle>
        </>
    );
};

export default Paging;