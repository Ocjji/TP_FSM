import React from 'react';
import { Link } from 'react-router-dom';
import {MdDateRange} from 'react-icons/md'
const NewsList = ({item}) => {
    const {id, title, date, view, mainImg, desc} = item
    return (
        <li  onClick={()=>window.scrollTo({ top: 0})}><Link to={`/news/${id}`}>
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