import React, { useEffect, useRef, useState } from 'react';
import { NoticeAddForm } from '../../styled/NoticeStyled';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onUpdate } from '../../store/modules/noticeSlice';
import SquadOnBoard from '../squad/SquadOnBoard';

const NoticeEdit = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const titleRef = useRef()
    const categoryRdf = useRef()
    const contentRef = useRef()
    const { editData } = useSelector(state => state.noticeR);
    const [userEdit, setUserEdit] = useState(editData)
    const {id, title, content, category,categoryName,squad} = userEdit

    console.log(editData)

    const changeInput =e=>{
        const {value, name} = e.target
        setUserEdit({...userEdit, [name]:value})
    }
    const changeSelect=e=>{
        const {value} = e.target
        console.log(value)
        if(value === 'my_squad'){
            setUserEdit({...userEdit, category:value, categoryName:'나만의 스쿼드'})
        }else if(value === 'free_board'){
            setUserEdit({...userEdit, category:value, categoryName:'자유게시판'})
        }else{
            setUserEdit({...userEdit, category:'', categoryName:''})
        }
    }
    const onSubmit = e=>{
        e.preventDefault()
        if(!title || !content|| !category){
            if(!title){
                alert('제목을 입력해주세요')
                titleRef.current.focus()
            }
            else if(!content){
                alert('내용을 입력해주세요')
                contentRef.current.focus()
            }
            else if(!category){
                alert('게시물 종류를 선택해주세요')
                categoryRdf.current.focus()
            }
        }else{
            dispatch(onUpdate(userEdit))
            navigate(`/notice/${id}`)
        }
    }
    return (
        <NoticeAddForm>
            <div className="inner">
                <h3>글쓰기</h3>
                <form action="" onSubmit={onSubmit}>
                    <p className='titleInput'>
                        <strong>{categoryName}</strong>
                        {/* <select name="category" id="" onChange={changeSelect} ref={categoryRdf} placeholder='선택' >
                            <option value="">분류</option>
                            <option value="my_squad">나만의 스쿼드</option>
                            <option value="free_board">자유게시판</option>
                        </select> */}
                        <input type="text" placeholder='제목을 입력해 주세요.' value={title} name='title' onChange={changeInput} ref={titleRef}/>
                    </p>
                    <div className="squadBox">
                        {/* 스쿼드메이커 불러오기 */}
                        {squad && <SquadOnBoard squad={squad}/>}
                    </div>
                    <p className='contentBox'>
                        <textarea rows={30} placeholder='내용을 입력해주세요.' value={content} name='content' onChange={changeInput} ref={contentRef}/>
                    </p>
                    <p className='btnWrap'>
                        <button type='submit' className='submitBtn'><span>수정</span></button>
                        <button type='button' onClick={()=>navigate(-1)}><span>취소</span></button>
                    </p>
                </form>
            </div>
        </NoticeAddForm>
    );
};

export default NoticeEdit;