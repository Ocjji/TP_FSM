import React, { memo, useEffect, useState } from 'react';
import { PlayerItemPopup } from './../../styled/PlayerInfoStyles';
import { AiFillDelete, AiOutlineClose, AiFillEdit } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { isSelectPlayer, onDel, onEdit } from './../../store/modules/playerInfoSlice';
import { useNavigate } from 'react-router-dom';

const EditPlayerInfoItem = memo(() => {
    const dispatch = useDispatch()
    const { playerData, selectedItem } = useSelector(state => state.playerInfo)

    const [current, setCurrent] = useState({ id: '', fieldPlayer: "", name: '', img: '', teamNameKor: '', teamNation: '', birth: '', position: '', height: '', weight: '', appearances: '', goal: '', assists: '', Shot: '', effectiveShot: '', playTime: '' })
    // const { birth } = current
    const navigate = useNavigate()
    useEffect(() => {
        setCurrent(playerData.find(item => item.id === selectedItem.id))
    }, [])
    const { id, backno, fieldPlayers, name, img, teamNameKor, teamNation, birth, position, height, weight, appearances, goal, assists, Shot, effectiveShot, playTime } = current

    const changeInput = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setCurrent({
            ...current,
            [name]: value,
            [fieldPlayers]: true
        })
        console.log(current);
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(onEdit(current))
        navigate('/playerInfo')
    }
    const toggleEditmode = () => {
        dispatch(onEdit(selectedItem))
        dispatch(isSelectPlayer(null))
    }
    return (
        <PlayerItemPopup>
            <div className='popupTop'>
                <span>NO.<input type="text" value={backno} name="backno" onChange={changeInput} /> - {name}</span>
                <div className='iconWrap'>
                    <i><AiOutlineClose onClick={() => toggleEditmode()} /></i>
                </div>
            </div>
            {/* <form className='popupMain' > */}
            <form className='popupMain' onSubmit={onSubmit} >
                <img src={`./images/player/${img}`} alt="" />
                <div className='popupContent'>
                    <div className="popupLeft">
                        <p>
                            <input type="text" value={teamNameKor} name="teamNameKor" onChange={changeInput} />
                            <em><input type="text" value={teamNation} name="teamNation" onChange={changeInput} /></em>
                        </p>
                        <dl>
                            <dt>출생</dt>
                            <dd><input type="text" value={birth} name="birth" onChange={changeInput} /></dd>
                            <dt>포지션</dt>
                            <dd><input type="text" value={position} name="position" onChange={changeInput} /></dd>
                        </dl>
                        <dl>
                            <dt>키</dt>
                            <dd><input type="text" value={height} name="height" onChange={changeInput} /></dd>
                            <dt>몸무게</dt>
                            <dd><input type="text" value={weight} name="weight" onChange={changeInput} /></dd>
                        </dl>
                    </div>
                    <div className="popupRight">
                        {teamNation == "대한민국" ? <p>2023 시즌</p> : <p>22/23 시즌</p>}
                        <dl>
                            <dt>경기</dt>
                            <dd><input type="text" value={appearances} name="appearances" onChange={changeInput} /></dd>
                            <dt>득점</dt>
                            <dd><input type="text" value={goal} name="goal" onChange={changeInput} /></dd>
                            <dt>도움</dt>
                            <dd><input type="text" value={assists} name="assists" onChange={changeInput} /></dd>
                        </dl>
                        <dl>
                            <dt>슈팅</dt>
                            <dd><input type="text" value={Shot} name="Shot" onChange={changeInput} /></dd>
                            <dt>유효슈팅</dt>
                            <dd><input type="text" value={effectiveShot} name="effectiveShot" onChange={changeInput} /></dd>
                            <dt>출장시간</dt>
                            <dd><input type="text" value={playTime} name="playTime" onChange={changeInput} /></dd>
                        </dl>
                    </div>
                    <button type='submit'>수정완료</button>
                </div>

            </form>
        </PlayerItemPopup>
    );
});

export default EditPlayerInfoItem;