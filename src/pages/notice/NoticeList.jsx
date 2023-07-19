import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoticeList = ({item}) => {
    const {id,category, categoryName, title, userName, date, view, content} = item
    const navigate = useNavigate()
    return (
        <tr>
            <td>{categoryName}</td>
            <td onClick={()=>navigate(`/notice/${id}`)}>{title}</td>
            <td>{view}</td>
            <td>{userName}</td>
            <td>{date}</td>
        </tr>
    );
};

export default NoticeList;