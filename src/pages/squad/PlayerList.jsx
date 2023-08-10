import React, { useState } from 'react';
import PlayerItem from "./PlayerItem";
import { useDispatch, useSelector } from "react-redux";
import { PlayerListStyle } from "../../styled/PlayerList";
import { offPopupPlayerList, onAddPosition, onListSearch } from '../../store/modules/playerInfoSlice';

const PlayerList = () => {
    const { selectPositionViewData, selectPosition, selectPlayerDetail, selectPositionView } = useSelector(state => state.playerInfo);
    const { backno, name, img, teamNameKor, teamNation, birth, position, height, weight, appearances, cleanSheet, scoreSave, goalsConceded, playTime, goal, assists, Shot, effectiveShot } = selectPlayerDetail
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const listSearch = (e) => {
        e.preventDefault();
        dispatch(onListSearch(text));
        setText("");
    }
    const changeInput = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            {
                selectPosition &&
                <PlayerListStyle>
                    <button className='closeBtn' onClick={() => dispatch(offPopupPlayerList())}>x</button>
                    <div className='pls_left'>
                        <div className='pls_left_top'>
                            <h3>{selectPositionView}</h3>
                            <span>* 선수 검색을 통해 다른 포지션 선수를 추가할 수 있습니다</span>
                            <form className='searchWrap' onSubmit={(e) => listSearch(e)}>
                                <input type="text" name="" id="" placeholder='선수를 검색해주세요' value={text} onChange={(e) => changeInput(e)} />
                            </form>
                        </div>
                        <div className="playerSelectList">
                            <ul>
                                {
                                    selectPositionViewData.map(item => <PlayerItem key={item.id} item={item} />)
                                }
                                {
                                    !selectPositionViewData.length && <b style={{ fontSize: "24px", textAlign: "center" }}> 결과값이 없습니다 <button onClick={() => dispatch(onListSearch(""))}> 리스트 보기 </button></b>

                                }

                            </ul>

                        </div>
                    </div>
                    <div className='pls_right'>
                        <div className='pls_right_top'>
                            <h3>선수정보</h3>
                            <div className="btnWrap">
                                <button onClick={() => dispatch(onAddPosition(backno))}>선택</button>
                            </div>
                        </div>
                        <div className='selectPlayerBox'>
                            <div className='imgWrap'>
                                {
                                    img ?
                                        (
                                            img.includes('http') ? <img src={img} alt="" /> : <img src={`./images/player/${img}`} alt="" className="imgHover" />
                                        )
                                        :
                                        < img src="./images/Squad/emptyPlayer.png" alt="정보없음" className='imgNone' />
                                }

                            </div>

                            <div className='selectinfo'>
                                {
                                    backno &&
                                    <>
                                        <p><span> No. <strong><b>{backno}</b></strong></span><strong> {name} </strong></p>
                                        <p><span>포지션</span><strong>{position}</strong></p>
                                        <p><span>출생</span><strong>{birth}</strong></p>
                                        <p><span>키</span><strong>{height}</strong>cm</p>
                                        <p><span>몸무게</span><strong>{weight}</strong>kg</p>
                                        <div className="popupRight_GK">
                                            {teamNation == "대한민국" ? <p>2023 시즌</p> : <p>22/23 시즌</p>}
                                            {
                                                selectPosition == "11" ? (
                                                    <>
                                                        <p><span>경기</span><strong>{appearances}</strong>경기</p>
                                                        <p><span>선방</span><strong>{scoreSave}</strong>회</p>
                                                        <p><span>실점</span><strong>{goalsConceded}</strong>점</p>
                                                        <p><span>경기당실점</span><strong>{(goalsConceded / appearances).toFixed(2)}</strong>점</p>
                                                        <p> <span>무실점경기</span><strong>{cleanSheet}</strong>경기</p>
                                                        <p><span>출장시간</span><strong>{playTime}</strong>분</p>
                                                    </>
                                                )
                                                    : (
                                                        <>
                                                            <p><span>경기</span><strong>{appearances}</strong>경기</p>
                                                            <p><span>득점</span><strong>{goal}</strong>득점</p>
                                                            <p><span>도움</span><strong>{assists}</strong>도움</p>
                                                            <p><span>공격포인트</span><strong>{goal + assists}</strong>포인트</p>
                                                            <p> <span>슈팅</span><strong>{Shot}</strong>회</p>
                                                            <p><span>유효슈팅</span><strong>{effectiveShot}</strong>회</p>
                                                            <p><span>경기당득점</span><strong>{(goal / appearances).toFixed(2)}</strong>득점</p>
                                                            <p><span>출장시간</span><strong>{playTime}</strong>분</p>
                                                        </>
                                                    )
                                            }
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </PlayerListStyle>
            }
        </>
    );
};

export default PlayerList;