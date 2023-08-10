import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import NoticeList from './NoticeList';
import { NoticeWrap } from '../../styled/NoticeStyled';
import { changeCategory, onSearch, sortDate } from '../../store/modules/noticeSlice';
import { AiOutlineDoubleLeft, AiOutlineLeft, AiOutlineRight, AiOutlineDoubleRight } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';

const Notice = () => {

    const { noticeData } = useSelector(state => state.noticeR)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [text, setText] = useState('')

    const onChangeSelect = e => {
        const { value } = e.target
        dispatch(changeCategory(value))
    }
    const onsubmit = e => {
        e.preventDefault()
        dispatch(onSearch(text))
        setCurrentPage(1)
    }

    //페이징
    const [currentPage, setCurrentPage] = useState(1)
    const currentPerPosts = 5
    const lastPageNum = Math.ceil(noticeData.length / currentPerPosts)
    const filterDate = noticeData.slice((currentPage - 1) * currentPerPosts, currentPage * currentPerPosts)
    const paging = [...Array(lastPageNum).keys()].map(item => item + 1)

    const clickLink = () => {
        window.scrollTo({ top: 0 })
    }

    useEffect(() => {
        dispatch(sortDate())
    }, [])
    return (
        <NoticeWrap>
            <div className="inner">
                <div className="topInfo">
                    <span>총 <b>{noticeData.length}</b> 개</span>
                    <div className='searchBtn'>
                        <select onChange={(e) => { onChangeSelect(e), setCurrentPage(1) }} >
                            <option value="all">전체</option>
                            <option value="my_squad">나만의 스쿼드</option>
                            <option value="free_board">자유게시판</option>
                        </select>
                        <form action="" onSubmit={onsubmit}>
                            <input type="text" onChange={(e) => setText(e.target.value)} value={text} placeholder='제목, 내용, 작성자를 검색하세요' />
                            <button type='submit'><i><BsSearch /></i></button>
                        </form>
                    </div>
                </div>
                <div className='noticeListBox'>
                    <table>
                        <colgroup>
                            <col className='w1' />
                            <col className='w2' />
                            <col className='w3' />
                            <col className='w4' />
                            <col className='w5' />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>분류</th>
                                <th>제목</th>
                                <th>조회</th>
                                <th>작성자</th>
                                <th>게시일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterDate.map(item => <NoticeList key={item.id} item={item} />)}
                        </tbody>
                    </table>
                </div>
                <p className='writeBtn'>
                    <button onClick={() => window.scrollTo({ top: 0 })}><Link to={'/notice/writing'}>글쓰기</Link> </button>
                </p>
                <div className='pagingBox'>
                    <i onClick={() => { setCurrentPage(1), clickLink() }}><AiOutlineDoubleLeft /></i>
                    <i onClick={() => { currentPage > 1 && setCurrentPage(currentPage - 1, clickLink()) }}><AiOutlineLeft /></i>
                    {paging.map(item => <span className={currentPage === item ? 'on' : ''} onClick={() => { setCurrentPage(item), currentPage !== item && clickLink() }} key={item}>{item}</span>)}
                    <i onClick={() => { currentPage < lastPageNum && setCurrentPage(currentPage + 1, clickLink()) }}><AiOutlineRight /></i>
                    <i onClick={() => { setCurrentPage(lastPageNum), clickLink() }}><AiOutlineDoubleRight /></i>
                </div>
            </div>

        </NoticeWrap>
    );
};

export default Notice;