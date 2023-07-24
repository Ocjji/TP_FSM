import React, { useEffect, useState } from 'react';
import NewsList from './NewsList';
import {BsSearch} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { newsDataSort, onAddPosts, onPerPosts, searchFilter } from '../../store/modules/newsSlice';
const News = () => {
    const {newsData,currentData,currentPerPosts} = useSelector(state=>state.newsR)
    const dispatch = useDispatch()

    const [text, setText] = useState('')
    const onSubmit=e=>{
        e.preventDefault()
        dispatch(searchFilter(text))
    }

    useEffect(()=>{
        dispatch(newsDataSort())
        dispatch(onPerPosts())
    },[currentPerPosts])
    return (
        <div className='news'>
            <div className="topSearch">
                {
                    text === '' ?
                    <span>총 <b>{newsData.length}</b> 개</span>
                    :<span>총 <b>{currentData.length}</b> 개</span>
                }
                <form onSubmit={onSubmit}>
                    <input type="text" value={text} onChange={e=>setText(e.target.value)} placeholder='제목을 검색하세요'/>
                    <button type='submit'><i><BsSearch/></i></button>
                </form>
            </div>
            <ul className='newsList'>
                {currentData.map(item=><NewsList key={item.id} item={item}/>)}
            </ul>
            <p className='moreBtn'>
                <button onClick={()=>dispatch(onAddPosts(8))}><span>더보기</span></button>
            </p>
        </div>
    );
};

export default News;