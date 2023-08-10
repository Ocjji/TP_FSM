import React, { useEffect, useState } from 'react';
import { PlayerInfoCalStyle } from "../../styled/PlayGroundStyle";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { onSquadReset } from '../../store/modules/playerInfoSlice';

const PlayerInfoCal = () => {
    const { currentSetData, playerData } = useSelector(state => state.playerInfo);
    const [avgHeight, setHeight] = useState(0);
    const [avgWeight, setWeight] = useState(0);
    const [avgAge, setAge] = useState(0);
    // console.log(currentSetData)
    let convertData = currentSetData.filter(item => item.backno !== null);
    convertData = convertData.map(item => playerData.find(player => player.backno === item.backno));

    const dispatch = useDispatch();
    // console.log(convertData);

    const playerNum = convertData.length;
    useEffect(() => {
        if (playerNum !== 0) {
            setHeight((convertData.reduce((acc, cur) =>
                acc + Number(cur.height), 0) / playerNum).toFixed(0));

            setWeight((convertData.reduce((acc, cur) =>
                acc + Number(cur.weight), 0) / playerNum).toFixed(0));

            setAge((convertData.reduce((acc, cur) =>
                acc + Number(2023 - cur.birth.substr(0, 4) + 1), 0) / playerNum).toFixed(0));
        }
    }, [currentSetData]);

    return (
        <PlayerInfoCalStyle>
            <div className="playerInfoCalculator">
                <div className="cal-wrap">
                    <p><strong>평균 신장</strong> <span>{avgHeight} cm</span></p>
                    <p><strong>평균 몸무게</strong> <span>{avgWeight} kg</span></p>
                    <p><strong>평균 나이</strong> <span>{avgAge} 세</span></p>
                </div>
                {/* <div className='squad-info'>
                    <p><strong>무엇을 쓸까요</strong> <span>0</span></p>
                    <p><strong>무엇을 쓸까요</strong> <span>0</span></p>
                    <p><strong>무엇을 쓸까요</strong> <span>0</span></p>
                    <p><strong>무엇을 쓸까요</strong> <span>0</span></p>
                </div> */}
                <div className='personnel'>
                    <p><strong>선수 인원</strong><span>{playerNum}</span> / 11</p>
                </div>
            </div>
            <p className='btnWrap'>
                <button className="squadReset" onClick={() => dispatch(onSquadReset())}><Link to="">스쿼드 초기화</Link></button>
                <button onClick={() => window.scrollTo({ top: 0 })}><Link to={'/notice/writing/squad'}>게시글 작성</Link></button>
            </p>
        </PlayerInfoCalStyle>
    );
};

export default PlayerInfoCal;