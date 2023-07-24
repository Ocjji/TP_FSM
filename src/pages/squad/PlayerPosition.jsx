import React from 'react';
import { PlayPositionStyle } from "../../styled/PlayGroundStyle";
import { useDispatch, useSelector } from "react-redux";
import { onSelectPosition } from "../../store/modules/playerSlice";

const PlayerPosition = ({ item }) => {
    const { id, no, positionNo } = item;
    const { playerData, selectPosition } = useSelector(state => state.playerR);
    const pickPlayer = playerData.find(item => item.p_no === no);
    const { pid, name, position, p_no, img } = pickPlayer;
    const dispatch = useDispatch();

    return (
        <PlayPositionStyle className={item.positionNo} onClick={() => dispatch(onSelectPosition(item.id))}>
            <img src={img} alt="" />
            <p>
                <span> No. {p_no}</span>
                <strong> {name} </strong>
                <span> {position} </span>
            </p>
        </PlayPositionStyle >
    );
};

export default PlayerPosition;