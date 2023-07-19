import React from 'react';
import { NoticeLayoutWrap } from '../../styled/NoticeStyled';
import { Outlet } from 'react-router-dom';

const NoticeLayout = () => {
    return (
        <NoticeLayoutWrap>
            <h2>게시판</h2>
            <Outlet/>
        </NoticeLayoutWrap>
    );
};

export default NoticeLayout;