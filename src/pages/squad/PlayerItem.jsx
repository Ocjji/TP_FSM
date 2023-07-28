import React from 'react';
import { useDispatch } from "react-redux";
import { onAddPosition } from "../../store/modules/playerInfoSlice";
const PlayerItem = ({ item }) => {
    const { id, name, position, backno, img } = item;
    const dispatch = useDispatch();
    return (
        <li onClick={() => dispatch(onAddPosition(item.backno))}>
            <img src={`./images/player/${img}`} alt="" />
            <p>
                <span> No. {backno}</span>
                <strong> {name} </strong>
                <span> {position} </span>
            </p>
        </li>
    );
};

export default PlayerItem;