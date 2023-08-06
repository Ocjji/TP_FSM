import React, { useRef, useState } from 'react';
import { NoticeAddForm } from '../../styled/NoticeStyled';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onAdd } from '../../store/modules/noticeSlice';
import PlayerPosition from '../squad/PlayerPosition';

const NoticeAddSauad = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const titleRef = useRef()
    const categoryRdf = useRef()
    const contentRef = useRef()
    const [userWrite, setUserWrite] = useState({title:'', content:'', category:'my_squad',categoryName:'나만의 스쿼드', date:''})
    const {title,content,category,categoryName,date,userName} = userWrite
    const now= new Date()
    const y = now.getFullYear()
    const m = now.getMonth()+1 < 10 ? '0'+(now.getMonth()+1) : now.getMonth()+1
    const d = now.getDate()
    const changeInput = e=>{
        const {value, name} = e.target
        setUserWrite({...userWrite, [name]:value, date:`${y}.${m}.${d}`})
    }
    const changeSelect =e=>{
    //     const {value} = e.target
    //     if(value === 'my_squad'){
    //         setUserWrite({...userWrite, category:value, categoryName:'나만의 스쿼드'})
    //     }else if(value === 'free_board'){
    //         setUserWrite({...userWrite, category:value, categoryName:'자유게시판'})
    //     }else{
    //         setUserWrite({...userWrite, category:'', categoryName:''})
    //     }  
    }

    const onSubmit=e=>{
        e.preventDefault()
        if(!title || !content){
            if(!title){
                alert('제목을 입력해주세요')
                titleRef.current.focus()
            }
            else if(!content){
                alert('내용을 입력해주세요')
                contentRef.current.focus()
            }
        }else{
            dispatch(onAdd(userWrite))
            navigate('/notice')
        }
    }
    return (
        <NoticeAddForm>
            <div className="inner">
                <h3>글쓰기</h3>
                <form action="" onSubmit={onSubmit}>
                    <p className='titleInput'>
                        <select name="category" id="" onChange={changeSelect} ref={categoryRdf}>
                            {/* <option value="">분류</option> */}
                            <option value="my_squad">나만의 스쿼드</option>
                            {/* <option value="free_board">자유게시판</option> */}
                        </select>
                        <input type="text" placeholder='제목을 입력해 주세요.' value={title} name='title' onChange={changeInput} ref={titleRef}/>
                    </p>
                    <p>
                        스쿼드메이커 불러오기
                    </p>
                    <p className='contentBox'>
                        <textarea rows={30} placeholder='내용을 입력해주세요.' value={content} name='content' onChange={changeInput} ref={contentRef}/>
                    </p>
                    <p className='btnWrap'>
                        <button type='submit' className='submitBtn'><span>작성</span></button>
                        <button type='button' onClick={()=>navigate(-1)}><span>취소</span></button>
                    </p>
                </form>
            </div>
        </NoticeAddForm>
    );
};

export default NoticeAddSauad;