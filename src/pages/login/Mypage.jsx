import React from 'react';
import { MypageStyle } from '../../styled/LoginStyled';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Mypage = () => {
    const {currentUser} = useSelector(state=>state.authorityR)
    const {userName,userId ,userEmail,userPhone} = currentUser
    return (
        <MypageStyle>
            <h2>마이페이지</h2>
            <div className='inner'>
                <table>
                    <colgroup>
                        <col className='w1'/>
                        <col className='w2'/>
                        <col className='w3'/>
                    </colgroup>    
                    <tbody>
                        <tr className='firstTr'>
                            <td rowSpan={4}><h3>내 정보</h3></td>
                            <td>아이디</td>
                            <td>{userId}</td>
                        </tr>
                        <tr>
                            <td>이름</td>
                            <td>{userName}</td>
                        </tr>
                        <tr>
                            <td>전화번호</td>
                            <td>{userPhone}</td>
                        </tr>
                        <tr className='lastTr'>
                            <td>이메일</td>
                            <td>{userEmail}</td>
                        </tr>
                    </tbody>
                </table>     
                <p>
                    <button><Link>탈퇴하기</Link></button>           

                </p>
            </div>
        </MypageStyle>
    );
};

export default Mypage;