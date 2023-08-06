import React from 'react';
import { NoticeDetailWrap } from '../../styled/NoticeStyled';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onDel, onEdit } from '../../store/modules/noticeSlice';

const NoticeDetail = () => {
    const {noticeID} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {data} = useSelector(state=>state.noticeR)
    const currentDate = data.find(item=>item.id===Number(noticeID))
    const {id, categoryName, title, userName, date, view, content} = currentDate
    return (
        <NoticeDetailWrap>
            <div className="inner">
                <table>
                    <colgroup>
                        <col className='w1'/>
                        <col className='w2'/>
                        <col className='w3'/>
                        <col className='w4'/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <td className='th'>제목</td>
                            <td colSpan={3}>{title}</td>
                        </tr>
                        <tr>
                            <td className='th'>분류</td>
                            <td>{categoryName}</td>
                            <td className='th'>작성일</td>
                            <td>{date}</td>
                        </tr>
                        <tr>
                            <td className='th'>작성자</td>
                            <td>{userName}</td>
                            <td className='th'>조회수</td>
                            <td>{view}</td>
                        </tr>
                        <tr>
                            <td colSpan={4}>스쿼드메이커불러오기</td>
                        </tr>
                        <tr >
                            <td colSpan={4}>{content}</td>
                        </tr>
                    </tbody>
                </table>
                <p className='btnWrap'>
                    <button onClick={()=>navigate('/notice')}><span>목록</span> </button>
                    <button className='editBtn'onClick={()=>{navigate('/notice/edit'), dispatch(onEdit(currentDate))}}><span>수정</span></button>
                    <button onClick={()=>{dispatch(onDel(id)), navigate('/notice')}}><span>삭제</span></button>
                </p>
            </div>
        </NoticeDetailWrap>
    );
};

export default NoticeDetail;