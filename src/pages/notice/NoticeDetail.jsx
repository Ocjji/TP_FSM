import React from 'react';
import { NoticeDetailWrap } from '../../styled/NoticeStyled';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NoticeDetail = () => {
    const {noticeID} = useParams()
    const {data} = useSelector(state=>state.noticeR)
    const currentDate = data.find(item=>item.id===Number(noticeID))
    console.log(currentDate)
    const {id,category, categoryName, title, userName, date, view, content} = currentDate
    return (
        <NoticeDetailWrap>
            <div className="inner">
                {/* <table>
                    <colgroup>
                        <col className='w1'/>
                        <col className='w2'/>
                    </colgroup>
                </table> */}
                <h3>{title}</h3>
            </div>
        </NoticeDetailWrap>
    );
};

export default NoticeDetail;