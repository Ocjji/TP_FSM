import React from 'react';
import PlayerItem from "./PlayerItem";

import { useDispatch, useSelector } from "react-redux";
import { PlayerListStyle } from "../../styled/PlayerList";
import { onAddPosition } from '../../store/modules/playerInfoSlice';

const PlayerList = () => {
    const { selectPositionViewData, selectPosition, selectPlayerDetail,selectPositionView } = useSelector(state => state.playerInfo);
    const {backno,name,birth,position,height,weight,img} = selectPlayerDetail;
    const dispatch = useDispatch();
    return (
        <>
            {
                selectPosition &&
                <PlayerListStyle>
                    <div className='pls_left'>
                        <div className='pls_left_top'>
                            <h2>{selectPositionView}</h2>
                            <div className='searchWrap'>
                                <input type="text" name="" id="" placeholder='선수를 검색해주세요' />
                            </div>
                        </div>
                        <ul className="playerSelectList">
                            {
                                selectPositionViewData.map(item => <PlayerItem key={item.id} item={item} />)
                            }
                        </ul>
                    </div>
                    <div className='pls_right'>
                        <div className='pls_right_top'>
                            <h2>선수정보</h2>
                            <div className='btnWrap'>
                                <button onClick={()=>dispatch(onAddPosition(backno))}>선택</button>
                            </div>
                        </div>
                        <div className='selectPlayerBox'>
                            <img src={`./images/player/${img}`} alt="" />
                            <p>
                                <span> No. {backno}</span>
                                <strong> {name} </strong>
                                <span><strong>출생</strong>{birth}</span>
                                <span><strong>포지션</strong>{position}</span>
                                <span><strong>키</strong>{height}cm</span>
                                <span><strong>몸무게</strong>{weight}kg</span>
                            </p>
                        </div>
                    </div>
                </PlayerListStyle>
            }
        </>
    );
};

export default PlayerList;