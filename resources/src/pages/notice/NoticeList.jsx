import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onViewPlus } from '../../store/modules/noticeSlice';

const NoticeList = ({item}) => {
    const {id,category, categoryName, title, userName, date, view, content} = item
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <tr>
            <td>{categoryName}</td>
            <td onClick={()=>{navigate(`/notice/${id}`),dispatch(onViewPlus(id))}}>{title}</td>
            <td>{view}</td>
            <td>{userName}</td>
            <td>{date}</td>
        </tr>
    );
};

export default NoticeList;