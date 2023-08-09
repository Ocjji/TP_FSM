import React from 'react';
import { Outlet } from 'react-router-dom';
import { NewsWrap } from '../../styled/NewsStyled';

const NewsLayout = () => {
    return (
        <NewsWrap>
            <h2>NEWS</h2>
            <Outlet/>
        </NewsWrap>
    );
};

export default NewsLayout;