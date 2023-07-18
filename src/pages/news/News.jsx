import React, { useEffect, useState } from 'react';
import newsData from '../../assets/api/newsData.json'
import NewsList from './NewsList';
import {BsSearch} from 'react-icons/bs'
const News = () => {
    const data = newsData.sort((a,b)=>b.id -a.id) 
    const [searchData, setSearchData] = useState(data)
    const [text, setText] = useState('')

    const onSubmit=e=>{
        e.preventDefault()
        setSearchData(data.filter(item=>item.title.includes(text)))
    }
    const [currentPosts , setCurrentPosts] = useState(12)
    const fillterPosts = searchData.slice(0, currentPosts)
    const onAddPosts =()=>{
        setCurrentPosts(currentPosts+8)
    }
    return (
        <div className='news'>
            <div className="topSearch">
                {
                    text === '' ?
                    <span>총 {data.length} 개</span>
                    :<span>총 {fillterPosts.length} 개</span>
                }
                <form onSubmit={onSubmit}>
                    <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
                    <button type='submit'><i><BsSearch/></i></button>
                </form>
            </div>
            <ul className='newsList'>
                {fillterPosts.map(item=><NewsList key={item.id} item={item}/>)}
            </ul>
            <p className='moreBtn'>
                <button onClick={onAddPosts}>더보기</button>
            </p>
        </div>
    );
};

export default News;