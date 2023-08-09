import React from 'react';
import { PlayPositionStyle } from "../../styled/PlayGroundStyle";
import { useDispatch, useSelector } from "react-redux";
import { onSelectPosition } from "../../store/modules/playerInfoSlice";

const PlayerPosition = ({ item }) => {
    const { id, backno, positionNo } = item;
    const { playerData, selectPosition } = useSelector(state => state.playerInfo);
    const pickPlayer = playerData.find(item => item.backno === backno);
    const { name, position, img } = pickPlayer;
    const dispatch = useDispatch();

    return (
        <PlayPositionStyle className={item.positionNo} onClick={() => dispatch(onSelectPosition(item))}>
            <img src={`../images/player/${img}`} alt="" className="imgHover" />
            <p>
                <span> No. {backno} </span>
                <strong> {name} </strong>
                <span> {position} </span>
            </p>
        </PlayPositionStyle >
    );
};

export default PlayerPosition;