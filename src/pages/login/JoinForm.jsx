import React, { useState } from 'react';
import clause from '../../assets/api/joinClause'
import { JoinWrap } from '../../styled/LoginStyled';
const JoinForm = () => {
    //생년월일
    const birthYear = []
    for(let i=new Date().getFullYear(); i>=1940; i--){
        birthYear.push(i)
    }
    const birthMonth = []
    for(let i=1; i<=12; i++){
        birthMonth.push(i)
    }
    const birthDate=[]
    for(let i=1; i<=31; i++){
        birthDate.push(i)
    }

    //주소
    function sample4_execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                var roadAddr = data.roadAddress; // 도로명 주소 변수
                var extraRoadAddr = ''; // 참고 항목 변수

                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraRoadAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                   extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraRoadAddr !== ''){
                    extraRoadAddr = ' (' + extraRoadAddr + ')';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('sample4_postcode').value = data.zonecode;
                document.getElementById("sample4_roadAddress").value = roadAddr;
                document.getElementById("sample4_jibunAddress").value = data.jibunAddress;
                
                // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
                if(roadAddr !== ''){
                    document.getElementById("sample4_extraAddress").value = extraRoadAddr;
                } else {
                    document.getElementById("sample4_extraAddress").value = '';
                }

                var guideTextBox = document.getElementById("guide");
                // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
                if(data.autoRoadAddress) {
                    var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
                    guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
                    guideTextBox.style.display = 'block';

                } else if(data.autoJibunAddress) {
                    var expJibunAddr = data.autoJibunAddress;
                    guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
                    guideTextBox.style.display = 'block';
                } else {
                    guideTextBox.innerHTML = '';
                    guideTextBox.style.display = 'none';
                }
            }
        }).open();
    }

    //약관 체크박스
    const [clauseData, setClauseData] = useState(clause)
    
    const changeCheckbox=e=>{
        const {name, checked }=e.target
        if(name==='all'){
            setClauseData(clauseData.map(item=>({...item, isChk:checked})))
        }else{
            setClauseData(clauseData.map(item=>item.name===name?{...item, isChk:!item.isChk}:item))
        }
    }
    //약관보기
    const clasueShow =(id, isShow)=>{
        if(isShow){
            setClauseData(clauseData.map(item=>({...item, isShow:false})))

        }else{

            setClauseData(clauseData.map(item=>item.id===id?{...item, isShow:true}:{...item, isShow:false}))
        }
    } 
    //이메일
    const [emailAddr, setEmailAddr] = useState('')
    const emailInput = e=>{
        const {value} = e.target
        if(value !== 'type'){
            setEmailAddr(value)
        }else{
            setEmailAddr('')
        }
    }
    return (
        <JoinWrap>
            <h2>회원가입</h2>
            <div className="inner">

                <form action="">
                    <h4>기본정보<span><b>*</b>필수입력사항</span></h4>
                    
                    <table>
                        <colgroup>
                            <col className='w1'/>
                            <col className='w2'/>
                        </colgroup>
                        <tbody>
                            <tr>
                                <td><label htmlFor="userId"><b>*</b>아이디</label></td>
                                <td><input type="text" id='userId' placeholder='영소문자/숫자, 4~16자리' required className='w700' /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="userPw"><b>*</b>비밀번호</label> </td>
                                <td><input type="password" id='userPw' className='w700' placeholder='영문대소문자, 숫자, 특수문자( ~!#()-_+ )만 사용가능합니다.' required/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="userPw2"><b>*</b>비밀번호 확인</label> </td>
                                <td><input type="password" id='userPw2' placeholder='비밀번호를 재입력' required className='w700' /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='userName'><b>*</b>이름</label></td>
                                <td><input type='text' id='userName'  required className='w700'/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="userEmail"><b>*</b>이메일</label></td>
                                <td>
                                    <input type="email" id="userEmail" required className="w400" />
                                    <span>@</span>
                                    <input type="email" className="w230" value={emailAddr} onChange={emailInput}/>
                                    <select  onChange={emailInput} className='emailSelect'>
                                        <option value='type'>직접입력</option>
                                        <option value='naver.com'>naver.com</option>
                                        <option value='gmail.com'>gmail.com</option>
                                        <option value='hanmail.net'>hanmail.net</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="userTel"><b>*</b>휴대폰번호</label> </td>
                                <td className='telSelect'>
                                    <select name="" id="userTel" title='선택'>
                                        <option value="">010</option>
                                        <option value="">011</option>
                                        <option value="">016</option>
                                        <option value="">017</option>
                                        <option value="">018</option>
                                        <option value="">019</option>
                                    </select>
                                    <span>-</span>
                                    <input type="text" required className='w200'/>
                                    <span>-</span>
                                    <input type="text" required className='w200'/>
                                    <button type='button'>본인인증</button>    
                                </td>
                            </tr>
                            <tr>
                                <td>성별</td>
                                <td>
                                    <input type="radio" name='gender' id='man'/>
                                    <label htmlFor="man">남자</label>
                                    <input type="radio" name='gender' id='woman'/>
                                    <label htmlFor="woman">여자</label>
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="userBirth">생년월일</label> </td>
                                <td className='birthSelect'>
                                    <p>
                                        <select name="" id="userBirth" >
                                            <option value="">년도</option>
                                            {birthYear.map(item=><option key={item}> {item}</option>)}
                                        </select>
                                        <select name="" >
                                            <option value="">월</option>
                                            {birthMonth.map(item=><option key={item}> {item}</option>)}
                                        </select>
                                        <select name="" >
                                            <option value="">일</option>
                                            {birthDate.map(item=><option key={item}> {item}</option>)}
                                        </select>
                                    </p>
                                    <p>
                                        <input type="radio" name='bitrh' id='solar'/>
                                        <label htmlFor="solar">양력</label>
                                        <input type="radio" name='bitrh' id='lunar' />
                                        <label htmlFor="lunar">음력</label>

                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="userAddr">주소</label></td>
                                <td className='addInput'>
                                    <input type="text" id="sample4_postcode" placeholder="우편번호" className='w200'/>
                                    <input type="button" onClick={sample4_execDaumPostcode} value="우편번호 찾기" className='addrBtn'/><br/>
                                    <input type="text" id="sample4_roadAddress" placeholder="도로명주소" className='w400'/>
                                    <input type="text" id="sample4_jibunAddress" placeholder="지번주소" className='w500'/>
                                    <span id="guide" style={{color:"#999", display:"none"}}></span>
                                    <input type="text" id="sample4_detailAddress" placeholder="상세주소" className='w400'/>
                                    <input type="text" id="sample4_extraAddress" placeholder="참고항목" className='w500'/>
                                </td>
                            </tr>
                            <tr>
                                <td>개인정보 유효기간</td>
                                <td className='expiration'>
                                    <input type="radio" name='personalInfo' id='forWithdraw'/>
                                    <label htmlFor="forWithdraw">탈퇴시까지</label>
                                    <input type="radio" name='personalInfo' id='forYear' />
                                    <label htmlFor="forYear">1년</label>
                                    <p>* 개인정보 유효기간 경과이후 파기 또는 분리저장, 관리합니다.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>약관동의</h4>
                    {/* <div className='clasuseAll'>
                    </div> */}
                    <div className='clasuseSelect'>
                        <p>
                            <input type="checkbox" name='all' onChange={changeCheckbox} checked={clauseData.filter(item=>item.isChk===false).length<1}/>
                            <label htmlFor="">이용약관에 모두 동의합니다.</label>
                        </p>
                        <p>
                            <input type="checkbox"  onChange={changeCheckbox} checked={clauseData[0].isChk} name={clauseData[0].name}/>
                            <label htmlFor="">{clauseData[0].title}</label>
                            <span onClick={()=>clasueShow(clauseData[0].id, clauseData[0].isShow)}>약관보기</span>
                            <div className={clauseData[0].isShow?'on':''}>{clauseData[0].desc}</div>                        
                        </p>
                        <p>
                            <input type="checkbox"  onChange={changeCheckbox} checked={clauseData[1].isChk} name={clauseData[1].name}/>
                            <label htmlFor="">{clauseData[1].title}</label>
                            <span onClick={()=>clasueShow(clauseData[1].id, clauseData[1].isShow)}>약관보기</span>
                            <div className={clauseData[1].isShow?'on':''}>{clauseData[1].desc}</div>  
                        </p>
                        <p>
                            <input type="checkbox"  onChange={changeCheckbox} checked={clauseData[2].isChk} name={clauseData[2].name}/>
                            <label htmlFor="">{clauseData[2].title}</label>
                            <input type="checkbox"  onChange={changeCheckbox} checked={clauseData[3].isChk} name={clauseData[3].name}/>
                            <label htmlFor="">{clauseData[3].title}</label>
                            <span onClick={()=>clasueShow(clauseData[2].id, clauseData[2].isShow)}>약관보기</span>
                            <div className={clauseData[2].isShow?'on':''}>{clauseData[2].desc}</div>  
                        </p>
                    </div>
                    <p className='submitBtn'>
                        <button type='subnit'>회원가입</button>
                    </p>
                </form>
            </div>
          
        </JoinWrap>
    );
};

export default JoinForm;