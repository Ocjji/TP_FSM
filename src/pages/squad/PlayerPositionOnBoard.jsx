import React, { useEffect } from 'react';
import { PlayPositionStyle } from "../../styled/PlayGroundStyle";
import { useDispatch, useSelector } from "react-redux";

const PlayerPositionOnBoard = ({ item }) => {
    const { id, backno, positionNo } = item;
    const { playerData, selectPosition, loading } = useSelector(state => state.playerInfo);
    const pickPlayer = playerData.find(item => item.backno === backno);
    const { name, position, img } = pickPlayer;
    const hasHttp = img.includes('http');
    return (
        <PlayPositionStyle className={`${item.positionNo} onBoard`} >
            {
                hasHttp ? <img src={img} alt="" /> : <img src={`./images/player/${img}`} alt="" className="imgHover" />
            }
            <p>
                <span> No. {backno} </span>
                <strong> {name} </strong>
                <span> {position} </span>
            </p>
        </PlayPositionStyle >
    );
};

export default PlayerPositionOnBoard;