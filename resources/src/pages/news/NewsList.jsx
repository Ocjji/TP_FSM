import React from 'react';
import { Link } from 'react-router-dom';
import {MdDateRange} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { onClickPost } from '../../store/modules/newsSlice';
const NewsList = ({item}) => {
    const {id, title, date, view, mainImg, desc} = item
    const dispatch = useDispatch()
    return (
        <li  onClick={()=>{window.scrollTo({ top: 0}),dispatch(onClickPost(item))}}><Link to={`/news/${id}`}>
            <div className='imgbox'>
                <img src={mainImg} alt={title} />

            </div>
            <h3>{title}</h3>
            <div className='date_view'>
                <span><i><MdDateRange/></i>{date}</span>
                <span><i className='xi-eye-o'></i>{view.toLocaleString()}</span>
            </div>
            </Link></li>
    );
};

export default NewsList;