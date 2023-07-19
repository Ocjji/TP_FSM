import React, { useState } from 'react';
import { GameScheduleWrap } from '../../styled/GameScheduleStyled';
import GameScheduleList from './GameScheduleList';
import {AiOutlineDoubleLeft,AiOutlineLeft,AiOutlineRight,AiOutlineDoubleRight} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { filterSchedule } from '../../store/modules/gameScheduleSlice';
const GameSchedule = () => {
    const {selectedYearData} = useSelector(state => state.gameScheduleR)
    const dispatch = useDispatch()

    //페이징
    const [currentPage, setCurrentPage] = useState(1)
    const currentPerPosts = 6
    const lastPageNum = Math.ceil(selectedYearData.length/currentPerPosts)
    const firstPost = (currentPage-1)*currentPerPosts
    const lastPost = firstPost+currentPerPosts
    const paging = [...Array(lastPageNum).keys()].map(item=>item+1)
    const filterData = selectedYearData.slice(firstPost,lastPost)

    const handleYearChange = (e) => {
        const year = e.target.value;
        setCurrentPage(1)
        dispatch(filterSchedule(year))
    }
    const clickLink =()=>{
        window.scrollTo({top:0})
    }
    return (
        <GameScheduleWrap>
            <h2>경기일정</h2>
            <div className='inner'>
                <div className='selectBox'>
                    <select onChange={handleYearChange}>
                        <option value="all">년도선택</option>
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