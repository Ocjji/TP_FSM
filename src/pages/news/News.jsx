import React, { useEffect, useState } from 'react';
// import newsData from '../../assets/api/newsData.json'
import NewsList from './NewsList';
import {BsSearch} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { newsDataSort, onAddPosts, onPerPosts, searchFilter } from '../../store/modules/newsSlice';
const News = () => {
    const {newsData,currentData,currentPerPosts} = useSelector(state=>state.newsR)
    const dispatch = useDispatch()
    // const data = newsData.sort((a,b)=>b.id -a.id) 
    // const [searchData, setSearchData] = useState(data)
    const [text, setText] = useState('')

    const onSubmit=e=>{
        e.preventDefault()
        dispatch(searchFilter(text))
        // setSearchData(data.filter(item=>item.title.includes(text)))
    }
    // const fillterPosts = currentData.slice(0, currentPerPosts)
    // const onAddPosts =()=>{
    //     setCurrentPosts(currentPosts+8)
    // }
    useEffect(()=>{
        dispatch(newsDataSort())
        dispatch(onPerPosts())
    },[currentPerPosts])
    return (
        <div className='news'>
            <div className="topSearch">
                {
                    text === '' ?
                    <span>총 {newsData.length} 개</span>
                    :<span>총 {currentData.length} 개</span>
                }
                <form onSubmit={onSubmit}>
                    <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
                    <button type='submit'><i><BsSearch/></i></button>
                </form>
            </div>
            <ul className='newsList'>
                {currentData.map(item=><NewsList key={item.id} item={item}/>)}
            </ul>
            <p className='moreBtn'>
                <button onClick={()=>dispatch(onAddPosts(8))}>더보기</button>
            </p>
        </div>
    );
};

export default News;