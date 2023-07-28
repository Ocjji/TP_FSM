import React from 'react';
import PlayerItem from "./PlayerItem";

import { useSelector } from "react-redux";
import { PlayerListStyle } from "../../styled/PlayerList";

const PlayerList = () => {
    const { playerData, selectPosition } = useSelector(state => state.playerInfo);

    return (
        <>
            {
                selectPosition &&
                <PlayerListStyle>
                    <div className='pls_left'>
                        <div className='pls_left_top'>
                            <h2>선택한 선수 포지션 들어가야함</h2>
                            <div className='searchWrap'>
                                <input type="text" name="" id="" placeholder='선수를 검색해주세요' />
                            </div>
                        </div>
                        <ul className="playerSelectList">
                            {
                                playerData.map(item => <PlayerItem key={item.id} item={item} />)
                            }
                        </ul>
                    </div>
                    <div className='pls_right'>
                        <div className='pls_right_top'>
                            <h2>선수정보</h2>
                            <div className='btnWrap'>
                                <button>선택</button>
                            </div>
                        </div>
                        <div className='selectPlayerBox'>
                            <img src='./images/player/KangInLee.png' alt="" />
                            <p>
                                <span> No. 1</span>
                                <strong> 이명박 </strong>
                                <span><strong>출생</strong>2000.01.01</span>
                                <span><strong>포지션</strong>MF</span>
                                <span><strong>키</strong>198cm</span>
                                <span><strong>몸무게</strong>90kg</span>
                            </p>
                        </div>
                    </div>
                </PlayerListStyle>
            }
        </>
    );
};

export default PlayerList;