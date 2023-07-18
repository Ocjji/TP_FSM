import React, { useState } from 'react';
import JoinForm from './JoinForm';
const checkData = [
    {id:1, name:'chk1', text:'[필수] 대한축구협회 이용약관', isChk:false, desc:"test1"},
    {id:2, name:'chk2', text:'[필수] 전자금융거래 이용약관', isChk:false, desc:"test2"},
    {id:3, name:'chk3', text:'[필수] 개인정보 수집 동의서', isChk:false, desc:"test3"},
    {id:4, name:'chk4', text:'[선택] 개인정보 수집 동의서' , isChk:false, desc:"test4"},
    {id:5, name:'chk5', text:'[선택] 위치기반 서비스 이용약관' , isChk:false, desc:"test5"},
    {id:6, name:'chk6', text:'[선택] 마케팅 활용 전체 동의' , isChk:false, desc:"test6"}
]
const Join = () => {


    const [onShow,setOnShow] = useState(1)

    const [data, setData] = useState(checkData)
    const changeInput =e=>{
        const { name, checked} = e.target
        if(name === 'all'){
            setData(data.map(item=>({...item, isChk:checked})))
        }else{
            setData(data.map(item=>item.name===name?{...item, isChk:checked}:item))
        }
    }
    const onSubmit=e=>{
        e.preventDefault()
        
        if(data[0].isChk && data[1].isChk && data[2].isChk ){
            setOnShow(2)
        }else{
            alert('필수 이용 약관에 동의해주세요')
        }
    }
    return (
        <div>
            {/* <div className="inner">
                <h2>회원가입</h2>
                {
                    onShow ===1 &&
                    <form onSubmit={onSubmit}>
                        <input type="checkbox" name='all' onChange={changeInput} checked={data.filter(item=>item.isChk === false).length < 1} />
                        <label>약관 전체 동의</label>
                        {
                            data.map(item=><p key={item.id}>
                                <input type='checkbox' name={item.name} checked={item.isChk} onChange={changeInput}/>
                                <label>{item.text}</label>
                            </p>)
                        }
                        <button>약관동의 및 회원가입하기</button>
                    </form>
                }
                {
                    onShow ===2 &&
                    <JoinForm/>
                }
            </div> */}
        </div>
    );
};

export default Join;