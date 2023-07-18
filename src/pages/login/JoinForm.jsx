import React from 'react';

const JoinForm = () => {
    const birthYear = []
    for(let i=new Date().getFullYear(); i>=1940; i--){
        birthYear.push(i)
    }
    const birthMonth = []
    for(let i=1; i<=12; i++){
        birthMonth.push(i)
    }
    const birthDate=[]
    for(let i=1; i<31; i++){
        birthDate.push(i)
    }
    return (
        <div>
            <form action="">

            </form>
            {/* <h2>회원가입</h2>
            <p>기본정보</p>
            <form action="">
                <input type="checkbox" />
                <label>만 14세 미만입니다.</label>
                <table>
                    <colgroup>
                        <col className='w1'/>
                        <col className='w2'/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <td><label htmlFor='userName'>이름</label></td>
                            <td><input type='text' id='userName' placeholder='이름' required/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="userId">아이디</label> </td>
                            <td><input type="text" id='userId' placeholder='아이디' required/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="userPw">비밀번호</label> </td>
                            <td><input type="password" id='userPw' placeholder='영문대소문자, 숫자, 특수문자( ~!#()-_+ )만 사용가능합니다.' required/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="userPw2">비밀번호 확인</label> </td>
                            <td><input type="password" id='userPw2' placeholder='비밀번호를 재입력' required/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="userTel">휴대폰번호</label> </td>
                            <td><input type="text" id='userTel' placeholder='휴대전화번호' required/></td>
                            <td><input type="text" id='userTel' placeholder='휴대전화번호' required/></td>
                            <td><input type="text" id='userTel' placeholder='휴대전화번호' required/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="userEmail">이메일</label> </td>
                            <td><input type="email" id='userEmail' placeholder='공백없이 입력해주세요' required/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="userDate">생년월일</label> </td>
                            <td><input type="" id='userDate' required/></td>
                        </tr>
                        <tr>
                            <td>성별</td>
                            <td>
                                <input type="radio" name='gender' id='man' checked/>
                                <label htmlFor="man">남자</label>
                                <input type="radio" name='gender' id='woman'/>
                                <label htmlFor="woman">여자</label>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="userId">개인정보 유효기간</label> </td>
                            <td>
                                <input type="radio" id='userId' placeholder='아이디' required/>
                                <label htmlFor="">탈퇴시까지</label>
                                <input type="radio" id='userId' placeholder='아이디' required/>
                                <label htmlFor="">1년</label>
                                <p>*개인정보 유효기간 경과이후 파기 또는 분리저장, 관리합니다.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="checkbox" />
                <label>SNS, 이메일로 상품 및 이벤트 정보를 받겠습니다. (선택)</label>
                <button type='submit'>가입완료</button>
            </form> */}
        </div>
    );
};

export default JoinForm;