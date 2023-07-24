import React, { memo, useEffect } from 'react';
import { PlayerItemPopup } from './../../styled/PlayerInfoStyles';
import { AiFillDelete, AiOutlineClose, AiFillEdit } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { isSelectPlayer, onDel, onEdit } from './../../store/modules/playerInfoSlice';

const GKPlayerInfoPopup = memo(() => {
    const dispatch = useDispatch()
    const { selectedItem } = useSelector(state => state.playerInfo)
    const { backno, name, img, teamNameKor, teamNation, birth, position, height, weight, appearances, cleanSheet, scoreSave, goalsConceded, playTime } = selectedItem
    const deletePlayerData = () => {
        dispatch(onDel(selectedItem))
        dispatch(isSelectPlayer(null))
    }
    const toggleEditmode = () => {
        dispatch(onEdit(selectedItem))
    }
    return (
        <PlayerItemPopup>
            <div className='popupTop'>
                <span>NO.{backno} - {name}</span>
                <div className='iconWrap'>
                    <i><AiFillEdit onClick={toggleEditmode} /></i>
                    <i><AiFillDelete onClick={deletePlayerData} /></i>
                    <i><AiOutlineClose onClick={() => dispatch(isSelectPlayer(null))} /></i>
                </div>
            </div>
            <div className='popupMain'>
                <img src={`./images/player/${img}`} alt="" />
                <div className='popupContent'>
                    <div className="popupLeft">
                        <p>{teamNameKor}<em>({teamNation})</em></p>
                        <dl>
                            <dt>출생</dt>
                            <dd>{birth}</dd>
                            <dt>포지션</dt>
                            <dd>{position}</dd>
                        </dl>
                        <dl>
                            <dt>키</dt>
                            <dd>{height}cm</dd>
                            <dt>몸무게</dt>
                            <dd>{weight}kg</dd>
                        </dl>
                    </div>
                    <div className="popupRight_GK">
                        {teamNation == "대한민국" ? <p>2023 시즌</p> : <p>22/23 시즌</p>}
                        <dl>
                            <dt>경기</dt>
                            <dd>{appearances}</dd>
                            <dt>선방</dt>
                            <dd>{scoreSave}</dd>
                            <dt>실점</dt>
                            <dd>{goalsConceded}</dd>
                        </dl>
                        <dl>
                            <dt>경기당실점</dt>
                            <dd>{(goalsConceded / appearances).toFixed(2)}</dd>
                            <dt>무실점경기</dt>
                            <dd>{cleanSheet}</dd>
                            <dt>출장시간</dt>
                            <dd>{playTime}분</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </PlayerItemPopup>
    );
});

export default GKPlayerInfoPopup;