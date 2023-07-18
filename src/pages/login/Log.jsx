import React, { useState } from 'react';
import { LoginWrap } from '../../styled/LoginStyled';
import { useNavigate } from 'react-router-dom';

const Log = () => {

    const [user, setUser] = useState({userID:'', userPW:''})
    const [userFind, setUserFind] = useState(0)
    const {userID, userPW} = user
    const changeInput =e=>{
        const {value, name} = e.target
        setUser({...user, [name]:value})
    }
    const onSubmit =e=>{
        e.preventDefault()
    }

    const navigate = useNavigate()
    return (
        <LoginWrap>
                <h2>로그인</h2>
                <form onSubmit={onSubmit} className='login'>
                    <input type="text" value={userID} name='userID' onChange={changeInput} placeholder='아이디'/>
                    <input type="text" value={userPW} name='userPW' onChange={changeInput} placeholder='비밀번호'/>
                    <button type='submit'>로그인</button>
                </form>
                <p className='findBtn'><span onClick={()=>setUserFind(1)}>아이디 찾기</span><span onClick={()=>setUserFind(2)}>비밀번호 찾기</span><span onClick={()=>navigate('/join')}>회원가입</span></p>
                {
                    userFind === 1 &&
                    <div className='idFindPopup popupBox'>
                        <div className='bg'></div>
                        <div className='popup'>
                            <h4>아이디 찾기</h4>
                            <p className='title'><span className='on'>아이디찾기</span><span onClick={()=>setUserFind(2)}>비밀번호 찾기</span></p>
                            <p>
                                <strong>인증방법</strong>
                                <input type="radio" checked />
                                <label htmlFor="">휴대폰 인증</label>
                            </p>
                            <p className='certification'>
                                <input type="text" placeholder='본인명의 휴대폰으로 가입한 아이디 찾기'/>
                                <button className='certificationBtn'>인증하기</button>
                            </p>
                            <p className='btnWrap'><button onClick={()=>setUserFind(0)} className='closeBtn'>닫기</button><button>확인</button></p>
                        </div>
                    </div>
                }
                {
                    userFind === 2 &&
                    <div className='pwFindPopup popupBox'>
                        <div className='bg'></div>
                        <div className='popup'>
                            <h4>비밀번호 찾기</h4>
                            <p className='title'><span onClick={()=>setUserFind(1)}>아이디찾기</span><span className='on'>비밀번호 찾기</span></p>
                            <p>
                                <strong>인증방법</strong>
                                <input type="radio" checked />
                                <label htmlFor="">휴대폰 인증</label>

                            </p>
                            <p className='textID'>
                                <label htmlFor="">아이디</label>
                                <input type="text" placeholder='아이디입력'/>
                            </p>
                            <p className='certification'>
                                <input type="text" placeholder='휴대폰 본인인증으로 비밀번호 찾기'/>
                                <button className='certificationBtn'>인증하기</button>
                            </p>
                            <p className='btnWrap'><button onClick={()=>setUserFind(0)} className='closeBtn'>닫기</button><button>확인</button></p>
                        </div>
                    </div>
                }
        </LoginWrap>
    );
};

export default Log;