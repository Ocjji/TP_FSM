import React, { memo, useState } from 'react';
import { AddPlayerInfoText, AddPlayerWrap } from './../../styled/AddPlayerStyles';
// import { onAdd } from '../store/modules/playerInfoSlice';
import { onAdd } from './../../store/modules/playerInfoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PlayerInfoBar } from './../../styled/PlayerInfoStyles';

const AddPlayerData = memo(() => {
    const { playerData } = useSelector(state => state.playerInfo)
    const navigate = useNavigate()
    console.log(playerData);
    const [addPlayer, setAddsetPlayer] = useState('')
    const dispatch = useDispatch()
    const [fieldPlayers, setFieldPlayers] = useState('')
    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [birth, setBirth] = useState('')
    const [position, setPosition] = useState('FW')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [teamNameKor, setTeamNameKor] = useState('')
    const [teamNation, setTeamNation] = useState('')
    const [appearances, setAppearances] = useState('')
    const [goal, setGoal] = useState('')
    const [assists, setAssists] = useState('')
    const [playTime, setPlayTime] = useState('')
    const [Shot, setShot] = useState('')
    const [effectiveShot, setEffectiveShot] = useState('')
    const [activePlayer, setActivePlayer] = useState(null)
    const [scoreSave, setScoreSave] = useState('')
    const [goalsConceded, setGoalsConceded] = useState('')
    const [cleanSheet, setCleanSheet] = useState('')
    const [IncludeMySquad, setIncludeMySquad] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        if (!name || !position || !height || !weight) return
        dispatch(onAdd({ img, fieldPlayers, name, birth, position, height, weight, teamNameKor, teamNation, appearances, goal, assists, playTime, Shot, effectiveShot, activePlayer, scoreSave, goalsConceded, cleanSheet, IncludeMySquad }))
        navigate('/')
    }
    const isSelectPosition = e => {
        const selectPosition = e.target.value
        setPosition(selectPosition)
        setFieldPlayers(position === "GK" ? false : true)
    }
    const activePlayerChange = e => {
        const value = event.target.value === 'true'; // 'true' 문자열을 불리언 값으로 변환
        setActivePlayer(value);
    }
    return (
        <AddPlayerWrap>
            <div className="inner">
                <PlayerInfoBar>
                    <h3>선수추가</h3>
                </PlayerInfoBar>
                <form onSubmit={(e) => onSubmit(e)}>
                    <AddPlayerInfoText>
                        <div className='addPlayerInfoLeft'>
                            <label>이미지 주소</label>
                            <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
                            <label htmlFor="">이름</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                            <label htmlFor="">생년월일</label>
                            <input type="text" value={birth} onChange={(e) => setBirth(e.target.value)} />
                            <label htmlFor="">포지션</label>
                            {/* <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} /> */}
                            <select name="position" id="position" value={position} onChange={isSelectPosition}>
                                <option value="FW">FW</option>
                                <option value="MF">MF</option>
                                <option value="DF">DF</option>
                                <option value="GK">GK</option>
                            </select>
                            <label htmlFor="">키</label>
                            <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} required />
                            <label htmlFor="">몸무게</label>
                            <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} required />
                            <label htmlFor="">소속팀명</label>
                            <input type="text" value={teamNameKor} onChange={(e) => setTeamNameKor(e.target.value)} />
                            <label htmlFor="">소속팀국가</label>
                            <input type="text" value={teamNation} onChange={(e) => setTeamNation(e.target.value)} />
                        </div>
                        <div className='addPlayerInfoRight'>
                            {
                                position && position === "GK" ? (
                                    <>
                                        <label htmlFor="">경기</label>
                                        <input type="text" value={appearances} onChange={(e) => setAppearances(e.target.value)} />
                                        <label htmlFor="">선방</label>
                                        <input type="text" value={scoreSave} onChange={(e) => setScoreSave(e.target.value)} />
                                        <label htmlFor="">실점</label>
                                        <input type="text" value={goalsConceded} onChange={(e) => setGoalsConceded(e.target.value)} />
                                        <label htmlFor="">무실점경기</label>
                                        <input type="text" value={cleanSheet} onChange={(e) => setCleanSheet(e.target.value)} />
                                        <div>
                                            <label htmlFor="">현역선수 여부</label>
                                            <input type="radio" name="activePlayer" id="activePlayerTrue" value='true' onChange={activePlayerChange} checked={activePlayer === true} />현역
                                            <input type="radio" name="activePlayer" id="activePlayerFalse" value='false' onChange={activePlayerChange} checked={activePlayer === false} />은퇴
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <label htmlFor="">경기</label>
                                        <input type="text" value={appearances} onChange={(e) => setAppearances(e.target.value)} />
                                        <label htmlFor="">득점</label>
                                        <input type="text" value={goal} onChange={(e) => setGoal(e.target.value)} />
                                        <label htmlFor="">도움</label>
                                        <input type="text" value={assists} onChange={(e) => setAssists(e.target.value)} />
                                        <label htmlFor="">슈팅</label>
                                        <input type="text" value={playTime} onChange={(e) => setPlayTime(e.target.value)} />
                                        <label htmlFor="">유효슈팅</label>
                                        <input type="text" value={Shot} onChange={(e) => setShot(e.target.value)} />
                                        <label htmlFor="">출장시간</label>
                                        <input type="text" value={effectiveShot} onChange={(e) => setEffectiveShot(e.target.value)} />
                                        <div>
                                            <label htmlFor="">현역선수 여부</label>
                                            <input type="radio" name="activePlayer" id="activePlayerTrue" value='true' onChange={activePlayerChange} checked={activePlayer === true} />현역
                                            <input type="radio" name="activePlayer" id="activePlayerFalse" value='false' onChange={activePlayerChange} checked={activePlayer === false} />은퇴
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </AddPlayerInfoText>
                    <div className='btnWrap'>
                        <button type='submit'>추가</button>
                    </div>
                </form>
            </div>
        </AddPlayerWrap>
    );
});

export default AddPlayerData;