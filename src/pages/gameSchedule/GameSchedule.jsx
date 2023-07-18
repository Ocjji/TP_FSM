import React, { useState } from 'react';
import { GameScheduleWrap } from '../../styled/GameScheduleStyled';
import gamescheduledata from '../../assets/api/gameScheduleData.json'
import GameScheduleList from './GameScheduleList';
import {AiOutlineDoubleLeft,AiOutlineLeft,AiOutlineRight,AiOutlineDoubleRight} from 'react-icons/ai'
const GameSchedule = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const currentPerPosts = 6
    const [selectedYear, setSelectedYear] = useState("");

    const filterDate = (year)=>{
        let filterschedule = gamescheduledata.filter(item=>item.date.split('.')[0]===year)
        return filterschedule
    }
    const handleYearChange = (e) => {
        const year = e.target.value;
        setSelectedYear(year);
        setCurrentPage(1)
    }
    const filteredSchedule = filterDate(selectedYear); 

    const lastPageNum = selectedYear? Math.ceil(filteredSchedule.length/currentPerPosts):Math.ceil(gamescheduledata.length/currentPerPosts)
    const firstPost = (currentPage-1)*currentPerPosts
    const lastPost = firstPost+currentPerPosts
    const paging = [...Array(lastPageNum).keys()].map(item=>item+1)
    const filterData = selectedYear? filteredSchedule.slice(firstPost,lastPost):gamescheduledata.slice(firstPost,lastPost)
    const clickLink =()=>{
        window.scrollTo({top:0})
    }
    return (
        <GameScheduleWrap>
            <h2>경기일정</h2>
            <div className='inner'>
                <div className='selectBox'>
                    <select onChange={handleYearChange}>
                        <option value="">년도선택</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                    </select>

                </div>
                <ul>
                    {
                        filterData.map(item=><GameScheduleList key={item.id} item={item}/>)
                    }
                </ul>
                <p className='paging'>
                    <i onClick={()=>{setCurrentPage(1), clickLink()}}><AiOutlineDoubleLeft/></i>
                    <i onClick={()=>{currentPage > 1 && setCurrentPage(currentPage-1, clickLink())}}><AiOutlineLeft/></i>
                    {
                        paging.map(item=><span key={item} onClick={()=>{setCurrentPage(item), clickLink()}} className={currentPage===item?'on':''}>{item}</span>)
                    }
                    <i onClick={()=>{currentPage<lastPageNum && setCurrentPage(currentPage+1),clickLink()}}><AiOutlineRight/></i>
                    <i onClick={()=>{setCurrentPage(lastPageNum), clickLink()}}><AiOutlineDoubleRight/></i>
                </p>
            </div>
        </GameScheduleWrap>
    );
};

export default GameSchedule;